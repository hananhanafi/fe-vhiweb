import { GetterTree } from 'vuex';
import { ResultState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<ResultState, RootState> = {
  // fullName(state): string {
  //   const { user } = state;
  //   const firstName = (user && user.firstName) || '';
  //   const lastName = (user && user.lastName) || '';
  //   return `${firstName} ${lastName}`;
  // },
};
