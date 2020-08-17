/*
 * @Author: Just be free
 * @Date:   2020-07-22 14:06:41
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-17 17:26:34
 * @E-mail: justbefree@126.com
 */
// declare let require: object;
/* eslint-disable */
const VALID_ENV = { production: "release", development: "dev", test: "test" };
export const getEnvironment = (): keyof typeof VALID_ENV => {
  return process.env.NODE_ENV;
};
export const getAppConfig = (configName: string): string => {
  return process.env[configName];
};
export const getConfig = (configName: string): string | object => {
  const env: keyof typeof VALID_ENV = getEnvironment();
  const config = require(`./${VALID_ENV[env]}.ts`);
  return config[configName] || "";
};
export const logInfo = (): void => {
  whoami();
  console.log(
    `%c ${getAppConfig("VUE_APP_DESCRIPTION")} %c`,
    "background: #EA4949; font-size: 30px; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#007aff ; padding: 1px; border-radius: 0 3px 3px 0; font-size: 20px;  color: #fff"
  );
  logVersion();
};
const logVersion = (): void => {
  console.log(
    `%c ${getConfig("version")} %c`,
    "background: green; font-size: 20px; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#007aff ; padding: 1px; border-radius: 0 3px 3px 0; font-size: 20px;  color: #fff"
  );
};
const whoami = (): void => {
  console.log(
    "%c 元年云出品 %c 商旅前端组 %c",
    "background:#35495e ; font-size: 20px; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#007aff ; padding: 1px; border-radius: 0 3px 3px 0; font-size: 20px;  color: #fff",
    "background:transparent"
  );
};
