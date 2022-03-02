<template>
  <button :type="type" :class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'btn']
}
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.btn {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.btn:hover,
.btn:active {
  background-color: #edd2ff;
}
</style>