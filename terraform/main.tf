provider "aws" {
  region = "eu-west-1"
}

data "aws_caller_identity" "current" {}

resource "aws_lambda_function" "ubx-contact" {
  function_name = "jb-ubx-contact"

  # The bucket name as created earlier with "aws s3api create-bucket"
  s3_bucket = "jb-ubx-contact"
  s3_key    = "v0.0.7/ubx.zip"

  handler = "main.handler"

  runtime = "nodejs8.10"

  role = "${aws_iam_role.ubx-contact.arn}"
}

data "aws_iam_policy_document" "lambda" {
  statement {
    effect = "Allow"

    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]

    resources = ["*"]
  }

  statement {
    effect = "Allow"

    actions = [
      "ses:SendEmail",
      "ses:SendRawEmail",
    ]

    resources = ["arn:aws:ses:eu-west-1:${data.aws_caller_identity.current.account_id}:identity/*"]
  }
}

resource "aws_iam_policy" "lambda" {
  name        = "ubx-contact-ses-policy"
  description = "Allow sent emails with SES"
  policy      = "${data.aws_iam_policy_document.lambda.json}"
}

resource "aws_iam_role_policy_attachment" "lambda" {
  role       = "${aws_iam_role.ubx-contact.name}"
  policy_arn = "${aws_iam_policy.lambda.arn}"
}

resource "aws_iam_role" "ubx-contact" {
  name = "ubx-contact"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_api_gateway_rest_api" "ubx-contact-rest" {
  name        = "ubx-contact"
  description = "UBX Contact Form Endpoint"
}

resource "aws_api_gateway_resource" "proxy" {
  rest_api_id = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  parent_id   = "${aws_api_gateway_rest_api.ubx-contact-rest.root_resource_id}"
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_method" "proxy" {
  rest_api_id   = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  resource_id   = "${aws_api_gateway_resource.proxy.id}"
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  resource_id = "${aws_api_gateway_method.proxy.resource_id}"
  http_method = "${aws_api_gateway_method.proxy.http_method}"

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.ubx-contact.invoke_arn}"
}

resource "aws_api_gateway_method" "proxy_root" {
  rest_api_id   = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  resource_id   = "${aws_api_gateway_rest_api.ubx-contact-rest.root_resource_id}"
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_root" {
  rest_api_id = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  resource_id = "${aws_api_gateway_method.proxy_root.resource_id}"
  http_method = "${aws_api_gateway_method.proxy_root.http_method}"

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.ubx-contact.invoke_arn}"
}

resource "aws_api_gateway_deployment" "ubx-api" {
  depends_on = [
    "aws_api_gateway_integration.lambda",
    "aws_api_gateway_integration.lambda_root",
  ]

  rest_api_id = "${aws_api_gateway_rest_api.ubx-contact-rest.id}"
  stage_name  = "test"
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.ubx-contact.arn}"
  principal     = "apigateway.amazonaws.com"

  # The /*/* portion grants access from any method on any resource
  # within the API Gateway "REST API".
  source_arn = "${aws_api_gateway_deployment.ubx-api.execution_arn}/*/*"
}

output "base_url" {
  value = "${aws_api_gateway_deployment.ubx-api.invoke_url}"
}
