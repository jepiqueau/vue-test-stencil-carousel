<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Carousel {{ this.type }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <template v-if="this.type === 'basichorizontal'">
        <jeep-carousel
          data='{"slides":[
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/deerl.jpg\" alt=\"deer\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/elephantl.jpg\" alt=\"elephant\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/tigerl.jpg\" alt=\"tiger\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/lionl.jpg\" alt=\"lion\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eaglel.jpg\" alt=\"eagle\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eagleheadl.jpg\" alt=\"eagle head\"></img>"]}
          ]}'
          cstyle=".image {width: auto;max-width: 100%;height: auto;max-height: 100%;}"
        >
        </jeep-carousel>
      </template>
      <template v-if="this.type === 'basicvertical'">
        <jeep-carousel
          data='{"slides":[
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/deerl.jpg\" alt=\"deer\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/elephantl.jpg\" alt=\"elephant\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/tigerl.jpg\" alt=\"tiger\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/lionl.jpg\" alt=\"lion\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eaglel.jpg\" alt=\"eagle\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eagleheadl.jpg\" alt=\"eagle head\"></img>"]}
          ]}'
          cstyle=".image {width: auto;max-width: 100%;height: auto;max-height: 100%;}"
          options='{"direction":"vertical"}'
        >
        </jeep-carousel>
      </template>
      <template v-if="this.type === 'paginationnavigationhorizontal'">
        <jeep-carousel
          data='{"slides":[
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/deerl.jpg\" alt=\"deer\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/elephantl.jpg\" alt=\"elephant\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/tigerl.jpg\" alt=\"tiger\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/lionl.jpg\" alt=\"lion\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eaglel.jpg\" alt=\"eagle\"></img>"]},
            {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/eagleheadl.jpg\" alt=\"eagle head\"></img>"]}
          ]}'
          cstyle=".image {width: 75%;max-width: 100%;height: auto;max-height: 100%;}"
          options='{"direction":"horizontal",
          "pagination":{"el":".swiper-pagination","type":"bullets","clickable":true},
          "navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"}}'
        >
        </jeep-carousel>
      </template>
      <template v-if="this.type === 'thumbsgalleryimages'">
        <jeep-carousel
          data='{"slides":[
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/italy-mountains.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/lake-sunset-twilight.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-67517s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-247474s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-268633s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-371589s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-414171s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-414513s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-814499s.jpeg\"></img>"]},
          {"slide":["<img class=\"image\" src=\"https://jeepcomponentsviewme.firebaseapp.com/assets/images/pexels-photo-910368s.jpeg\"></img>"]}
          ]}'
          cstyle=".image {width: auto;max-width: 100%;height: auto;max-height: 100%;}"
          options='{
            "spaceBetween": 10,
            "thumbs": {
              "swiper": {
                "el": ".swiper-container-thumbs",
                "slidesPerView": 5,
                "spaceBetween": 10,
                "freeMode": true,
                "watchSlidesVisibility": true,
                "watchSlidesProgress": true
              }
            },
            "navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"}}'
        >
        </jeep-carousel>
      </template>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      type: this.$route.params.type
    };
  }
};
</script>
