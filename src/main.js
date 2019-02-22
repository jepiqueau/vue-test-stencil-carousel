import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as carousel } from "stencil-carousel/dist/loader";
//import Ionic from "@ionic/vue";
//import { defineCustomElements as ionic } from "@ionic/core/dist/loader";

//Vue.use(Ionic);

//Vue.config.ignoredElements = [/^ion-/];
Vue.config.ignoredElements = [/jeep-\w*/];

carousel(window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
