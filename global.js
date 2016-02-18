function addToI(i) {
    console.log(i);
}
        
function printHello() {
    console.info('Program Started!');
    
    var counter = 10;
    
    console.log('Counter: %d', counter);
    
    console.time('Getting Data');
    
    // 
    // Doing some calculations
    for (var i = 0; i < 20; i++) {
        
        setTimeout(addToI(i), 500);
    }
    // 
    
    console.timeEnd('Getting Data');
    
    console.info('Program 1 Ended');
    
    
    
    console.log(__dirname);
    clearTimeout(t);
}

//  call function after 2 seconds
var t = setTimeout(printHello, 2000);

// function printFuckOff() {
//     console.log('Fuckk off ', __filename);
    
// }
// setInterval(printFuckOff, 2000);

process.on('exit', function(code) {
    // Following code will never execute
    setTimeout(function() {
        console.log('This will not print');
    }, 0);
    
    console.log('About to exit with code: ', code);
});

console.log('Program 2 Ended');

process.stdout.write('Hello world!' + '\n');

// Reading passed parameter
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

// Get the executable path
console.info(process.execPath);

// process information
console.info('Process ' + process.pid + ' : ' + process.title );

// platform information
console.info(process.platform);

console.log('Program 3 Ended');

// Current directory
console.log('Current directory ' + process.cwd());

// Process version
console.log('Current version ' + process.version);

// Memory Usage
console.dir(process.memoryUsage());







