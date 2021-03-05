/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:16:54
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 11:16:59
 * @E-mail: justbefree@126.com
 */
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", true, /\.lang.ts$/), [
  "./index.ts"
]).toMap();
