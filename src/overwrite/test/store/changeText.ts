/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:47:19
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 11:50:01
 * @E-mail: justbefree@126.com
 */

import Store from "@/Store";
const store = new Store("test");
store
  .register({ state: { extendStore: "this is default extend store message" } })
  .action("changeText")
  .mutation(res => {
    const { state } = res;
    state.extendStore = "store也可以继承了~~这个是继承后的信息";
  });
export default store;
