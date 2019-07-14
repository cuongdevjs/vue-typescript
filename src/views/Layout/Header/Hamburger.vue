<template functional>
  <div
    :class="['pHamburger mouse-clickable', props.isCollapse ? 'on' : 'off']"
    @click="listeners['collapseMenu']"
  >
    <i class="fas fa-bars"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Hamburger extends Vue {
  @Prop({ required: true }) isCollapse!: boolean;
}
</script>

<style lang="scss" scoped></style>
