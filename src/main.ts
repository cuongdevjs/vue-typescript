import Vue from "vue";
import AppMain from "./App-main.vue";
import router from "./router/index";
import store from "./store/index";

import ElementUI from "element-ui";
import "@/assets/index.scss";
import "@/register-hook";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(AppMain)
}).$mount("#app");
