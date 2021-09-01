const http = require('http');
const fs = require('fs');
const parseQuery = require('querystring');
const formidable = require('formidable');


//Always escape html
http
    .createServer((req, res) => {
        if(req.method === 'GET') {
            let readStream = fs.createReadStream('formWithFileUpload.html');
            let body = '';

            readStream.on('data', (data) => {
                body += data;
            });

            readStream.on('end', () => {
                res.write(body);
            });            
        }
        else if(req.method === 'POST') {
            let form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                if(err) {
                    console.log(err);
                    return;
                }

                console.log(fields);
                console.log(files);

                let uploadedFile = files['upload'];
                fs.rename(uploadedFile.path, './' + uploadedFile.name, err => {
                    if(err) {
                        console.log(err);
                        return;
                    }

                    console.log('saved');
                    res.write("Thank you to upload file");
                    res.end();
                });
            });
        }
    })
    .listen(4321);