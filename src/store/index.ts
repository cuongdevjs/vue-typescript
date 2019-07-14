import Vue from "vue";
import Vuex from "vuex";
import { generalApp } from "./modules/general";

Vue.use(Vuex);

export interface RootState {
  generalApp: generalApp;
}

export default new Vuex.Store<RootState>({});
