/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:09:47
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 17:25:06
 * @E-mail: justbefree@126.com
 */
import StoreManager from "@/core/StoreManager";
export const API = {};
const stores: Array<StoreManager> = [];
const requireComponent = require.context(
  "@/applications/test/store",
  false,
  /\.ts$/
);
requireComponent.keys().forEach(fileName => {
  if (fileName !== "./index.ts" && fileName !== "./default.ts") {
    const componentConfig = requireComponent(fileName)["default"];
    stores.push(componentConfig);
  }
});
export default stores;
