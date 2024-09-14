<template>
    <div class="fab-container">
        <button class="custom-fab" @click="() => router.push({ name: 'OurFoods' })">
        <h1>Order Now!</h1>
    </button>
    </div>
     
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        return { router };
    }
});
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
  }</style>