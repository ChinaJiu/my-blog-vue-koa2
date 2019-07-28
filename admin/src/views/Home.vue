<template>
  <div class="home">
    <button @click="getPdf({ box: '.home'})">下载</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data () {
        return {

        }
    },
    name: 'home',
    components: {
      HelloWorld
    }
}
</script>

<style lang="sass" scoped>

</style>
