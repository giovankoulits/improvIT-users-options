<template>
   <section id="user__details">
      <div class="container">
         <h1 @click="() => this.$router.go(-1)">⬅️Go Back to Users</h1>
         <h2>{{ user.name }}</h2>
         <h3>📞{{ user.phone }}</h3>
         <h3>📩{{ user.website }}</h3>
         <h3>👜{{ user.company.name }}</h3>
         <h3>📮{{ user.email }}</h3>
         <h3>👤{{ user.username }}</h3>
      </div>
   </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
   props: ['id'],
   computed: {
      ...mapState('user', {
         user: (state) => state.user,
      }),
   },
};
</script>

<style scoped>
#user__details {
   width: 100%;
   display: flex;
   justify-content: center;
   padding-top: 60px;
}
h2 {
   color: #00a4e4;
}

h1:hover {
   cursor: pointer;
   color: #00a4e4;
}
</style>
