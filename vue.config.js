/*
* @Author: Just be free
* @Date:   2020-07-29 10:45:08
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-29 18:49:53
* @E-mail: justbefree@126.com
*/

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "https://yesno.wtf",
        changeOrigin: true
      }
    }
  }
};
