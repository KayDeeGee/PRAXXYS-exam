<template>
    <ion-page>
        <ion-content>
            <MenuSecond headerLabel="Checkout" class="ion-padding" />

            <div class="sliding-card-group">
                <SlidingCards :data="userDetails" type="user" />
                <ion-radio-group class="sliding-card-group">
                    <SlidingCards v-for="address in addressDetails" :data="address" type="address" />
                </ion-radio-group>
            </div>
            <Orders />
            <PaymentOption />
            <div class="charge">
                <ion-row class="ion-padding-horizontal ion-justify-content-between" >
                    <ion-col size="auto" >Subtotal</ion-col>
                    <ion-col size="auto" > P {{ calculateTotal() }}</ion-col>
                </ion-row>
                <ion-row class="ion-padding-horizontal ion-justify-content-between">
                    <ion-col size="auto" >Delivery Charge</ion-col>
                    <ion-col size="auto" > P {{ deliveryCharge }}</ion-col>
                </ion-row>
                <ion-row class="ion-padding-horizontal ion-justify-content-between">
                    <ion-col size="auto" >Change</ion-col>
                    <ion-col size="auto" > P 10000example</ion-col>
                </ion-row>
            </div>

        </ion-content>
        <ion-footer>
            <ion-toolbar>
                <ion-row class="ion-padding-horizontal ion-justify-content-between">
                    <ion-col class="ion-no-padding ion-align-self-center">
                        <div >Grand Total</div>
                        <div  class="charge">P {{ calculateTotal() + deliveryCharge }}</div>
                    </ion-col>
                    <ion-col class="ion-no-padding">
                        <OrderReceivedModal />
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
import { useOrderStore } from '@/stores/useOrderStore';

import SlidingCards from '@/components/Checkout/SlidingCards.vue';
import MenuSecond from '@/components/Menu/MenuSecond.vue';
import Orders from '@/components/Checkout/Orders.vue';
import PaymentOption from './PaymentOption.vue';
import OrderReceivedModal from '@/components/OrderReceivedModal.vue';


const router = useRouter();
const order = useOrderStore();

const user = ref({});
const userDetails = ref({});
const addressDetails = ref([]);

const deliveryCharge = 59;

const calculateTotal = () => {
    let total = 0;
    order.order.forEach((item) => {
        total += (item.price * item.quantity) || item.price;
    });
    return total;
}


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

.charge{
    font-size: 16px;
    font-weight: bold;
}
</style>
