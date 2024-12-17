<template>
    <div class="shop">
        <h1>Shop Page</h1>
        <div class="shop-vue">
            <div v-if="productStore.isLoading">Loading...</div>
            <div v-else class="products">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="product in productStore.products" :key="product._id">
                        <tr>
                            <td>{{ product._id }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}€</td>
                            <td><button class="delete" @click="deleteData(product._id)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
});

const deleteData = (id: number) => {
    console.log(productStore.deleteProduct(id));
    productStore.fetchProducts();
};
</script>

<style scoped>
    div.shop {
        border: solid black 2px;
        margin-left: auto;
        margin-right: auto;
        min-width: 50%;
        max-width: 80%;
        text-align: center;
        background-color: white;
        border-radius: 30px;
        background-color: whitesmoke;
        padding: 20px;
        /* text-align: center; */
    }

    div.shop-vue {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }

    div.product {
        display: inline-block;
        border: solid black 1px;
        border-radius: 30px;
        padding: 10px;
        margin: 20px;
    }

    div.game button.delete {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: red;
        color: white;
    }

    div.game button:hover {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: green;
        color: white;
        transition: 0.3s;
    }
</style>