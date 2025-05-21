const authService=require('./auth.service.js')
const AuthMessages = require('./auth.messages')
const autoBind = require('auto-bind')
class AuthController{
    #Service
    constructor(){
        autoBind(this)
        this.#Service=authService
    }
async sendOtp(req,res,next){
    try {
        const mobile=req.body
        const  result=await this.#Service.sendOtp(mobile)
        return{
            message:AuthMessages.SendOtpSuccessfully,
            result
        }
    } catch (error) {
        next(error)
    }       
}


checkOtp(req,res,next){
    try {
        
    } catch (error) {
        
    }
}

logOut(req,res,next){
    try {
        
    } catch (error) {
        
    }
}

}

 module.exports= new AuthController()