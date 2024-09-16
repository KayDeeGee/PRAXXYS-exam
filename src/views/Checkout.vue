<template>
    <ion-page>
        <ion-content>
            <MenuSecond headerLabel="Checkout" class="ion-padding"/>
      
            <div class="sliding-card-group">
                <SlidingCards :data="userDetails" type="user" />
                <ion-radio-group class="sliding-card-group">
                    <SlidingCards v-for="address in addressDetails" :data="address" type="address" />
                </ion-radio-group>
            </div>
            <Orders />
            <PaymentOption />
        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-row>
                    <ion-col>
                        <div>Grand Total</div>
                        <div>pesos</div>
                    </ion-col>
                    <ion-col size="auto">
                        <ion-button>Place Order</ion-button>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonFooter, IonToolbar, IonRow, IonCol, IonButton } from '@ionic/vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

import SlidingCards from '@/components/Checkout/SlidingCards.vue';
import MenuSecond from '@/components/Menu/MenuSecond.vue';
import Orders from '@/components/Checkout/Orders.vue';
import PaymentOption from './PaymentOption.vue';


const router = useRouter();

const user = ref({});
const userDetails = ref({});
const addressDetails = ref([]);

const fetchUser = async () => {
    try {
        const response = await fetch('/data/user-profile.json');
        user.value = await response.json();

        userDetails.value = {
            id: user.value.id,
            name: user.value.name,
            contactNo: user.value.contactNo,
            email: user.value.email,
        };

        addressDetails.value = user.value.address;

        console.log(addressDetails.value)
    } catch (error) {
        console.error('Error fetching user:', error);
    }

}

fetchUser();
</script>

<style scoped>
.sliding-card-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
