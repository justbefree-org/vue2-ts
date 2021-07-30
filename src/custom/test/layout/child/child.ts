/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:18:50
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:46:22
 * @E-mail: justbefree@126.com
 */
// import "./style/index.scss";
import { Component, BaseLayout } from "@/base";
import { CreateElement } from "vue";
import { mapActions, mapState } from "vuex";
import Parent from "@/applications/test/parent";
@Component({
  methods: {
    ...mapActions("test", ["changeText"])
  },
  computed: {
    ...mapState("test", ["extendStore"])
  }
})
export default class Child extends BaseLayout {
  public appName = "test";
  changeText!: () => void;
  extendStore!: string;
  change() {
    this.changeText();
  }
  render(h: CreateElement) {
    return h("div", {}, [
      h("h2", {}, "extend router page"),
      h(
        "p",
        {},
        `I will change if you click the button below - ${this.extendStore}`
      ),
      h("button", { on: { click: this.change } }, "click to change"),
      h("div", {}, [`i18n - ${this.getProperLanguage("extendRoute")}`])
    ]);
  }
}
