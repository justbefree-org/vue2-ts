<template>
  <div>这个是子类</div>
</template>

<script lang="ts">
  import { BaseComponent, Component } from "@/base";
  @Component({
    name: "Parent"
  })
  export default class Parent extends BaseComponent {
  }
</script>
