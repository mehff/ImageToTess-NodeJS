const { filesArray } = require("../modules/multerSettings");

exports.redirMiddleware = (req, res, next) => {
    console.log(req,"\n\nsoureq\n\n");
    console.log(res,"\n\nsoures\n\n");
    next()
}

exports.imgSender = (req, res, next) => {
    filesArray(req)
    next()
}