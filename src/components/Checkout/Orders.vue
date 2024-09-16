<template>
    <div>
        <h1 class="ion-padding"> Orders</h1>
        <div v-if="orderStore.order" v-for="order in orderStore.order" :key="order.id">
            <SlidingCards  :data="order" type="order" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useOrderStore } from '@/stores/useOrderStore';
import SlidingCards from './SlidingCards.vue';

const orderStore = useOrderStore();
</script>

<style scoped>
h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
}
</style>