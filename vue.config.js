/*
 * @Author: Just be free
 * @Date:   2020-07-29 10:45:08
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-28 13:39:19
 * @E-mail: justbefree@126.com
 */
const publicPath = process.env.NODE_ENV === 'production' ? "/vue2-ts/" : "/";
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
