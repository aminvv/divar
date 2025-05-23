
const {Router}=require('express')
const authController = require('./auth.controller')
const Authorization = require('../../common/guard/authorization.guard')
const router=Router()

router.post('/send-otp',authController.sendOtp)
router.post('/check-otp',authController.checkOtp)
router.get('/logout',Authorization,authController.logOut)

module.exports={
    AuthRouter:router
}