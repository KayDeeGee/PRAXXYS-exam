<template>
    <div>
        <h2>What's New?</h2>
        <img :src="`${newMenu[0]?.imgUrl}?t=${Date.now()}`" alt="Image not found">
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup () {
        const newMenu = ref([]);

        const fetchWhatsNew = async () => {
            try {
                const response = await fetch('/data/new-menu.json'); // Fetch from public/data
                newMenu.value = await response.json();
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        onMounted(() => {
            fetchWhatsNew();
        });

        return {newMenu}
    }
}
</script>

<style scoped>
img {
    width: 100%
}
</style>