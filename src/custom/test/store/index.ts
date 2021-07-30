/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:45:44
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 11:46:27
 * @E-mail: justbefree@126.com
 */

export const API = {
  extend: "/extend-api"
};
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", false, /\.ts$/), [
  "./index.ts"
]).toArray();
