<template>
  <a-card :bordered="false">
    <a-row>
      <a-col :span="24">
        <a-tabs default-active-key="1" size="large">
          <a-tab-pane tab="餐卡状态统计" key="1">
            <BarMultid :dataSource="dataSource" :fields="field" :height="330" />
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
      </a-col>
    </a-row>
    <a-tabs default-active-key="1" size="large" :tab-bar-style="{ marginBottom: '24px', paddingLeft: '16px' }">
      <a-tab-pane tab="流水统计" key="1">
        <a-row>
          <a-col :xl="24" :lg="12" :md="12" :sm="24" :xs="24">
            <LineChartMultid :dataSource="dataSource2" :fields="fields2" />
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
import LineChartMultid from '@/components/chart/LineChartMultid'
import BarMultid from '@/components/chart/BarMultid'
export default {
  name: 'Index',
  components: {
    LineChartMultid,
    BarMultid
  },

  mounted() {
    this.myChart1 = this.$echarts.init(document.getElementById('chart1'))
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
        data: ['川菜', '粤菜', '鲁菜', '苏菜', '浙菜', '闽菜', '湘菜', '客家菜', '徽菜']
      },
      yAxis: {
        type: 'value',
        name: '数量',
        nameLocation: 'end',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [
        {
          data: [5, 6, 4, 3, 6, 10, 2, 8, 5],
          type: 'bar',
          barWidth: 20,
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  '#5ddfcf',
                  '#4ecb73',
                  '#fbd437',
                  '#eaa674',
                  '#435188',
                  '#8a7bd4',
                  '#e4195b',
                  '#9ebcf0',
                  '#36cbcb'
                ]
                return colorList[params.dataIndex]
              }
            }
          }
        }
      ]
    }
    this.myChart1.setOption(this.option1)
  },

  data() {
    return {
      field: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      dataSource: [
        {
          type: '正常', // 列名
          '1月': 8,
          '2月': 1,
          '3月': 4,
          '4月': 5,
          '5月': 8,
          '6月': 2,
          '7月': 8
        },
        {
          type: '挂失',
          '1月': 7,
          '2月': 5,
          '3月': 18,
          '4月': 8,
          '5月': 10,
          '6月': 12,
          '7月': 8
        },
        {
          type: '补卡',
          '1月': 10,
          '2月': 8,
          '3月': 10,
          '4月': 5,
          '5月': 8,
          '6月': 2,
          '7月': 12
        },
        {
          type: '注销',
          '1月': 12,
          '2月': 7,
          '3月': 5,
          '4月': 12,
          '5月': 10,
          '6月': 17,
          '7月': 2
        }
      ],
      fields2: ['消费总金额', '充值总金额', '退款总金额'],
      dataSource2: [
        {
          type: '1月',
          消费总金额: 100000.2,
          充值总金额: 110000.0,
          退款总金额: 12000.0
        },
        {
          type: '2月',
          消费总金额: 85472.91,
          充值总金额: 85000.0,
          退款总金额: 10000.0
        },
        {
          type: '3月',
          消费总金额: 64231.55,
          充值总金额: 60000.0,
          退款总金额: 13000.0
        },
        {
          type: '4月',
          消费总金额: 67523.99,
          充值总金额: 70000.0,
          退款总金额: 8000.0
        },
        {
          type: '5月',
          消费总金额: 75213.51,
          充值总金额: 75000.0,
          退款总金额: 11000.0
        },
        {
          type: '6月',
          消费总金额: 85423.66,
          充值总金额: 90000.0,
          退款总金额: 14000.0
        },
        {
          type: '7月',
          消费总金额: 75213.1,
          充值总金额: 110000.0,
          退款总金额: 9000.0
        }
      ],
      time: 'year'
    }
  }
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
