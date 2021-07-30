/*
 * @Author: Just be free
 * @Date:   2021-03-03 16:02:00
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-07-30 16:19:27
 * @E-mail: justbefree@126.com
 */

export const r = (applicationName: string, componentName: string) => {
  try {
    return require(`@/custom/${applicationName}/${componentName}/index.ts`)[
      "default"
    ];
  } catch (err) {
    return require(`@/applications/${applicationName}/${componentName}/component/index.ts`)[
      "default"
    ];
  }
};
