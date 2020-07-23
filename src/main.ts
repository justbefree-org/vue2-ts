import { default as Platform } from "@/core/Platform";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

Vue.config.productionTip = false;

const p = new Platform({ id: "#app", App });
p.install("test");
p.startUp();
console.log(p);
