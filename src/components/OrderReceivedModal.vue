<template>
    <ion-button expand="block" style="--background:#DC3545"  @click="setOpen(true)">Place Order</ion-button>
    <ion-modal :is-open="isOpen">
      <ion-content class="ion-padding ion-text-center">
        <img class="ion-margin" width="160px" src="/svg/positive-vote.svg" alt="">
        <h1 >Order Received!</h1>
        <p>Your order<span> No. 19049585</span> has successfully take and now being processed. Kindly wait for our notification regarding your order.</p>
      </ion-content>
      <ion-footer class="ion-padding ion-text-center">
        <ion-button expand="block">Track Order</ion-button>
        <div class="home ion-margin-bottom" @click="goToHome()">Back to Home</div>
      </ion-footer>
    </ion-modal>
</template>

<script setup>
import { IonButton, IonModal, IonContent, IonFooter } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpen = ref(false);

const setOpen = (open) => (isOpen.value = open);

const goToHome = () => {
    setOpen(false);
    router.push('/home');
}
</script>

<style scoped>
h1 {
    font-weight: bold;
}

p {
    font-size: 14px;
    color: #6C757D;
}

p span,  .home{
    font-weight: bold;
    color: #D71921;
}

ion-button {
    --background: #D71921;
    margin-bottom: 1rem;
}
</style>