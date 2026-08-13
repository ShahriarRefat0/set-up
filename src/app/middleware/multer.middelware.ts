import multer from "multer"

const storage = multer.memoryStorage()

const fileFilter:multer.Options['fileFilter'] = (req, file, cb) => {
const allwoedMimeTypes = ['image/jpg', 'image/png', 'image/webp']

if (allwoedMimeTypes.includes(file.mimetype)) {   
    cb(null, true)
} else {
    cb(new Error('I don\'t have a clue!'))
}
  
}

export const upload = multer({
     storage: storage,
    fileFilter,
    limits:{
        fileSize: 5 * 1024 * 1024
    }
    })