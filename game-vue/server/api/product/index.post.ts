import { Product } from "~/server/api/product/product";
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const products = await Product.create(body)
                        .then((response) => {
                            return response
                        })
                        .catch((err) => {
                            return err;
                        });

    return {
        ...products,
    };
});