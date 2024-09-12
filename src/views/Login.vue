<template>
	<ion-page>
		<ion-content class="ion-padding">
			<img src="/img/Logo.png" alt="">
			<h1 class="text-6xl">Bonjour!</h1>
			<h4 class="ion-padding-bottom">Welcome to all new FastFood mobile app. Kindly login your account. Thank you!
			</h4>
			<div class="ion-padding-bottom">
				<ion-input label="Email Address" label-placement="floating" fill="outline"
					placeholder="Enter your Email"></ion-input>
			</div>
			<div class="ion-padding-bottom">
				<ion-input label="Password" label-placement="floating" fill="outline"
					placeholder="Enter your Password"></ion-input>
			</div>
				<ion-button expand="block" @click="() => router.push('/home')">Go to Login</ion-button>
		</ion-content>
	</ion-page>
</template>

<script>
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';

export default {
	name: 'Login',
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const router = useRouter();
		return { router };
	},
};
</script>

<style></style>
