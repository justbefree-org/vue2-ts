/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:46:34
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-20 17:12:31
 * @E-mail: justbefree@126.com
 */

import Store from "@/Store";
const store = new Store("test");
store
  .register({ state: { number: 0 } })
  .action("increase")
  .getters("getNumber", result => {
    console.log("getters getNumber", result);
    const { state } = result;
    return 10 * state.number;
  })
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
