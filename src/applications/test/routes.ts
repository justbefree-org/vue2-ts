/*
 * @Author: Just be free
 * @Date:   2020-07-22 15:37:07
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-03 15:31:30
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
  },
  {
    pathName: "extend",
    path: "/extend",
    name: "extend"
  }
]);
export default router.getRoutes();
