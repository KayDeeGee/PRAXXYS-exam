<template>
    <ion-page>
        <ion-content class="ion-padding"  v-if="food">
            <MenuSecond :headerLabel="food.category" icon="bagHandle" class="ion-padding-bottom" />
            <div>
                <div class="custom-card">
                    <img class="img-container" :src="food.imgUrl" alt="">
                    <div class="favorite"></div>
                </div>
                <h1>{{ food.name }}</h1>
                <Rating :rating="food.rating" />
                <p>{{ food.description }}</p>
                <ion-row class="ion-justify-content-between ion-align-items-center">
                    <h3 class="price">P {{ food.price * quantity }}</h3>
                    <div class="quantity-buttons">
                        <ion-icon :icon="removeOutline" @click="updateQuantity(-1)"></ion-icon>
                        <div style="font-size: 1rem; font-weight: bold;">{{ quantity || 0 }}</div>
                        <ion-icon :icon="addOutline" @click="updateQuantity(1)"></ion-icon>
                    </div>
                </ion-row>
            </div>
            <Beverages />
            <AddOn />
            <div class="extra-fab-space"></div>
        </ion-content>
        <AddToBagFAB :quantity="quantity"/>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFoodStore } from '@/stores/useFoodStore';

import { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { addOutline, removeOutline, bagHandle, chevronBack } from 'ionicons/icons';

import MenuSecond from '@/components/Menu/MenuSecond.vue';
import Beverages from '@/components/FoodDetails/Beverages.vue';
import AddOn from '@/components/FoodDetails/AddOn.vue'
import AddToBagFAB from '@/components/AddToBagFAB.vue';
import Rating from '@/components/Rating.vue';


const foodStore = useFoodStore();
const router = useRouter();

const food = foodStore.food;
console.log(food)

const quantity = ref(1);

const updateQuantity = (action) => {
    if ((quantity.value || 0) + action < 0) return;

    quantity.value = (quantity.value || 0) + action;
}


</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    padding: 2rem;
}

.custom-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E9ECEF;
    border-radius: 16px;
    height: 100%;
    position: relative;
}

.favorite {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 2rem;
    right: 2rem;
    color: #D71921;
}

.quantity-buttons ion-icon {
    background: #d4d3d9;
    color: #D71921;
    border-radius: 14px;
    font-weight: bold;
    font-size: 24px;
    padding: 6px;
}

.quantity-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
}

.quantity-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.extra-fab-space {
    height: 100px;
}

.price {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    color: #D71921;
}
</style>