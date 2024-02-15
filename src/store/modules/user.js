import { SET_USER } from '../mutation-types.js';
import usersApi from '@/services/UserService.js';

const namespaced = true;
const state = () => {
   return {
      user: {},
   };
};
const mutations = {
   [SET_USER]: (state, payload) => {
      state.user = { ...payload };
   },
};
const actions = {
   async fetchUser({ commit }, id) {
      try {
         const user = await usersApi.get(`/users/${id}`);
         const userData = user.data;
         commit('SET_USER', userData);
      } catch (err) {
         console.log(err);
      }
   },
};

export default {
   namespaced,
   state,
   mutations,
   actions,
};
