import Vue from "vue";
import Router from "vue-router";
import { concat } from "lodash";
Vue.use(Router);

export default new Router({
  routes: concat(
    [
      {
        path: "/app",
        name: "app",
        component: () => import("../App.vue")
      }
      // {
      //   path: "/about",
      //   name: "about",
      //   component: () =>
      //     import(/* webpackChunkName: "about" */ "./views/About.vue")
      // }
    ],
    [
      {
        path: "*",
        redirect: {
          name: "app"
        }
      }
    ]
  )
});
