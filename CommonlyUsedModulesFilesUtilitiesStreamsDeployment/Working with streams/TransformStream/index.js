const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('index.js')
let writeStream = fs.createWriteStream('index.js.gz')
let gzip = zlib.createGzip()

readStream.pipe(gzip).pipe(writeStream)