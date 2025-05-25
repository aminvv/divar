const autoBind = require("auto-bind");
const { CategoryService } = require("./category.service");
const { CategoryMessage } = require("./category.message");
const { HttpCodes } = require("http-codes");


class CategoryController {
    #service
    constructor() {
        autoBind(this)
        this.#service = CategoryService
    }

    async create(req, res) {
        try {
            const { name, slug, icon, parent } = req.body
            await this.#service.create(name, slug, icon, parent)
            return res.status(HttpCodes.Create).json({
                message:CategoryMessage.Create
            })
        } catch (error) {

        }
    }


    async find(req, res) {
        try {
            const category= await this.#service.find()
            return res.json({category})
        } catch (error) {

        }
    }
}



module.exports= new CategoryController