/*
 * @Author: Just be free
 * @Date:   2021-03-09 16:32:28
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:57:55
 * @E-mail: justbefree@126.com
 */
import {
  Component,
  Watch,
  Ref,
  Prop,
  Emit,
  PropSync,
  Model,
  Provide,
  Inject,
  ProvideReactive,
  InjectReactive,
  Mixins
} from "vue-property-decorator";
// import { mapActions } from "vuex";
// import { MetaTitle } from "./types";
import { default as Application } from "@/Application";
@Component
export default class YnLayout extends Application {}
export {
  Component,
  Ref,
  Watch,
  Prop,
  Emit,
  PropSync,
  Model,
  Provide,
  Inject,
  ProvideReactive,
  InjectReactive,
  Mixins
};
