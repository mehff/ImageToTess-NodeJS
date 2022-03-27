exports.homePage = (req, res, next) => {
    res.render('index')
    next()
}

exports.fileUploading = (req, res, next) => {
    for(let i = 0; i < req.files.length; i++){
        let getExt = req.files[i].filename.split('.');
        console.log(getExt)
    }
    next()
}

