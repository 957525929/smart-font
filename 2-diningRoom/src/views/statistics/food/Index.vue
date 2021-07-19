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
<!--      <a-col :span='6'  >-->
<!--        <a-tabs default-active-key="1" size="large" >-->
<!--          <a-tab-pane tab="审核统计" key="1">-->
<!--            <BarMultid title="次数" :dataSource="dataSource1" :fields='fields1'/>-->
<!--          </a-tab-pane>-->
<!--        </a-tabs>-->
<!--      </a-col>-->
      <a-col :span='24'  >
        <a-tabs default-active-key="1" size="large" >
          <a-tab-pane tab="菜品类别" key="1">
            <BarMultid title="数量" :dataSource="dataSource2" :fields='fields2'/>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <a-tabs default-active-key="1"  :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
      <a-tab-pane tab="留样统计" key="1">
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
import Bar from '@/components/chart/Bar'
import RankList from '@/components/chart/RankList'
import ChartCard from '@/components/ChartCard'
import MiniProgress from '@/components/chart/MiniProgress'
import BarMultid from '@/components/chart/BarMultid'
import LineChartMultid from '@/components/chart/LineChartMultid'


export default {
  name: 'Index',
  components: {
    Bar,
    RankList,
    ChartCard,
    MiniProgress,
    BarMultid,
    LineChartMultid,
  },
  data() {
    return {
      fields1:["待审核", "已通过", "未通过",],
      dataSource1: [
        {
          "type": "待审核", // 列名
          "待审核": 20,
          "已通过": 0,
          "未通过": 0,
        },
        {
          "type": "已通过",
          "待审核": 0,
          "已通过": 15,
          "未通过": 0,
        },
        {
          "type": "未通过",
          "待审核": 0,
          "已通过": 0,
          "未通过": 5,
        }
      ],
      fields2:["川菜", "粤菜", "鲁菜", "苏菜", "浙菜", "闽菜", "湘菜", "客家菜", "徽菜",],
      dataSource2: [
        {
          "type": "蔬菜类",
          "蔬菜类": 20,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "川菜",
          "川菜": 5,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        }, {
          "type": "粤菜",
          "川菜": 0,
          "粤菜": 6,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "鲁菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 4,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "苏菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 3,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "浙菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 6,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "闽菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 10,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "湘菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 2,
          "客家菜": 0,
          "徽菜": 0,
        },{
          "type": "客家菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 8,
          "徽菜": 0,
        },{
          "type": "徽菜",
          "川菜": 0,
          "粤菜": 0,
          "鲁菜": 0,
          "苏菜": 0,
          "浙菜": 0,
          "闽菜": 0,
          "湘菜": 0,
          "客家菜": 0,
          "徽菜": 5,
        },
      ],
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