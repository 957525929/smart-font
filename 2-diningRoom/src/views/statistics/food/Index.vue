<template>
  <a-card :bordered="false">
    <a-row :gutter='24'>
      <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="菜品总数" :value="118" style="margin:20px 50px"/></div>
      </a-col>
      <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="留样总数" :value="320" style="margin:20px 50px"/></div>
      </a-col>
      <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
        <div style='border:1px solid #c7b2b2'><a-statistic title="今日留样数" :value="11" style="margin:20px 50px"/></div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span='24'  >
        <a-tabs default-active-key="1" size="large" >
          <a-tab-pane tab="菜品类别统计" key="1">
            <div id="chart1" style="width: 100%; height: 250px"></div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <a-tabs default-active-key="1"  size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
      <a-tab-pane tab="留样次数统计" key="1">
        <a-row>
          <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
            <LineChartMultid title="次数" :dataSource="dataSource3" :fields='fields3'/>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-radio-group v-model="time" slot="tabBarExtraContent">
        <a-radio-button value="week">
          本周
        </a-radio-button>
        <a-radio-button value="month">
          本月
        </a-radio-button>
        <a-radio-button value="year">
          本年
        </a-radio-button>
      </a-radio-group>
    </a-tabs>
  </a-card>
</template>



<script>
import LineChartMultid from '@/components/chart/LineChartMultid'

export default {
  name: 'Index',
  components: {
    LineChartMultid,
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
        data: ["川菜", "粤菜", "鲁菜", "苏菜", "浙菜", "闽菜", "湘菜", "客家菜", "徽菜",],
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
        data: [5, 6, 4, 3,  6, 10, 2, 8, 5, ],
        type: 'bar',
        barWidth: 20,
        itemStyle:{
          normal:{
            color:function(params) {
              var colorList=['#5ddfcf','#4ecb73','#fbd437','#eaa674','#435188','#8a7bd4','#e4195b','#9ebcf0','#36cbcb',]
              return colorList[params.dataIndex]
            }
          }
        }
      }]
    };
    this.myChart1.setOption(this.option1);
  },

  data() {
    return {
      fields3:["留样次数", ],
      dataSource3: [
        {
          "type": "1月",
          "留样次数": 24
        },
        {
          "type": "2月",
          "留样次数": 20
        },
        {
          "type": "3月",
          "留样次数": 25
        },
        {
          "type": "4月",
          "留样次数": 26
        },
        {
          "type": "5月",
          "留样次数": 28
        },
        {
          "type": "6月",
          "留样次数": 21
        },
        {
          "type": "7月",
          "留样次数": 22
        },
        {
          "type": "8月",
          "留样次数": 28
        },
        {
          "type": "9月",
          "留样次数": 20
        },
        {
          "type": "10月",
          "留样次数": 19
        },
        {
          "type": "11月",
          "留样次数": 27
        },
        {
          "type": "12月",
          "留样次数": 23
        },
      ],
      time:'year',
    }
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