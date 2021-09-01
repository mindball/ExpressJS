let cluster = require('cluster');
let http = require('http');
let cpus = require('os').cpus().length;


//if not working run at console node index.js
if(cluster.isMaster) {
    for (let index = 0; index < cpus; index++) {
       cluster.fork();        
    }
}
else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello!');
    }).listen(12345);
};
