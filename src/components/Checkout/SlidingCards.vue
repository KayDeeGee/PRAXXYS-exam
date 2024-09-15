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
                 <!-- <ion-item-option>
                    <div class="edit">
                        <ion-icon :icon="createOutline" size="large" style="color:#FD7E14"></ion-icon>
                    </div>
                </ion-item-option>
                <ion-item-option>
                    <div class="delete">
                        <ion-icon :icon="trashOutline" size="large" style="color:#DC3545"></ion-icon>
                    </div> 
                </ion-item-option>-->
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>

</template>

<script setup>
import { ellipsisVertical, createOutline, trashOutline } from 'ionicons/icons';

const props = defineProps({
    data: Object,
    type: String
});

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

    --color: #000000;
    --color-checked: #6815ec;
}

ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 4px;
}

.radio-checked.ios::part(container) {
    border-color: #6815ec;
}
</style>