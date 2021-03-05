/*
 * @Author: Just be free
 * @Date:   2021-03-03 17:39:15
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 10:31:58
 * @E-mail: justbefree@126.com
 */
import { Component, Prop } from "vue-property-decorator";
import Application from "@/Application";
import { CreateElement } from "vue";

@Component
export default class Parent extends Application {
  @Prop() public msg!: string;
  public appName = "test";
  render(h: CreateElement) {
    return h("div", {}, "这个是父类");
  }
}
