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
            const { title, guid, type, key, category, enum: list ,required} = req.body
            await this.#service.create({ title, guid, type, key, category, enum: list, required })
            return res.status(201).json({
                message: OptionMessage.Create
            })
        } catch (error) {
            next(error)
        }

    }




    async update(req, res, next) {
        try {
            const {title, key, guid, enum: list, type, category, required} = req.body;
            const {id} = req.params;
            await this.#service.update(id, {title, key, guid, enum: list, type, category, required})
            return res.json({
                message: OptionMessage.Update
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
    async removeById(req, res, next) {
        try {
            const { id } = req.params;
            await this.#service.removeById(id);
            return res.json({ message: OptionMessage.Delete })
        } catch (error) {
            next(error)
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params;
            const option = await this.#service.findById(id);
            return res.json(option)
        } catch (error) {
            next(error)
        }
    }
    async findByCategoryId(req, res, next) {
        try {
            const { CategoryId } = req.params
            const option = await this.#service.findByCategoryId(CategoryId)
            return res.json(option)
        } catch (error) {
            next(error)
        }

    }


    async findByCategorySlug(req, res, next) {
        try {
            const { slug } = req.params
            const option = await this.#service.findByCategorySlug(slug)
            return res.json(option)
        } catch (error) {
            next(error)
        }

    }
}

module.exports = new OptionController