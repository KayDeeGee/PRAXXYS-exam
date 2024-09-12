<template>
    <ion-row class="ion-justify-content-between ion-align-items-end">
        <h2>Special Offers!</h2>
        <h4>View All</h4>
    </ion-row>
    <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide> <img alt="Silhouette of mountains" src="/img/so-1.png" /></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
    </swiper>
</template>

<script>
export default {

}
</script>

<style scoped></style>