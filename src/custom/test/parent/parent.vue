<template>
  <div>
    <p>这个是子类</p>
    <p>{{ getProperLanguage("parent") }}</p>
    <p>{{ getProperLanguage("newAdded") }}</p>
  </div>
</template>

<script lang="ts">
  import { BaseComponent, Component } from "@/base";
  @Component({
    name: "Parent"
  })
  export default class Parent extends BaseComponent {
    public appName = "test";
  }
</script>
