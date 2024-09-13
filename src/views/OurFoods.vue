<template>
    <ion-page>
        <ion-content >
            <ion-searchbar ></ion-searchbar>
            <CategoryFilter />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonMenu, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import CategoryFilter from '@/components/CategoryFilter.vue';

export default defineComponent({
    components: {
        IonMenu,
        IonPage,
        CategoryFilter
    },

});
</script>
