/*
 * @Author: Just be free
 * @Date:   2020-07-28 15:22:10
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 16:22:43
 * @E-mail: justbefree@126.com
 */
import axios from "axios";
import { AnyObject } from "../types";
import * as qs from "qs";
const formData = () => {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });
  return instance;
};

const json = () => {
  const instance = axios.create({
    headers: { "Content-Type": "application/json;charset=utf-8" }
  });
  return instance;
};

const post = (url: string, params: AnyObject): Promise<any> => {
  return formData()
    .post(url, qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const get = (url: string, params: AnyObject): Promise<any> => {
  return formData()
    .get(url + "?" + qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const postJSON = (url: string, params: AnyObject): Promise<any> => {
  return json()
    .post(url, params)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const methods = { post, get, postJSON };
export type HttpMethodTypes = "get" | "post" | "postJSON";
const Http = (args: keyof typeof methods) => {
  return methods[args];
}
export default Http;
