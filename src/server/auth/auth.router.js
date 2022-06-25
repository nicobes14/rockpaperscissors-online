const router = require('express').Router()

const { registerController,loginController,verifyTokenController } = require('./auth.controller')

router.post('/register',registerController)

router.post('/login', loginController)

router.post('/verifytoken', verifyTokenController)

module.exports = router 