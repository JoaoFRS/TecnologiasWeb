const url  = require('url');
const http = require('http');
http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url,true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    //console.log(query);
    switch(pathname) {
      case '/ranking':
      break;
      case '/register':
      break;
    }
}).listen(8113);
/*const url  = require('url');
const http =require('http');
http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url,true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.write('Método: '+request.method+'\n');

    switch (pathname) {
      case '/ranking':
        response.write('query' + pathname);
      const url  = require('url');

http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url,true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    …
}).listen(8003);  break;

    }
    let body = '';
    switch(request.method) {

      case 'POST':
      request
        .on('data', (chunk) => { body += chunk;  })
        .on('end', () => {
               try { query = JSON.parse(body);  /* processar query / }
               catch(err) {  /* erros de JSON / }
        })
        .on('error', (err) => { console.log(err.message); });
    break;
  }

}).listen(8003);*/
/*"use strict";

let PORT     = 8113;

let http     = require('http');
let url      = require('url');
let fs       = require('')
http.createServer(function (request, response) {
    const preq = url.parse(request.url,true);
    const pathname = preq.pathname;
    let answer = {};
    console.log(pathname);
    console.log(request.method);
    switch(request.method) {
    case 'GET':
        answer = doGet(pathname,request,response);
        break;
    case 'POST':
        answer = doPost(pathname);
    default:
        answer.status = 400;
    }

}).listen(PORT);

function doGet(pathname, request,response) {
 let answer = {};

 switch(pathname) {
   case '/update':

      answer.style = 'sse';
      break;
      case '/ranking':

       break;
   default:
     answer.status = 400;
   break;
 }

 return answer;
}

function doPost(pathname) {
 var answer = {};

 switch(pathname) {
  case '/ranking':
  printf("ranking");
  console.log("entrou2");
   break;
  case '/reset':
    break;
  default:
    answer.status = 400;
    break;
  }

 return answer;
}*/
