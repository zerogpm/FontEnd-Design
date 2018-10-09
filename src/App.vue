<template>
  <div>
    <app-header-nav/>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import appHeaderNav from './components/HeaderNav'

export default {
  name: 'App',
  components: {
    appHeaderNav,
  }
}
</script>

<style lang="scss">
  .slide-enter-active {
    animation: slide-in 350ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slid-out 350ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
