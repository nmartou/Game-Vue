<template>
    <div class="shop">
        <h1>Shop Page</h1>
        <table class="">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="productStore.isLoading"><td>Loading...</td></tr>
                <tr v-for="product in productStore.products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
});
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
        border-radius: 10px;
        background-color: whitesmoke;
    }

    div.game button {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: black;
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