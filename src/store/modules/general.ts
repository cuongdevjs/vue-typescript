import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface generalApp {
  logged: boolean;
  infoUser: object;
  flagLoading: number;
  isCollapse: boolean;
  listBreadscrumb: Array<object>;
}

@Module({ dynamic: true, store, name: "generalInfo" })
class General extends VuexModule implements generalApp {
  public logged = false;
  public infoUser = {};
  public flagLoading = 0;
  public isCollapse = false;
  public listBreadscrumb = [{}];

  @Mutation
  private startLoading() {
    this.flagLoading++;
  }
  @Mutation
  private stopLoading() {
    this.flagLoading--;
  }
  @Mutation
  private setInfoUser(info: object) {
    this.infoUser = info;
  }
  @Mutation
  private setLogged(stateLogged: boolean) {
    this.logged = stateLogged;
  }
  @Mutation
  private setCollapse() {
    this.isCollapse = !this.isCollapse;
  }
  @Mutation
  private setListBreadscrumb(breadscrumb: Array<object>) {
    this.listBreadscrumb = breadscrumb;
  }

  @Action
  public SET_INFO_USER(info: string) {
    this.context.commit("setInfoUser", info);
  }
  @Action
  public SET_LOGGED(stateLogged: boolean) {
    this.context.commit("setLogged", stateLogged);
  }
  @Action
  public SET_START_LOADING() {
    this.context.commit("startLoading");
  }
  @Action
  public SET_STOP_LOADING() {
    this.context.commit("stopLoading");
  }
  @Action
  public SET_COLLAPSE() {
    this.context.commit("setCollapse");
  }
  @Action
  public SET_BREADSCRUMB(breadscrumb: Array<object>) {
    this.context.commit("setListBreadscrumb", breadscrumb);
  }
}

export const generalInfo = getModule(General);
