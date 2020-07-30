/*
 * @Author: Just be free
 * @Date:   2020-07-28 17:50:39
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 18:46:26
 * @E-mail: justbefree@126.com
 */
import { AnyObject } from "../types";
const importAll = (
  context: __WebpackModuleApi.RequireContext,
  excludes: Array<string> = []
) => {
  const map: AnyObject = {};
  const arr: Array<any> = [];
  for (const key of context.keys()) {
    const keyArr = String(key).split("/");
    keyArr.shift(); // DELETE "."
    if (excludes.length >= 0 && excludes.indexOf(String(key)) < 0) {
      map[keyArr.join(".").replace(/\.js|.ts$/g, "")] = context(key)["default"];
      arr.push(context(key)["default"]);
    }
  }
  return {
    toArray(): Array<any> {
      return arr;
    },
    toMap(): AnyObject {
      return map;
    }
  };
};

export default importAll;
