import { createRouter, createWebHistory } from 'vue-router';
import UserInfo from '../views/UserInfo.vue';
import UsersDashBoard from '../components/UsersDashBoard.vue';
const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'UsersDashBoard',
         component: UsersDashBoard,
      },
      /*  {
         path: '/',
         name: 'users-data',
         component: UsersData,
      }, */
      {
         path: '/user-info/:id',
         name: 'user-info',
         component: UserInfo,
         props: true,
      },
   ],
});

export default router;
