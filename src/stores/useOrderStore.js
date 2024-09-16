import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        order: [],
    }),
    getters: {
        getOrders(state) {
            return state.order;
        },
    },
    actions: {
        pushOrder(orderData) {
            this.order.push(orderData);
        },
    },
});