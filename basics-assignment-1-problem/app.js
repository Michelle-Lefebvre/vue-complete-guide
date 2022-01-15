const app = Vue.createApp({
  data() {
    return {
      name: 'Michelle',
      age: 40,
      url: 'https://images.unsplash.com/photo-1620503292890-c597f62cce8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    };
  },
  methods: {
    favoriteNumber() {
      const favNumber = Math.random() * 1;
      return favNumber.toFixed(0);
    }
  }
});
app.mount('#assignment');
