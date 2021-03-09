/*
 * @Author: Just be free
 * @Date:   2021-03-04 13:59:00
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:45:40
 * @E-mail: justbefree@126.com
 */
import { Component, BaseLayout } from "@/base";
import { CreateElement } from "vue";
import { mapActions, mapState } from "vuex";
@Component({
  methods: {
    ...mapActions("flight", ["getFlightList"])
  },
  computed: {
    ...mapState("flight", ["title", "flightList"])
  }
})
export default class List extends BaseLayout {
  public appName = "flight";
  getFlightList!: () => void;
  title!: string;
  flightList!: Array<number>;
  change() {
    this.getFlightList();
  }
  render(h: CreateElement) {
    return h("div", {}, [
      h("h2", {}, "flight list page"),
      h("p", {}, this.title),
      h("button", { on: { click: this.change } }, "click to get flight list"),
      h("div", {}, [`i18n - ${this.getProperLanguage("flight")}`]),
      h("div", {}, [
        Array.apply(null, [...this.flightList]).map((list: any) => {
          return h("div", {}, list);
        })
      ])
    ]);
  }
}
