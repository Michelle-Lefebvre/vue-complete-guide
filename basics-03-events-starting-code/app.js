const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    minus() {
      this.counter = this.counter - 1;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    setName(event, lastName) {
      this.name = name + event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
