<template>
  <div class="right-menu-wrap">
    <div class="remind"><i class="el-icon-bell"></i></div>
    <div class="message">
      <el-badge :value="100" :max="99" class="item">
        <i class="el-icon-message"></i>
      </el-badge>
    </div>
    <div class="set">
      <i class="el-icon-setting"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  activated () {
  }
}
</script>
<style lang="scss">
.el-badge__content.is-fixed{
  top: 5px !important;
  right: 20px !important;
}
</style>

<style lang='scss' scoped>
.right-menu-wrap{
  width: 100%;
  height: 30px;
  line-height: 30px;
  div{
    position: relative;
    display: inline-block;
    padding: 0 15px;
    font-size: 18px;
    
  }
}
</style>
