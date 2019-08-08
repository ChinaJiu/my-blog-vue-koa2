<template>
  <div class="navbar">
    <breadcrumb></breadcrumb>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  data () {
    return {
      
    }
  },
  activated () {

  }
}
</script>
<style lang='scss' scoped>
.navbar{
  width: 100%;
  height: 50px;
}
</style>
