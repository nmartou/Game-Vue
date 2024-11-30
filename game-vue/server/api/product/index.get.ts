import { Product } from "~/server/api/product/product";
export default defineEventHandler(async (event) => {
    const products = await Product.find().catch((err) => {
        console.log(err);
    });

    return {
        products,
    };
});