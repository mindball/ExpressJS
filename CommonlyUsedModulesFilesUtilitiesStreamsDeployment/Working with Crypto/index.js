let crypto = require("crypto");

let generateSalt = () => {
    let random = crypto.randomBytes(128).toString('base64');   

    return random;
};

let generateHashedPass = (salt, pass) => {
    let hmac = crypto.createHmac('sha1', salt);

    return hmac.update(pass).digest('hex');
};

console.log(generateSalt());
console.log('--------------------------');
console.log(generateHashedPass(generateSalt, "1234567"));
