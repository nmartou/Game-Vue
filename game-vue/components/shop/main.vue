<template>
    <div class="shop">
        <h1>Shop Page</h1>
        <div class="shop-vue">
            <div v-if="productStore.isLoading">Loading...</div>
            <div v-else class="products">
                <template v-for="product in productStore.products" :key="product._id">
                    <div class="product">
                        <img :src="'/img/' + product.path" width="200px" />
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.price }}€</p>
                        <button @click="buyProduct(product._id)">Buy</button>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
    console.log(productStore.products);
});

const buyProduct = (id: number) => {
    productStore.buyProduct(id);
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
        /* border: solid black 1px; */
        border-radius: 30px;
        padding: 10px;
        margin: 20px;
    }

    div.product button {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: black;
        color: white;
        width: 100px;
    }

    div.product button:hover {
        padding: 15px;
        border-radius: 50px;
        border: none;
        margin: 10px;
        background-color: White;
        color: black;
        transition: 0.3s;
        border: 2px solid black;
    }
</style>