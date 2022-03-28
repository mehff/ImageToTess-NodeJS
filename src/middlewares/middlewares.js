
exports.redirMiddleware = (req, res, next) => {
    res.locals.localVarNumeroUno = "Blibers"
    console.log("TO ENTRANDO NO REDIRMIDDLEWARE")
    next()
}

exports.setHomePage = (req, res, next) => {
    res.locals.home = 1
    res.locals.headerIndex = "includes/index/headerIndex.ejs"
    res.locals.bodyIndex = "includes/index/bodyIndex.ejs"
    res.locals.footerIndex = "includes/index/footerIndex.ejs"
    next()
}
exports.setSuccessPage = (req, res, next) => {
    res.locals.home = 0
    res.locals.headerSuccess = "includes/success/headerSuccess.ejs"
    res.locals.bodySuccess = "includes/success/bodySuccess.ejs"
    res.locals.footerSuccess = "includes/success/footerSuccess.ejs"
    next()
}