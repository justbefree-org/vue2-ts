<template>
  <div>
    <h2>applications extend examples</h2>
    <h3>
      这个是父类
    </h3>
    <span></span>
    <button @click="test">click me</button>
    <parent></parent>
  </div>
</template>
<script lang="ts">
  import { BaseLayout, Component } from "@/base";
  import Parent from "@/applications/test/parent";
  @Component({
    name: "Extend",
    components: { Parent }
  })
  export default class Extend extends BaseLayout {
    test() {
      console.log("this is extend test");
    }
  }
</script>
