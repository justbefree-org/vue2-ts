/*
 * @Author: Just be free
 * @Date:   2020-07-27 16:02:38
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-07-30 17:12:10
 * @E-mail: justbefree@126.com
 */
import { APIobject, State } from "./types";
import { AnyObject, Callback } from "../types";
import { getType } from "../utils/mutationTypes";
import Http, { HttpMethodTypes } from "../utils/http";
import { hasProperty } from "../utils";
import { ActionContext } from "vuex/types";
class StoreManager {
  private _moduleName: string;
  private _actionName: string;
  private _API: APIobject;
  private _states: AnyObject;
  private _action: AnyObject;
  private _mutation: AnyObject;
  private _getters: AnyObject;
  constructor(moduleName: string) {
    this._moduleName = moduleName;
    this._actionName = "";
    this._API = {};
    this._states = {};
    this._action = {};
    this._mutation = {};
    this._getters = {};
    this.setApi();
  }
  private setApi(): void {
    try {
      this._API = {
        ...require(`@/custom/${this._moduleName}/store`)["API"],
        ...require(`@/applications/${this._moduleName}/store`)["API"]
      };
    } catch (err) {
      try {
        this._API = require(`@/applications/${this._moduleName}/store`)["API"];
      } catch (err) {
        this._API = require(`@/custom/${this._moduleName}/store`)["API"];
      }
    }
  }
  private setState(states: AnyObject): void {
    this._states = { ...this._states, ...states };
  }
  public getState(): AnyObject {
    return this._states;
  }
  public hasMutation(actionName: string): boolean {
    return hasProperty(this._mutation, getType(this._moduleName, actionName));
  }
  protected httpSuccessCallback(args: AnyObject | string): void {
    console.log("http success callback", args);
  }
  protected httpFailCallback(args: any): void {
    console.log("http fail callback", args);
  }
  protected httpParamsModifier(args: AnyObject): AnyObject {
    console.log("http params modifer", args);
    return args;
  }
  public action(
    actionName: string,
    async = false,
    method: HttpMethodTypes = "get"
  ): StoreManager {
    this._actionName = actionName;
    this._action[actionName] = (
      context: ActionContext<State, any>,
      args: AnyObject
    ) => {
      if (async) {
        const { params } = args;
        return Http(method)(
          this._API[actionName],
          this.httpParamsModifier(params)
        )
          .then(res => {
            if (this.hasMutation(actionName)) {
              context.commit(getType(this._moduleName, actionName), {
                ...args,
                res
              });
            }
            this.httpSuccessCallback(res);
            return Promise.resolve(res);
          })
          .catch(err => {
            this.httpFailCallback(err);
            return Promise.reject(err);
          });
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

  public getters(name: string, callback: Callback): StoreManager {
    this._getters[name] = (
      state: State,
      getters: any,
      rootState: State,
      rootGetters: any
    ) => {
      return callback({ state, getters, rootState, rootGetters });
    };
    return this;
  }
  public getGetters() {
    return this._getters;
  }

  public register(args: AnyObject): StoreManager {
    const state = args.state;
    this.setState(state);
    return this;
  }
}

export default StoreManager;
