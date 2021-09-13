/*
 * @Author: Just be free
 * @Date:   2021-03-03 15:24:09
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-03 18:08:01
 * @E-mail: justbefree@126.com
 */
// import { r } from "@/lib/import";
// const Parent = r("test", "parent");
export default () =>
  import(/* webpackChunkName: "applicationParent" */ "./parent").then(res => {
    return res.default;
  });
