// event module
var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

console.log('Program Started');

//  listener #1

var listener1 = function listener1(){
    console.log('listener1 executed');
}

//  listener #2

var listener2 = function listener2(){
    console.log('listener2 executed');
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to \'connection\' event');

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will no longer listen');

// Fire the connection event
eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listener(s) listening to \'connection\' event');

console.log('Program Ended');