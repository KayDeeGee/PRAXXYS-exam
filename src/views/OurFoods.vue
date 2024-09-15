<template>
    <ion-page>
        <ion-content>
            <MenuSecond menuBtn="true" headerLabel="Our Foods" icon="bagHandle" class="ion-no-padding ion-padding-horizontal ion-padding-top" />
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
  
<script>
import { IonMenu, IonPage } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';

import { bagHandle } from 'ionicons/icons';
import CategoryFilter from '@/components/CategoryFilter.vue';
import CardFood from '@/components/CardFood.vue';
import MenuSecond from '@/components/Menu/MenuSecond.vue';

export default defineComponent({
    components: {
        IonMenu,
        IonPage,
        MenuSecond,
        CategoryFilter, CardFood
    },
    setup() {
        const foods = ref([]);
        const fetchFoods = async () => {
            try {
                const response = await fetch('/data/our-foods.json'); 
                foods.value = await response.json();
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

        onMounted(() => {
            fetchFoods();
        });
        return { foods, bagHandle}
    }

});
</script>

<style  scoped>
.food-cards ion-col {
    padding: 3px;
}
</style>
