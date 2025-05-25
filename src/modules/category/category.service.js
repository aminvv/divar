const autoBind = require("auto-bind");
const categoryModel = require("./model/category.model");
const { isValidObjectId } = require("mongoose");
const createHttpError = require("http-errors");
const { CategoryMessage } = require("./category.message");
const { default: slugify } = require("slugify");


class CategoryService {
    #model
    constructor() {
        autoBind(this)
        this.#model = categoryModel
    }
    async create(categoryDTO) {
        if (categoryDTO?.parent && isValidObjectId(categoryDTO.parent)) {
            const existCategory = this.checkExistById(categoryDTO.parent)
            categoryDTO.parent=existCategory._id
            categoryDTO.parents = [
                ... new set(
                    [ existCategory._id.toString()].concat(
                        existCategory.parents.map(id=>id.toString())                    
                    )).map(id=> new Types.ObjectId(id))
            ]
        }

        if(categoryDTO?.slug){
            categoryDTO.slug=slugify(categoryDTO.slug)
            await this.alreadyExistBySlug(categoryDTO.slug)
        }else{
            categoryDTO.slug=slugify(categoryDTO.name)
        }

        const category = await this.#model.create({ categoryDTO })
        return category
    }





    async find(categoryDTO) {

    }


    async checkExistById(id) {
        const category = await this.#model.findById(id)
        if (!category) {
            throw createHttpError.NotFound(CategoryMessage.NotFound)
        }
        return category
    }
    async checkExistBySlug(slug) {
        const category = await this.#model.findOne({slug})
        if (!category) {
            throw createHttpError.NotFound(CategoryMessage.NotFound)
        }
        return category
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({slug})
        if (category) {
            throw createHttpError.Conflict(CategoryMessage.AlreadyExist)
        }
        return null
    }
}

module.exports = {
     CategoryService
}