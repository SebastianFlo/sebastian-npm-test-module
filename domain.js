var EventEmitter = require('events').EventEmitter;
var domain =  require('domain');

var childDomain = domain.create();
var emitter1 = new EventEmitter();

childDomain.on('error', function (err) {
    console.log('domain handled this error (' + err.message + ')');
});

//Explicit binding
childDomain.add(emitter1);

emitter1.on('error', function (err) {
    console.log('listener handled this error (' + err.message + ')');
});


emitter1.emit('error', new Error('To be handled by the listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('To be handled by child domain'));

var childDomain2 = domain.create();

childDomain2.on('error', function (err) {
    console.log('domain2 handled this error (' + err.message + ')');
});

// implicit binding
childDomain2.run(function () {
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('To be handled by domain2'));
});

childDomain.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));

