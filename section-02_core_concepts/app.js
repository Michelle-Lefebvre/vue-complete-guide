const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish entire course.',
      courseGoalB: 'Get that Certificate!',
      courseGoalC:
        '<h2 style="color:orange;">Master vue and building amazing apps!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});
app.mount('#user-goal');
