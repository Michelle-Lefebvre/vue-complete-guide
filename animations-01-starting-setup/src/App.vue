<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {

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

/* .route-enter-from {
} */
.route-enter-active {
  transition: opacity 0.3s ease-out;
}
/* .route-enter-to {
} */

.route-leave-active {
  transition: opacity 0.3s ease-in;
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