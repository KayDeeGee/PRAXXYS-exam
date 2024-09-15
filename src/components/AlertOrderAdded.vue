<template>
    <ion-alert trigger="present-alert" 
        :message="alertMessage" :buttons="alertButtons">
    </ion-alert>
</template>

<script setup>
import { IonAlert } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const alertButtons = [
    {
        text: 'Proceed to Checkout',
        role: 'confirm',

        handler: () => {
            // store here, cart data
            router.push('/checkout');
        },
    },
    {
        text: 'Add More',
        role: 'confirm',
        handler: () => {
            router.back();
        },
    },
];

const alertMessage = 'Successfully Added!\n\nYour order has been added to the cart.'

</script>

<style>
.alert-head {
    background-image: url('svg/positive-vote 1.svg');
    background-repeat: no-repeat;
    background-position: center;
    margin: 1rem 0;
    height: 72px;
}

.alert-message {
    white-space: pre-wrap;
    font-weight: bold;
}
</style>