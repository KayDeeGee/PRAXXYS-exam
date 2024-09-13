<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="16"  :modules="modules" class="ion-padding-start">
        <swiper-slide v-for="category in categories">
            <div class="overlay-text">
                <div>{{ category.name }}</div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

import 'swiper/css/free-mode';

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        const categories = ref([]);

        const fetchCategories = async () => {
            try {
                const response = await fetch('/data/categories.json'); // Fetch from public/data
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
</style>