import axios from "axios";
import { getConfig } from "@/config";
import { AnyObject } from "../types";
class CancelApi {
  cancelTokenArr: any[];
  constructor() {
    this.cancelTokenArr = [];
  }
  clearToCancelApi() {
    this.cancelTokenArr.forEach((item: any) => {
      item("路由跳转取消请求");
    });
  }
  pushToCancelApi(cancelToken: any) {
    this.cancelTokenArr.push(cancelToken);
  }
}
export const cancelApi = new CancelApi();
export const interceptor = (instance: any) => {
  instance.interceptors.request.use(
    (config: any) => {
      const { url } = config;
      const interceptAddress = getConfig("interceptAddress") as AnyObject;
      if (interceptAddress.timeoutApi.includes(url)) {
        config.timeout = 60 * 1000;
      }
      if (interceptAddress.cancelApi.some((aUrl: string) => url.includes(aUrl))) {
        config.cancelToken = new axios.CancelToken(cancel => {
          cancelApi.pushToCancelApi(cancel);
        });
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
};
