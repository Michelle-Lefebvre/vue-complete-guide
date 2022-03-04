<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Marcus', 'Michael', 'Mathew', 'Mitch'],
    }
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value
      this.users.unshift(enteredUserName)
      this.$refs.userNameInput.value = ''
    },

    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  border: 2px solid #ccc;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  transition: all 1s ease-in;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>