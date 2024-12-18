import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: {} as Array<{_id: number, name: string, price: number}>,
        isLoading: false
    }),
    

    getters: {
        totalProducts: (state) => state.products.length,
        getProductById: (state) => (_id: number) => 
            state.products.find((product) => product._id === _id),
    },

    actions: {
        async fetchProducts() {
            this.isLoading = true;
            axios.get('/api/product/')
                .then((response) => {
                    this.products = response.data.products;
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally (() => {
                    this.isLoading = false;
                });
        },
        async buyProduct(id: number) {
            axios.put('/api/product/:id')
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
})