<template>
    <ion-menu content-id="main-content">
        <!-- <ion-header>
            <ion-toolbar>
                <ion-title>Menu Content</ion-title>
            </ion-toolbar>
        </ion-header> -->
        <ion-content class="">
            <div>
                <ion-grid>
                    <ion-row class="ion-align-items-center">
                        <ion-col size="auto">
                            <img src="/img/profile-pic.png" style="max-width: 68px;" alt="">
                        </ion-col>
                        <ion-col>
                            o points
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <div>
                    <div>Name</div>
                    <div>Number</div>
                </div>
            </div>
            <ion-list lines="none">
                <ion-item>
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Order Now</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Notifications</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Store Locator</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>FAQ's</ion-label>
                </ion-item>
            </ion-list>
            <div class="divider"></div>
            <ion-list lines="none">
                <ion-item>
                    <ion-label>My Orders</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>My Account</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>My Favorites</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Order Tracker</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Order History</ion-label>
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

<script>
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent,
        IonHeader,
        IonToolbar,
        IonMenu,
        IonTitle,
    },
});
</script>

<style scoped>
.divider {
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
}


</style>