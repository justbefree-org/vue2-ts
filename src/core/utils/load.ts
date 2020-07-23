/*
 * @Author: Just be free
 * @Date:   2020-07-22 09:59:15
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-22 15:36:08
 * @E-mail: justbefree@126.com
 */

export const loadPlugin = (path: string) => {
  return import(`@/plugins/${path}/index.ts`);
};

export const loadComponent = (path: string) => {
  // const com = () => import( webpackChunkName: "index" `@/plugins/common/${path}/index.js`)
  // 使用[request]来告诉webpack，这里的值是根据后面传入的字符串来决定，本例中就是变量path的值
  return () =>
    import(/* webpackChunkName: "[request]" */ `@/plugins/${path}/index.ts`);
};

export const loadI18n = (path: string) => {
  let i18n = {};
  try {
    i18n = {
      "zh-CN": require(`@/plugins/${path}/locale/zh-CN.ts`)["default"],
      en: require(`@/plugins/${path}/locale/en.ts`)["default"]
    };
  } catch (err) {
    i18n = {
      "zh-CN": {},
      en: {}
    };
  }
  return i18n;
};
