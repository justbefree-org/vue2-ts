/*
 * @Author: Just be free
 * @Date:   2021-03-04 14:01:15
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-05 10:05:08
 * @E-mail: justbefree@126.com
 */
import Store from "@/Store";
const store = new Store("flight");
store
  .register({ state: { title: "机票模块", flightList: [] } })
  .action("getFlightList")
  .mutation(res => {
    const { state } = res;
    state.flightList = [
      "flight 1",
      "flight 2",
      "flight 3",
      "flight 4",
      "flight 5",
      "flight 6"
    ];
  });
export default store;
