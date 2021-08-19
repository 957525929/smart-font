<template>
  <!-- 会议统计 -->
  <div>
    <div class="statisticlalOne">
      <a-row type="flex" align="middle">
        <a-col>
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按主题筛选</span>
        </a-col>
        <a-col>
          <a-select mode="tags" :style="{width:'210px'}" showSearch @change="ChangeTheme" placeholder="请选择会议主题"
            v-model="selectTheme">
            <a-select-option value="年度总结">年度总结</a-select-option>
            <a-select-option value="项目会议">项目会议</a-select-option>
            <a-select-option value="物流会议">物流管理</a-select-option>
            <a-select-option value="安全会议">安全管理</a-select-option>
            <a-select-option value="管理会议">管理会议</a-select-option>
            <a-select-option value="表彰会议">表彰会议</a-select-option>
            <a-select-option value="销售会议">销售会议</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col style='font-weight: bold;margin-left:20px;margin-right:10px;font-size:15px'>按日期筛选</a-col>
        <a-col>
          <a-radio-group v-model="time" @change="timeSelsect">
            <a-radio-button value="week">本周</a-radio-button>
            <a-radio-button value="month">本月</a-radio-button>
            <a-radio-button value="month">本季度</a-radio-button>
            <a-radio-button value="year">本年</a-radio-button>
            <a-radio-button value="custom">自定义</a-radio-button>
          </a-radio-group>
        </a-col>
        <a-col v-if="customSelect" style='margin-left:10px;'>
          <a-date-picker placeholder="请选择开始" :format="dateFormat" v-model="dateStart"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker placeholder="请选择结束" :format="dateFormat" v-model="dateEnd"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"></a-date-picker>
        </a-col>
        <a-col style='margin-left:20px;'>
          <a-button style='margin-left:20px;background:#49a9ee;color:white' icon="search" @click="searchQuery">查询
          </a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          <a-button style='margin-left:20px;background:orange;color:white;margin-left: 8px' @click="analysis">智能分析
          </a-button>
          <a-button style='margin-left:20px;background:#49a9ee;color:white;margin-left: 8px' icon="download"
            @click="handleExportXls('会议统计')">导出</a-button>
        </a-col>
      </a-row>

    </div>
    <div class="statisticlalOne">
      <a-row type="flex" align="middle">
        <a-col :span="1"></a-col>
        <a-col>
          <div style='border:1px solid #c7b2b2'>
            <a-statistic title="会议总次数" :value="32" style="margin:20px 50px" :value-style="{ color: '#6495ED' }" />
          </div>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <div style='border:1px solid #c7b2b2'>
            <a-statistic title="会议总开销（元）" :value="130000" style="margin:20px 50px"
              :value-style="{ color: '#6495ED' }" />
          </div>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <div v-if="visibleSta">
            <h6 style="padding:0px">智能分析结果：</h6>
            <a-input type='textarea' v-model="analysisMsg" style="width:700px;height:80px"></a-input>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="statisticlalTwo">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="会议次数" style="font-size:18px">
          <a-row type="flex" align="middle">
            <a-col :span="13">
              <a-row style='margin-top: 10px; text-align: center;'>
                <div ref="meetingNumber" style="height:400px"></div>
              </a-row>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="10">
              <a-row>
                <h1 style='font-weight: bold; text-align: left;margin-left:100px'></h1>
              </a-row>
              <a-row style='margin-top: 50px;'>
                <pie v-bind:height="heightPie" v-bind:dataSource="dataSourcePie"></pie>
              </a-row>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="2" tab="会议开销（元）" force-render>
          <a-row type="flex" align="middle">
            <a-col :span="12">
              <LineChartMultid style='margin-top: 50px;' :dataSource="dataSource1" :fields='fields1' />
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="11">
              <pie style='margin-top: 50px;' v-bind:height="heightPie" v-bind:dataSource="dataSourcePieB"></pie>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
    <!-- 表格 -->
    <div class="statisticlalThree">
      <a-table rowKey="id" :data-source="dataSelect" :pagination="false" style="margin-top:20px">
        <a-table-column title="序号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="会议次数占比（%）" data-index="numberProportion" align="center"></a-table-column>
        <a-table-column title="会议开销（元）" data-index="expenses" align="center"></a-table-column>
        <a-table-column title="会议开销占比（%）" data-index="expensesProportion" align="center"></a-table-column>
      </a-table>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import Bar from '@/components/chart/Bar'
  import Pie from '@/components/chart/Pie'
  import LineChartMultid from '@/components/chart/LineChartMultid'
  import {
    JeecgListMixin
  } from '@/mixins/JeecgListMixin'
  const dataSelect = [{
      id: '1',
      theme: '年度总结',
      number: '1',
      numberProportion: '4%',
      expenses: '4000',
      expensesProportion: '3%'
    },
    {
      id: '2',
      theme: '项目会议',
      number: '3',
      numberProportion: '11%',
      expenses: '26000',
      expensesProportion: '19%'
    },
    {
      id: '3',
      theme: '物流会议',
      number: '3',
      numberProportion: '11%',
      expenses: '35000',
      expensesProportion: '25%'
    },
    {
      id: '4',
      theme: '管理会议',
      number: '7',
      numberProportion: '25%',
      expenses: '25000',
      expensesProportion: '18%'
    },
    {
      id: '5',
      theme: '表彰会议',
      number: '9',
      numberProportion: '32%',
      expenses: '26500',
      expensesProportion: '19%'
    },
    {
      id: '6',
      theme: '销售会议',
      number: '5',
      numberProportion: '18%',
      expenses: '23500',
      expensesProportion: '13%'
    }
  ]
  const theme = [{
      value: '年度总结',
      label: '年度总结'
    }, {
      value: '项目会议',
      label: '项目会议'
    }, {
      value: '物流会议',
      label: '物流会议'
    }, {
      value: '管理会议',
      label: '管理会议'
    }, {
      value: '表彰会议',
      label: '表彰会议'
    },
    {
      value: '销售会议',
      label: '销售会议'
    },
    {
      value: '全部',
      label: '全部'
    },
  ]
  export default {
    mixins: [JeecgListMixin],
    components: {
      Bar,
      Pie,
      LineChartMultid
    },
    data() {
      return {
        time: 'custom',
        customSelect: true,
        dateStart: undefined,
        dateEnd: undefined,
        theme,
        heightPie: 350,
        dataSourcePie: [{
            item: '年度总结',
            count: 1
          },
          {
            item: '项目会议',
            count: 3
          },
          {
            item: '管理会议',
            count: 7
          },
          {
            item: '物流会议',
            count: 3
          },
          {
            item: '表彰会议',
            count: 9
          },
          {
            item: '销售会议',
            count: 5
          }
        ],
        fields1: ["会议开销", ],
        dataSource1: [{
            "type": "年度总结",
            "会议开销": 4000
          },
          {
            "type": "项目会议",
            "会议开销": 26000
          },
          {
            "type": "物流会议",
            "会议开销": 35000
          },
          {
            "type": "管理会议",
            "会议开销": 25000
          },
          {
            "type": "表彰会议",
            "会议开销": 26500
          },
          {
            "type": "销售会议",
            "会议开销": 23500
          },
        ],
        dataSourcePieB: [{
            item: '年度总结',
            count: 4000
          },
          {
            item: '项目会议',
            count: 26000
          },
          {
            item: '管理会议',
            count: 25000
          },
          {
            item: '物流会议',
            count: 35000
          },
          {
            item: '表彰会议',
            count: 26500
          },
          {
            item: '销售会议',
            count: 23500
          }
        ],
        visibleSta: false,
        dateFormat: 'YYYY年MM月DD日',
        dataSelect,
        selectTheme: [],
        analysisMsg: '',
        url: {
          list: "/sys/user/list",
          exportXlsUrl: "/sys/user/exportXls",
        },
      }
    },
    created() {
      let start = moment(new Date())
        .subtract(1, 'months')
        .format('YYYY-MM-DD')
      this.dateStart = this.moment(start, 'YYYY-MM-DD')
    },
    watch: {
      select(val) {
        //console.log(val)
      }
    },
    mounted() {
      this.getMeetingNumber();
    },
    methods: {
      moment,
      getMeetingNumber() {
        const meetingNumberChar = this.$echarts.init(this.$refs.meetingNumber);
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          // title: {
          //   text: '会议主题（次）',
          //   left: 'left'
          // },
          xAxis: {
            type: "category",
            name: '会议主题',
            data: ["年度总结", "项目会议", "物流会议", "管理会议", "表彰会议", "销售会议"]
          },
          yAxis: {
            type: "value",
            name: '次数',
            nameLocation: 'end',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          series: [{
            data: [1, 3, 3, 7, 9, 5],
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = ['#3aa1ff', '#36cbcb', '#fbd437', '#4ecb73', '#f2637b', '#975fe5']
                  return colorList[params.dataIndex]
                }
              }
            }
          }],
          //   grid: {
          //     left: '3%',
          //     right: '4%',
          //     bottom: '3%',
          //     containLabel: true
          //   },
        };
        meetingNumberChar.setOption(option);
      },
      analysis() {
        this.analysisMsg =
          '2021年7月13日-2021年8月13日期间，共开展项目会议32次，总开销130,000元。其中，开展项目会议主题最多为表彰会议，占总次数28%；会议主题最少为年度总结，占总次数4%；会议开销最多为物流会议，占总开销25%。'
        if (this.visibleSta) {
          this.visibleSta = false
        } else {
          this.visibleSta = true
        }
      },
      timeSelsect(e) {
        console.log(`checked = ${e.target.value}`);
        if (e.target.value == 'custom') {
          this.customSelect = true
        } else {
          this.customSelect = false
        }
      },
      ChangeTheme(value) {
        if (value.indexOf('全部') != -1) {
          this.selectTheme = ["全部"]
        }
      },
      searchReset() {
        this.selectTheme = []
      },
      getCurrentData() {
        return new Date().toLocaleDateString()
      },
      callback() {}
    }
  }
</script>
<style>
  .statisticlalOne {
    background-color: #fff;
    padding: 15px 10px;
  }

  .statisticlalTwo {
    margin-top: 10px;
    background-color: #fff;
    padding: 15px 0px 10px 10px;
  }

  .statisticlalThree {
    margin-top: 10px;
    background-color: #fff;
    padding: 15px 0px 10px 10px;
  }
</style>
<style scoped>
  >>>.ant-tabs-nav .ant-tabs-tab-active {
    font-size: 16px;
    font-weight: 600;
  }
</style>