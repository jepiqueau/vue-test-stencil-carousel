<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          Carousel Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Carousel Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="small" expand="block"
        >Go to About</ion-button
      >
      <ion-button
        @click="goToCarousel('basichorizontal')"
        size="small"
        expand="block"
        >Basic Horizontal</ion-button
      >
      <ion-button
        @click="goToCarousel('basicvertical')"
        size="small"
        expand="block"
        >Basic Vertical</ion-button
      >
      <ion-button
        @click="goToCarousel('paginationnavigationhorizontal')"
        size="small"
        expand="block"
        >Pagination Navigation Horizontal</ion-button
      >
      <ion-button
        @click="goToCarousel('thumbsgalleryimages')"
        size="small"
        expand="block"
        >Thumbs Gallery Images</ion-button
      >
    </ion-content>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goToCarousel: function(type) {
      this.$router.push("carousel/" + type);
    }
  }
};
</script>
