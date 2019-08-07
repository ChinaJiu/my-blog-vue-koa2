<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="sidebar-scrollbar">
      <el-menu
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    SidebarItem
  },
  data () {
    return {
    }
  },
  created () {
    
  },
  mounted () {
    
  },
  computed: {
    ...mapGetters(['permission_routes'])
  }
}
</script>
<style lang='scss'>
.el-menu{
  border-right: none;
}
</style>

<style lang='scss' scoped>

.sidebar{
  width: $sideBarWidth;
  height: 100%;
  border-right: solid 1px #e6e6e6;
  .el-scrollbar{
    height: 100%;
  }
}
</style>
