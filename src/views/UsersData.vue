<template>
   <section class="accordion">
      <div v-if="filteredUsers" class="container">
         <user-search
            :filteredUsers="filteredUsers"
            @provide-query="setQuery"
         />
         <user-data
            @send-open-id="logId"
            v-for="user in filteredUsers"
            :user="user"
            :selectedUser="selectedUser"
            :key="user.name"
         />
      </div>
   </section>
</template>

<script>
import UserSearch from '../components/UserSearch.vue';
import UserData from '../components/UserData.vue';

export default {
   data() {
      return {
         query: '',
         selectedUser: '',
      };
   },
   inject: ['users'],
   methods: {
      setQuery(query) {
         this.query = query;
      },
      logId(id) {
         this.selectedUser = id;
      },
   },
   computed: {
      filteredUsers() {
         if (this.query === '') {
            return this.users;
         }
         return this.users.filter((user) =>
            user.name.toUpperCase().includes(this.query.toUpperCase()),
         );
      },
   },

   components: { UserData, UserSearch },
};
</script>
