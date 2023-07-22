import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
});
