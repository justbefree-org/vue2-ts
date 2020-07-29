/*
* @Author: Just be free
* @Date:   2020-07-29 11:03:33
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-29 12:00:21
* @E-mail: justbefree@126.com
*/

import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: {} })
  .action("getInfo", true)
  .mutation(res => {
    const { payload, state } = res;
    console.log(payload, state);
  });
export default store;
