<template>
  <div>这个是父类</div>
</template>

<script lang="ts">
  import { BaseComponent, Component } from "@/base";
  @Component({
    name: "Parent"
  })
  export default class Parent extends BaseComponent {
  }
</script>
