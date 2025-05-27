const { Schema, Types, model } = require("mongoose");

const OptionSchema = new Schema({
    title: { type: String, required: true },
    key: { type: String, required: true },
    type: { type: String, enum: ["number", "string", "array", "boolean"], required: true },
    enum: { type: Array, default: [] },
    quid: { type: String, required: false },
    required: { type: Boolean, required: false, default: false },
    category: { type: Types.ObjectId, ref: "category", required: true },

})

const OptionModel = model('option', OptionSchema)
module.exports = OptionModel