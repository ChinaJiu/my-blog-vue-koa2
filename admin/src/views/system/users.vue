<template>
  <div class="user-wrap">
    <!-- 查询 -->
    <div class="search-page">
      <search title="用户名 / 姓名"></search>
    </div>
    <!-- 新增用户 -->
    <div class="add-user-btn"><el-button type="primary">新增用户</el-button></div>

    <!-- table -->
    <div class="table-page">
      <el-table
        :data="tableData"
        :border="true"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="100%">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100%">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          min-width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
     <div class="pagination-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    
  </div>
</template>
<script>
import Search from '@/components/Systemsearch'
export default {
  data () {
    return {
      currentPage3: 5,
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
  components: {
    Search
  },
  activated () {
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang='scss' scoped>
.user-wrap{
  width: 100%;
  .search-page{
    display: inline-block;
    padding: 10px 10px 20px;
  }
  .add-user-btn{
    padding: 10px 10px;
    display: inline-block;
    float: right;
    button{
      min-width: 150px;
    }
  }
  .pagination-page{
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
}

</style>
