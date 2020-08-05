/*
 * @Author: Just be free
 * @Date:   2020-07-28 13:40:56
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-05 14:33:11
 * @E-mail: justbefree@126.com
 */

export const hasProperty = (obj: object, attr: string) => {
  return Object.prototype.hasOwnProperty.call(obj, attr);
};
export const capitalize = (str: string): string => {
  return str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
};
const toUpperCaseFirstLetter = (str: string): string => {
  return str.replace(/\b(\w)/, (_, c) => (c ? c.toUpperCase() : ""));
};
export const camelize = (str: string, upperCaseFirstLetter = false): string => {
  const cameString = str.replace(/-(\w)/g, (_, c) =>
    c ? c.toUpperCase() : ""
  );
  return upperCaseFirstLetter ? toUpperCaseFirstLetter(cameString) : cameString;
};
export const isObject = (value: any): boolean => {
  const type = typeof value;
  return value != null && type === "object";
};
export const isString = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object String]";
};
