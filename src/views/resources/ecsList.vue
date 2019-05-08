<style>

</style>

<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="实例ID">
          <el-input v-model="formInline.user" placeholder="实例ID"></el-input>
        </el-form-item>

        <el-form-item label="使用情况">
          <el-select v-model="formInline.value" filterable placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选择日期">
            <el-date-picker
                    v-model="value2"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
            </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary">重置</el-button>
          <el-button type="primary">导出</el-button>
        </el-form-item>

      </el-form>
    </el-col>

    <!--表格-->
      <el-table :data="tableData" border style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column prop="name" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="name" label="云平台">
        </el-table-column>
        <el-table-column prop="name" label="产品线">
        </el-table-column>
        <el-table-column prop="name" label="实例ID">
        </el-table-column>
        <el-table-column prop="name" label="主机标签">
        </el-table-column>
        <el-table-column prop="name" label="CPU使用率" sortable>
        </el-table-column>
        <el-table-column prop="name" label="硬盘使用率" sortable>
        </el-table-column>
        <el-table-column prop="name" label="内存使用率" sortable>
        </el-table-column>
        <el-table-column prop="name" label="IOPS使用率" sortable>
        </el-table-column>
        <el-table-column prop="name" label="网络流出带宽" sortable>
        </el-table-column>
        <el-table-column prop="name" label="操作" width="80">
          <router-link :to="{ name: 'ecsDetail'}">
            <a>详情</a>
          </router-link>
        </el-table-column>
      </el-table>

    <!--分页-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
      </div>
    </el-col>

  </section>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        formInline: {
          user: '',
          region: '',
          value: '',
        },

        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',

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
        }],
        currentPage4: 4,
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      formatter(row, column) {
        return row.address;
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }

  }
</script>