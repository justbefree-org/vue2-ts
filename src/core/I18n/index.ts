/*
* @Author: Just be free
* @Date:   2021-11-03 17:37:05
* @Last Modified by:   Just be free
* @Last Modified time: 2021-11-03 18:01:57
* @E-mail: justbefree@126.com
*/
import { AnyObject } from "../types";
import { hasProperty, isObject } from "../utils";
class I18n {
  private _messges: AnyObject = {};
  constructor(messages: AnyObject = {}) {
    if (isObject(messages)) {
      this._messges = messages;
    }
  }
  protected getMessages(): AnyObject {
    return this._messges;
  }
  protected setMessages(key: string, value: AnyObject): void {
    this._messges[key] = value;
  }
  public merge(i18n: I18n): AnyObject {
    const currentMessages = this.getMessages();
    const targetMessages = i18n.getMessages();
    Object.keys(targetMessages).map((key: string) => {
      const extendMessages = targetMessages[key];
      let newAppMessages: AnyObject = {};
      if (hasProperty(currentMessages, key)) {
        newAppMessages = { ...currentMessages[key], ...extendMessages };
        this.setMessages(key, newAppMessages);
      } else {
        this.setMessages(key, targetMessages[key]);
      }
    });
    return this.getMessages();
  }
}
export default I18n;