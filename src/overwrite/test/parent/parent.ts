/*
 * @Author: Just be free
 * @Date:   2021-03-03 16:06:37
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 10:31:29
 * @E-mail: justbefree@126.com
 */
import { Component, Prop } from "vue-property-decorator";
import SuperParent from "@/applications/test/parent/component";
import { CreateElement } from "vue";

@Component
export default class Parent extends SuperParent {
  public appName = "test";
  render(h: CreateElement) {
    return h("div", {}, `这个是子类继承的父类 - ${this.msg}`);
  }
}
