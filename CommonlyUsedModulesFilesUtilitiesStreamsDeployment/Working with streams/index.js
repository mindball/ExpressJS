const fs = require('fs');

let readStreamLogChunk = fs.createReadStream('readByChunk.txt');
let readStreamLogArr = fs.createReadStream('readByArray.txt');
let readStreamLogStr = fs.createReadStream('readByStr.txt');

readStreamLogChunk.on('data', (data) => {
    console.log('chunk'),
    console.log(data)
});
readStreamLogChunk.on('end', () => {});

let result = [];
readStreamLogArr.on('data', (data) => {
    result.push(data)
});
readStreamLogArr.on('end', () => console.log(result));

let str = '';
readStreamLogStr.on('data', (data) => {
    str += data
});
readStreamLogStr.on('end', () => console.log(str));

