<template>
    <ion-row class="ion-justify-content-between ion-align-items-end">
        <h1>Special Offers!</h1>
        <div class="view-all ">
            View All <ion-icon :icon="chevronForward"></ion-icon>
        </div>
    </ion-row>
    <swiper :slides-per-view="'auto'" :space-between="8" :modules="modules">
        <swiper-slide v-for="offer in specialOffers"> <img :src="offer.imgUrl" /></swiper-slide>
    </swiper>
</template>

<script setup>
import { ref } from 'vue';

import { chevronForward } from 'ionicons/icons';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const specialOffers = ref([]);

const fetchSpecialOffers = async () => {
    try {
        const response = await fetch('/data/special-offer.json');
        specialOffers.value = await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

fetchSpecialOffers();

const modules = [FreeMode]
</script>

<style scoped>
.swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
}

.swiper-slide {
    width: 90%;
}

h1 {
    font-size: 24px;
    font-weight: bold;
}


.view-all {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #D71921;
    margin-bottom: 10px;
}

ion-icon {
    color: #D71921;
}
</style>