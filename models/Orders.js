import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema ({
    items: {
        type: Array,
        required: true
    },
    userInformation: {
        name: String,
        address: String,
        city: String,
        state: String,
        country: String,
        phone: String,
        email: String,
        userId: String,
    },
    totalBill: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },   
    status: {
        type: String,
        enum: ['Failed', 'Pending', 'Complete'],
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

const Order = models.Order || mongoose.model('Order', orderSchema )

export default Order;