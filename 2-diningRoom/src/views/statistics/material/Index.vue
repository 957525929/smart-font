<template>
  <a-card :bordered="false">
    <a-row :gutter='24'>
      <a-col :xl="6" :lg="12" :md="12" :sm="24" :xs="24">
        <a-row>
          <h1 style='font-weight: bold;'>请选择</h1>
        </a-row>
        <a-row style='margin-bottom: 10px;'>
          <a-radio-group v-model="time" >
            <a-radio-button value="week">本周</a-radio-button>
            <a-radio-button value="month">本月</a-radio-button>
            <a-radio-button value="year">本年</a-radio-button>
          </a-radio-group>
        </a-row>
        <a-row>
          <j-date v-model='startTime' @change='changeStartTime'/>
          <span class="query-group-split-cust"/>
          <j-date v-model='endTime'/>
        </a-row>
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
          <a-tab-pane tab="审核统计" key="1">
            <BarMultid title="次数" :dataSource="dataSource1" :fields='fields1'/>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :span='18'  >
        <a-tabs default-active-key="1" size="large" >
          <a-tab-pane tab="食料采购分类" key="1">
            <BarMultid title="数量" :dataSource="dataSource2" :fields='fields2'/>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
    <a-tabs default-active-key="1"  :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
      <a-tab-pane tab="采购统计" key="1">
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
import Bar from '@/components/chart/Bar'
import RankList from '@/components/chart/RankList'
import ChartCard from '@/components/ChartCard'
import MiniProgress from '@/components/chart/MiniProgress'
import BarMultid from '@/components/chart/BarMultid'
import LineChartMultid from '@/components/chart/LineChartMultid'
import JDate from '../../../components/jeecg/JDate'


export default {
  name: 'Index',
  components: {
    Bar,
    RankList,
    ChartCard,
    MiniProgress,
    BarMultid,
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

  data() {
    return {
      startTime:'',
      endTime:'',
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
      fields2:["蔬菜类", "肉食类", "粮油类", "海鲜类", "水果类", "面食类", "酒水类",],
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
          "type": "肉食类",
          "蔬菜类": 0,
          "肉食类": 30,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "粮油类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 5,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "蔬菜类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "海鲜类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 17,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "水果类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 26,
          "面食类": 0,
          "酒水类": 0,
        },
        {
          "type": "面食类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 11,
          "酒水类": 0,
        },
        {
          "type": "酒水类",
          "蔬菜类": 0,
          "肉食类": 0,
          "粮油类": 0,
          "海鲜类": 0,
          "水果类": 0,
          "面食类": 0,
          "酒水类": 21,
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

  methods: {
    changeStartTime(value) {
      console.log(value)
      console.log(this.startTime)
      this.time=''
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