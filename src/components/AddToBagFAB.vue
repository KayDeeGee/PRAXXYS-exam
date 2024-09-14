<template>
    <div class="fab-container">
        <button id="present-alert" class="custom-fab">
            <h1>Order Now!</h1>
        </button>
    </div>
    <AlertOrderAdded />
</template>

<script setup>
import AlertOrderAdded from './AlertOrderAdded.vue';

</script>

<style scoped>
.fab-container {
    position: fixed;
    bottom: 2rem;
    height: auto;
    width: 100%;
    padding: 0px 1rem;
    z-index: 2;
}

.custom-fab {
    background-color: #D71921;
    width: 100%;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
}

h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding: 1.5rem 3rem;
}
</style>