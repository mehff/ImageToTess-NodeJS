exports.homePage = (req, res, next) => {
    res.render('index')
    next()
}

exports.trataPost = (req, res) => {
    res.send("SOU O POST")
}