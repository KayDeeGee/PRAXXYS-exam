<template>
    <div>
        <h1>What's New?</h1>
        <img :src="`${newMenu[0]?.imgUrl}?t=${Date.now()}`" alt="Image not found">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newMenu = ref([]);

const fetchWhatsNew = async () => {
    try {
        const response = await fetch('/data/new-menu.json'); // Fetch from public/data
        newMenu.value = await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

fetchWhatsNew();
</script>

<style scoped>
img {
    width: 100%
}

h1 {
    font-size: 24px;
    font-weight: bold;
}
</style>