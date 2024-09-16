<template>
	<ion-page>
		<ion-content class="ion-padding">
			<MenuMain />
			<ion-grid>
				<ion-row>
					<ion-col size="auto">
						<img src="/img/Logo.png" alt="">
					</ion-col>
					<ion-col class="ion-align-self-center">
						<h3 class="ion-no-margin" style="font-size: 14px;">Anneyoung, {{ profile.getFirstName }}!</h3>
						<h1 class="ion-no-padding">What Do you want to eat?</h1>
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-searchbar></ion-searchbar>
			<SpecialOffers />
			<Category />
			<New />
			<Popular />
			<CustomFAB />
			<div class="fab-space"></div>
		</ion-content>
	</ion-page>
</template>

<script setup>
import { IonPage,  IonContent, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/vue';

import { useProfileStore } from '@/stores/useProfileStore';

import { Category, New, SpecialOffers, Popular } from '@/components/Home';
import CustomFAB from '@/components/CustomFAB.vue';
import MenuMain from '@/components/Menu/MenuMain.vue';

const profile = useProfileStore();
profile.setProfile();
</script>

<style scoped>
h1 {
	font-size: 25px;
	font-weight: bold;
	margin-top: 0;
}

.fab-space {
	height: 100px;
}
</style>
