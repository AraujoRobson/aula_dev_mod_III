const controller = require('./controllers/userController')
const router = require('express').Router()

router.get('/', controller.listUsers)
router.post('/', controller.createUser)
router.get('/:id', controller.searchUserById)

module.exports = router
