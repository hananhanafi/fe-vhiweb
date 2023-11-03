
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ResultState } from './types';
import { RootState } from '../../types';
import UserAPI from '@services/User'


export const actions: ActionTree<ResultState, RootState> = {
  fetchData({ commit }): any {
    UserAPI.getUserList({})
    .then((response: any) => {
      const payload: any = response && response.data;
      commit('profileLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('profileError');
    });
  },
};
