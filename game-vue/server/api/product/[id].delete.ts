import { Product } from "~/server/api/product/product";
export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    const products = await Product.deleteOne({ id })
                        .then((response) => {
                            return response
                        })
                        .catch((err) => {
                            return err;
                        });

    return {
        products,
    };
});