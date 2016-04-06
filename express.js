var express = require('express');
var app = express();

// hello world on home page
app.get('/', function (req, res) {
    res.send('Hello World');
});

// post from home page
app.post('/', function (req, res) {
    console.log('Got a POST req from the homepage');
    req.send('Hello Post');
});

//  This responds to a delete request from the /del_user page
app.delete('/del_user', function (req, res) {
    console.log('Got a del req for /del_user');
    res.send('Hello Delete');
});

// This reponds a GET request for the list_user page
app.get('/list_user', function (req, res) {
    console.log('Got a GET request for /list_user');
    res.send('Page Listing');
});

// This responds to a GET request for abcd, abd, etc// 
app.get('/ab*cd', function (req, res) {
    console.log('Got a GET request for /ab*cd');
   res.send('Page Pattern Match'); 
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});