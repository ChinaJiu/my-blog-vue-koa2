<template>
  <div class="item-wrapper" v-if="!item.hidden">
    <!-- {{item.hidden}}1 -->
    <template v-if="!item.children">
      <!-- <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)"> -->
        <el-menu-item :index="item.path">
          <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
        </el-menu-item>
      <!-- </app-link> -->
    </template>

    <template v-else>
      <el-submenu ref="subMenu" :index="item.path" popper-append-to-body>
        <template slot="title">
          <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title" />
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-submenu>
    </template>
  </div>
</template>
<script>
import path from 'path'
import Item from './item'

export default {
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    item: {
      type: Object
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: 'nn'
    }
  },
  data () {
    this.onlyOneChild = null
    return {

    }
  },
  mounted () {
  },
  methods: {
    resolvePath (routePath) {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath
      }
      console.log(this.basePath, routePath, path.resolve(this.basePath, routePath))
      // console.log('path.resolve---', path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
