<template>
  <!-- 会议统计 -->
  <div>
    <div class="statisticlalOne">
      <a-row type="flex" align="middle">
        <!-- <a-col :span="1"></a-col> -->
        <a-col>
          <a-row>
            <span style='font-weight: bold;margin-right:20px;font-size:16px'>请选择</span>
            <a-radio-group v-model="time">
              <a-radio-button value="week">本周</a-radio-button>
              <a-radio-button value="month">本月</a-radio-button>
              <a-radio-button value="month">本季度</a-radio-button>
              <a-radio-button value="year">本年</a-radio-button>
            </a-radio-group>
          </a-row>
          <a-row style='margin-bottom: 10px; margin-top: 10px; text-align: center;'>
            <span style='font-weight: bold;margin-right:20px;font-size:16px'>自定义</span>
            <a-date-picker placeholder="请选择开始" :format="dateFormat"></a-date-picker>
            <span>&nbsp;~&nbsp;</span>
            <a-date-picker placeholder="请选择结束" :format="dateFormat"></a-date-picker>
          </a-row>
          <a-row style='margin-bottom: 10px; margin-top: 10px; text-align: center;'>
            <a-button :style="{ background: '#49a9ee', color: 'white'}" @click="analysis">智能分析</a-button>
          </a-row>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col>
          <div style='border:1px solid #c7b2b2'>
            <a-statistic title="会议总次数" :value="90" style="margin:20px 50px" />
          </div>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <div style='border:1px solid #c7b2b2'>
            <a-statistic title="会议总开销（元）" :value="150000" style="margin:20px 50px" />
          </div>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <div v-if="visibleSta">
            <h4>智能分析结果</h4>
            <p>本年度开展项目会议次数最多，为25次，占总次数28%；开销占总会议支出17%，位居第二；</p>
            <p>年度会议次数最少，为5次，占6%。</p>
            <span>开展表彰会议开销过高，占总会议总支出18%。</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="statisticlalTwo">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="会议次数" style="font-size:18px">
          <a-row type="flex" align="middle">
            <a-col :span="13">
              <!-- <a-row>
                <h1 style='font-weight: bold; text-align: left;'>会议主题</h1>
              </a-row> -->
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
              <!-- <a-row>
                <h1 style='font-weight: bold; text-align: left;'>会议开销（按主题）</h1>
              </a-row> -->
              <!-- <a-row style='margin-top: 50px;'>
                <LineChartMultid :dataSource="dataSource1" :fields='fields1' />
              </a-row> -->
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="11">
              <pie style='margin-top: 50px;' v-bind:height="heightPie" v-bind:dataSource="dataSourcePieB"></pie>
              <!-- <a-row>
                <h1 style='font-weight: bold; text-align: left;margin-left:100px'>会议开销（按月份）</h1>
              </a-row> -->
              <!-- <a-row style='margin-top: 50px;'>
                <LineChartMultid :dataSource="dataSource3" :fields='fields3' />
              </a-row> -->
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>

    </div>
    <!-- 表格 -->
    <div class="statisticlalThree">
      <a-row type="flex" align="middle">
        <a-col>
          <span>按主题筛选：</span>
        </a-col>
        <a-col>
          <a-select mode="tags" :style="{width:'300px'}" showSearch @change="ChangeTheme" placeholder="请选择会议主题"
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
        <a-col :span="1"></a-col>
        <a-col>按日期选择：</a-col>
        <a-col>
          <a-date-picker placeholder="请选择开始" :format="dateFormat" v-model="dateStart"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker placeholder="请选择结束" :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"></a-date-picker>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col>
          <a-button :style="{ background: '#49a9ee', color: 'white' }" icon="search" @click="searchQuery">查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
      </a-row>
      <a-table rowKey="id" :data-source="dataSelet" :pagination="false" style="margin-top:20px">
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
  const dataSta = [{
      theme: '项目会议',
      number: '30',
      membersNumber: '90',
      budget: '12500'
    },
    {
      theme: '物流管理',
      number: '4',
      membersNumber: '12',
      budget: '900'
    },
    {
      theme: '安全管理',
      number: '9',
      membersNumber: '30',
      budget: '18000'
    },
    {
      theme: '年度总结',
      number: '1',
      membersNumber: '30',
      budget: '21000'
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
    components: {
      Bar,
      Pie,
      LineChartMultid
    },
    data() {
      return {
        time: 'year',
        dateStart: undefined,
        theme,
        heightPie: 350,
        dataSourcePie: [{
            item: '年度总结',
            count: 5
          },
          {
            item: '项目会议',
            count: 25
          },
          {
            item: '管理会议',
            count: 12
          },
          {
            item: '物流会议',
            count: 18
          },
          {
            item: '表彰会议',
            count: 17
          },
          {
            item: '销售会议',
            count: 13
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
        // fields3: ["会议开销", ],
        // dataSource3: [{
        //     "type": "1月",
        //     "会议开销": 12500
        //   },
        //   {
        //     "type": "2月",
        //     "会议开销": 8000
        //   },
        //   {
        //     "type": "3月",
        //     "会议开销": 5000
        //   },
        //   {
        //     "type": "4月",
        //     "会议开销": 30000
        //   },
        //   {
        //     "type": "5月",
        //     "会议开销": 3000
        //   },
        //   {
        //     "type": "6月",
        //     "会议开销": 15000
        //   },
        //   {
        //     "type": "7月",
        //     "会议开销": 10000
        //   },
        //   {
        //     "type": "8月",
        //     "会议开销": 15000
        //   },
        //   {
        //     "type": "9月",
        //     "会议开销": 6000
        //   },
        //   {
        //     "type": "10月",
        //     "会议开销": 8000
        //   },
        //   {
        //     "type": "11月",
        //     "会议开销": 17500
        //   },
        //   {
        //     "type": "12月",
        //     "会议开销": 20000
        //   },
        // ],
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
        dataSta,
        selectTheme: [],
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
            data: [5, 25, 12, 18, 17, 13],
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
        if (this.visibleSta) {
          this.visibleSta = false
        } else {
          this.visibleSta = true
        }
      },
      ChangeTheme(value) {
        //  console.log(value.indexOf('全部'))
        if (value.length == 0) {
          this.dataNumber = dataNumber
          this.dataBudget = dataBudget
        } else if (value.indexOf('全部') != -1) {
          console.log(1111)
          this.dataNumber = dataNumber
          this.dataBudget = dataBudget
          this.selectTheme = ["全部"]
        } else {
          let themeSelect = []
          let budgetSelect = []
          // value.forEach(element => {
          //   dataNumber.filter(item => {
          //     if (item.x.includes(element)) {
          //       themeSelect.push(item)
          //       budgetSelect.push(item)
          //     }
          //   })
          // })
          this.dataNumber = themeSelect
          this.dataBudget = budgetSelect
        }
      },
      searchReset() {
        this.dataNumber = dataNumber
        this.dataBudget = dataBudget
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
    /* margin-top: 10px; */
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