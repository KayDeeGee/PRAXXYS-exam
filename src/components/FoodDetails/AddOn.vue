<template>
    <h1>Add-Ons</h1>
    <div v-for="addOn in addOns" class="custom-card ion-margin-bottom" :key="addOn.id">
        <ion-row>
            <ion-col size="auto"><img :src="addOn.imgUrl" alt=""></ion-col>
            <ion-col>
                <div class="card-details">
                    <div>
                        <div class="card-title">{{ addOn.name }}</div>
                        <div class="card-subtitle">{{ addOn.category }}</div>
                    </div>
                    <div class="card-price">P {{ addOn.price }}</div>
                </div>
            </ion-col>
            <ion-col size="auto" class="ion-no-padding">
                <div class="quantity-layout">
                    <ion-checkbox v-model="addOnCheckboxes[addOn.id]"></ion-checkbox>
                    <div class="quantity-buttons">
                        <ion-icon :icon="removeOutline" @click="updateQuantity(addOn.id, -1)"></ion-icon>
                        <div style="font-size: 1rem; font-weight: bold;">{{ quantities[addOn.id] || 0 }}</div>
                        <ion-icon :icon="addOutline" @click="updateQuantity(addOn.id, 1)"></ion-icon>
                    </div>
                </div>
            </ion-col>
        </ion-row>
    </div>
</template>

<script>
import { IonCheckbox } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';

import { addOutline, removeOutline } from 'ionicons/icons';

export default defineComponent({

    setup() {
        const addOns = ref([]);
        const quantities = ref([]);
        const addOnCheckboxes = ref([]);
        const fetchAddOns = async () => {
            try {
                const response = await fetch('/data/add-ons.json');
                addOns.value = await response.json();
                console.log(addOns.value);
            } catch (error) {
                console.error('Error fetching add-ons:', error);
            }
        }

        const updateQuantity = (id, action) => {
            if ((quantities.value[id] || 0) + action < 0) return;

            quantities.value[id] = (quantities.value[id] || 0) + action;
        }

        onMounted(() => {
            fetchAddOns();
        });

        return {
            addOns, quantities, addOnCheckboxes,
            addOutline, removeOutline,
            fetchAddOns,
            updateQuantity
        }
    }
});
</script>


<style scoped>
.custom-card {
    border-radius: 16px;
    background: #DEE2E6;
    padding: 1rem;
}
  
.card-title {
    font-weight: bold;
    font-size: 14px;
}

.card-subtitle {
    font-size: 14px;
}

.card-price {
    margin-top: auto;
    font-weight: bold;
    font-size: 16px;
    color: #D71921;
}

.card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

ion-icon {
    background: #d4d3d9;
    color: #D71921;
    border-radius: 14px;
    font-weight: bold;
    font-size: 24px;
    padding: 6px;
}

.quantity-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
}

.quantity-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
</style>