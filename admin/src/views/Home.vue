<template>
  <div class="home">
    <button @click="getPdf({ box: '.home'})">下载</button>
    
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>
    <div><img alt="Vue logo" src="../assets/logo.png"></div>

    <el-table
      :data="tableData"
      border
      style="width: 180%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    1
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    2
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    3
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    4
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    data () {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    name: 'home',
    components: {
      HelloWorld
    }
}
</script>

<style lang="sass" scoped>

</style>
