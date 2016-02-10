// filesystem module
var fs = require('fs');

// event module
var events = require('events');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString())
})

console.log("Program Ended");
