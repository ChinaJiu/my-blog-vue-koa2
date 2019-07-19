<template>
  <div id="app">
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './components/Header'
import VFooter from './components/Footer'

import VContent from './views/content/Content'

export default {
  name: 'app',
  components: {
    VHeader,
    VContent,
    VFooter
  }
}
</script>

<style lang="scss">
  @import './assets/css/init.css';
  #app{
    width: 100%;
  }
  body{
    background-color: $background-color-base;
  }
</style>
