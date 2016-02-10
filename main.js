// event module
var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

console.log('Program Started');

// create an event handler
var connectHandler = function connectHandler(){
    console.log('connection successful...');
    
    // fire the data_received event
    eventEmitter.emit('data_received');
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// bind the data_received event with an anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received successfully');
})

// fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended');