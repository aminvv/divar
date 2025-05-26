const autoBind = require("auto-bind")
const OptionService = require("./option.service")
const createHttpError = require("http-errors")
const { OptionMessage } = require("./option.message")

 class OptionController{
    #service
    constructor(){
        autoBind(this)
        this.#service=OptionService
    }

    async create( req,res){
        try {
            const {title,guid, type ,key, category,enum:list}=req.Body
            return res.status(createHttpError.create).json({
                message:OptionMessage.Create
            })
        } catch (error) {
            next(error)
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