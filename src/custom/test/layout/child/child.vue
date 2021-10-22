<template>
  <div>child</div>
</template>
<script lang="ts">
  import { Component, BaseLayout } from "@/base";
  @Component({
    name: "Child"
  })
  export default class Child extends BaseLayout {}
</script>
