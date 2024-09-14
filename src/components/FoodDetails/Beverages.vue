<template>
    <div>
        <h1>Beverages</h1>
        <div class="custom-dropdown">
            <ion-select label="Choose Beverages" label-placement="stacked">
                <ion-select-option value="None">Apple</ion-select-option>
                <ion-select-option value="None">Apple</ion-select-option>
                <ion-select-option value="banana">Banana</ion-select-option>
                <ion-select-option value="orange">Orange</ion-select-option>
            </ion-select>
        </div>

        <ion-row class="custom-row">
            <ion-col class="ion-no-padding">
                <ion-button expand="block"  :class="{ 'selected': selectedValue === 0 }"
                    @click="selectSize(0)">Regular</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding ion-no-margin">
                <ion-button expand="block" class="" :class="{ 'selected': selectedValue === 1 }"
                    @click="selectSize(1)">Large</ion-button>
            </ion-col>
            <ion-col class="ion-no-padding ion-no-margin">
                <ion-button expand="block" :class="{ 'selected': selectedValue === 2 }"
                    @click="selectSize(2)">X-Large</ion-button>
            </ion-col>
        </ion-row>
    </div>
</template>

<script>
import { IonItem, IonSelect, IonSelectOption, IonCol, IonRow, IonButton } from '@ionic/vue';
import { ref } from 'vue';

export default {
    components: { IonItem, IonSelect, IonSelectOption },
    setup() {
        const beverage = ref('None');

        const selectedValue = ref(4);

        function selectSize(value) {
            selectedValue.value = value;
            console.log(selectedValue.value);
        }

        return {
            IonItem, IonSelect, IonSelectOption,
            IonCol, IonRow, IonButton,
            selectedValue,
            selectSize
        }
    },
}
</script>

<style scoped>
.custom-dropdown {
    border: 2px solid #DEE2E6;
    border-radius: 16px;
}

ion-select {
    --background: #E9ECEF;
    --border-radius: 16px;
    --padding-start: 24px;
    --padding-end: 24px;
}

.custom-row {
    padding: 16px 0px;
    display: flex;
    gap: 4px;
}

ion-button {
    --background: white;
    --color: black;
    --border-color: #DEE2E6;
    --border-style: solid;
    --border-width: 1px;
    --border-radius: 14px;
    font-weight: bold;
    width: 100%;
}

ion-button.selected {
    --background: #FFC02E;
    --border-color: #FFC02E;
    --color: white;
    width: 100%;
}


</style>