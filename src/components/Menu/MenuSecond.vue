<template>
    <ion-row class="ion-justify-content-between ion-align-items-center">
        <ion-col size="auto" class="ion-no-padding">
            <ion-menu-button v-if="menuBtn" style="color:#D71921"></ion-menu-button>
            <ion-icon v-else :icon="chevronBack" class="back-btn" @click="router.back()"></ion-icon>
        </ion-col>
        <ion-col size="auto" class="ion-padding-start">
            <h1 class="ion-no-margin" style="font-weight: bold;">{{ headerLabel }}</h1>
        </ion-col>
        <ion-col class="ion-text-end" >
            <ion-icon v-if="icon" :icon="bagHandle" size="large" style="color:#D71921"></ion-icon>
        </ion-col>
    </ion-row>
</template>

<script setup>
import { bagHandle, chevronBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { IonMenuButton } from '@ionic/vue';

defineProps({
    headerLabel: String,
    icon: String,
    menuBtn: String
})

const router = useRouter();

</script>

<style scoped>
.back-btn {
    padding: 8px;
    font-size: 24px;
    border-radius: 16px;
    color: #6C757D;
    background-color: #DEE2E6;
}
</style>