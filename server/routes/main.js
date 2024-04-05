const express = require('express')
const router = express.Router()
const controller = require('../controller/main.js')

//middlewares
const jwtMiddleware = require('../middlewares/jwtMiddleware.js')
const loginCheckMiddleware = require('../middlewares/loginCheckMiddleware.js')

router.post('/register', controller.register)
router.post('/login', loginCheckMiddleware.checkForLogin, controller.login)

router.get('/get', jwtMiddleware.isAuthenticated, controller.getUsers)
router.get('/logout', loginCheckMiddleware.checkForLogout, controller.logout)

router.delete('/delete/:un', controller.deleteUsers)

module.exports = router