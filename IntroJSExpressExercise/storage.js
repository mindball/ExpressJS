
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const dataFile = 'storage.data';

let data = {};

let validateKeyAsString = (key) => {
    if(typeof key !== 'string') {
        throw new Error('key must be a string');
    }
}

let validateKeyExist = (key) => {
    if(!data.hasOwnProperty(key)) {
        throw new Error('Key does not exist');
    }

}

let put = (key, value) => {
    validateKeyAsString(key);
    
    if(data.hasOwnProperty(key)) {
        throw new Error('Key does not exist');
    }

    data[key] = value;    
};

let get = (key) => {
    validateKeyAsString(key);
    validateKeyExist(key);

    return data[key];
};

let deleteItem = (key) => {
    validateKeyAsString(key);
    validateKeyExist(key);

    delete data[key];
};

let update  = (key, value) => {
    validateKeyAsString(key);
    validateKeyExist(key);

    data[key] = value;    
};

let clear = () => {
    data = {};
};

let save = () => {
    let dataAsString = JSON.stringify(data);
    fs.writeFileSync(dataFile, dataAsString);
};

let saveAsync = (callback) => {
    let dataAsString = JSON.stringify(data);
    fs.writeFile(dataFile, dataAsString, (err) => {
        if(err) {
            console.log(err);
            return;
        }

        callback();
    });
};

let saveAsyncWithPromise = () => {
    return new Promise((resolve, reject) => {
        let dataAsString = JSON.stringify(data);
        fs.writeFile(dataFile, dataAsString, (err) => {
            if(err) {
              reject(err);
              return;      
            };        
            
            resolve();
        });
    });
};

let load = () => {
    let dataAsObject = fs.readFileSync(dataFile, 'utf8');
    data = JSON.parse(dataAsObject);
};

let loadAsync = (callback) => {
    fs.readFile(dataFile, 'utf8', (err, dataJson) => {
        if(err) {
            console.log(err);
            return;
        };

        data = JSON.parse(dataJson);
        callback();
    });    
};

let loadAsyncWithPromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataFile, 'utf8', (err, dataJsonPromise) => {
            if(err) {
                reject(err);
                return;
            }
            data = JSON.parse(dataJsonPromise);
            resolve();
        })
    });    
};

module.exports = {
    put: put, 
    get: get,
    delete: deleteItem,
    update: update,
    clear: clear,
    save: save,
    load: load,
    saveAsync: saveAsync,
    saveAsyncWithPromise: saveAsyncWithPromise,
    loadAsync: loadAsync,
    loadAsyncWithPromise: loadAsyncWithPromise
};