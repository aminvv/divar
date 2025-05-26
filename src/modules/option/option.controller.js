const autoBind = require("auto-bind")
const OptionService = require("./option.service")
const { OptionMessage } = require("./option.message")

class OptionController {
    #service
    constructor() {
        autoBind(this)
        this.#service = OptionService
    }

    async create(req, res, next) {
        try {
            const { title, guid, type, key, category, enum: list } = req.body
            const option=await this.#service.create({title, guid, type, key, category, enum: list})
            return res.status(201).json({
                message: OptionMessage.Create
            })
        } catch (error) {
            next(error)
        }

    }
    async find(req, res, next) {
        try {
            const option = await this.#service.find()
            return res.json(option)
        } catch (error) {
            next(error)
        }

    }
    async findById(req, res) {
        try {

        } catch (error) {

        }

    }
    async findByCategoryId(req, res) {
        try {

        } catch (error) {

        }

    }
}

module.exports = new OptionController