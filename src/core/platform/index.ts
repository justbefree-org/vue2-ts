/*
 * @Author: Just be free
 * @Date:   2020-07-22 10:02:44
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-17 10:39:14
 * @E-mail: justbefree@126.com
 */
import Vue from "vue";
import { Component } from "../types";
import { PlatformConstructorParams } from "./types";
import { default as Application } from "../Application";
const app = new Application();
class Platform {
  private _appStack: Array<Promise<any>>;
  private _App: Component;
  private _id: string;
  constructor(args: PlatformConstructorParams) {
    this._appStack = [];
    this._App = args.App;
    this._id = args.id;
  }
  private getAppStack() {
    return this._appStack;
  }
  private registerApplication(app: Promise<any>): Platform {
    this._appStack.push(app);
    return this;
  }
  public install(appName: string): void {
    this.registerApplication(app.register(appName));
  }
  public startUp(): void {
    const apps = this.getAppStack();
    Promise.all(apps).then(res => {
      console.log(`Platform started ${res}`);
      const router = app.getRouter();
      const store = app.getStore();
      const i18n = app.getI18n();
      Vue.config.productionTip = false;
      /* eslint-disable no-new */
      new Vue({
        store,
        router,
        i18n,
        render: h => h(this._App)
      }).$mount(this._id);
    });
  }
}
export default Platform;
