<template>
  <div>
    <h2>applications extend examples</h2>
    <span></span>
    <button @click="test">click me</button>
    <parent></parent>
  </div>
</template>
<script lang="ts">
  import { BaseLayout, Component } from "@/base";
  import Parent from "../../parent11";
  @Component({
    name: "Extend",
    components: { Parent }
  })
  export default class Extend extends BaseLayout {
    test() {
      console.log("this is extend test from custom");
    }
  }
</script>
