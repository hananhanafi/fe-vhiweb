import { GetterTree } from 'vuex';
import { ResultState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<ResultState, RootState> = {
  isAuthenticated(state): string {
    return state.data.token
  }
};
