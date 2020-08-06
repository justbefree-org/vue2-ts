/*
 * @Author: Just be free
 * @Date:   2020-08-06 15:55:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-06 15:57:17
 * @E-mail: justbefree@126.com
 */

import Vue from "vue";
import Component from "vue-class-component";
// import { createBem, BemConstructorContext } from "../utils/bem";
import { BemConstructorContext } from "awesome-bem-scss/types";
import { createBem } from "awesome-bem-scss";
import Super from "@/core/Super";

// Define a Application class component
@Component
export default class Application extends Super {
  bem(b: BemConstructorContext, e?: BemConstructorContext): string {
    return createBem(b, e);
  }
}
