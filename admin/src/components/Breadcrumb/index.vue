<template>
  <div class="breadcrumb-wrap">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item 
          v-for="(item) in levelList" 
          :key="item.path"
          :to="{path: item.path}"
        >
          <!-- <span v-if="item.name=='home'" class="home">{{ item.meta.title }}</span> -->
          <span class="bread-title">{{item.meta.title}}</span>
        </el-breadcrumb-item>
      </transition-group>
      
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
      const firstRouter = matched[0]
      if (!this.isHome(firstRouter)) {
        matched = [{ path: '/home', meta: { title: '报告系统' } }].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      console.log(this.levelList)
    },
    isHome (router) {
      const name = router && router.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
    }
  }
}
</script>
<style lang='scss' scoped>
.breadcrumb-wrap{
  .el-breadcrumb{
    display: inline-block;
    // .home {
    //   color: #97a8be;
    //   cursor: text;
    // }
    .bread-title{
      color: $color-text-secondary;
    }
  }
}
</style>
