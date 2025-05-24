const autoBind = require("auto-bind");
const categoryModel = require("./category.model");


class CategoryService{
    #model
    constructor(){
        autoBind(this)
        this.#model=categoryModel
    }
    create(categoryDTO){
        
    }
    find(categoryDTO){
        
    }
}

module.exports={
    CategoryService
}