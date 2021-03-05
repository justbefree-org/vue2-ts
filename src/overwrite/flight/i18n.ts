/*
 * @Author: Just be free
 * @Date:   2021-03-04 13:56:17
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 13:56:26
 * @E-mail: justbefree@126.com
 */
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", true, /\.lang.ts$/), [
  "./index.ts"
]).toMap();
