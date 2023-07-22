import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

export interface Product {
    title: string;
    price: number;
    brand: string;
    imageUrl: string;
}