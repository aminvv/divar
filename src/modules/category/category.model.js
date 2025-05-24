const { Schema, Types, model } = require("mongoose");
const { Children } = require("react");


const categorySchema=new Schema({
    name:{type:String,required:true},
    slug:{type:String,required:true,index:true},
    icon:{type:String,required:true},
    parent:{type:Types.ObjectId,ref:"category",required:false},
    parents:{type:[Types.ObjectId],ref:"category",required:false,default:[]},
},{virtuals:true,versionKey:false,id:false})

categorySchema.virtual(Children,{
    ref:"category",
    localField:"_id",
    foreignField:"parent"
})
const categoryModel=model("category",categorySchema)
module.exports=categoryModel