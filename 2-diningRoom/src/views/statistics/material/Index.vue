<template>
  <a-card :bordered="false">
    <a-row :gutter='24'>
      <a-col :xl="6" :lg="12" :md="12" :sm="24" :xs="24">
        <a-row>
          <h1 style='font-weight: bold; text-align: center;'>请选择</h1>
        </a-row>
        <a-row style='margin-bottom: 10px; margin-top: 10px; text-align: center;'>
          <a-radio-group v-model="time" >
            <a-radio-button value="week">本周</a-radio-button>
            <a-radio-button value="month">本月</a-radio-button>
            <a-radio-button value="year">本年</a-radio-button>
          </a-radio-group>
        </a-row>
<!--        <a-row>-->
<!--          <j-date v-model='startTime' @change='changeStartTime'/>-->
<!--          <span class="query-group-split-cust"/>-->
<!--          <j-date v-model='endTime'/>-->
<!--        </a-row>-->
      </a-col>
      <a-col :xl="6" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="采购总次数" :value="118" style="margin:20px 50px"/></div>
      </a-col>
      <a-col :xl="6" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="采购总金额(CNY)" :value="826560.00" style="margin:20px 50px"/></div>
      </a-col>
      <a-col :xl="6" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="审核总次数" :value="110" style="margin:20px 50px"/></div>
      </a-col>
    </a-row>
    <a-row style='margin-top: 20px;'>
      <a-col :span='6'  >
        <a-tabs default-active-key="1" size="large" >
          <a-tab-pane tab="采购状态统计" key="1">
            <div id="chart1" style="width: 100%; height: 250px"></div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :span='18'  >
        <a-tabs default-active-key="1" size="large" >
          <a-tab-pane tab="食料分类统计" key="1">
            <div id="chart2" style="width: 100%; height: 250px"></div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <a-tabs default-active-key="1"  size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
      <a-tab-pane tab="采购次数统计" key="1">
        <a-row>
          <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
            <LineChartMultid title="次数" :dataSource="dataSource3" :fields='fields3'/>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>



<script>
import LineChartMultid from '@/components/chart/LineChartMultid'
import JDate from '../../../components/jeecg/JDate'


export default {
  name: 'Index',
  components: {
    LineChartMultid,
    JDate,
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    time: function (newValue, oldValue) {
      if(newValue != '') {
        this.startTime=''
        this.endTime=''
      }
    }
  },

  mounted() {
    this.myChart1 = this.$echarts.init(document.getElementById("chart1"));
    this.option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['待审核', '已通过', '未通过',],
      },
      yAxis: {
        type: 'value',
        name: '次数',
        nameLocation :'end',
        splitLine:{
          show:true,
          lineStyle:{
            type:'dashed'
          }
        }
      },
      series: [{
        data: [20, 18, 2,],
        type: 'bar',
        barWidth: 20,
        itemStyle:{
          normal:{
            color:function(params) {
              var colorList=['#5470c5','#90cb75','#f9c758',]
              return colorList[params.dataIndex]
            }
          }
        }
      }]
    };
    this.myChart1.setOption(this.option1);
    this.myChart2 = this.$echarts.init(document.getElementById("chart2"));
    this.option2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['蔬菜类', '肉食类', '粮油类', '海鲜类', '水果类', '面食类', '酒水类'],
      },
      yAxis: {
        type: 'value',
        name: '数量',
        nameLocation :'end',
        splitLine:{
          show:true,
          lineStyle:{
            type:'dashed'
          }
        }
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20,
        itemStyle:{
          normal:{
            color:function(params) {
              var colorList=['#9960b3','#fa8352','#3ba172','#3c3f41','#e66','#fac858','#91cc75',]
              return colorList[params.dataIndex]
            }
          }
        }
      }]
    };
    this.myChart2.setOption(this.option2);
  },

  data() {
    return {
      startTime:'',
      endTime:'',
      fields3:["采购次数", ],
      dataSource3: [
        {
          "type": "1月",
          "采购次数": 24
        },
        {
          "type": "2月",
          "采购次数": 20
        },
        {
          "type": "3月",
          "采购次数": 25
        },
        {
          "type": "4月",
          "采购次数": 26
        },
        {
          "type": "5月",
          "采购次数": 28
        },
        {
          "type": "6月",
          "采购次数": 21
        },
        {
          "type": "7月",
          "采购次数": 22
        },
        {
          "type": "8月",
          "采购次数": 28
        },
        {
          "type": "9月",
          "采购次数": 20
        },
        {
          "type": "10月",
          "采购次数": 19
        },
        {
          "type": "11月",
          "采购次数": 27
        },
        {
          "type": "12月",
          "采购次数": 23
        },
      ],
      time:'year',
      myChart: {},
      option: {},
    }
  },

  methods: {
    changeStartTime(value) {
      console.log(value)
      console.log(this.startTime)
      this.time=''
    },
  },
}
</script>

<style lang="less" scoped>

@import '~@assets/less/common.less';
.table-page-search-wrapper {
  margin-bottom: 8px;
}
.table-page-search-wrapper .ant-form-item,
.table-page-search-wrapper .table-page-search-submitButtons {
  margin-top: 12px;
  margin-bottom: 12px;
}

</style>