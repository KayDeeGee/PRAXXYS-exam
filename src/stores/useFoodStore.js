import { defineStore } from 'pinia';

export const useFoodStore = defineStore('foodStore', {
    state: () => ({
        food: null,
    }),
    actions: {
        setFood(foodData) {
            this.food = foodData;
        },
    },
});