import "./hooks";
import { logInfo } from "@/config";
logInfo();
import { default as Platform } from "@/core/Platform";
import App from "./App.vue";
import "./registerServiceWorker";
import { customApps } from "@/custom";
import { Route, NavigationGuardNext } from "vue-router/types/router";

const p = new Platform({ id: "#app", App });
p.registerRouterHooks("beforeEach", (from: Route, to: Route, next: NavigationGuardNext) => {
  console.log(from, to);
  next();
});
p.install("test");
p.install(customApps);
p.startUp();
