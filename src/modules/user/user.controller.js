const userService = require('./user.service.js')
const userMessages = require('./user.messages.js')
const autoBind = require('auto-bind')

class UserController {
    #Service
    constructor() {
        autoBind(this)
        this.#Service = userService
    }
    async whoami(req, res, next) {
        try {
            const user = req.user
            res.json(user)

        } catch (error) {
            next(error)
        }
    }



}

module.exports = new UserController()