<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>

export default {
  props: ['title'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
}
</style>
