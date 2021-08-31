const fs = require('fs');
const favIcon = '/favicon.ico';

module.exports = (req, res) => {
    if (req.path === favIcon) {
        fs.readFile(`./${favIcon}`, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
    
            res.writeHead(200, {
                'Content-Type': 'image/x-icon'
            });     
            res.write(data);
            res.end();   
        });
    }
    else {
        return true;
    }
}