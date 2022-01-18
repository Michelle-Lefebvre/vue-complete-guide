const app = Vue.createApp({
  data() {
    return {
      showlist: false,
      enteredTask: '',
      tasks: []
    };
  },
  computed: {
    btnLabel() {
      return this.showlist ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleTaskList() {
      this.showlist = !this.showlist;
    }
  }
});
app.mount('#assignment');
