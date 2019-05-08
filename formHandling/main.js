const request = require('request');
const AWS = require('aws-sdk');
const { SECRET_KEY, TO_ADDRESSES, FROM_SOURCE } = require('./vars');

AWS.config.update({ region: 'eu-west-1' });

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';


const handleError = (error, callback) => {
  console.log(error.message);
  const response = {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ error: error.message })
  }
  callback(null, response);
}

const allowedKeys = ['ms', 'mr', 'name', 'email', 'company', 'position', 'text', 'token']

const verifyEmail = (val) => (val.indexOf('@') === -1 || val.length < 3);

const verifyName = (name) => name.length < 2;

const checkForErrors = (body) => {
  const { email, name } = body;
  for (const key in body) {
    if (!allowedKeys.includes(key)) {
      throw new Error(`key unknown: ${key}`)
    }
  }
  if (!(body.hasOwnProperty('token'))) {
    throw new Error('token missing');
  }
  if (!(body.hasOwnProperty('name'))) {
    throw new Error('name missing');
  }
  if (verifyName(name)) {
    throw new Error('invalid name');
  }
  if (!(body.hasOwnProperty('email'))) {
    throw new Error('email missing');
  }
  if (verifyEmail(email)) {
    throw new Error('email invalid');
  }
}

const handleRecaptcha = async (token) => new Promise((res, rej) => {
  const url = `${RECAPTCHA_URL}?secret=${SECRET_KEY}&response=${token}`;
  request.post({ url }, (err, _, body) => {
    if (err) {
      rej(err)
    }
    try {
      const data = JSON.parse(body)
      res(data);
    } catch (error) {
      rej(error);
    }
  });
})

const template = ({ ms, mr, name, email, company, position, text }) => `
ms: ${ms ? 'true' : 'false'},
mr: ${mr ? 'true' : 'false'},
name: ${name},
email: ${email},
company: ${company},
position: ${position},
text:
${text}
`

const sendMail = async (data) => {
  const params = {
    Destination: {
      ToAddresses: TO_ADDRESSES,
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: template(data),
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'UBX: New Registration'
      }
    },
    Source: FROM_SOURCE,
  };
  const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
  return sendPromise.then(
    (data) => {
      console.log(data.MessageId);
      return data.MessageId;
    })
}

exports.handler = async (event, context, callback) => {
  const body = event.body;
  let reqBody = null;
  try {
    reqBody = JSON.parse(body);
  } catch (error) {
    console.log(error);
    return handleError(error, callback)
  }
  try {
    checkForErrors(reqBody);
  } catch (error) {
    console.log(error);
    return handleError(error, callback)
  }
  let recaptcha = null;
  try {
    recaptcha = await handleRecaptcha(reqBody.token)
  } catch (error) {
    console.log(error);
    return handleError(error, callback)
  }
  console.log(recaptcha);
  if (!recaptcha.success || (recaptcha.hasOwnProperty('score') && recaptcha.score < 0.5)) {
    return handleError(new Error('recaptcha error'), callback)
  }
  try {
    const messageId = await sendMail(reqBody);
    console.log(messageId);
  } catch (error) {
    console.log(error);
    return handleError(error, callback)
  }
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ success: true })
  }
  callback(null, response)
}
