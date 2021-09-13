/*
 * @Author: Just be free
 * @Date:   2021-03-03 16:06:37
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:47:06
 * @E-mail: justbefree@126.com
 */
import { Component, Prop } from "@/base";
import SuperParent from "@/applications/test/parent/component";
import { CreateElement } from "vue";

export default new Promise(resolve => {
  @Component
  class Parent extends SuperParent {
    public appName = "test";
    render(h: CreateElement) {
      return h("div", {}, `这个是子类继承的父类 - ${this.msg}`);
    }
  }
  resolve(Parent);
});
