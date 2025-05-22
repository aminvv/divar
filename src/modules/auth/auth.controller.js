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
        const {mobile}=req.body
        const  result=await this.#Service.sendOtp(mobile)
        return res.json(
            {
            message:AuthMessages.SendOtpSuccessfully,
            result
        }
        )
    } catch (error) {
        next(error)
    }       
}


async checkOtp(req,res,next){
    try {
        const {mobile,code}=req.body
        const  result=await this.#Service.checkOtp(mobile,code)
        return res.json(
            {
            message:AuthMessages.LoginSuccessfully,
            result
        }
        )
    } catch (error) {
        next(error)
    }  
}

logOut(req,res,next){
    try {
        
    } catch (error) {
        
    }
}





}

 module.exports= new AuthController()