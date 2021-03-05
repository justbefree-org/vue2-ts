/*
 * @Author: Just be free
 * @Date:   2021-03-04 13:58:04
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 13:58:25
 * @E-mail: justbefree@126.com
 */
export const API = {
  flight: "/flight-api"
};
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", false, /\.ts$/), [
  "./index.ts"
]).toArray();
