/*
 * @Author: Just be free
 * @Date:   2020-07-30 13:43:52
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-30 15:17:47
 * @E-mail: justbefree@126.com
 */

import Vue from "vue";
import Component from "vue-class-component";
import { AnyObject } from "../types";

// Define a super class component
@Component
export default class Super extends Vue {
  superValue = "Hello";
  public appName = "";
  getProperLanage(key: string, inject: AnyObject = {}) {
    console.log(this.$t, this.$options.name, this.appName);
    return this.$t(`${this.appName}.${this.$options.name}.${key}`, inject);
  }
  mounted() {
    this.getProperLanage("haha", { name: "lizhuang" });
  }
}
