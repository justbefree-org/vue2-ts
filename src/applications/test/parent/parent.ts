/*
 * @Author: Just be free
 * @Date:   2021-03-08 11:20:37
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:49:57
 * @E-mail: justbefree@126.com
 */
import { Component, Prop, BaseComponent } from "@/base";
import { CreateElement } from "vue";

@Component
export default class Parent extends BaseComponent {
  @Prop() public msg!: string;
  public appName = "test";
  render(h: CreateElement) {
    return h("div", {}, "这个是父类");
  }
}
