const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: { type: String, required: true},
    qtyPerUnit: {type: Number,required: true},
    unitPrice: {type: Number,required: true},
    unitInStock: {type: Number,required: true},
    discontinued: { type: Boolean,required: true },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
        }
    
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
