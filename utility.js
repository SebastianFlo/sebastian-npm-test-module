var os = require('os');

console.log('\n');
console.log('///// OS /////');
console.log('\n');

console.log('endianess ' + os.endianness());

// OS Type
console.log('type ' + os.type());

// OS platform
console.log('platform ' + os.platform());

// Total System Memory
console.log('total memory ' + os.totalmem() + ' bytes');

// Total free memory
console.log('free memory ' + os.freemem() + ' bytes');


var path = require('path');

console.log('\n');
console.log('///// PATH /////');
console.log('\n');

// Normalize
console.log('normalization : ' + path.normalize('test/test1/2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

//  Resolve
console.log('resolve : ' + path.resolve('main.js'));

// ext name
console.log('ext name : ' + path.extname('main.js'));