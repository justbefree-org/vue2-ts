/*
 * @Author: Just be free
 * @Date:   2020-07-22 10:02:44
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-23 11:11:54
 * @E-mail: justbefree@126.com
 */
import Vue from "vue";
import { Component } from "../types";
import { PlatformConstructorParams } from "./types";
import { default as PluginManager } from "../PluginManager";
const pluginManager = new PluginManager();
class Platform {
  private _pluginManagerStack: Array<Promise<any> | boolean>;
  private _App: Component;
  private _id: string;
  constructor(args: PlatformConstructorParams) {
    this._pluginManagerStack = [];
    this._App = args.App;
    this._id = args.id;
  }
  private getPluginManagerStack() {
    return this._pluginManagerStack;
  }
  private registerPluginManager(
    pluginManager: Promise<any> | boolean
  ): Platform {
    this._pluginManagerStack.push(pluginManager);
    return this;
  }
  public install(pluginName: string): void {
    this.registerPluginManager(pluginManager.register(pluginName));
  }
  public startUp(): void {
    const pluginManagers = this.getPluginManagerStack();
    Promise.all(pluginManagers).then(res => {
      pluginManager.install();
      // const language = pluginManager.getLanguage("zh-CN");
      const router = pluginManager.getRouter();
      // const store = pluginManager.getStore();
      // const i18n = i18nInstance.setup(pluginManager, router, language);
      Vue.config.productionTip = false;
      /* eslint-disable no-new */
      new Vue({
        // store,
        router,
        // i18n,
        render: h => h(this._App)
      }).$mount(this._id);
    });
  }
}
export default Platform;
