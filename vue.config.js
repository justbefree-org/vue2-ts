/*
 * @Author: Just be free
 * @Date:   2020-07-29 10:45:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-08-06 15:47:56
 * @E-mail: justbefree@126.com
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "node_modules/awesome-bem-scss/src/bem.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://yesno.wtf",
        changeOrigin: true
      }
    }
  }
};
