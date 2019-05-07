// const { handler } = require('./main');

const http = require('http');
const port = 3000;

const wait = (timeout) => (new Promise(resolve => setTimeout(resolve, timeout)));

const getBody = (req) => new Promise((res, rej) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
    try {
      res(body);
    } catch (error) {
      rej(err);
    }
  });
  req.on('error', (err) => {
    rej(err);
  });
})

const requestHandler = async (request, response) => {
  const body = await getBody(request);
  // handler({ body }, null, (error, cb) => {
  //   console.log(cb);
  //   response.writeHead(200, {
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   response.end('Hello Node.js Server!')
  // });
  await wait(1000);
  console.log(body);
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  });
  response.end(body);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
