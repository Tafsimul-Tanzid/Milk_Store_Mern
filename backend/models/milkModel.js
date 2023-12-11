import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export const Order = mongoose.model('cat', orderSchema);