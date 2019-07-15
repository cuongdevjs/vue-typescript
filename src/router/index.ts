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
        component: () => import("../App.vue"),
        children: concat(
          [
            {
              path: "about",
              component: () => import("../views/About/index.vue"),
              name: "about"
            },
            {
              path: "home",
              component: () =>
                import(/*webpackChunkName: "home" */ "../views/Home/index.vue"),
              name: "home"
            }
          ],
          [
            {
              path: "/app/*",
              redirect: {
                name: "home"
              }
            }
          ]
        )
      }
    ],
    [
      {
        path: "*",
        redirect: {
          name: "home"
        }
      }
    ]
  )
});
