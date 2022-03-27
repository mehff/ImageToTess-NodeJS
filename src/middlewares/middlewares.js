const { mainFunction } = require("../modules/imgHandler");

exports.redirMiddleware = (req, res, next) => {
    console.log("TO ENTRANDO NO REDIRMIDDLEWARE")
    next()
}