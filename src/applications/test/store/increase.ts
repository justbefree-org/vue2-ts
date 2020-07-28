/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:46:34
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 17:36:06
 * @E-mail: justbefree@126.com
 */

import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: { number: 0 } })
  .action("increase")
  .mutation(res => {
    const { payload, state } = res;
    if (payload.type === "add") {
      state.number = state.number + 1;
    } else if (payload.type === "mins") {
      state.number = state.number - 1;
    }
    console.log(res);
  });
export default store;
