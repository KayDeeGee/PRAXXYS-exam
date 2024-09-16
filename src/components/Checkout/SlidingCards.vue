<template>
    <ion-list class="ion-no-padding">
        <ion-item-sliding>
            <ion-item class="ion-no-padding">
                <div class="custom-card">
                    <ion-row>
                        <ion-col>
                            <div v-if="type == 'user'">
                                <div class="card-title">{{ data.name }}</div>
                                <div class="card-subtitle">{{ data.contactNo }}</div>
                                <div class="card-subtitle">{{ data.email }}</div>
                            </div>
                            <div v-if="type == 'address'" style="display: flex; align-items: start">
                                <div size="auto">
                                    <div class="card-title"> {{ data.addressLabel }} </div>
                                    <div class="card-subtitle"> {{ data.addressString }} </div>
                                </div>
                                <div class="radio-style">
                                    <ion-radio></ion-radio>
                                </div>
                            </div>
                            <div v-if="type == 'order'" class="order">
                                <div>
                                    <ion-col size="auto">
                                        <div class="img-container"><img :src="data.imgUrl" alt=""></div>
                                    </ion-col>
                                    <ion-col>
                                        <div class="card-title"> {{ data.name }} </div>

                                    </ion-col>
                                </div>
                                <div class="ion-justify-content-between ion-align-items-end">
                                    <div>
                                        <div class="price">P {{ data.price }}</div>
                                    </div>
                                    <div>
                                        <div class="quantity-buttons">
                                            <ion-icon :icon="removeOutline" @click="updateQuantity(-1)"></ion-icon>
                                            <div style="font-size: 1rem; font-weight: bold;">{{ quantity || 0 }}</div>
                                            <ion-icon :icon="addOutline" @click="updateQuantity(1)"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
                <div>
                    <ion-icon :icon="ellipsisVertical" size="large" style="color:#FFC02E"></ion-icon>
                </div>
            </ion-item>

            <ion-item-options>
                <ion-item-option class="edit">
                    <ion-icon :icon="createOutline" size="large" style="color:#FD7E14"></ion-icon>
                </ion-item-option>
                <ion-item-option class="delete">
                    <ion-icon :icon="trashOutline" size="large" style="color:#DC3545"></ion-icon>
                </ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>

</template>

<script setup>
import { ref } from 'vue';
import { ellipsisVertical, createOutline, trashOutline, addOutline, removeOutline } from 'ionicons/icons';

const props = defineProps({
    data: Object,
    type: String
});

const quantity = ref(0);

const updateQuantity = (action) => {
    if ((quantity.value || 0) + action < 0) return;

    quantity.value = (quantity.value || 0) + action;
}


</script>

<style scoped>
.custom-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E9ECEF;
    border-radius: 16px;
    height: 100%;
    position: relative;
    padding: 1rem;
    margin-left: 1rem;
}

.card-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
}

.card-subtitle {
    color: #6C757D;
    font-size: 14px;
}

ion-item,
ion-item-options {
    border: 0px;
    --inner-border-width: 0;
}

ion-item-option {
    --border-color: transparent;
    --background: transparent;
}

.edit,
.delete {
    height: 100%;
    border-radius: 16px;
}

.edit {
    background-color: #FD7E1433;
}

.delete {
    background-color: #DC354533;
}

ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;
    background: white;
    border-radius: 99px;
    --color: #000000;
    --color-checked: #FFC02E;
}

ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 99px;
}

.radio-checked.ios::part(container) {
    border-color: #FFC02E;
}

.img-container {
    height: 64px;
    width: 64px;
    margin-right: 1rem;
}

.order>div {
    display: flex;
}

.quantity-buttons ion-icon {
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

.price {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    color: #D71921;
}
</style>