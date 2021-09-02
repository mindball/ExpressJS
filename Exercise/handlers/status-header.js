const db = require('../database/database')
const ct = require('../common/content-type')
const fs = require('fs');

module.exports = (req, res) => {
    //Test with postman
    let header = req.headers['statusheader'];

    if(header && header === 'Full') {    
        const path = './views/status.html';
        try {
            if (fs.existsSync(path)) {
              //file exists
            }
          } catch(err) {
            console.error(err)
          }

        
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }

            let countImages = db.getAll.count;
            data = data.replace('{{content}}', `<h1>Total count: ${countImages}</h1>`);
            ct.addHead(res, data, 'text/html');           
        });
    }
    else {
        return true;
    }
};