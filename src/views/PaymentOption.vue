<template>
    <div class="ion-padding">
        <h1 class="ion-padding-bottom">Payment Option</h1>
        <ion-radio-group>
            <div class="custom-card">
                <ion-row>
                    <ion-col class="payment-card-layout">
                        <div>
                            <div class="card-title">Cash On Delivery</div>
                            <div class="card-subtitle">Pay when you receive the order</div>
                        </div>
                        <div class="radio-style">
                            <ion-radio></ion-radio>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
            <div class="custom-card">
                <ion-row>
                    <ion-col class="payment-card-layout">
                        <div>
                            <div class="card-title">Loyalty Points <span>(wewae)</span></div>
                            <div class="card-subtitle">Pay when you receive the order</div>
                        </div>
                        <div class="radio-style">
                            <ion-radio></ion-radio>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
            <div class="custom-card">
                <ion-row>
                    <ion-col class="payment-card-layout">
                        <div>
                            <img src="/img/PayPal-Logo.png" alt="">
                            <div class="card-subtitle">A new tab will open to access your account</div>
                        </div>
                        <div class="radio-style">
                            <ion-radio></ion-radio>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
            <div class="custom-card">
                <ion-row>
                    <ion-col class="payment-card-layout">
                        <div>
                            <img src="/img/paynamics_rgb.png"  alt="">
                            <div class="card-subtitle">Choose paynamics services available from you</div>
                        </div>
                        <div class="radio-style">
                            <ion-radio></ion-radio>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </ion-radio-group>

    </div>
</template>

<script setup>

</script>

<style scoped>
.custom-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E9ECEF;
    border-radius: 16px;
    padding: 1rem;
    margin-bottom: 8px;
}

.card-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
}

.card-subtitle {
    color: #6C757D;
    font-size: 12px;
}

.payment-card-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    height: 20px;
    margin-bottom:4px
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

h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
}
</style>