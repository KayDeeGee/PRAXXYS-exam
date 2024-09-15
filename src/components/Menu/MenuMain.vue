<template>
    <ion-row v-if="profile.profile" class="ion-justify-content-between ion-align-items-center">
        <ion-col size="auto" class="ion-align-self-center">
            <ion-menu-button style="color:#D71921"></ion-menu-button>
        </ion-col>
        <ion-col>
            <ion-row class="ion-align-items-center ion-justify-content-center">
                <div>
                    <img src="/svg/crown 1.svg" alt="" width="24px" class="ion-margin-end">
                </div>
                <h1 class="ion-no-margin ion-margin-end" style="font-weight: bold; font-size: 16px">{{
                    profile.profile.loyaltyPoints }}
                    Points</h1>
                <div>
                    <ion-icon :icon="chevronForward" style="color:#D71921"></ion-icon>
                </div>
            </ion-row>

        </ion-col>
        <ion-col size="auto" class="ion-text-end">
            <img :src="profile.profile.imgUrl" alt="" width="36px">
        </ion-col>
    </ion-row>
</template>

<script setup>
import { IonMenuButton } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';

import { useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/useProfileStore';

const profile = useProfileStore();

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

/* img {
    width: 36px;
    height: 36px;
} */
</style>