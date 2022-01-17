const app = Vue.createApp({
  data() {
    return {
      num: 0,
      counter: 0
    };
  },
  watch: {
    result(value) {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.counter === 37) {
        return '';
      } else if (this.counter > 37) {
        return 'Too much!';
      }
      return 'Not there yet';
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    }
  }
});
app.mount('#assignment');
