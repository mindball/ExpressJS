const fs = require('fs');

let readStream = fs.createReadStream('index.js');
let writeStream = fs.createWriteStream('index.copy.js');

readStream.on('data', (data) => {
    writeStream.write(data)
});
readStream.on('end', () => console.log('Done!!!'));
