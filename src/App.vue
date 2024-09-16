<template>
  <ion-app>
    <MenuContent />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import MenuContent from '@/components/Menu/MenuContent.vue';
</script>
