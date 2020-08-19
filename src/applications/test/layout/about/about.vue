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
        bem("block", { element: { "is-active": true } }); => {{
          bem("block", { element: { "is-active": true } })
        }}
      </pre>
      <pre>
        bem("block", { element: { "is-active": false } }); => {{
          bem("block", { element: { "is-active": false } })
        }}
      </pre>
      <pre>
        bem("block", { element: { "has-color": "black" } }); => {{
          bem("block", { element: { "has-color": "black" } })
        }}
      </pre>
      <pre>
        bem({ block: "active" }, { element: "active" }); => {{
          bem({ block: "active" }, { element: "active" })
        }}
      </pre>
      <pre>
        bem({ block: { "is-show": true } }); => {{
          bem({ block: { "is-show": true } })
        }}
      </pre>
      <pre>
        bem({ block: { "is-show": false } }); => {{
          bem({ block: { "is-show": false } })
        }}
      </pre>
    </div>
    <div>
      <div :class="[bem({ rectangle: 'red' })]">红色矩形</div>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.scss";
import { Component } from "vue-property-decorator";
import { mapActions, mapState, mapGetters } from "vuex";
import Application from "@/Application";

@Component({
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },

  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class About extends Application {
  // public currentValue = 0;
  public results = "";
  increase!: (args: object) => void;
  getInfo!: (args: object) => Promise<any>;
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
