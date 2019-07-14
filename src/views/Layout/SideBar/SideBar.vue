<template>
  <div class="pSideBar">
    <MenuItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    MenuItem: () => import("./MenuItem.vue")
  }
})
export default class Sidebar extends Vue {}
</script>

<style scoped></style>
