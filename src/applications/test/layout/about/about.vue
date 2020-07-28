<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>result is {{ number }}</span>
    <button @click="add">加</button>
    <button @click="mins">减</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapState } from "vuex";

@Component({
  methods: {
    ...mapActions("test", ["increase"])
  },

  computed: {
    ...mapState("test", ["number"])
  }
})
export default class About extends Vue {
  // public currentValue = 0;
  increase!: () => any;
  number!: number;
  add() {
    this.increase();
  }
  mins() {
    console.log("mins");
  }
}
</script>
