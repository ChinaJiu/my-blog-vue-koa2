<template>
  <div class="navbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item 
        v-for="item in breadcrumb" 
        :key="item.id"
        :to="{path: item.path}"
      >
      {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumb: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/',
          name: '活动管理'
        }
      ]
    }
  },
  activated () {

  }
}
</script>
<style lang='scss' scoped>
.navbar{
  width: 100%;
}
</style>
