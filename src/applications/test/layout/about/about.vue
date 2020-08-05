<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>result is {{ number }}</span>
    </div>
    <div>
      <button @click="add">加</button>
      <button @click="mins">减</button>
      <button @click="request">请求异步接口</button>
    </div>
    <div>
      <span>getters {{ getNumber }}</span>
    </div>
    <div>
      <span>返回的结果{{ results }}</span>
    </div>
    <div>
      <span>bem</span>
      <pre>
        bem("block"); => {{ bem("block") }}
      </pre>
      <pre>
        bem("block", "element"); => {{ bem("block", "element") }}
      </pre>
      <pre>
        bem({ block: "green" }); => {{ bem({ block: "green" }) }}
      </pre>
      <pre>
        bem("block", { element: "active" }); => {{
          bem("block", { element: "active" })
        }}
      </pre>
      <pre>
        bem({ block: "active" }, { element: "active" }); => {{
          bem({ block: "active" }, { element: "active" })
        }}
      </pre>
      <pre>
        bem({ block: { warning: "is-show" } }); => {{
          bem({ block: { warning: "is-show" } })
        }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapState, mapGetters } from "vuex";
import Super from "@/core/Super";

@Component({
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },

  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class About extends Super {
  // public currentValue = 0;
  public results = "";
  increase!: (args: any) => any;
  getInfo!: (args: any) => Promise<any>;
  number!: number;
  getNumber!: number;
  add() {
    this.increase({ params: { a: "a", b: "b" }, type: "add" });
  }
  mins() {
    this.increase({ params: { a: "a", b: "b" }, type: "mins" });
  }
  request() {
    this.getInfo({ name: "hello" })
      .then(res => {
        console.log("返回的结果", res);
        this.results = JSON.stringify(res);
      })
      .catch(err => {
        console.log("出现异常", err);
      });
  }
}
</script>
