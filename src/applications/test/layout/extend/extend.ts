/*
 * @Author: Just be free
 * @Date:   2021-03-03 15:29:19
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 15:04:08
 * @E-mail: justbefree@126.com
 */
import "./style/index.scss";
import { Component } from "vue-property-decorator";
import Application from "@/Application";
import { CreateElement } from "vue";
import Parent from "@/applications/test/parent";
@Component
export default class Extend extends Application {
  public appName = "test";
  test() {
    console.log("this is extend test");
  }
  render(h: CreateElement) {
    console.log("text", this.getProperLanguage("extend"));
    return h("div", {}, [
      h("h2", {}, "extend examples"),
      h("span", {}, []),
      h("button", { on: { click: this.test } }, "click me!"),
      h(Parent, {}, [])
    ]);
  }
}
