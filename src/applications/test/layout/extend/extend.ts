/*
 * @Author: Just be free
 * @Date:   2021-03-03 15:29:19
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:48:45
 * @E-mail: justbefree@126.com
 */
import "./style/index.scss";
import { Component, BaseLayout } from "@/base";
import { CreateElement } from "vue";
import ParentFun from "@/applications/test/parent";

export default ParentFun().then(res => {
  const Parent = res;
  @Component
  class Extend extends BaseLayout {
    public appName = "test";
    test() {
      console.log("this is extend test");
    }
    render(h: CreateElement) {
      console.log("text", this.getProperLanguage("extend"));
      return h("div", {}, [
        h("h2", {}, "applications extend examples"),
        h("span", {}, []),
        h("button", { on: { click: this.test } }, "click me!"),
        h(Parent, {}, [])
      ]);
    }
  }
  return Extend;
});
