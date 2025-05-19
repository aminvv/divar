const { Schema, model } = require("mongoose");

const OtpSchema=new Schema({
    fullName:{type:String,required:false,default:undefined},
    expiresIn:{type:Number,required:false,default:0},
})
const UserSchema=new Schema({
    fullName:{type:String,required:false},
    mobile:{type:String,required:true,unique:true},
    otp:{type:OtpSchema},
    verifiedMobile:{type:Boolean,default:false,required:true},
},{timestamps:true})

const UserModel=model('user',UserSchema)
module.exports={
    UserModel
}