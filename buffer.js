/* global Buffer */
var buf = new Buffer(26); 

for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));

console.log( buf.toString('ascii', 0, 5));

console.log( buf.toString(undefined, 0, 5));

var json = buf.toJSON(buf);

console.log(json.data);

var buffer1 = new Buffer('Sebastian\'s Tutorial ');
var buffer2 = new Buffer('Simply learns');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer 3 content: ', buffer3.toString());

buffer1 = new Buffer('ABCDE');
buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + ' comes before ' + buffer2);
} else if (result === 0) {
    console.log(buffer1 + ' is the same as ' + buffer2);
} else {
    console.log(buffer1 + ' comes after ' + buffer2);
}

buffer2 = new Buffer(1);
console.log("Buffer 2 is ", buffer2);
buffer1.copy(buffer2);
console.log("Copied buffer 2 is ", buffer2.toString());

buffer1 = new Buffer('SebastianTutorial');
// slicing a buffer
buffer2 = buffer1.slice(0, 9);

console.log("Buffer 2 content: " + buffer2.toString());
console.log("Buffer 2 length: " + buffer2.length);
