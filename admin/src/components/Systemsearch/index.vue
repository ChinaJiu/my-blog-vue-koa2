<template>
  <div class="search-wrap">
    {{title}}:
    <div class="search-input"><el-input style="width=100px" v-model="input" placeholder="请输入内容"></el-input></div>
    <span class="search-btn"><el-button type="primary">查询</el-button></span>
    <span class="reset-btn"><el-button type="info">重置</el-button></span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      input: ''
    }
  },
  activated () {
  }
}
</script>
<style lang='scss' scoped>
.search-wrap{
  width: 100%;
  // height: 100%;
  // line-height: 50px;

  .search-input{
    margin-left: 10px;
    display: inline-block;
    width: 200px;
  }
  .search-btn{
    margin-left: 30px;
  }
  .reset-btn{
    margin-left: 30px;
  }
}
</style>
