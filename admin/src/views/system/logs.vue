<template>
  <div>
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <div>更新 Github 模板</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <div>更新 Github 模板</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <div>更新 Github 模板</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$el)
  },
  activated () {
  }
}
</script>
<style lang='scss' scoped>
</style>
