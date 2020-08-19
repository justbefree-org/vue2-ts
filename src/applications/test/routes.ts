/*
 * @Author: Just be free
 * @Date:   2020-07-22 15:37:07
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-19 14:00:42
 * @E-mail: justbefree@126.com
 */

import { default as RouterManager } from "@/core/RouterManager";
const router = new RouterManager("test/layout", "test");
router.register([
  {
    pathName: "about",
    path: "/about",
    name: "about"
  },
  {
    pathName: "home",
    path: "/home",
    name: "home"
  }
]);
export default router.getRoutes();
