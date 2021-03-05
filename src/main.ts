import { logInfo } from "@/config";
logInfo();
import { default as Platform } from "@/core/Platform";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { overwriteApps } from "@/overwrite";
Vue.config.productionTip = false;

const p = new Platform({ id: "#app", App });
p.install("test");
p.install(overwriteApps);
p.startUp();
