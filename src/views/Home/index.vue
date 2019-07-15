<template>
  <div>
    Home
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { generalInfo } from "../../store/modules/general";

@Component
export default class Home extends Vue {
  breadscrumb = [
    {
      name: "home",
      title: "Dashboard"
    }
  ];

  setListBreadscrumb() {
    generalInfo.SET_BREADSCRUMB(this.breadscrumb);
    console.log("home");
  }

  created() {
    this.setListBreadscrumb();
  }
}
</script>

<style lang="scss" scoped></style>
