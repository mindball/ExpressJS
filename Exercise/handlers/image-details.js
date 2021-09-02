
const db = require('../database/database');
const contentType = require('../common/content-type');

const path = '/images/details';

module.exports = (req, res) => {
    let lastIndexOfQueryString = req.path.lastIndexOf('/')
    let routeQuery = req.path.substr(0, lastIndexOfQueryString);
    let indexOfImages = req.path.substr(lastIndexOfQueryString + 1);
    
    if(routeQuery !== path) {
        return true;
    }

    if(req.method === 'GET') {
            let image = db.getByIndex(indexOfImages);
            
            res.writeHead(301, {
                    'Location': image.url
                }
              );
            res.end();
    }
    else {
        return true;
    }
   
}