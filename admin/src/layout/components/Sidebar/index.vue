<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="sidebar-scrollbar">
      <el-menu
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item></sidebar-item>
        <!-- <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'

export default {
  data () {
    return {

    }
  },
  components: {
    SidebarItem
  },
  activated () {
  }
}
</script>
<style lang='scss' scoped>

.sidebar{
  width: $sideBarWidth;
  height: 100%;

  .el-scrollbar{
    height: 100%;
  }
}
</style>
