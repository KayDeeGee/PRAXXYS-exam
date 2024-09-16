<template>
    <ion-menu content-id="main-content">
        <ion-content class="">
            <div v-if="profile.profile">
                <ion-grid>
                    <ion-row class="ion-align-items-center">
                        <ion-col size="auto">
                            <img :src="profile.profile.imgUrl" style="max-width: 68px;" alt="">
                        </ion-col>
                        <ion-col @click="navigateTo('/home')">
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
                    </ion-row>
                </ion-grid>
                <div class="ion-padding-horizontal">
                    <div class="title">{{ profile.profile.name }}</div>
                    <div class="subtitle">{{ profile.profile.contactNo }}</div>
                </div>
            </div>
            <ion-list lines="none">
                <ion-item>
                    <ion-menu-toggle @click="navigateTo('/home')">
                        <img src="/img/Logo.png" alt="" height="18px">
                        <span>Home</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle @click="navigateTo('/our-foods')">
                        <ion-icon :icon="fastFood"></ion-icon>
                        <span>Order Now</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="notifications"></ion-icon>
                        <span>Notifications</span>
                    </ion-menu-toggle>

                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="storefront"></ion-icon>
                        <span>Store Locator</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="helpCircle"></ion-icon>
                        <span>FAQ's</span>
                    </ion-menu-toggle>
                </ion-item>
            </ion-list>
            <div class="divider"></div>
            <ion-list lines="none">
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="bagHandle"></ion-icon>
                        <span>My Orders</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="person"></ion-icon>
                        <span>My Account</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="heart"></ion-icon>
                        <span>My Favorites</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="location"></ion-icon>
                        <span>Order Tracker</span>
                    </ion-menu-toggle>
                </ion-item>
                <ion-item>
                    <ion-menu-toggle>
                        <ion-icon :icon="refreshCircle"></ion-icon>
                        <span>Order History</span>
                    </ion-menu-toggle>
                </ion-item>
            </ion-list>
        </ion-content>
        <ion-footer>
            <ion-button color="danger" class="ion-margin">
                Logout
            </ion-button>
        </ion-footer>
    </ion-menu>
</template>

<script setup>
import { IonMenu, IonContent, IonList, IonItem, IonLabel, IonFooter, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useProfileStore } from '@/stores/useProfileStore';
import { fastFood, notifications, storefront, helpCircle, bagHandle, person, heart, location, refreshCircle, chevronForward } from 'ionicons/icons';

const router = useRouter();

const profile = useProfileStore();

const navigateTo = (path) => {
    console.log(path, "tanginaaa");
    router.push(path);
}
</script>

<style scoped>
.divider {
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
}

ion-menu-toggle {
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    padding: 1rem 0;
}

ion-icon {
    padding-top: 2px;
    color: #DEE2E6;
}

span {
    margin-left: 1rem;
    font-size: 14px;
    font-weight: bold;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.subtitle {
    font-size: 12px;
    color: #6C757D;
}
</style>