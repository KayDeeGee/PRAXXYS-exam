<template>
	<MenuContent />
	<ion-page id="main-content">
		<MenuButton />
		<ion-content class="ion-padding">
			<ion-searchbar></ion-searchbar>
			<SpecialOffers/>
			<Category/>
			<New/>
			<Popular/>
		</ion-content>

	</ion-page>
</template>