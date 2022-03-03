<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],

  data() {
    return {
      changesSaved: false,
    }
  },

  methods: {
    confirmInput() {
      // do something then navigate to another page
      this.$router.push('/teams');
      this.$router.back()
      this.$router.forward()
    },
    saveChanges() {
      this.changesSaved = true
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log(to, from)
    next()
  },

  beforeRouteLeave(to, from, next) {
    console.log(to, from)
    if (this.changesSaved) {
      next()
    } else {
      const userWantsToLeave = confirm('Are you sure you want to leave? You have unsaved changes!')
      next(userWantsToLeave)  // this is the same as next() it won't save the changes
    }
  },

  unmounted() {
    // to run code whenever this component is left
    // this doesn't give us a change to stop the  navigation to another page
    console.log('unmounted')
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
button {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
