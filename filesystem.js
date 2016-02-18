/* global Buffer */
var fs = require('fs');

// // Async read
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Async read: ' + data.toString());
// });

// // Sync read
// var data = fs.readFileSync('input.txt');
// console.log('Sync read: ' + data.toString());

// console.log('Program Ended');

// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('File opened successfully.');
    
// });

// console.log('Get that file info');

// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log('Got info stats successfully.');

//     // Get file info
//     console.log('isFile ? ' + stats.isFile());
//     console.log('isDirectory ? ' + stats.isDirectory());
// });

// console.log('Going to write into a file');
// fs.writeFile('input2.txt', 'Sebastian learns easy!', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Data written successfully!');
//     console.log('Let\'s read the new data');
    
//     fs.readFile('input2.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log('Async Read: ' + data.toString());
//     });
    
// });

console.log('////////////////////////');

// var buf = new Buffer(1024);

// console.log('Going to open an existing file.');

// fs.open('input2.txt', 'r+', function (err, fd) { 
//     if (err) {
//         return console.error(err);
//     }
    
//     console.log('File opened succesfully');
//     // console.log('Going to read the file');
//     // fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//     //     if (err) {
//     //         return console.error(err);
//     //     }
//     //     console.log(bytes + ' bytes read');
        
//     //     // Print only read bytes to avoid junk 
//     //     if (bytes > 0) {
//     //         console.log(buf.slice(0, bytes).toString());
//     //     }
        
//     //     // Close the file
//     //     fs.close(fd, function(err){
//     //         if (err) {
//     //             return console.error(err);
//     //         }
//     //         console.log('File closed successfully.');
//     //     })
//     // });
//     console.log('We\'re going to truncate a file after 5 bytes');
    
//     // Truncate the opened file
//     fs.ftruncate(fd, 5, function (err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log('File truncated successfully.');
//         console.log('Reading the same file.');
//         fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//             if (err) {
//                 return console.error(err);
//             }
            
//             // Print only read bytes to avoid junk
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }
            
//             // Close the opened file
//             fs.close(fd, function (err) {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 console.log('File closed successfully');
//             });
//         });
        
//     });
    
// });



// console.log('Now we\'re going to delete a file');

// fs.unlink('input.txt', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('File deleted successfully!');
// });

// console.log('Now we\'re going to make a directory');

// fs.mkdir('./test', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Director created successfully.');
// });

// console.log('Now we\'re going to read a directory');

// fs.readdir('./', function (err, files) {
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function(file) {
//         console.log(file);
//     });
//     console.log('Director read successfully.');
// });


// console.log('Now we\'re going to delete a directory');

// fs.rmdir('./test', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('Director deleted successfully.');
    
//     fs.readdir('./', function (err, files) {
//         if (err) {
//             return console.error(err);
//         }
//         files.forEach( function(file) {
//             console.log(file);
//         });
//         console.log('Director read successfully.');
//     });
// });