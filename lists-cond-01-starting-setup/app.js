const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      members: {
        name: 'Max',
        age: '34'
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    clearInput() {
      this.enteredGoalValue = '';
    }
  }
});

app.mount('#user-goals');
