import usersApi from '@/services/UserService.js';
import { SET_USERS } from '../mutation-types.js';

const namespaced = true;

const state = () => ({
   users: [],
});

const mutations = {
   [SET_USERS](state, users) {
      state.users = users;
   },
};

const actions = {
   async fetchUsers({ commit }) {
      try {
         const users = await usersApi.get('/users');
         const userData = users.data;
         commit('SET_USERS', userData);
      } catch (err) {
         console.log(err);
      }
   },
};

export default { namespaced, state, mutations, actions };
