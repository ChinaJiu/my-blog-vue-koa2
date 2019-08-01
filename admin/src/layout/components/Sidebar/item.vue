<template>
  <div>
    <i :class="'el-icon-'+icon" ></i>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
