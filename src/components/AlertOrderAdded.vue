<template>
     <ion-alert trigger="present-alert" header="Successfully Added!" sub-header="What do you want to do now?"
     :message="alertMessage" :buttons="alertButtons">
     
    </ion-alert>
</template>

<script  setup>
import { IonAlert } from '@ionic/vue';

const alertButtons = ['Action'];

</script>