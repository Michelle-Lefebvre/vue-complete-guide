<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <br />
  <user-data @set-data="setUserData"></user-data>
</template>

<script>

export default {

  data() {
    return {
      user: {
        name: 'Michelle',
        age: 34
      }
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age // +converts to type: number
      }
    }
  }
};
</script>
<style>
html {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 15px;
  border: 1px solid#ccc;
  padding: 1rem;
}
</style>
