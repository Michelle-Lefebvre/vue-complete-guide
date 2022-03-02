<template>
  <button @click="confirmInput">Confirm</button>
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
  methods: {
    confirmInput() {
      // do something then navigate to another page
      this.$router.push('/teams');
      this.$router.back()
      this.$router.forward()
    },
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
