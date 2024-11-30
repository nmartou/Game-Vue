import { Product } from "~/server/api/product/product";
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const id = event.context.params?.id;
    const products = await Product.updateOne({ id, ...body })
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