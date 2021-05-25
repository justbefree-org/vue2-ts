/*
 * @Author: Just be free
 * @Date:   2020-08-06 15:55:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-05-25 17:43:09
 * @E-mail: justbefree@126.com
 */

import { Component } from "vue-property-decorator";
// import BEM, { createBem, BemParserContext } from "@/core/utils/bem-class";
import { BemParserContext } from "awesome-scss-bem/types";
import BEM, { createBem } from "awesome-scss-bem";
import Super from "@/core/Super";
BEM.config({
  blockPrefix: ""
});
// Define a Application class component
@Component
export default class Application extends Super {
  bem(b: BemParserContext, e?: BemParserContext): string {
    return createBem(b, e);
  }
}
