<template>
   <div class="nav"></div>
   <UsersData />
</template>

<script>
import UsersData from '../views/UsersData.vue';
import { mapActions, mapState } from 'vuex';
import { computed } from 'vue';
export default {
   created() {
      this.fetchUsers();
   },
   computed: {
      ...mapState('users', {
         users: (state) => state.users,
      }),
   },
   methods: {
      ...mapActions('users', ['fetchUsers']),
   },
   provide() {
      return {
         users: computed(() => this.users),
      };
   },
   components: { UsersData },
};
</script>

<style scoped>
.nav {
   display: flex;
   justify-content: center;
   width: 100%;
}

h1 a {
   color: #a9a9bc;
}

.router-link-active {
   color: #00a4e4;
   text-decoration: underline;
}

.nav h1 span {
   margin: 25px;
   color: #00a4e4;
}
</style>
