/*
 * @Author: Just be free
 * @Date:   2020-07-22 15:40:12
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-23 10:38:24
 * @E-mail: justbefree@126.com
 */
import { loadComponent } from "../utils/load";
import { RouteConfig } from "vue-router";
import { Component } from "../types";
class RouterManager {
  private baseDir: string;
  private routes: Array<RouteConfig>;
  // private routeConfig: Array<RouteConfig>;
  constructor(baseDir: string) {
    this.baseDir = baseDir;
    this.routes = [];
    // this.routeConfig = [];
  }
  private getBaseDir(): string {
    return this.baseDir;
  }
  private pushRoutes(route: RouteConfig) {
    this.routes.push(route);
  }
  public getRoutes(): Array<RouteConfig> {
    return this.routes;
  }
  register(routes: Array<any> = []) {
    routes.forEach(route => {
      if (route.pathName) {
        const path = `${this.getBaseDir()}/${route.pathName}`;
        route.component = loadComponent(path);
        delete route.pathName;
        if (route.children && route.children.length > 0) {
          this.register(route.children);
        }
      }
      // 注册一级路由，以及404页面
      if (route.path.startsWith("/") || route.path === "*") {
        this.pushRoutes(route);
      }
    });
  }
}
export default RouterManager;
