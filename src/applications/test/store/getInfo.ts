/*
 * @Author: Just be free
 * @Date:   2020-07-29 11:03:33
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-14 12:27:34
 * @E-mail: justbefree@126.com
 */

import Store from "@/Store";
const store = new Store("test");
store
  .register({ state: {} })
  .action("getInfo", true)
  .mutation(res => {
    const { payload, state } = res;
    console.log(payload, state);
  });
export default store;
