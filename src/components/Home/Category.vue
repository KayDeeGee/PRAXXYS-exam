<template>
    <div>
        <h1>Category</h1>
        <swiper :slidesPerView="'auto'" :spaceBetween="16" :pagination="{
            clickable: true,
        }">
            <swiper-slide v-for="category in categories">
                <img :src="category.imgUrl" alt="Category Image" />
                <div class="overlay-text">
                    <div>{{ category.name }}</div>
                    <div>{{ category.totalRecipes }} Recipes</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const categories = ref([]);

const fetchCategories = async () => {
    try {
        const response = await fetch('/data/category-cards.json');
        categories.value = await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

fetchCategories();


</script>

<style scoped>
.overlay-text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}

.swiper-slide {
    width: 60%;
}

h1{
    font-size: 24px;
    font-weight: bold;
}
</style>