import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: {} as Array<{id: number, name: string, price: number}>,
        isLoading: false
    }),
    

    getters: {
        totalProducts: (state) => state.products.length,
        getProductById: (state) => (_id: number) => 
            state.products.find((product) => product.id === _id),
    },

    actions: {
        async fetchProducts() {
            this.isLoading = true;
            axios.get('/api/product/')
                .then((response) => {
                    this.products = { ...response.data };
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally (() => {
                    this.isLoading = false;
                });
        }
    }
})