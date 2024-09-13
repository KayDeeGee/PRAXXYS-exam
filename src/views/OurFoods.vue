<template>
    <ion-page>
        <ion-content>
            <ion-searchbar></ion-searchbar>
            <CategoryFilter />
            <ion-grid class="ion-padding">
                <ion-row>
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
import CategoryFilter from '@/components/CategoryFilter.vue';
import CardFood from '@/components/CardFood.vue';

export default defineComponent({
    components: {
        IonMenu,
        IonPage,
        CategoryFilter, CardFood
    },
    setup() {
        const foods = ref([]);
        const fetchFoods = async () => {
            try {
                const response = await fetch('/data/our-foods.json'); // Fetch from public/data
                foods.value = await response.json();
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

        onMounted(() => {
            fetchFoods();
        });
        return { foods }
    }

});
</script>

<style scoped>
ion-col {
    padding: 3px;
}

</style>
