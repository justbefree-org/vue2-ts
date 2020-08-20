/*
 * @Author: Just be free
 * @Date:   2020-08-20 17:04:29
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-20 17:30:49
 * @E-mail: justbefree@126.com
 */
import { AnyObject } from "./core/types";
import StoreManager from "@/core/StoreManager";
class Store extends StoreManager {
  constructor(moduleName: string) {
    super(moduleName);
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
}
export default Store;
