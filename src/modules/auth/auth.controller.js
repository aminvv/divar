const authService=require('./auth.service.js')
const AuthMessages = require('./auth.messages')
const {CookieName} = require('../../common/constant/cookie.enum.js')
const autoBind = require('auto-bind')
const { NodeEnv } = require('../../common/constant/env.enum.js')

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
        const  token=await this.#Service.checkOtp(mobile,code)
        return res.cookie("accessToken",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === NodeEnv.Production
        }).json(
            {
            message:AuthMessages.LoginSuccessfully,
        }
        )
    } catch (error) {
        next(error)
    }  
}

logOut(req,res,next){
    try {
        return res.clearCookie(CookieName.accessToken).status(200).json({
            message:AuthMessages.LoggedOutSuccessfully
        })
    } catch (error) {
        
    }
}





}

 module.exports= new AuthController()