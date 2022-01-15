const app = Vue.createApp({
  data() {
    return {
      msg: 'Awesome!',
      userTyped: '',
      userTyped2: ''
    };
  },
  methods: {
    msgAlert() {
      this.msg = alert(this.msg);
    },
    confirmInput(e) {
      this.userTyped = e.target.value;
    },
    confirmInput2(e) {
      this.userTyped2 = e.target.value;
    }
  }
});
app.mount('#assignment');
