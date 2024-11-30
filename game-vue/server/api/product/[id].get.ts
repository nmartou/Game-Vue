import { Product } from "~/server/api/product/product";
export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    const products = await Product.findById(id)
                        .catch((error) => {
                            return error;
                        });

    return {
        products,
    };
});