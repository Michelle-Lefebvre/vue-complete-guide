const app = Vue.createApp({
  data() {
    return {
      userInput: 'user1',
      userInput2: 'user2',
      userColor: '',
      paragraphVisible: true
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.paragraphVisible,
        hidden: !this.paragraphVisible
      };
    }
  },
  methods: {
    seeParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    }
  }
});
app.mount('#assignment');
