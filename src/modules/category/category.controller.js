const autoBind = require("auto-bind");
const CategoryService = require("./category.service");
const { CategoryMessage } = require("./category.message");
const { StatusCodes } = require("http-status-codes");


class CategoryController {
    #service
    constructor() {
        autoBind(this)
        this.#service = CategoryService
    }

    async create(req, res) {
        try {
            const { name, slug, icon, parent } = req.body
            await this.#service.create({ name, slug, icon, parent })
            return res.status(201).json({
                message: CategoryMessage.Create
            })
        } catch (error) {
            console.error("ERROR IN CREATE:", error)
            res.status(StatusCodes.InternalServerError).json({ message: "Server error" })
        }
    }


    async find(req, res, next) {
        try {
            const category = await this.#service.find()
            return res.json({ category })
        } catch (error) {
            next(error)
        }
    }


    async remove(req, res, next) {
        const{id}=req.params
        try {
             await this.#service.remove(id)
            return res.json({
                message: CategoryMessage.Delete
            })
        } catch (error) {
            next(error)
        }
    }
}



module.exports = new CategoryController