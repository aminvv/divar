const autoBind = require("auto-bind")
const OptionModel = require("./model/option.model")

 class OptionService{
    #model
    constructor(){
        autoBind(this)
        this.#model= OptionModel
    }

    async create(optionDto){

    }
    async find(){

    }
    async findById(id){

    }
    async findByCategoryId(CategoryId){

    }
 }

 module.exports= new OptionService