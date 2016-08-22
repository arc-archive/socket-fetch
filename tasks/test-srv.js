'use strict';

const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.setHeader('Transfer-Encoding', 'chunked');

  var query = url.parse(request.url, true).query;
  var chunk = 1024;
  var numbytes = 1024;
  if ('chunk' in query) {
    chunk = Number(query.chunk);
    if (chunk !== chunk) {
      chunk = 1024;
    }
  }
  if ('size' in query) {
    numbytes = Number(query.size);
    if (numbytes !== numbytes) {
      numbytes = 1024;
    }
  }
  var sent = 0;
  var letters = 'abcdefghijklmnopqrstuwxyz'.split('');
  var lettersLength = letters.length;
  var lastLetter = -1;
  function gen() {

    let str = '';
    let len = 0;
    let end = false;
    if (sent + chunk > numbytes) {
      len = numbytes - sent;
      end = true;
    } else {
      len = chunk;
    }

    for (let i = 0; i < len; i++) {
      lastLetter++;
      if (lastLetter >= lettersLength) {
        lastLetter = 0;
      }
      str += letters[lastLetter];
      sent++;
    }

    if (end) {
      response.end(str);
    } else {
      response.write(str);
      setTimeout(gen, 20);
    }
  }

  gen();
}).listen(process.env.VMC_APP_PORT || 1337, null);
