<template>
	<MenuContent />
	<ion-page id="main-content">
		<MenuButton />
		<ion-content class="ion-padding">
			<ion-grid>
				<ion-row>
					<ion-col size="auto">
						<img src="/img/Logo.png" alt="">
					</ion-col>
					<ion-col>
						<h3>Anneyoung, Chou!</h3>
						<h1 class="">What Do you want to eat?</h1>
					</ion-col>
				</ion-row>
			</ion-grid>
			<ion-searchbar></ion-searchbar>
			<SpecialOffers/>
			<Category/>
			<New/>
			<Popular/>
		</ion-content>

	</ion-page>
</template>

<script>
import { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { MenuContent, MenuButton } from '@/components/Menu';
import { Category, New, SpecialOffers, Popular } from '@/components/Home';

export default defineComponent({
	components: {
		IonContent,
		IonHeader,
		IonMenu,
		IonPage,
		IonTitle,
		IonToolbar,
		MenuContent, MenuButton,
		Category, New, SpecialOffers, Popular
	},

});
</script>
