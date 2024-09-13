<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="8" :modules="modules" class="ion-padding-start">
        <swiper-slide  v-for="category in categories" :key="category">
            <div class="tab-item" :class="{ 'tab-active': category === 'All' }">{{ category }}</div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        const categories = ref([]);

        const fetchCategories = async () => {
            try {
                const response = await fetch('/data/categories.json'); 
                categories.value = await response.json();
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        onMounted(() => {
            fetchCategories();
        });

        return {
            categories,
            modules: [FreeMode],
        };
    }
}
</script>

<style scoped>
.swiper-slide {
    width: auto;
}

.tab-item {
    padding: 10px 16px;
    border-radius: 8px;
    background-color: #DEE2E6;
    color: #6C757D;
    font-weight: 700;
    border-radius: 1rem;
}

.tab-active {
    background-color: #D71921;
    color: white
}

</style>