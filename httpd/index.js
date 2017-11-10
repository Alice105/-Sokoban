'use strict';
<<<<<<< HEAD
let http = require('http');
/**
* 利⽤http.ServerResponse 物件回傳檔案內容
*
*@name serve
* @function
* @param response - http.ServerResponse 物件
* @param fname - 要回傳的檔案名
* @param datatype - 回傳檔案內容的Mine-Type
* @returns {undefined}
*/
let serve = (response, fname, datatype) => {
let fs = require('fs');
fs.readFile(fname, (err, data) => {
if (err) {
console.log(' 檔案讀取錯誤');
}
else {
response.writeHead(200, {
'Content-Type': datatype
});
response.write(data);
response.end();
}
});
};
http.createServer((request, response) => {
let fs = require('fs');
let postData = '';
// 利⽤'data' event 消耗掉data chunk;
// 'end' event 才會被fired
request.on('data', (chunk) => {
postData += chunk;
console.log(
' 接收的POST data ⽚段k: [' + chunk + '].'
);
});
request.on('end', () => {
switch (request.url) {
case '/':
serve(response, '../htdocs/index.html', 'text/html');
break;
case '/assets/css/styles.css':
serve(response, '../htdocs/assets/css/styles.css', 'text/css');
break;
case '/assets/png/SokobanClone_byVellidragon.png':
serve(
response,
'../htdocs/assets/png/SokobanClone_byVellidragon.png',
'image/png'
);
break;
default:
console.log(' 未定義的存取: ' + request.url);
response.end();
break;
}
});
}).listen(8088);
// log message to Console
console.log(' 伺服器啓動，連線url: http://127.0.0.1:8088/');
// index.js
=======

let http = require('http');

http.createServer((request, response) => {
  let fs = require('fs');
  let postData = ''; // POST 資料

  // 利⽤'data' event 消耗掉data chunk;
  // 'end' event 才會被fired
  request.on('data', (chunk) =>{
    postData += chunk; //等於postData=postData+chunk;

    console.log(
      ' 接收的POST data ⽚段k: [' + chunk + '].'
    );
  });

  request.on('end', () => {
    switch (request.url) {
      case '/':
      fs.readFile('../htdocs/index.html', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });

          response.write(data);
          response.end();
        }
      });

      break;

      case '/assets/css/styles.css':
      fs.readFile('../htdocs/assets/css/styles.css', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/css'
          });

          response.write(data);
          response.end();
        }
      });

      break;


      case '/assets/png/SokobanClone_byVellidragon.png':
      fs.readFile('../htdocs/assets/png/SokobanClone_byVellidragon.png', (err, data) => {
        if (err) {
          console.log(' 檔案讀取錯誤');
        }
        else {
          response.writeHead(200, {
            'Content-Type': 'text/png'
          });

          response.write(data);
          response.end();
        }
      });

      break;

      default:
      console.log(' 未定義的存取: ' + request.url);

      response.end();

      break;
    }
  });
}).listen(8088);

// log message to Console
console.log(' 伺服器啓動，連線url: http://127.0.0.1:8088/');
>>>>>>> b4ebff9ba2754907ba546bff36b669d0b814aaf6
