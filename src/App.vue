<template>
  <div id="app">
    <appHeaderNav/>
    <app-banner/>
  </div>
</template>

<script>
import appHeaderNav from './components/HeaderNav'
import appBanner from './components/Banner'

export default {
  name: 'app',
  components: {
    appHeaderNav,
    appBanner
  }
}
</script>

<style lang="scss">
</style>
