var express = require('express');
var app = express();
var fs = require('fs');

// Mock Data
var user = {
 'user4' : {
 'name' : 'sebastian',
 'password' : 'password4',
 'profession' : 'teacher',
 'id': 4
 }
};

var id = 2;

app.get('/deleteUser', function (req, res) {
 // First read existing users.
 fs.readFile( __dirname + '/rest/' + 'users.json', 'utf8', function (err, data) {
 data = JSON.parse( data );
 delete data['user' + id];

 console.log( data );
 res.end( JSON.stringify(data));
 });
});

app.get('/:id', function (req, res) {
 // First read existing users.
 fs.readFile( __dirname + '/rest/' + 'users.json', 'utf8', function (err, data) {
 data = JSON.parse( data );
 console.log( __dirname + '/rest/' + 'users.json' );
 var newUser = data['user' + req.params.id];
 console.log( newUser );
 res.end( JSON.stringify(newUser));
 });
});

app.get('/listUsers', function (req, res) {
 fs.readFile( __dirname + '/rest/' + 'users.json', 'utf8', function (err, data) {
 console.log( data );
 res.end( data );
 });
});

app.get('/addUser', function (req, res) {
 // First read existing users.
 fs.readFile( __dirname + '/rest/' + 'users.json', 'utf8', function (err, data) {
 data = JSON.parse( data );
 data['user4'] = user['user4'];
 console.log( data );
 res.end( JSON.stringify(data));
 });
})

var server = app.listen(8081, function () {
 var host = server.address().address;
 var port = server.address().port;
 console.log('Example app listening at %s:%s', host, port);
});
