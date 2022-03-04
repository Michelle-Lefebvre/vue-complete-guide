<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <!-- can't use v-if on base-modal because transition won't work change to :open-->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnterTrans"
      @enter="enterTrans"
      @after-enter="afterEnterTrans"
      @before-leave="beforeLeaveTrans"
      @leave="leaveTrans"
      @after-leave="afterLeaveTrans"
      @enter-cancelled="enterCancelledTrans"
      @leave-cancelled="leaveCancelledTrans"
    >
      <p
        v-if="paraIsVisible"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos inventore soluta natus quia minus facilis, harum nemo iste quod. Molestiae enim nulla nesciunt ipsa rerum nobis dolorum, tempora repellat tenetur.</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <div class="container">
    <users-list></users-list>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';
export default {
  components: {
    UsersList
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    animateBlock() {
      this.animatedBlock = true
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    beforeEnterTrans(el) {
      console.log('Before enter Transition')
      console.log(el)
      el.style.opacity = 0
    },
    enterTrans(el, done) {
      console.log('Enter Transition')
      console.log(el)
      let round = 1
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.03
        round++
        if (round > 100) {
          clearInterval(this.enterInterval)
          done()
        }
      }, 20)
    },
    afterEnterTrans(el) {
      console.log('After entering Transition')
      console.log(el)
    },
    beforeLeaveTrans(el) {
      console.log('Before leaving Transition')
      console.log(el)
      el.style.opacity = 1
    },
    leaveTrans(el, done) {
      let round = 1
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20)
    },
    afterLeaveTrans(el) {
      console.log('Before leaving Transition')
      console.log(el)
    },
    // @enter-cancelled & @leave-cancelled will stop animation flickering when leaving transition
    enterCancelledTrans() {
      clearInterval(this.enterInterval)
    },
    leaveCancelledTrans() {
      clearInterval(this.leaveInterval)
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  transform: translateX(-150px);
  animation: slide-fade 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>