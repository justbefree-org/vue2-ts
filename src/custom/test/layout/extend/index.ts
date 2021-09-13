/*
 * @Author: Just be free
 * @Date:   2021-03-04 10:17:44
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 10:18:12
 * @E-mail: justbefree@126.com
 */

export default () =>
  import(/* webpackChunkName: "overwriteExtend" */ "./extend").then(res => {
    return res.default;
  });
