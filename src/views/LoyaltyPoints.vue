<template>
    <ion-page>
        <ion-content>
            <ion-row class="ion-justify-content-between ion-align-items-center ion-margin-top">
                <ion-col size="auto" class="ion-align-self-center">
                    <ion-menu-button style="color:#D71921"></ion-menu-button>
                </ion-col>
                <ion-col class="ion-align-self-center">
                    <h1>Loyal Points</h1>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-between ion-align-items-center ion-padding">
                <ion-col size="auto">
                    <img src="/svg/crown 1.svg" alt="">
                </ion-col>
                <ion-col size="auto">
                    <h2>Beginner Tier</h2>
                </ion-col>
                <ion-col class="ion-align-self-center ">
                    <div class="view-all">
                        View All <ion-icon :icon="chevronForward"></ion-icon>
                    </div>
                </ion-col>
            </ion-row>
            <ion-row class="ion-padding-horizontal ion-text-justify">
                <p>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.
                </p>
            </ion-row>
            <ion-row class="ion-padding ion-justify-content-center">
                <ion-col size="auto">
                    <h1 style="font-size:30px">
                        {{ profile.profile.loyaltyPoints }} / 160
                    </h1>
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-between ion-align-items-end ion-padding">
                <h1>Rewards</h1>
                <div class="view-all ">
                    How it Works <ion-icon :icon="chevronForward"></ion-icon>
                </div>
            </ion-row>
            <ion-row class="ion-padding-horizontal">
                <ion-col class="no-padding">
                    <div class="tab-item tab-active">All</div>
                </ion-col>
                <ion-col>
                    <div class="tab-item">Beginner</div>
                </ion-col>
                <ion-col>
                    <div class="tab-item">Intermediate</div>
                </ion-col>
                <ion-col>
                    <div class="tab-item">Loyal</div>
                </ion-col>
            </ion-row>
            <ion-row class="ion-padding">
                <ion-col v-for="order in order.order" class="custom-card ion-margin-bottom" :key="order.id">
                    <ion-row class="ion-align-items-center">
                        <ion-col size="auto" class="ion-padding-end"><img :src="order.imgUrl" width="64px"></ion-col>
                        <ion-col>
                            <div class="card-details">
                                <div>
                                    <div class="card-title">{{ order.name }}</div>
                                    <div class="card-subtitle">{{ order.category }}</div>
                                    <div class="card-price"> <img src="/svg/crown 1.svg" alt=""> 20 points</div>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>

</template>

<script setup>
import { IonMenuButton, IonRow, IonCol, IonContent, IonPage } from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { useProfileStore } from '@/stores/useProfileStore';
import { useOrderStore } from '@/stores/useOrderStore';

const profile = useProfileStore();
const order = useOrderStore();

</script>

<style scoped>
h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0;
}

.view-all {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #D71921;
}

.tab-item {
    padding: 10px 10px;
    border-radius: 8px;
    background-color: #DEE2E6;
    color: #6C757D;
    font-weight: 700;
    border-radius: 1rem;
    text-align: center;
}

.tab-active {
    background-color: #D71921;
    color: white
}

h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
}

.custom-card {
    border-radius: 16px;
    background: #DEE2E6;
    padding: 1rem;
}
  
.card-title {
    font-weight: bold;
    font-size: 14px;
}

.card-subtitle {
    font-size: 14px;
    margin-bottom: 4px;
}

.card-price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    font-weight: bold;
    font-size: 16px;
    color: #D71921;
}

.card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

</style>