exports.redirMiddleware = (req, res, next) => {
    res.locals.localVarNumeroUno = "Blibers"
    console.log("TO ENTRANDO NO REDIRMIDDLEWARE")
    next()
}