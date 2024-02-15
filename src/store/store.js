import { createStore } from 'vuex';
import user from './modules/user.js';
import users from './modules/users.js';
const store = createStore({
   modules: {
      users,
      user,
   },
});

export default store;
