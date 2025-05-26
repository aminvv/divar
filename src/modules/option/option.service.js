const autoBind = require("auto-bind")
const { OptionMessage } = require("./option.message")
const OptionModel = require("./model/option.model")
const categoryModel = require("./../category/model/category.model")
const createHttpError = require("http-errors")
const { default: slugify } = require("slugify")

class OptionService {
    #model
    #CategoryModel
    constructor() {
        autoBind(this)
        this.#model = OptionModel
        this.#CategoryModel = categoryModel
    }

    async create(optionDto) {
        category = await this.checkExistById(optionDto.category)
        optionDto.category = category._id
        optionDto.key = slugify(optionDto, key, { trim: true, replacement: "_", lower: true })
        await this.alreadyExistByCategoryAndKey(category._id, option.key)

        if (optionDto?.enum && typeof optionDto.enum === "string") {
            optionDto.enum = optionDto.enum.split(",")
        } else if (Array.isArray(optionDto.enum)) optionDto.enum = []

        const option = await this.#model.create(optionDto)
    }
    async find() {

    }
    async findById(id) {

    }
    async findByCategoryId(CategoryId) {

    }



    async checkExistById(id) {
        const category = await this.#CategoryModel.findById(id)
        if (!category) throw new createHttpError.NotFound(OptionMessage.NotFound)
        return category
    }


    async alreadyExistByCategoryAndKey(category, key) {
        const isExist = await this.#model.findOne({ category, key })
        if (isExist) throw new createHttpError.Conflict(OptionMessage.AlreadyExist)
        return null
    }

}

module.exports = new OptionService