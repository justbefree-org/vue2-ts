/*
 * @Author: Just be free
 * @Date:   2020-08-17 11:45:07
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-27 16:41:21
 * @E-mail: justbefree@126.com
 */
/* eslint-disable */
import { config } from "@/custom/config/dev.ts";
module.exports = {
  version: "The current version is dev20200820180843 from tag branch, published by Just be free",
  interceptAddress: require("./interceptAddress"),
  ...config
};
