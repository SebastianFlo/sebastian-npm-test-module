var os = require('os');

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

