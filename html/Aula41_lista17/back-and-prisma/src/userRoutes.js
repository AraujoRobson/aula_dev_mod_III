const controller = require('./controllers/userController')
const router = require('express').Router()

router.get('/', controller.list)
router.post('/', controller.create)
router.get('/:id', controller.searchById)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
