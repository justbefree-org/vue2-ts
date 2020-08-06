/*
 * @Author: Just be free
 * @Date:   2020-08-05 16:52:04
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-05 19:23:25
 * @E-mail: justbefree@126.com
 */

interface StringObject {
  [propName: string]: string;
}
export type BemConstructorContext =
  | {
      [propName: string]: StringObject;
    }
  | string;

export interface ConfigOptions {
  blockPrefix?: string;
  modifierSeparator?: string;
  elementSeparator?: string;
}

class BEM {
  static blockPrefix = "yui";
  static modifierSeparator = "--";
  static elementSeparator = "__";

  public static config(options: ConfigOptions): void {
    console.log("pass BEM config ", options);
    const {
      blockPrefix = "yui",
      modifierSeparator = "--",
      elementSeparator = "__"
    } = options;
    BEM.blockPrefix = blockPrefix;
    BEM.modifierSeparator = modifierSeparator;
    BEM.elementSeparator = elementSeparator;
  }
  public static parse(name: BemConstructorContext): string {
    if (typeof name === "string") {
      return name;
    } else {
      const key: string = Object.keys(name)[0];
      const value = name[key];
      if (typeof value === "string") {
        return `${key}${BEM.modifierSeparator}${value}`;
      } else {
        const attr = Object.keys(value)[0];
        return `${key}${BEM.modifierSeparator}${attr}${BEM.modifierSeparator}${value[attr]}`;
      }
    }
  }
  public static create(
    b: BemConstructorContext,
    e?: BemConstructorContext
  ): string {
    const block = BEM.parse(b);
    const element = e ? BEM.parse(e) : "";
    return element === ""
      ? `${BEM.blockPrefix}${block}`
      : `${BEM.blockPrefix}${block}${BEM.elementSeparator}${element}`;
  }
}

export default BEM;
export const createBem = (
  b: BemConstructorContext,
  e?: BemConstructorContext
) => {
  return BEM.create(b, e);
};
