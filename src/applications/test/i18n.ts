/*
 * @Author: Just be free
 * @Date:   2020-07-30 15:51:55
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-30 15:56:23
 * @E-mail: justbefree@126.com
 */

import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", true, /\.lang.ts$/), [
  "./index.ts"
]).toMap();
