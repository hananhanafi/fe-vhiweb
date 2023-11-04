import { MutationTree } from 'vuex';
import { ResultState } from './types';


export const mutations: MutationTree<ResultState> = {
  LOGIN_SUCCESS(state, payload: any) {
    state.error = false;
    state.data = {
      token: payload.token
    };
  },
  LOGIN_FAILED(state) {
    state.error = true;
    state.data = {
      token: ''
    };
  },
  LOGOUT(state) {
    state.error = false;
    state.data = {
      token: ''
    };
  },
};
