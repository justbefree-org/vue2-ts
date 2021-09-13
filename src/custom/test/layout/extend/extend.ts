/*
 * @Author: Just be free
 * @Date:   2021-03-04 10:17:52
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:46:43
 * @E-mail: justbefree@126.com
 */
// import "./style/index.scss";
import { Component } from "@/base";
import { CreateElement } from "vue";
import SuperExtendFun from "@/applications/test/layout/extend";
import Parent from "@/applications/test/parent";
export default SuperExtendFun().then(res => {
  const SuperExtend = res;
  @Component
  class Extend extends SuperExtend {
    test() {
      console.log("this is extend test, child class rewrite the method");
    }
    render(h: CreateElement) {
      return h("div", {}, [
        h("h2", {}, "this is child class , extend examples"),
        h("button", { on: { click: this.test } }, "click me!"),
        h(
          "div",
          {},
          `这个是重写后的i18n词条 - ${this.getProperLanguage("extend")}`
        ),
        h(Parent, { props: { msg: "this is message from child class" } }, [])
      ]);
    }
  }
  return Extend;
});
