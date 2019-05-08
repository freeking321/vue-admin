<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>云服务器基本信息</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">云平台:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">实例ID:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">主体标签:</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">实例:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">高效云盘:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">宽带:</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">付费方式:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">付费金额:</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>资源利用率详情</span>
      </div>
      <div>
        <el-form :inline="true" :model="filters">
          <el-form-item>
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
          </el-form-item>

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
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>

        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>CPU使用率(%):</span>
                </div>
                <div>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>硬盘使用率(%):</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>内存使用率(%):</span>
                </div>
                <div>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                  <el-progress type="circle" :percentage="25"></el-progress>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>网络流出带宽:</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 3" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>

        <div>
          <el-tooltip content="Top center" placement="top">
            <el-button>主机CPU使用率(%)</el-button>
          </el-tooltip>
          <el-tooltip content="Top center" placement="top">
            <el-button>主机内存使用率(%)</el-button>
          </el-tooltip>
          <el-tooltip content="Top center" placement="top">
            <el-button>主机硬盘使用率(%)</el-button>
          </el-tooltip>
          <el-tooltip content="Top center" placement="top">
            <el-button>主机网络流出带宽(%)</el-button>
          </el-tooltip>
        </div>

        <div id="chartLine" style="width:100%; height:400px;"></div>

      </div>
    </el-card>
  </section>
</template>

<script>
  import echarts from 'echarts'
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
          }],
        },
        value2: '',
        chartLine: null,
      }
    },

    methods: {
      getUsers() {

      },
      drawLineChart() {
        this.chartLine = echarts.init(document.getElementById('chartLine'));
        this.chartLine.setOption({
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
    },

    mounted: function () {
      this.drawLineChart()
    },
    updated: function () {
      this.drawLineChart()
    }

  }
</script>