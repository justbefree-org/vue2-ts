/*
 * @Author: Just be free
 * @Date:   2021-03-03 15:29:28
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-03 15:29:42
 * @E-mail: justbefree@126.com
 */

export default () =>
  import(/* webpackChunkName: "applicationExtend" */ "./extend").then(res => {
    return res.default;
  });
