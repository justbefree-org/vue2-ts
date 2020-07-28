/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:46:34
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 15:09:20
 * @E-mail: justbefree@126.com
 */

import StoreManager from "@/core/StoreManager";
const store = new StoreManager();
store.register({ state: { number: 0 } })
.action("increase")
.mutation(res => {
  const { payload, state } = res;
  state.number = state.number + 1;
  console.log(payload, state);
});
export default store;
