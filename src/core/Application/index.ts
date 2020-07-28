/*
 * @Author: Just be free
 * @Date:   2020-07-22 13:36:56
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 14:07:17
 * @E-mail: justbefree@126.com
 */
declare let require: any;
import { StoreOptions, ModuleTree, Module } from "vuex/types";
import { default as StoreManager } from "../StoreManager";
import { ApplicationObject } from "./types";
import { Callback } from "../types";
// import { AsyncComponent } from "vue/types";
import { RouteConfig } from "vue-router";
import { getEnvironment } from "@/config";
const debug = getEnvironment() !== "production";
import { loadApplication } from "../utils/load";
import { hasProperty } from "../utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
class Application {
  private _store: StoreOptions<any>;
  // private _tempModules: ModuleTree<any>;
  private _applications: Array<ApplicationObject>;
  // private _components: Array<AsyncComponent>;
  // private _lazyLoadComponents: {};
  private _routes: Array<RouteConfig>;
  // private _i18n: {};
  // private callbackForEveryComponent: Callback;
  constructor() {
    this._applications = [];
    // this._components = [];
    // this._lazyLoadComponents = {};
    this._store = {};
    this._routes = [];
    // this.callbackForEveryComponent = function () {};
    this.installVueRouter();
    this.installVuex();
  }

  private processingModule(name: string, StoreArr: StoreManager[] = []): void {
    const store: Record<string, any> = {
      state: {},
      actions: {},
      mutations: {},
      getters: {},
      strict: debug
    };
    const modules: Record<string, any> = {};

    StoreArr.forEach(s => {
      if (!hasProperty(modules, name)) {
        modules[name] = {};
        modules[name]["namespaced"] = true;
        modules[name]["state"] = { ...modules["state"], ...s.getState() };
        modules[name]["mutations"] = {
          ...modules[name]["mutations"],
          ...s.getMutation()
        };
        modules[name]["actions"] = { ...modules["actions"], ...s.getAction() };
        // modules["getters"] = { ...modules["getters"], ...s.getGetter() };
        console.log(`The ${name} module has been registered`);
      }
    });
    store["modules"] = modules;
    this._store = store;
    console.log(store);
  }
  public getStoreObject(): StoreOptions<any> {
    return this._store;
  }
  private installVueRouter(): void {
    Vue.use(VueRouter);
  }
  private installVuex(): void {
    Vue.use(Vuex);
  }
  public addApplication(application: ApplicationObject): void {
    this._applications.push(application);
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

  public register(applicationName: string): Promise<any> | boolean {
    if (!applicationName) {
      return false;
    }
    return loadApplication(applicationName)
      .then(module => {
        const application = module.default;
        this.registerStore(application.name);
        // this.registerStore(plugin.name, plugin.global);
        this.addApplication(application);
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
        const routes = [...this.getRoutes(), ...application.routes];
        this.setRoutes(routes);
        return Promise.resolve(application);
      })
      .catch(err => {
        console.log("load plugin fail ", err);
        return Promise.reject(err);
      });
  }

  private registerStore(moduleName: string): void {
    const name: string = moduleName.toLocaleLowerCase();
    try {
      const moduleStore: StoreManager[] = require(`@/applications/${moduleName}/store/index.ts`)[
        "default"
      ];
      this.processingModule(name, moduleStore);
    } catch (err) {
      console.log(err);
    }
  }

  public getStore() {
    const store = this.getStoreObject();
    return new Vuex.Store({
      ...store
    });
  }

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

export default Application;
