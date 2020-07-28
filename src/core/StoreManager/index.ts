/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:02:38
 * @Last Modified by:   Just be free
 * @Last Modified time: 2020-07-28 15:02:26
 * @E-mail: justbefree@126.com
 */
import { APIobject, State } from "./types";
import { AnyObject, Callback } from "../types";
import { getType } from "../utils/mutationTypes";
import { ActionContext } from "vuex/types";
class StoreManager {
  private _moduleName: string;
  private _actionName: string;
  private _API: APIobject;
  private _states: AnyObject;
  private _action: AnyObject;
  private _mutation: AnyObject;
  private _getters: AnyObject;
  constructor() {
    this._moduleName = "";
    this._actionName = "";
    this._API = {};
    this._states = {};
    this._action = {};
    this._mutation = {};
    this._getters = {};
  }
  private setState(states: AnyObject): void {
    this._states = { ...this._states, ...states };
  }
  public getState(): AnyObject {
    return this._states;
  }
  public action(actionName: string, async = false, method = "get" ): StoreManager {
    console.log(method, async);
    this._actionName = actionName;
    this._action[actionName] = (
      context: ActionContext<State, any>,
      args: AnyObject
    ) => {
      if (async) {
        // const { params } = args;
        // return http[method](this.API[actionName], params).then(res => {
        //   commit(getType(this.moduleName, actionName), { ...args, res });
        // });
      } else {
        context.commit(getType(this._moduleName, actionName), { ...args });
      }
    };
    return this;
  }
  public getAction() {
    return this._action;
  }
  public mutation(callback: Callback): StoreManager {
    this._mutation = {
      [getType(this._moduleName, this._actionName)](
        state: State,
        payload: AnyObject
      ) {
        callback({ state, payload });
      }
    };
    return this;
  }

  public getMutation() {
    return this._mutation;
  }

  public register(args: AnyObject): StoreManager {
    const state = args.state;
    this.setState(state);
    return this;
  }
}

export default StoreManager;
