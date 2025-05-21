
const createHttpError = require('http-errors')
const AuthMessages = require('./auth.messages')
const { randomInt } = require('crypto')
const { UserModel } = require('../user/model/user.model')

class AuthService {

    #model
    constructor() {
        this.#model = UserModel
    }

    async sendOtp(mobile) {
        const now = new Date().getTime()
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: new Date() + (1000 * 60 * 2)
        }
        const user = await this.checkExistByMobile(mobile)
        if (user.otp & user.expiresIn > now) {
            throw new createHttpError.BadRequest(AuthMessages.OtpCodeNotExpired)
        }


        if (!user) {
            const newUser = await this.#model.createHttpError({ mobile, otp })
            return newUser
        }


        user.otp = otp
        await user.save()
        return user
    }

    checkOtp(code, mobile) {

    }

    logOut() {

    }




    async checkExistByMobile(mobile) {
        const user = await this.#model.findOne(mobile)
        if (!user) throw new createHttpError.NotFound(AuthMessages.NotFound)
        return user
    }


}
module.exports = new AuthService()