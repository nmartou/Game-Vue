<template>
    <div class="shop">
        <h1>Shop Page</h1>
        <div class="shop-vue">
            <div v-if="productStore.isLoading" class="products">Loading...</div>
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
                            <td><img :src="'/img/' + product.path" width="50px"/></td>
                            <td><button class="delete" @click="deleteData(product._id)">Delete</button><button class="modify" @click="modifyData(product._id)">Modify</button></td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="showModal = false">&times;</span>
                <form @submit.prevent="submitForm">
                    <div>
                        <label for="_id">ID: </label>
                        <span>{{ formData._id }}</span>
                    </div>
                    <div>
                        <label for="name">Name: </label>
                        <input type="text" v-model="formData.name" id="name" required>
                    </div>
                    <div>
                        <label for="price">Price: </label>
                        <input type="number" v-model="formData.price" id="price" required>
                    </div>
                    <div>
                        <label for="path">Path: </label>
                        <input type="text" v-model="formData.path" id="path" required>
                    </div>
                    <button class="submit" type="submit" @click="closeModal()">Modify</button>
                </form>
                <button class="close-modal" @click="closeModal()">X</button>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
const productStore = useProductStore();
const showModal = ref(false);
const formData = reactive({
    _id: 0,
    name: "",
    price: 0,
    path: ""
});

onMounted(() => {
    productStore.fetchProducts();
});

const deleteData = (id: number) => {
    productStore.deleteProduct(id);
    productStore.fetchProducts();
};

const modifyData = (id: number) => {
    showModal.value = true;
    id = id;
    // productStore.modifyProduct(id);
    // productStore.fetchProducts();
};

const submitForm = () => {
    productStore.modifyProduct(formData._id, formData);
}

const closeModal = () => {
    showModal.value = !showModal.value;
}
</script>

<style scoped>
div.products {
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    text-align: left;
}

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
    width: 100%;
}

div.product {
    display: inline-block;
    border: solid black 1px;
    border-radius: 30px;
    padding: 10px;
    margin: 20px;
}

div.products button {
    padding: 15px;
    border-radius: 50px;
    border: none;
    margin: 10px;
    background-color: red;
    color: white;
}

div.products button.modify {
    background-color: green;
    color: white;
}

div.products button.submit {
    background-color: black;
    color: white;
}

div.products button.close-modal {
    background-color: lightgray;
    color: black;
}

div.products button:hover {
    padding: 15px;
    border-radius: 50px;
    border: none;
    margin: 10px;
    background-color: rgb(70, 0, 0);
    color: white;
    transition: 0.3s;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>