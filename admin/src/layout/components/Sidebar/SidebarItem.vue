<template>
  <div class="item-wrapper" v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item)">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="item.path">
          <!-- <i :class="'el-icon-'+onlyOneChild.meta.icon"></i>
          <span slot="title">{{onlyOneChild.meta.title}}</span> -->
          <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
    
    <template v-else>
      <el-submenu ref="subMenu" :index="item.path">
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
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: {
    Item,
    AppLink
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
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '' }
        return true
      }
    },
    resolvePath (routePath) {
      if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath
      }
      // console.log(this.basePath, routePath, path.resolve(this.basePath, routePath))
      // console.log('path.resolve---', path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
