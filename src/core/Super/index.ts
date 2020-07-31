/*
 * @Author: Just be free
 * @Date:   2020-07-30 13:43:52
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-31 13:27:07
 * @E-mail: justbefree@126.com
 */

import Vue from "vue";
import Component from "vue-class-component";
import { AnyObject } from "../types";

// Define a super class component
@Component
export default class Super extends Vue {
  public appName = "";
  getProperLanguage(key: string, inject: AnyObject = {}) {
    // console.log(this.$options.name, this.appName);
    const keyPath = `${this.appName}.${this.$options.name}.${key}`;
    // console.log(this.$te(`${keyPath}`));
    return this.$t(keyPath, inject);
  }
  changeLanguage(lang: string): void {
    this.$i18n.locale = lang;
  }
}
