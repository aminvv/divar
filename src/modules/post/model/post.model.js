const { Schema, Types } = require("mongoose");

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'category', required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    coordinate: { type: [number], required: true },
    title: { type: [String], default: [], required: false },
})


const PostModel=model('post',PostSchema)
module.exports=PostModel