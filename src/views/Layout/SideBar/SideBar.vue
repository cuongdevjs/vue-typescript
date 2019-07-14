<template>
  <div :class="['pSideBar', !isCollapse ? 'has-minWidth' : '']">
    <MenuItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { generalInfo } from "../../../store/modules/general";
@Component({
  components: {
    MenuItem: () => import("./MenuItem.vue")
  }
})
export default class Sidebar extends Vue {
  get isCollapse() {
    return generalInfo.isCollapse;
  }
}
</script>

<style scoped></style>
