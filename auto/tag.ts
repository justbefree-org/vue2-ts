/*
* @Author: Just be free
* @Date:   2020-08-17 15:53:22
* @Last Modified by:   Just be free
* @Last Modified time: 2020-08-20 18:08:09
* @E-mail: justbefree@126.com
*/

const args = process.argv.splice(2);
const path = require("path");
const fs = require("fs");

try {
  const { execFile } = require('child_process');
  fs.chmod(path.resolve('./auto/tag.sh'), 0o775, (err) => {
    if (err) throw err;
    console.log('The permissions for file "./auto/tag.sh" have been changed!');
  });
  const child = execFile(path.resolve('./auto/tag.sh'), ["-E", args[0]], { shell: true }, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
} catch (err) {
  console.log(err);
  console.log("If you are none Mac user you can try double click /auto/tag.sh to execute! ");
}