import { logInfo } from "@/config";
logInfo();
import { default as Platform } from "@/core/Platform";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { customApps } from "@/custom";
Vue.config.productionTip = false;

const p = new Platform({ id: "#app", App });
p.install("test");
p.install(customApps);
p.startUp();
