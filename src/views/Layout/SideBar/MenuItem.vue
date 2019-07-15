<template>
  <el-menu
    default-active="2"
    :class="['menuWrapper', isCollapse ? 'collapse' : 'expand']"
    :collapse="isCollapse"
    :collapse-transition="false"
    mode="vertical"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <router-link :to="{ name: 'home' }">
          <el-menu-item index="1-1">Home</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
    <router-link :to="{ name: 'about' }">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">About</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { generalInfo } from "@/store/modules/general";

@Component
export default class MenuItem extends Vue {
  get isCollapse() {
    return generalInfo.isCollapse;
  }
}
</script>

<style scoped></style>
