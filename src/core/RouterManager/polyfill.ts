import VueRouter, { RawLocation } from "vue-router/types";
type ErrorHandler = (err: Error) => void;
export const polyfill = (vr: typeof VueRouter) => {
  // NavigationDuplicated
  // https://github.com/vuejs/vue-router/issues/2881
  const originalPush = vr.prototype.push;
  vr.prototype.push = function push(
    location: RawLocation,
    onResolve?: Function,
    onReject?: ErrorHandler
  ) {
    if (onResolve || onReject) {
      return originalPush.call(this, location, onResolve, onReject);
    }
    return (originalPush.call(this, location) as any).catch(
      (err: Error) => err
    );
  };
  const originalReplace = vr.prototype.replace;
  vr.prototype.replace = function replace(
    location: RawLocation,
    onResolve?: Function,
    onReject?: ErrorHandler
  ) {
    if (onResolve || onReject) {
      return originalReplace.call(this, location, onResolve, onReject);
    }
    return (originalReplace.call(this, location) as any).catch(
      (err: Error) => err
    );
  };
}