import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: [String],
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    size: {
        type: [String],
        enum: ["XS", "S", "M", "L", "XL", "XXL"]      
    },
    color: {
        type: Array,    
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: [String],
        enum: ["accessories", "caps", "headwarmer", "hoodie", "knitwear", "outerwear", "shirt-and-polo", 'swimwear', 't-shirt'],
        required: true
    },
    collections: {
        type: [String],
        enum: ['mens', 'womens', 'teens', 'kids'],
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Product = models.Product || mongoose.model('Product', productSchema )

export default Product;