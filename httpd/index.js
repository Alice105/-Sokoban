'use strict';

 let http = require('http');

 http.createServer((request, response) => {
<<<<<<< HEAD
 request.on('end', () => {
 console.log('Request method: ' + request.method);
 console.log('Request url: ' + request.url);
});

 // 傳送HTTP header
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {
 'Content-Type': 'text/plain'
 });

 // 傳送回應內容。
 response.end('Hello World!\n');
 }).listen(8088);

 // log message to Console
 console.log('Server running at http://127.0.0.1:8088/');
=======
 // 取得node.js 的fs 模組
 let fs = require('fs')

 fs.readFile('../htdocs/index.html', (err, data) => {
 response.writeHead(200, {
 'Content-Type': 'text/html'
 });

 response.write(data);

 response.end();
 });
 }).listen(8088);

 // log message to Console
 console.log(' 伺服器啟動，連線url: http://127.0.0.1:8088/');
>>>>>>> 691a6e397c2d1c3ffca6f92d234917259dec091d
