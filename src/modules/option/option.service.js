const autoBind = require("auto-bind")
const { OptionMessage } = require("./option.message")
const { isFalse,isTrue } = require("../../common/utils/functions")
const { CategoryMessage } = require("./../category/category.message")
const OptionModel = require("./model/option.model")
const categoryService = require("../category/category.service");
const createHttpError = require("http-errors")
const { default: slugify } = require("slugify")
const { isValidObjectId } = require("mongoose")

class OptionService {
    #model
    #categoryService
    constructor() {
        autoBind(this)
        this.#model = OptionModel
        this.#categoryService = categoryService
    }

    async create(optionDto) {
        const category = await this.#categoryService.checkExistById(optionDto.category)
        optionDto.category = category._id
        optionDto.key = slugify(optionDto.key, { trim: true, replacement: "_", lower: true })
        await this.alreadyExistByCategoryAndKey(category._id, optionDto.key)

        if (optionDto?.enum && typeof optionDto.enum === "string") {
            optionDto.enum = optionDto.enum.split(",")
        } else if (!Array.isArray(optionDto.enum)) {
            optionDto.enum = []
        }

        if(isTrue(optionDto?.required)) optionDto.required=true
        if(isFalse(optionDto?.required)) optionDto.required=false

        const option = await this.#model.create(optionDto)
        return option
    }



 async update(id, optionDto) {
        const existOption = await this.checkExistById(id);
        if(optionDto.category && isValidObjectId(optionDto.category)) {
            const category = await this.#categoryService.checkExistById(optionDto.category);
            optionDto.category = category._id;
        } else {
            delete optionDto.category
        }
        if(optionDto.slug) {
            optionDto.key = slugify(optionDto.key, {trim: true, replacement: "_", lower: true});
            let categoryId = existOption.category;
            if(optionDto.category) categoryId = optionDto.category;
            await this.alreadyExistByCategoryAndKey(optionDto.key, categoryId, id)
        }
        if(optionDto?.enum && typeof optionDto.enum === "string") {
            optionDto.enum = optionDto.enum.split(",")
        }else if(!Array.isArray(optionDto.enum)) delete optionDto.enum;
        
        if(isTrue(optionDto?.required)) optionDto.required = true;
        else if(isFalse(optionDto?.required)) optionDto.required = false;
        else delete optionDto?.required
        return await this.#model.updateOne({_id: id}, {$set: optionDto})
    }




    async find() {
        const option = await this.#model.find({}, { __v: 0 }, { sort: { _id: -1 } }).populate({ path: 'category', select: { name: 1, slug: 1 } })
        return option

    }




    async findById(id) {
        return await this.checkExistById(id)
    }




    async findByCategoryId(category) {
        return await this.#model.find({ category }, { __v: 0 }).populate([{ path: "category", select: { name: 1, slug: 1 } }]);
    }

    async removeById(id) {
        await this.checkExistById(id)
        return await this.#model.deleteOne({_id:id})

    }


    async checkExistById(id) {
        const option = await this.#model.findById(id)
        if (!option) throw new createHttpError.NotFound(OptionMessage.NotFound)
        return option
    }
    async findByCategorySlug(slug) {
        const options = await this.#model.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"

                }
            },
            {
                $unwind: '$category'
            },
            {
                $addFields: {
                    categorySlug: "$category.slug",
                    categoryName: "$category.name",
                    categoryIcon: "$category.icon",
                }
            },
            {
                $project: {
                    category: 0,
                    __v: 0,
                }
            },
            {
                $match: {
                    categorySlug: slug,
                }
            }
        ])
        if (!options) throw new createHttpError.NotFound(OptionMessage.NotFound)
        return options
    }


    async alreadyExistByCategoryAndKey(category, key) {
        const isExist = await this.#model.findOne({ category, key })
        if (isExist) throw new createHttpError.Conflict(OptionMessage.AlreadyExist)
        return null
    }




}

module.exports = new OptionService