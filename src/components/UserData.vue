<template>
   <div class="accordion__item">
      <div class="accordion__title-box" @click="toggleOpen">
         <h3>{{ user.name }}</h3>
         <div
            class="accordion__toggle-sign"
            :class="[open && selectedUser === user.id ? 'show' : null]"
         >
            <span></span>
            <span></span>
         </div>
      </div>
      <div
         class="accordion__content"
         :class="[open && selectedUser === user.id ? 'show' : null]"
      >
         <img src="../assets/images/user.jpg" alt="user" />

         <div
            class="accordion__info"
            :class="[open && selectedUser === user.id ? 'show' : null]"
         >
            <h4>{{ user.name }}</h4>
            <p>{{ user.address.street }}, {{ user.address.suite }}</p>
            <p>{{ user.address.zipcode }}, {{ user.address.city }}</p>
            <h3>
               <div v-if="user">
                  <button
                     class="user-btn"
                     type="button"
                     @click="gotToUserDetails"
                  >
                     See more
                  </button>
               </div>
            </h3>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex';
import '../assets/styles/user-data.css';

export default {
   props: ['user', 'selectedUser'],

   data() {
      return {
         open: false,
      };
   },
   methods: {
      toggleOpen() {
         this.$emit('send-open-id', this.user.id);
         this.open = !this.open;
      },
      ...mapActions('user', ['fetchUser']),
      async gotToUserDetails() {
         await this.fetchUser(this.user.id);
         this.$router.push({
            name: 'user-info',
            params: { id: this.user.id },
         });
      },
   },
};
</script>
