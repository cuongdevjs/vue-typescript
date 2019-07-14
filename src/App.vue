<template>
  <div class="main-app flex-row flex-row__between">
    <SideBar></SideBar>
    <div class="pRight">
      <Header />
      <div class="main-display">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "./views/Layout/SideBar/SideBar.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    SideBar: () =>
      import(/* webpackChunkName: "sidebar" */ "./views/Layout/SideBar/SideBar.vue"),
    Header: () =>
      import(/* webpackChunkName: "header" */ "./views/Layout/Header/Header.vue")
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
