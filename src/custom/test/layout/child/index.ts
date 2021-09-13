/*
 * @Author: Just be free
 * @Date:   2021-03-04 11:18:32
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-04 11:18:42
 * @E-mail: justbefree@126.com
 */

const Child = () => import(/* webpackChunkName: "overwriteChild" */ `./child`);
export default Child;
