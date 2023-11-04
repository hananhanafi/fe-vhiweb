
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ResultState } from './types';
import { RootState } from '../../types';
import AuthService from '@/services/AuthService'
import { useToast } from 'vue-toastification'
const toast = useToast()

export const actions: ActionTree<ResultState, RootState> = {
  async login({ commit }, payload): Promise<any> {
    await AuthService.login(payload)
    .then((response: any) => {
      const result: any = response && response.data;
      commit('LOGIN_SUCCESS', result);
      toast.success("Login success");
    }, (error) => {
      console.log(error);
      commit('LOGIN_FAILED');
      toast.error("Login failed, please check your email and password");
    });
  },
  async logout({ commit }): Promise<any> {
    commit('LOGOUT');
    toast.success("Logout success");
  },
};
