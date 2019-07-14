<template>
  <div :class="['pHamburger', isCollapse ? 'on' : 'off']">
    <i class="fal fa-bars"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Hamburger extends Vue {
  @Prop({ default: false }) private isCollapse!: boolean;
}
</script>

<style lang="scss" scoped></style>
