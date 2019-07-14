<template>
  <div class="pHeader flex-row flex-row__between">
    <Hamburger :isCollapse="isCollapse" @collapseMenu="collapseMenu" />
    <div class="width__100 margin-left__10 flex-row flex-row__between">
      <Breadscrumb />
      <User
        :name="name"
        :role="role"
        :classCustom="`pDetailInfo flex-row__center`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { generalInfo } from "../../../store/modules/general";
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

  public get isCollapse() {
    return generalInfo.isCollapse;
  }

  protected collapseMenu() {
    generalInfo.SET_COLLAPSE();
  }
}
</script>

<style lang="scss"></style>
