const { imageToText } = require("./ocr")

let filePath = []
let fileFullName = []
let fileName = []
let fileExt = []

exports.fileUploading = (req, res, next) => {
    return new Promise((resolve, reject) =>{
        for(let i = 0; i < req.files.length; i++){
            getExt = req.files[i].filename.split('.');
            fileExt.push(req.files[i].filename.split('.')[getExt.length-1]);
            fileName.push(req.files[i].filename.split('.')[0]);
            filePath.push(req.files[i].path);
            fileFullName.push(req.files[i].filename)
        }
        resolve()
        next()
    })
}

exports.extSelector = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log(filePath);
        console.log(fileName);
        console.log(fileExt);
        console.log(fileFullName);
        resolve()
        next()
    })
}

exports.sendToOCR = (req, res, next) => {
    return new Promise((resolve, reject) => {
        let i = 0
        while(i < filePath.length){
            imageToText(fileName[i], filePath[i])
            i = i + 1
        }
        if(i >= filePath.length){
            resolve()
            next()
        }
    })
}

exports.baribers = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log("TRES RISADOLA")
        resolve()
        next()
    })
}