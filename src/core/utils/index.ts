/*
* @Author: Just be free
* @Date:   2020-07-28 13:40:56
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-28 13:42:33
* @E-mail: justbefree@126.com
*/

export const hasProperty = (obj: object, attr: string) => {
  return Object.prototype.hasOwnProperty.call(obj, attr);
}
