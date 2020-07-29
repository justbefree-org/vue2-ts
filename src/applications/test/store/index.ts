/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:09:47
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-29 11:13:21
 * @E-mail: justbefree@126.com
 */
export const API = {
  getInfo: "/api"
};
import importAll from "@/core/utils/importAll";
export default importAll(require.context('./', false, /\.ts$/), ["./index.ts"]).toArray();
