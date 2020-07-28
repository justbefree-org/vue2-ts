/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:06:11
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-27 18:14:55
 * @E-mail: justbefree@126.com
 */

export interface APIobject {
  [propName: string]: string;
}
export interface State {
  [propName: string]: any;
}

export interface ActionArguments {
  actionName: string;
  async?: boolean;
  method?: string;
}
