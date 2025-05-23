
const createHttpError = require('http-errors')
const { UserModel } = require('./model/user.model')

class AuthService {

    #model
    constructor() {
        this.#model = UserModel
    }

  

}
module.exports = new AuthService()