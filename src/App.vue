<template>
  <div>
    <app-header-nav/>
    <router-view></router-view>
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

</style>
