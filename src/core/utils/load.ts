/*
 * @Author: Just be free
 * @Date:   2020-07-22 09:59:15
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-10-25 18:05:35
 * @E-mail: justbefree@126.com
 */

export const loadApplication = (path: string) => {
  let hascustom = false; // 是不是继承
  let newAdded = false; // 是不是新增的application
  try {
    require(`@/custom/${path}/index.ts`);
    require(`@/applications/${path}/index.ts`);
    hascustom = true;
  } catch (err) {
    try {
      require(`@/custom/${path}/index.ts`);
      newAdded = true;
    } catch (err) {
      newAdded = false;
    }
  }
  if (hascustom) {
    return Promise.all([
      import(`@/applications/${path}/index.ts`),
      import(`@/custom/${path}/index.ts`)
    ]);
  } else if (newAdded) {
    return import(`@/custom/${path}/index.ts`);
  } else {
    return import(`@/applications/${path}/index.ts`);
  }
};

export const loadComponent = (path: string, componentName?: string) => {
  const routerTypeComponent = path.indexOf("layout") > -1;
  let cn = componentName;
  // const com = () => import( webpackChunkName: "index" `@/applications/common/${path}/index.js`)
  // 使用[request]来告诉webpack，这里的值是根据后面传入的字符串来决定，本例中就是变量path的值
  if (!componentName) {
    const index = path.lastIndexOf("/");
    cn = path.substring(index + 1);
  }
  let hascustom = false;
  try {
    require(`@/custom/${path}/index.ts`);
    // console.log(require(`@/custom/${path}/index.ts`));
    hascustom = true;
  } catch (err) {
    // console.log(require(`@/applications/${path}/index.ts`));
    hascustom = false;
  }
  if (hascustom) {
    return require(`@/custom/${path}/index.ts`).default;
  } else {
    if (routerTypeComponent) {
      return require(`@/applications/${path}/index.ts`).default;
    } else {
      return require(`@/applications/${path}/${cn}.vue`).default;
    }
  }
};
