// import Vue from 'vue';
import Vuex from 'vuex';
import { users } from './modules/users/index';
import { RootState } from './types';

// Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    users,
  },
  mutations: {

  },
  actions: {

  },
});
