<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item 
        v-for="(item) in levelList" 
        :key="item.path"
        :to="{path: item.path}"
      >
      {{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route (route) {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList)
    }
  }
}
</script>
<style lang='scss' scoped>
.el-breadcrumb{
  display: inline-block;
}
</style>
