<template>
  <div class="app-main">
    app-main
  </div>
</template>

<script>
import { getArticle } from '@/api/article'

export default {
  data () {
    return {
    }
  },
  async mounted () {
    let article = await getArticle({ param: { a: 2 } })
    console.log(article)
  },
  activated () {
    
  }
}
</script>

<style>
.app-main{
  width: 100%;
}
</style>
