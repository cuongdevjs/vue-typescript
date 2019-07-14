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
}

@Module({ namespaced: true, store, name: "generalInfo" })
class General extends VuexModule implements generalApp {
  public logged: boolean = false;
  public infoUser: object = {};
  public flagLoading: number = 0;

  public get getLogged() {
    return this.logged;
  }

  public get getInfoUser() {
    return this.infoUser;
  }

  public get getFlagLoading() {
    return this.flagLoading;
  }

  @Mutation
  private startLoading() {
    this.flagLoading++;
  }

  private stopLoading() {
    this.flagLoading--;
  }

  private setInfoUser(info: object) {
    this.infoUser = info;
  }

  private setLogged(stateLogged: boolean) {
    this.logged = stateLogged;
  }

  @Action
  public SET_INFO_USER(info: string) {
    this.context.commit("setInfoUser", info);
  }

  public SET_LOGGED(stateLogged: boolean) {
    this.context.commit("setLogged", stateLogged);
  }

  public SET_START_LOADING() {
    this.context.commit("startLoading");
  }

  public SET_STOP_LOADING() {
    this.context.commit("stopLoading");
  }
}

export const generalInfo = getModule(General);
