const util = require('util')
const multer = require('multer')
const maxSize = 16 * 1024 * 1024
const path = require('path')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directoryPath = path.join(__basedir, '/uploads')
    cb(null, directoryPath)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file')

let uploadFileMiddleware = util.promisify(uploadFile)

module.exports = uploadFileMiddleware
