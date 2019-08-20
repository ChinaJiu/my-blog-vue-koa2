<template>
  <div class="user-wrap">
    <!-- table -->
    <div class="table-page">
      <el-table
        :data="tableData"
        :border="true"
        style="width: 100%">

        <!-- <el-table-column
          prop="date"
          label="日期"
          width="100%">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100%">
        </el-table-column> -->
        <el-table-column
          v-for="(item, key) in tableKeys"
          :key="key"
          :prop="key"
          :label="item.val"
          :min-width="item.width">
        </el-table-column>
        
        <el-table-column label="操作" min-width="280">
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
  </div>
</template>
<script>
import { getTableData } from '@/api/repository/type'

export default {
  data () {
    return {
      tableKeys: {},
      tableData: [],
      formLabelWidth: '100px',
      dialogFormVisible: false
    }
  },
  async created () {
    
  },
  watch: {
    async $route (route) {
      console.log('this.$route', route.meta.a)
      let param = this.$route.meta.a
      console.log('param', param)
      let data = await getTableData({
        params: {
          a: param
        }
      })
      this.widthK = [100, 100, 100, 100]
      if (data) {
        this.tableKeys = data.data.keys
        this.tableData = data.data.data
      }
      this.tableKeys = this.setKeyWidth(this.widthK, this.tableKeys)
    }
  },
  mounted () {
    console.log(111)
  },
  activated () {

  },
  methods: {
    setKeyWidth (keyW, keys) {
      console.log(keys)
      let a = 0
      if (keys) {
        for (let item of Object.keys(keys)) {
          keys[item].width = keyW[a]
          a++
        }
      }
      return keys
    },
    handleEdit (index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
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
