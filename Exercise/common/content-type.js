module.exports = {
    addHead: (res, data, contentType) => {
        res.writeHead(200, {
            'Content-Type': contentType
        });
        res.write(data);
        res.end();
    }
}