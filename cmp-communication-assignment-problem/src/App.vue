<template>
  App Vue
  <br />
  <user-data></user-data>
  <br />
  <active-user></active-user>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { ActiveUser, UserData }
};
</script>

UserData
