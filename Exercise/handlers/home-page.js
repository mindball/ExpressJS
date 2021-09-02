const fs = require('fs');
const db = require('../database/database');
const ct = require('../common/content-type')

module.exports = (req, res) => {
    if(req.path === '/') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }

            let images = db.getAll();
            let result = '';
            result += '<ul>';
            for (let index = 0; index < images.length; index++) {
                let image = images[index];
                result += `
                    <li>
                        <a href="/images/details/${index}">${image.name}</a>
                    </li>
                `;                
            }

            result += '</ul>';

            data = data.replace('{{content}}', result);

            ct.addHead(res, data, 'text/html');
        });    
    }
    else {
        return true;
    }
    
}