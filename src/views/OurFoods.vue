<template>
    <ion-page>
		<MenuContent />
        <ion-content>
            <MenuSecond menuBtn="true" headerLabel="Our Foods" icon="bagHandle"
                class="ion-no-padding ion-padding-horizontal ion-padding-top" />
            <ion-searchbar class="ion-no-padding ion-padding-horizontal"></ion-searchbar>
            <CategoryFilter />
            <ion-grid class="ion-padding">
                <ion-row class="food-cards">
                    <ion-col v-for="food in foods" size="6">
                        <CardFood :food="food" />
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage } from '@ionic/vue';
import {  ref } from 'vue';

import CategoryFilter from '@/components/CategoryFilter.vue';
import CardFood from '@/components/CardFood.vue';
import MenuContent from '@/components/Menu/MenuContent.vue';
import MenuSecond from '@/components/Menu/MenuSecond.vue';

const foods = ref([]);
const fetchFoods = async () => {
    try {
        const response = await fetch('/data/our-foods.json');
        foods.value = await response.json();
    } catch (error) {
        console.error('Error fetching foods:', error);
    }
};

fetchFoods();


</script>

<style scoped>
.food-cards ion-col {
    padding: 3px;
}
</style>
