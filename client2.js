console.log('\n');
console.log('///// NET /////');
console.log('\n');

var net = require('net');

 var client = net.connect({port: 8080, host:'localhost'}, function () {
     console.log('connected to server');
 });
 
 client.on('data', function (data) {
     console.log(data.toString());
     client.end();
 });
 
 client.on('end', function () {
     console.log('disconnected from server');
     
 });