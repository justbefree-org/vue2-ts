/*
 * @Author: Just be free
 * @Date:   2020-08-04 18:40:28
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-05 15:32:32
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
const parse = (name: BemConstructorContext): string => {
  if (typeof name === "string") {
    return name;
  } else {
    const key: string = Object.keys(name)[0];
    const value = name[key];
    if (typeof value === "string") {
      return `${key}--${value}`;
    } else {
      const attr = Object.keys(value)[0];
      return `${key}--${attr}--${value[attr]}`;
    }
  }
};
export const createBem = (
  b: BemConstructorContext,
  e?: BemConstructorContext
): string => {
  const block = parse(b);
  const element = e ? parse(e) : "";
  return element === "" ? block : `${block}__${element}`;
};

// bem("block"); => .block {}
// bem({ block: "green" }) => .block--green {}
// bem("block", "input") => .block__input {}
// bem("block", { input: "active" }) => block__input--active
// bem({ block: "disabled" }, { input: "active" }) => block--disabled__input--active
// bem({ "block": { [type]: "is-show" } }) => block--[type]--is-show
