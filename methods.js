var express = require('express');
var app = express();

var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: '/tmp/' });

// Create application/x-www-form-urlencoded parser

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/' }));

app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.htm');
});

app.get('/process_get', function (req, res) {
    // Prepare output in JSON Format
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    
    res.end(JSON.stringify(response));
});

app.post('/file_upload', upload.single('file'), function (req, res) {
    var response = {};
    console.log(req.file);
    console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.mimetype);
    
    var file = __dirname + '/' + req.file.filename;
    fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

app.post('/process_post', function (req, res) {
    
    // Prepare output in JSON Format
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('App listening to http://%s:%s', host, port);
});