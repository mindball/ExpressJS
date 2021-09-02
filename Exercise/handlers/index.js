const homePage = require("./home-page");
const statusHeader = require("./status-header");
const imgUpload = require("./image-upload");
const imgDetails = require("./image-details");
const favicon = require("./favicon");
const staticFiles = require("./static-files");

module.exports = [
        statusHeader, 
        homePage,
        favicon,
        imgUpload,
        imgDetails,
        staticFiles
];
