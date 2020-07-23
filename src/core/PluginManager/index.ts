/*
 * @Author: Just be free
 * @Date:   2020-07-22 13:36:56
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-23 10:52:53
 * @E-mail: justbefree@126.com
 */
declare let require: any;
// import { StoreOptions, ModuleTree, Module } from "vuex/types";
import { PluginObject } from "./types";
import { Callback } from "../types";
// import { AsyncComponent } from "vue/types";
import { RouteConfig } from "vue-router";
// import { getEnvironment } from "@/config";
// const debug = getEnvironment() !== "production";
import { loadPlugin } from "../utils/load";
import Vue from "vue";
// import Vuex from "vuex";
import VueRouter from "vue-router";
class PluginManager {
  // private _store: StoreOptions<any>;
  // private _tempModules: ModuleTree<any>;
  private _plugins: Array<PluginObject>;
  // private _components: Array<AsyncComponent>;
  // private _lazyLoadComponents: {};
  private _routes: Array<RouteConfig>;
  // private _i18n: {};
  // private callbackForEveryComponent: Callback;
  constructor() {
    this._plugins = [];
    // this._components = [];
    // this._lazyLoadComponents = {};
    this._routes = [];
    // this.callbackForEveryComponent = function () {};
    this.installVueRouter();
    // this.installVuex();
  }
  // private registerModule(
  //   name: string,
  //   module: StoreOptions<any>,
  //   isGlobal = false
  // ): void {
  //   if (isGlobal) {
  //     this._store = module;
  //     // 这行代码必须加
  //     // 极少数情况下所有子节点先加载完毕，最后加载根节点后导致根节点上并未挂载子节点
  //     const modules: ModuleTree<any> = {
  //       ...this._store["modules"],
  //       ...this._tempModules
  //     };
  //     // this._store["modules"] = {
  //     //   ...this._store["modules"],
  //     //   ...this._tempModules
  //     // };
  //     this._store["modules"] = modules;
  //     console.log("The root store has been registered");
  //   } else {
  //     // 由于每个模块是异步加载，所以防止根模块节点不存在，需要临时存储子模块，然后待根模块加载进来再进行子模块挂载
  //     if (!this._store["modules"]) {
  //       this._tempModules[name] = module;
  //       console.log(`The ${name} module has been registered`);
  //     } else {
  //       this._store["modules"] = {
  //         ...this._store["modules"],
  //         ...this._tempModules
  //       };
  //       this._store["modules"][name] = module;
  //       // 用完之后记得清除掉
  //       this._tempModules = {};
  //       console.log(`The ${name} module has been registered`);
  //     }
  //   }
  // }
  // private processingModule(
  //   name: string,
  //   singleStoreArr = [],
  //   isGlobal: boolean = false
  // ): void {
  //   const store = {
  //     namespaced: true,
  //     state: {},
  //     actions: {},
  //     mutations: {},
  //     getters: {}
  //   };
  //   if (isGlobal) {
  //     delete store["namespaced"];
  //     store["modules"] = {};
  //     store["strict"] = debug;
  //   }
  //   singleStoreArr.forEach(singleStore => {
  //     store["state"] = { ...store["state"], ...singleStore.getState() };
  //     store["mutations"] = {
  //       ...store["mutations"],
  //       ...singleStore.getMutation()
  //     };
  //     store["actions"] = { ...store["actions"], ...singleStore.getAction() };
  //     store["getters"] = { ...store["getters"], ...singleStore.getGetter() };
  //   });
  //   this.registerModule(name, store, isGlobal);
  // }
  // public getStoreObject(): StoreOptions<any> {
  //   return this._store;
  // }
  private installVueRouter(): void {
    Vue.use(VueRouter);
  }
  // private installVuex(): void {
  //   Vue.use(Vuex);
  // }
  public addPlugin(plugin: PluginObject): void {
    this._plugins.push(plugin);
  }
  // public setComponents(conmponents: Array<AsyncComponent>): void {
  //   this._components = conmponents;
  // }
  // public getComponents(): Array<AsyncComponent> {
  //   return this._components;
  // }
  // private getLazyLoadComponents() {
  //   return this._lazyLoadComponents;
  // }
  // private setLazyLoadComponents(lazyLoadCoponents): void {
  //   this._lazyLoadComponents = lazyLoadCoponents;
  // }
  private setRoutes(routes: Array<RouteConfig>): void {
    this._routes = routes;
  }
  private getRoutes(): Array<RouteConfig> {
    return this._routes;
  }
  // private setI18n(
  //   pluginName: string,
  //   i18n = {},
  //   languages: Array<string> = []
  // ) {
  //   const componentName = Object.keys(i18n);
  //   languages.forEach(lang => {
  //     if (!this._i18n[lang]) {
  //       this._i18n[lang] = { language: {} };
  //     }
  //     if (!this._i18n[lang]["language"][pluginName]) {
  //       this._i18n[lang]["language"][pluginName] = {};
  //     }
  //     componentName.forEach(name => {
  //       if (!this._i18n[lang]["language"][pluginName][name]) {
  //         this._i18n[lang]["language"][pluginName][name] = i18n[name][lang];
  //       }
  //     });
  //   });
  // }
  // private getI18n() {
  //   return this._i18n;
  // }
  // public getLanguage(lang: string) {
  //   return this._i18n[lang];
  // }

  public register(pluginName: string): Promise<any> | boolean {
    if (!pluginName) {
      return false;
    }
    return loadPlugin(pluginName)
      .then(module => {
        const plugin = module.default;
        // this.registerStore(plugin.name, plugin.global);
        this.addPlugin(plugin);
        // this.setI18n(plugin.name, plugin.i18n, plugin.languages);
        // if (
        //   Object.prototype.toString.call(plugin.components) === "[object Array]"
        // ) {
        //   const components = [...plugin.components, ...this.getComponents()];
        //   this.setComponents(components);
        // } else {
        // const lazyLoadCoponents = {
        //   ...plugin.components,
        //   ...this.getLazyLoadComponents()
        // };
        // this.setLazyLoadComponents(lazyLoadCoponents);
        // }
        const routes = [...this.getRoutes(), ...plugin.routes];
        this.setRoutes(routes);
        return Promise.resolve(plugin);
      })
      .catch(err => {
        console.log("load plugin fail ", err);
        return Promise.reject(err);
      });
  }

  // private registerStore(moduleName: string, isGlobal: boolean = false) {
  //   const name: string = moduleName.toLocaleLowerCase();
  //   try {
  //     const pluginStore = require(`@/store-v2/${name}/index.js`)["default"];
  //     this.processingModule(name, pluginStore, isGlobal);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // public getStore() {
  //   const store = this.getStoreObject();
  //   return new Vuex.Store({
  //     ...store
  //   });
  // }

  public getRouter() {
    const routes = this.getRoutes();
    return new VueRouter({ mode: "history", routes });
  }

  // private every(callback: Callback): void {
  //   if (callback && typeof callback === "function") {
  //     this.callbackForEveryComponent = callback;
  //   }
  // }

  public install(): void {
    // 同步加载所有注册组件
    // this.getComponents().map(component => {
    //   this.callbackForEveryComponent(component);
    //   Vue.use(component);
    // });
    // 异步按需加载组件
    // Object.keys(this.getLazyLoadComponents()).forEach(key => {
    //   this.callbackForEveryComponent({
    //     key,
    //     component: this.getLazyLoadComponents(key)
    //   });
    //   Vue.component(key, this.getLazyLoadComponents(key));
    // });
  }
}

export default PluginManager;
