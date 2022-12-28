const userController = require('./controllers/userController.js')
const router = require('express').Router()
const multer = require('multer')

const settingMulter = multer.diskStorage({
  destination: 'uploads/',
  filename(req, file, callback){
    return callback(null, 'img.png')
  }
})

const upload = multer({ storage: settingMulter })

router.get('/', userController.list)
router.post('/', upload.single('nPhoto'), userController.add)
router.get('/:id', userController.searchById)
router.put('/:id', upload.single('nPhoto'), userController.edit)
router.delete('/:id', userController.delete)

module.exports = router
