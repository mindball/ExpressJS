const fs = require('fs');
const ct = require('../common/content-type')
const pathName = 'content';

let getContentType = (url) => {
    let contentType = 'text/plain';
    if (url.endsWith('.css')) {
        contentType = 'text/css';
    }
    else if (url.endsWith('.js')) {
        contentType = 'application/javascript';
    }

    return contentType;
};

let validateFileExtension = (path) => {
    if (path.endsWith('.html') ||
        path.endsWith('.css') ||
        path.endsWith('.js') ||
        path.end('.jpg')) {
        return true;
    }

    return false;
};

module.exports = (req, res) => {
    let path =
        fs.readFile('.' + req.path, (err, data) => {
            if (err ||
                req.method !== 'GET' ||
                !req.path.startsWith('/content') ||
                !validateFileExtension(req.path)) {
                    res.writeHead(404);
                    res.write('404 Not found');
                    res.end();
                    return;
            }

            ct.addHead(res, data, getContentType(req.path));            
        });
};