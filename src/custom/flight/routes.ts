/*
 * @Author: Just be free
 * @Date:   2021-03-04 13:56:34
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 13:57:13
 * @E-mail: justbefree@126.com
 */
import { default as RouterManager } from "@/core/RouterManager";
const router = new RouterManager("flight/layout", "flight");
router.register([
  {
    pathName: "list",
    path: "/list",
    name: "list"
  }
]);
export default router.getRoutes();
