<style>

</style>

<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">

        <el-form-item>
          <el-input v-model="filters.name" placeholder="主机标签"></el-input>
        </el-form-item>

        <el-form-item>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>

        <el-tooltip content="Top center" placement="top">
        <el-button>1小时</el-button>
        </el-tooltip>
        <el-tooltip content="Top center" placement="top">
        <el-button>6小时</el-button>
        </el-tooltip>
        <el-tooltip content="Top center" placement="top">
        <el-button>12小时</el-button>
        </el-tooltip>
        <el-tooltip content="Top center" placement="top">
        <el-button>一天</el-button>
        </el-tooltip>

        <span class="demonstration">选择时间范围:</span>
        <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
        </el-date-picker>

        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="主机标签">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="峰值">
        </el-table-column>
        <el-table-column prop="name" label="谷值">
        </el-table-column>
        <el-table-column prop="name" label="均值">
        </el-table-column>
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="峰值">
        </el-table-column>
        <el-table-column prop="name" label="谷值">
        </el-table-column>
        <el-table-column prop="name" label="均值">
        </el-table-column>
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="峰值">
        </el-table-column>
        <el-table-column prop="name" label="谷值">
        </el-table-column>
        <el-table-column prop="name" label="均值">
        </el-table-column>
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="峰值">
        </el-table-column>
        <el-table-column prop="name" label="谷值">
        </el-table-column>
        <el-table-column prop="name" label="均值">
        </el-table-column>
      </el-table-column>
      <el-table-column label="操作">
        <router-link :to="{ name: 'ecsList'}">
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
        filters: {
          name: ''
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        currentPage4: 4,
      }
    },

    methods: {
      getUsers() {

      },
      handleAdd() {

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