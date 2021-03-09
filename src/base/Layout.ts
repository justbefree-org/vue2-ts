/*
 * @Author: Just be free
 * @Date:   2021-03-09 16:32:28
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-03-09 16:41:46
 * @E-mail: justbefree@126.com
 */
import {
  Component,
  Watch,
  Ref,
  Prop,
  Emit,
  PropSync,
  Model,
  Provide,
  Inject,
  ProvideReactive,
  InjectReactive,
  Mixins
} from "vue-property-decorator";
import { mapActions } from "vuex";
import { MetaTitle } from "./types";
import { default as Application } from "@/Application";
// import { Route } from "vue-router/types";
@Component({
  methods: {
    ...mapActions("common", ["setHeaderTitle", "setBackButtonStatus"])
  }
})
export default class YnLayout extends Application {
  public DynamicHeaderTtitle = {
    en: "Title",
    "zh-CN": "标题"
  };
  setHeaderTitle!: (args: MetaTitle) => void;
  setBackButtonStatus!: (args: { status: boolean }) => void;
  // 设置页面title
  $setTitle(title: MetaTitle): void {
    this.DynamicHeaderTtitle = title;
  }
  // 不显示返回按钮
  $disableBackButton(): void {
    this.setBackButtonStatus({ status: true });
  }
  // 显示返回按钮
  $enableBackButton(): void {
    this.setBackButtonStatus({ status: false });
  }

  @Watch("DynamicHeaderTtitle")
  onChangeTitle(newValue: MetaTitle, oldValue: MetaTitle): void {
    this.setHeaderTitle(this.DynamicHeaderTtitle);
  }
}
export {
  Component,
  Ref,
  Watch,
  Prop,
  Emit,
  PropSync,
  Model,
  Provide,
  Inject,
  ProvideReactive,
  InjectReactive,
  Mixins
};
