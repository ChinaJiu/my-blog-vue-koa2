<template>
  <div class="user-wrap">
    <!-- 查询 -->
    <div class="search-page">
      <search title="用户名 / 姓名"></search>
    </div>
    <!-- 新增用户 -->
    <div class="add-user-btn">
      <el-button type="primary" @click="dialogFormVisible = true">新增用户</el-button>
    </div>

    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      
      <el-form :model="userForm" :rules="rules"  ref="userForm" :label-width="formLabelWidth" class="demo-ruleForm" >
        <el-form-item label="用户名" prop="user" >
          <el-input v-model="userForm.user" ></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name" >
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" >
          <el-input v-model="userForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="角色" prop="roles" >
          <el-select v-model="userForm.roles" placeholder="请选择活动区域">
            <el-option label="管理员" value="beijing"></el-option>
            <el-option label="开发员" value="sahghai"></el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="userForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="创建日期" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="userForm.createData1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="userForm.createData1" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"  @click="submitForm('userForm')">确 定</el-button>
      </div>
    </el-dialog>

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
import { isvalidPhone } from '@/utils/validator'

export default {
  data () {
    var validPhone = function (rule, value, callback) {
      if (!isvalidPhone(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
      // isvalidPhone
    }
    return {
      userForm: {
        user: '',
        name: '',
        phone: '',
        roles: '',
        remark: '',
        createData1: '',
        createData2: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { validator: validPhone, trigger: 'blur' }
        ],
        roles: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        createData1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        createData2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ]
      },
      formLabelWidth: '100px',
      currentPage3: 5,
      dialogFormVisible: false,
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
  created () {
    
  },
  activated () {
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    submitForm (formName) {
      console.log(this.userForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // dialogFormVisible = false
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
  .el-form{
    // width:90%;
  }
  .demo-ruleForm>.el-form-item{
    // padding: 10px 0;
  }
  .pagination-page{
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
}

</style>
