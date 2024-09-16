<template>
    <ion-alert trigger="present-alert" 
        :message="alertMessage" :buttons="alertButtons">
    </ion-alert>
</template>

<script setup>
import { IonAlert } from '@ionic/vue';
import { useRouter } from 'vue-router';

import { useOrderStore } from '@/stores/useOrderStore';
import { useFoodStore } from '@/stores/useFoodStore';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
    quantity: Number
})
const router = useRouter();

const order = useOrderStore();
const food = useFoodStore();
const uniqueId = uuidv4();

const data = {
    name: food.food.name,
    imgUrl: food.food.imgUrl,
    price: food.food.price,
    quantity: props.quantity
}

console.log(props.quantity)
const alertButtons = [
    {
        text: 'Proceed to Checkout',
        role: 'confirm',
        handler: () => {
            order.pushOrder(data);
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

<style scoped>
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