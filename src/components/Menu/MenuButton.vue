<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonButtons,
        IonHeader,
        IonMenuButton,
        IonTitle,
        IonToolbar,
    },
});
</script>

<style scoped></style>