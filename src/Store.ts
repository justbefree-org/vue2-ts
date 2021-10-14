/*
 * @Author: Just be free
 * @Date:   2020-08-20 17:04:29
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-14 12:24:02
 * @E-mail: justbefree@126.com
 */
import { AnyObject } from "./core/types";
import StoreManager from "@/core/StoreManager";
class Store extends StoreManager {
  constructor(moduleName: string, axiosConfig?: AnyObject) {
    super(moduleName, axiosConfig);
  }
  protected httpSuccessCallback(args: AnyObject | string): void {
    console.log("继承后的http success callback", args);
  }
  protected httpFailCallback(args: any): void {
    console.log("继承后的http fail callback", args);
  }
  protected httpParamsModifier(args: AnyObject): AnyObject {
    return args;
  }
  protected setRequestHeaders(uri: string, params: AnyObject): AnyObject {
    console.log("地址是", uri, "参数是", params);
    return {
      headers: {
        userId: "3075",
        name: "test"
      }
    };
  }
}
export default Store;
