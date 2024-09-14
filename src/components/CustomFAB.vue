<template>
    <button class="custom-fab" @click="() => router.push({name: 'OurFoods'})">
       <h1>Order Now!</h1>
    </button>
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
  .custom-fab {
    position: fixed; 
    bottom: 2rem; 
    right: 1rem; 
    width: auto;
    height: auto; 
    background-color: #D71921; 
    color: white;
    border-radius: 1rem; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    cursor: pointer;
    z-index: 99;
  }

  h1 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding: 1.5rem 3rem;
  }

  </style>
  