import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;