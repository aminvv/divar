
const createHttpError = require('http-errors')
const AuthMessages = require('./auth.messages')
const { randomInt } = require('crypto')
const { UserModel } = require('../user/model/user.model')
const JWT = require('jsonwebtoken')
const dotenv= require('dotenv')
dotenv.config()
class AuthService {

    #model
    constructor() {
        this.#model = UserModel
    }

    async sendOtp(mobile) {
        const now = new Date().getTime()
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: Date.now() + 1000 * 60 * 2

        }
        const user = await this.#model.findOne({ mobile })

        if (!user) {
            const newUser = await this.#model.create({ mobile, otp })
            return newUser
        }

        if (user.otp && user.otp.expiresIn > now) {
            throw new createHttpError.BadRequest(AuthMessages.OtpCodeNotExpired)
        }




        user.otp = otp
        await user.save()
        return user
    }

    async checkOtp(mobile, code) {
        const now = new Date().getTime()
        const user = await this.checkExistByMobile(mobile)
        if (user?.otp?.expiresIn < now) throw (AuthMessages.OtpCodeNotExpired)
        if (user?.otp?.code !== code) throw (AuthMessages.OtpCodeISIncorrect)
            if (!user.verifiedMobile) {
                user.verifiedMobile = true
            }
            const accessToken = this.signToken({ mobile, id: user._id })
            user.accessToken=accessToken
            await user.save()
        return {
            user,
        }

    }

    logOut() {

    }




    async checkExistByMobile(mobile) {
        const user = await this.#model.findOne({ mobile })
        if (!user) throw new createHttpError.NotFound(AuthMessages.NotFound)
        return user
    }


    signToken(payload) {
        const token = JWT.sign(payload, process.env.SECRET_KEY_TOKEN, { expiresIn: "1y" })
        return token
    }


}
module.exports = new AuthService()