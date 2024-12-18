// nodemon keep monitor or watch the server that what changes our server is doing etc.


//we cant use require when type is module
// const http = require('node:http');
// with the help og http we are importing node modul

import http from "http" // ES6 module
import a from "./mymodule.js"
console.log(a)


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // content headers determine ki humara jo content hai vo kis tarah se as a output diya jyga

  res.end('<h1>Hello, World!\n</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 




