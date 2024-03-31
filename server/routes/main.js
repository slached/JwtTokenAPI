const express = require('express')
const router = express.Router()
const controller = require('../controller/main.js')


router.post('/register', controller.register)
router.post('/login', controller.login)

router.get('/get', require('../middlewares/authMiddleware.js').authMiddleware, controller.getUsers)
router.get('/logout', controller.logout)

router.delete('/delete/:un', controller.deleteUsers)

module.exports = router