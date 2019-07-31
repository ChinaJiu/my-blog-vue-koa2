<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="sidebar-scrollbar">
      <el-menu
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item ></sidebar-item>
        <!-- <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
    {{permission_routes}}
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['permission_routes'])
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
