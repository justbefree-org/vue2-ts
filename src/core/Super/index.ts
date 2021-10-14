/*
 * @Author: Just be free
 * @Date:   2020-07-30 13:43:52
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-14 14:41:48
 * @E-mail: justbefree@126.com
 */

import { Vue, Component } from "vue-property-decorator";
import { AnyObject } from "../types";
interface GetProperLanguageFirstArg {
  appName: string;
  key: string;
}
// import { createBem, BemConstructorContext } from "../utils/bem";
// import { BemConstructorContext } from "awesome-bem-scss/types";
// import { createBem } from "awesome-bem-scss";

// Define a super class component
@Component
export default class Super extends Vue {
  public appName = "";
  getProperLanguage(
    key: string | GetProperLanguageFirstArg,
    inject: AnyObject = {}
  ) {
    let keyPath = "";
    if (typeof key === "string") {
      keyPath = `${this.appName}.${this.$options.name}.${key}`;
    } else {
      keyPath = `${key.appName}.${this.$options.name}.${key.key}`;
    }
    return this.$t(keyPath, inject) as string;
  }
  changeLanguage(lang: string): void {
    this.$i18n.locale = lang;
  }
  getCurrentLanguage(): string {
    return this.$i18n.locale || "zh-CN";
  }
  // bem(b: BemConstructorContext, e?: BemConstructorContext): string {
  //   return createBem(b, e);
  // }
}
