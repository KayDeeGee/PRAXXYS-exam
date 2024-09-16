<template>
    <div class="custom-card" @click="goToFoodDetails(food)">
        <div class="img-container">
            <img :src="`${food.imgUrl}`" alt="Image not found">
        </div>
        <div class="card-body ion-padding">
            <h2 class="card-title">{{ food.name }}</h2>
            <h4 class="card-subtitle">{{ food.category }}</h4>
            <ion-row class="ion-justify-content-between">
                <h3 class="card-price">P {{ food.price }}</h3>
                <Rating :rating="food.rating"/>
            </ion-row>
        </div>
    </div>
</template>

<script setup>
import { useFoodStore } from '@/stores/useFoodStore';
import { useRouter } from 'vue-router';
import Rating from '@/components/Rating.vue'; 

defineProps({
    food: {
        type: Object,
        required: true
    }
})

const foodStore = useFoodStore();
const router = useRouter();

function goToFoodDetails(food) {
    foodStore.setFood(food);
    router.push({ name: 'FoodDetails' });
}

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


</style>