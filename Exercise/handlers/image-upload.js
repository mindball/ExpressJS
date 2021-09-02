const fs = require('fs');
const db = require('../database/database');
const query = require('querystring');
const contentType = require('../common/content-type');

const path = '/images/upload';

module.exports = (req, res) => {
    console.log(req.path !== path);
    
    if(req.path !== path) {
        return true;
    }

    if(req.method === 'GET') {
        fs.readFile('./views/image-upload-form.html', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }

            contentType.addHead(res, data, 'text/html');
           
        });
    }
    else if (req.method === 'POST') {
        let result = '';
        req.on('data', data => { result += data});
        req.on('end', () => {
            let imageData = query.parse(result);
            let imageName = imageData.name;
            let imageUrl = imageData.url;
            if(!imageName || !imageUrl) {
                fs.readFile('../views/status.html', (err, data) => {
                    if(err) {
                        console.log(err);
                        return;
                    }

                     contentType.addHead(res, data, 'text/html');
                });
            }
            //throw error because upper code fs.readFile is async and db.save res.writeHeare is executing before stream are reading
            // db.save(imageData);
            
            // res.writeHead(302, {
            //     'Location': '/'
            // })
            // res.end();
            //Solution:
            else {
                db.save(imageData);            
                res.writeHead(302, {
                    'Location': '/'
                })
                res.end();
            }
        });
    }
};
