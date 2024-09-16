<template>
    <div class="quantity-buttons">
        <ion-icon :icon="removeOutline" @click="updateQuantity(-1)"></ion-icon>
        <div style="font-size: 1rem; font-weight: bold;">{{ quantity || 0 }}</div>
        <ion-icon :icon="addOutline" @click="updateQuantity(1)"></ion-icon>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>