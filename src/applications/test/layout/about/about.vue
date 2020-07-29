<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>result is {{ number }}</span><br/>
    <button @click="add">加</button>
    <button @click="mins">减</button>
    <button @click="request">请求异步接口</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapState } from "vuex";

@Component({
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },

  computed: {
    ...mapState("test", ["number"])
  }
})
export default class About extends Vue {
  // public currentValue = 0;
  increase!: (args: any) => any;
  getInfo!: (args: any) => Promise<any>;
  number!: number;
  add() {
    this.increase({ params: { a: "a", b: "b" }, type: "add" });
  }
  mins() {
    this.increase({ params: { a: "a", b: "b" }, type: "mins" });
  }
  request() {
    this.getInfo({ name: "hello" }).then(res => {
      console.log("返回的结果", res);
    }).catch(err => {
      console.log("出现异常", err);
    });
  }
}
</script>
