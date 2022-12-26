const controller = require('./controllers/userController')
const router = require('express').Router()

router.get('/', controller.listUsers)
router.post('/', controller.createUser)

module.exports = router
