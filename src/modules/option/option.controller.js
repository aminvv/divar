const autoBind = require("auto-bind")
const OptionService = require("./option.service")

 class OptionController{
    #service
    constructor(){
        autoBind(this)
        this.#service=OptionService
    }

    async create( req,res){
        try {
            
        } catch (error) {
            
        }

    }
    async find( req,res){
        try {
            
        } catch (error) {
            
        }

    }
    async findById( req,res){
        try {
            
        } catch (error) {
            
        }

    }
    async findByCategoryId( req,res){
        try {
            
        } catch (error) {
            
        }

    }
 }

 module.exports= new OptionController