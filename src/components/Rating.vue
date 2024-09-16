<template>
    <div class="card-rating">{{ rating }} <ion-icon :icon="star"></ion-icon></div>
</template>

<script setup>
import { star } from 'ionicons/icons';

defineProps({
    rating: Number
})
</script>

<style scoped>
.card-rating {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    gap: 4px;
}

ion-icon {
    color: #FFC02E;
}
</style>