<template>
  <div class="navbar">
    <!-- 面包屑 -->
    <div class="breadcrumb-page">
      <breadcrumb class="breadcrumb-container"></breadcrumb>
    </div>

    <!-- 右面菜单 -->
    <div class="right-menu-page">
      <right-menu></right-menu>
    </div>

  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import RightMenu from './RightMenu'

export default {
  components: {
    Breadcrumb,
    RightMenu
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  },
  activated () {

  }
}
</script>
<style lang='scss' scoped>
.navbar{
  padding: 0 10px;
  // width: calc(100% - 20px);
  height: 50px;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  
  .breadcrumb-page{
    height: 100%;
    line-height: 55px;
    float: left;
  }
  .right-menu-page{
    float: right;
    position: relative;
    padding-right: 30px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
