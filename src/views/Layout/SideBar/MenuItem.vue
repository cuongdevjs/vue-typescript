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
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">
          item four
        </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>Navigator Two</span>
    </el-menu-item>
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

<style scoped>
.menuWrapper.expand {
  transition: all 0.55s ease-out;
  animation: expand 0.75s;
  /* width: 240px; */
}

.menuWrapper.collapse {
  width: 64px !important;
  transition: all 0.55s ease-in;
  animation: collapse 0.75s;
}

@keyframes collapse {
  from {
    width: 240px;
  }
  to {
    width: 64px;
  }
}

@keyframes expand {
  from {
    width: 64px;
  }
  to {
    width: 240px;
  }
}
</style>
