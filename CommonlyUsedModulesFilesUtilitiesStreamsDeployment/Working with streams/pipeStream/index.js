const fs = require('fs');

let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.copy.js');

//Pipe multiple streams
readStream
    .pipe(writeStream)
    .pipe(cryptoStream)
    .pipe(compressStream);
    
