/*
 * @Author: Just be free
 * @Date:   2020-07-29 10:45:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-11-12 18:06:44
 * @E-mail: justbefree@126.com
 */
// MaxListenersExceededWarning:Possible EventEmitter memory leak detected.
require('events').EventEmitter.defaultMaxListeners = 0;
const publicPath = process.env.NODE_ENV === 'production' ? "/" : "/";
module.exports = {
  publicPath,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "node_modules/awesome-scss-bem/src/bem.scss";@import "@/theme/global.scss";`
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
