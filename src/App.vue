<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  data () {
    return {
      
    }
  },
  mounted(){
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
}
</script>

<style>

body {
  background-color: #a7a0bb5c;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
