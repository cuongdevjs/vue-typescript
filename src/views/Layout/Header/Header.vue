<template>
  <div class="User">
    <Hamburger />
    <Breadscrumb />
    <User
      :name="name"
      :role="role"
      :classCustom="`pDetailInfo flex-row__center`"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    User: () => import(/*webpackChunkName: "user" */ "./User.vue"),
    Hamburger: () =>
      import(/*webpackChunkName: "hamburger" */ "./Hamburger.vue"),
    Breadscrumb: () =>
      import(/*webpackChunkName: "breadscrumb" */ "./Breadscrumb.vue")
  }
})
export default class Header extends Vue {
  public name: string = "Nguyễn Mạnh Cường";
  public role: string = "user";
}
</script>

<style lang="scss">
@import "src/assets/mixin.scss";
@import "src/assets/base.scss";
.User {
  @include size(100%, 100%);
  .avt {
    border: 1px solid $colorBlue;
    border-radius: 50%;
    @include size(35px, 35px);
  }
}
</style>
