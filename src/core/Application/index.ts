/*
 * @Author: Just be free
 * @Date:   2020-07-22 13:36:56
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-11-12 13:55:34
 * @E-mail: justbefree@126.com
 */
declare let require: any;
import { StoreOptions } from "vuex/types";
import { default as StoreManager } from "../StoreManager";
import { default as I18n } from "../I18n";
import { ApplicationObject } from "./types";
import { AnyObject } from "../types";
import { RouteConfig } from "vue-router";
import { getEnvironment } from "@/config";
const debug = getEnvironment() !== "production";
import { loadApplication } from "../utils/load";
import { hasProperty, camelize } from "../utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { polyfill } from "../RouterManager/polyfill";
import VueI18n from "vue-i18n";

class Application {
  private _store: StoreOptions<any>;
  private _applications: Array<ApplicationObject>;
  private _routes: Array<RouteConfig>;
  private _messages: AnyObject;
  constructor() {
    this._applications = [];
    this._store = {};
    this._routes = [];
    this._messages = {};
    this.installVueRouter();
    this.installVuex();
    this.installI18n();
  }

  private processingModule(name: string, StoreArr: StoreManager[] = []): void {
    const store: Record<string, any> = {
      state: {},
      actions: {},
      mutations: {},
      getters: {},
      strict: debug
    };
    const modules: Record<string, any> = { ...this.getModules() };
    StoreArr.forEach(s => {
      if (!hasProperty(modules, name)) {
        modules[name] = {};
      }
      modules[name]["namespaced"] = true;
      modules[name]["state"] = { ...modules[name]["state"], ...s.getState() };
      modules[name]["mutations"] = {
        ...modules[name]["mutations"],
        ...s.getMutation()
      };
      modules[name]["actions"] = {
        ...modules[name]["actions"],
        ...s.getAction()
      };
      modules[name]["getters"] = {
        ...modules[name]["getters"],
        ...s.getGetters()
      };
    });
    console.log(`The ${name} module has been registered`);
    store["modules"] = modules;
    this._store = store;
  }
  private getStoreObject(): StoreOptions<any> {
    return this._store;
  }
  private installVueRouter(): void {
    Vue.use(VueRouter);
    polyfill(VueRouter);
  }
  private installVuex(): void {
    Vue.use(Vuex);
  }
  private installI18n(): void {
    Vue.use(VueI18n);
  }
  private addApplication(application: ApplicationObject): void {
    this._applications.push(application);
  }

  private setRoutes(routes: Array<RouteConfig>): void {
    this._routes = routes;
  }
  private getRoutes(): Array<RouteConfig> {
    return this._routes;
  }

  private processingMessages(appName: string, i18n: AnyObject): void {
    Object.keys(i18n).forEach(key => {
      const path: string = key.replace(/\.locale.*.lang/, "");
      const lang: string = key.replace(/\S+(locale.)(\S+)(.lang)$/, "$2");
      const pathArr = path.split(".");
      if (!hasProperty(this._messages, lang)) {
        this._messages[lang] = {};
      }
      if (!hasProperty(this._messages[lang], appName)) {
        this._messages[lang][appName] = {};
      }
      const componentName = pathArr[pathArr.length - 1];
      this._messages[lang][appName][camelize(componentName, true)] = i18n[key];
    });
  }

  private getMessages(): AnyObject {
    return this._messages;
  }

  public register(applicationName: string): Promise<any> {
    if (!applicationName) {
      return Promise.reject("Application name is required!");
    }
    return loadApplication(applicationName)
      .then(module => {
        let application = {} as ApplicationObject;
        if (module && Array.isArray(module)) {
          const parentApplication = module[0].default;
          const childApplication = module[1].default;
          const p = new I18n(parentApplication.i18n);
          const c = new I18n(childApplication.i18n);
          application = {
            i18n: p.merge(c),
            name: parentApplication.name,
            routes: [...parentApplication.routes, ...childApplication.routes]
          };
        } else {
          application = module.default;
        }
        this.registerStore(application.name);
        this.addApplication(application);
        this.processingMessages(application.name, application.i18n);
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
      const parentModuleStore: StoreManager[] = require(`@/applications/${moduleName}/store/index.ts`)[
        "default"
      ];
      const childModuleStore: StoreManager[] = require(`@/custom/${moduleName}/store/index.ts`)[
        "default"
      ];
      this.processingModule(name, [...parentModuleStore, ...childModuleStore]);
    } catch (err) {
      try {
        const moduleStore: StoreManager[] = require(`@/applications/${moduleName}/store/index.ts`)[
          "default"
        ];
        this.processingModule(name, moduleStore);
      } catch (err) {
        const moduleStore: StoreManager[] = require(`@/custom/${moduleName}/store/index.ts`)[
          "default"
        ];
        this.processingModule(name, moduleStore);
      }
    }
  }

  public getStore() {
    const store = this.getStoreObject();
    return new Vuex.Store({
      ...store
    });
  }

  private getModules() {
    return this._store.modules || {};
  }

  public getRouter() {
    const routes = this.getRoutes();
    return new VueRouter({ mode: "hash", routes });
  }

  public getI18n() {
    const messages = this.getMessages();
    return new VueI18n({
      locale: "zh-CN",
      messages,
      fallbackLocale: "zh-CN"
    });
  }
}

export default Application;
