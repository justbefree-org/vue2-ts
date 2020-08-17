/*
 * @Author: Just be free
 * @Date:   2020-07-22 14:06:41
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-17 14:48:54
 * @E-mail: justbefree@126.com
 */
// declare let require: object;
/* eslint-disable */

export const getEnvironment = (): string => {
  return process.env.NODE_ENV;
};
export const getAppConfig = (configName: string): string => {
  return process.env[configName];
};
export const getConfig = (configName: string): string | object => {
  const env: string = getEnvironment();
  const config = require(`./${env}.ts`);
  return config[configName];
};
export const logInfo = (): void => {
  console.log(
    `%c ${getAppConfig("VUE_APP_DESCRIPTION")} %c`,
    "background: #EA4949; font-size: 30px; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#007aff ; padding: 1px; border-radius: 0 3px 3px 0; font-size: 20px;  color: #fff"
  );
};
