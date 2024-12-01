import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }
});

export const Product =  model<JSON>('Product', ProductSchema);