<template>
    <div>
        <h1>Most Popular</h1>
        <ion-grid class="ion-no-padding">
            <ion-row>
                <ion-col v-for="item in popularItems" size="6" class="">
                    <div class="custom-card">
                        <div class="img-container">
                            <img :src="`${item.imgUrl}`" alt="Image not found">
                        </div>
                        <div class="card-body ion-padding">
                            <h2 class="card-title">{{ item.name }}</h2>
                            <h4 class="card-subtitle">{{ item.category }}</h4>
                            <ion-row class="ion-justify-content-between">
                                <h3 class="card-price">P {{ item.price }}</h3>
                                rating
                            </ion-row>
                        </div>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const popularItems = ref([]);
const fetchPopular = async () => {
    try {
        const response = await fetch('/data/popular-items.json'); // Fetch from public/data
        popularItems.value = await response.json();
    } catch (error) {
        console.error('Error fetching popularItems:', error);
    }
};

fetchPopular();
</script>

<style scoped>
.img-container {
    height: 136px;
    width: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 10px auto;

}

.custom-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E9ECEF;
    border-radius: 16px;
}

ion-col {
    padding: 3px;
}

.card-title {
    font-weight: bold;
    font-size: 14px;
    margin: 0;
}

.card-subtitle {
    font-size: 12px;
    margin: 0.5rem 0 1rem 0;
}

.card-price {
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    color: #D71921;
}

h1 {
    font-size: 24px;
    font-weight: bold;
}
</style>