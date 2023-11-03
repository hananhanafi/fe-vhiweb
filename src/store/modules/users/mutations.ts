import { MutationTree } from 'vuex';
import { ResultState } from './types';

export const mutations: MutationTree<ResultState> = {
  profileLoaded(state, payload: any) {
    state.error = false;
    state.data = payload;
  },
  profileError(state) {
    state.error = true;
    state.data = {};
  },
};
