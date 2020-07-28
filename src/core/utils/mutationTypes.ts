/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:00:47
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-27 16:01:13
 * @E-mail: justbefree@126.com
 */

export const getType = (nameSpace = "@root", type = ""): string => {
  return `${nameSpace}/${type}`;
};
