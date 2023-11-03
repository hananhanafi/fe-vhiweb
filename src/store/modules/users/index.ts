import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ResultState } from './types';
import { RootState } from '../../types';

export const state: ResultState = {
  data: {},
  error: false,
};

const namespaced: boolean = true;

export const users: Module<ResultState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
