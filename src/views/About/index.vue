<template>
  <div>
    About
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { generalInfo } from "../../store/modules/general";

@Component
export default class About extends Vue {
  breadscrumb = [
    {
      name: "home",
      title: "Dashboard"
    },
    {
      name: "about",
      title: "About"
    }
  ];

  setListBreadscrumb() {
    generalInfo.SET_BREADSCRUMB(this.breadscrumb);
  }

  created() {
    this.setListBreadscrumb();
  }
}
</script>

<style lang="scss" scoped></style>
