/*
 * @Author: Just be free
 * @Date:   2021-03-04 13:39:37
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 13:44:25
 * @E-mail: justbefree@126.com
 */

import Store from "@/Store";
const store = new Store("test");
store
  .register({ state: { number: 0 } })
  .action("increase")
  .getters("getNumber", result => {
    const { state } = result;
    return 100 * state.number;
  })
  .mutation(res => {
    const { payload, state } = res;
    if (payload.type === "add") {
      state.number = state.number + 2;
    } else if (payload.type === "mins") {
      state.number = state.number - 2;
    }
  });
export default store;
