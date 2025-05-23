const createHttpError = require("http-errors")
const JWT = require("jsonwebtoken")
require("dotenv").config()
const { AuthMessage } = require("../messages/auth.message")
const {UserModel} = require("../../modules/user/model/user.model")

const Authorization = async (req, res, next) => {
    try {
        const  token  = req?.cookies?.accessToken
        console.log("Token type:", typeof req.cookies.act);
console.log("Token value:", req.cookies.act);
        if (!token) throw createHttpError.Unauthorized(AuthMessage.LoginAgain)
        const data = JWT.verify(token, process.env.SECRET_KEY_TOKEN)
        if (typeof data === 'object' && 'id' in data) {
            const user = await UserModel.findById(data.id, { accessToken: 0, otp: 0 }).lean()
            if (!user) throw createHttpError.Unauthorized(AuthMessage.NotFoundAccount)
            req.user = user
            return next()
        }
        throw new createHttpError.Unauthorized(AuthMessage.TokenInInvalid)
    } catch (error) {
        next(error)
    }

}


module.exports = Authorization