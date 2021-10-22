/*
 * @Author: Just be free
 * @Date:   2021-03-03 15:24:09
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-22 15:41:14
 * @E-mail: justbefree@126.com
 */
// import { r } from "@/lib/import";
// const Parent = r("test", "parent");
import { loadComponent } from "@/core/utils/load";
import Parent from "./parent.vue";
console.log(Parent);
const ppp = loadComponent("test/parent");
console.log("loadComponent = ", ppp);
export default ppp;
