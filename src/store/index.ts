// import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth/index';
import { RootState } from './types';
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()],
});
