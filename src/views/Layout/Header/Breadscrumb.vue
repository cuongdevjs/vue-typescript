<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="bscrumb">
    <transition-group name="el-fade-in-linear">
      <el-breadcrumb-item
        v-for="item in listBreadscrumb"
        :key="item.name"
        :to="{ name: item.name }"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { generalInfo } from "../../../store/modules/general";
@Component
export default class Breadscrumb extends Vue {
  get listBreadscrumb() {
    return generalInfo.listBreadscrumb;
  }
}
</script>

<style lang="scss" scoped></style>
