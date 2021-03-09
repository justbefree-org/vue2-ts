<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div>
      <span>i18n - {{ this.getProperLanguage("name") }}</span>
    </div>
    <div>
      <button @click="changeLanguage('zh-CN')">中文</button>
      <button @click="changeLanguage('en')">英文</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, BaseComponent } from "@/base";

@Component
export default class HelloWorld extends BaseComponent {
  @Prop() private msg!: string;
  public appName = "test";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
