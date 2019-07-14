<template>
  <el-popover placement="bottom" trigger="click" :popper-class="classCustom">
    <div class="flex-row flex-row__right mouse-clickable">
      <div class="inf">
        <div class="name">{{ name }}</div>
        <div class="role">{{ role }}</div>
      </div>
    </div>
    <div class="flex-row flex-row__right mouse-clickable" slot="reference">
      <div class="avt flex-row flex-row__center margin-right__10">
        C
      </div>
      <div class="inf">
        <div class="name">{{ name }}</div>
        <div class="role">{{ role }}</div>
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class User extends Vue {
  @Prop({ default: "Nguyen Manh Cuong" }) private name!: string;
  @Prop({ default: "user" }) private role!: string;
  @Prop({ default: "" }) private classCustom!: string;
}
</script>

<style lang="scss" scoped></style>
