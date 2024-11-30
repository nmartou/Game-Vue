import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    // id: {
    //     type: Number
    // },
    name: {
        type: String
    },
    price: {
        type: Number
    }
});

export const Product =  model<JSON>('Product', ProductSchema);