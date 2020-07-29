/*
* @Author: Just be free
* @Date:   2020-07-29 10:45:08
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-29 10:58:37
* @E-mail: justbefree@126.com
*/

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "https://2b6197d6-12ce-4517-9ba0-6539a047eebc.mock.pstmn.io",
        changeOrigin: true
      }
    }
  }
};
