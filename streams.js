/**
 * Reading from a stream
 */

var fs = require('fs');
var data = '';

// create readable stream
var readerStream = fs.createReadStream('input.txt');

// set encoding to utf8
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function name() {
    console.log(data);
})

readerStream.on('error', function name(err) {
    console.log(err.stack);
})

console.log('Reading ended');


/**
 * Writing to a stream
 */
data = 'Sebastian Rules';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of the file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function () {
    console.log('Write completed');
})

writerStream.on('error', function (err) {
    console.log(err.stack);
})

console.log('Writing Ended')

 /** 
 * Piping Streams
 */
var readerStreamPipe = fs.createReadStream('input.txt');
var writerStreamPipe = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write to output.txt
readerStreamPipe.pipe(writerStreamPipe);

console.log('Pipe Ended');

/** Chaining Streams */

var zlib = require('zlib');

// Compress 'input.txt' to input.txt.gz
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
    
// console.log('File compressed');

// decompress
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input2.txt'));
    
console.log('File decompressed');

