<template>
  <transition name="el-fade-in-linear">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bscrumb">
      <el-breadcrumb-item>homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    </el-breadcrumb>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Breadscrumb extends Vue {}
</script>

<style lang="scss" scoped></style>
