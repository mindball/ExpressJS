const fs = require('fs');
const db = require('../database/database');
const ct = require('../common/content-type')
const favIcon = '/favicon.ico';


module.exports = (req, res) => {
    if (req.path === favIcon) {
        fs.readFile(`./${favIcon}`, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
    
            ct.addHead(res, data, 'image/x-icon');
        });
    }
    else {
        return true;
    }
}