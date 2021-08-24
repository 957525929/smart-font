<template>
  <div class="root">
    <div class="overview">
      <div class="fontPrt">
        <!-- <div class="title">
          <font size="5" color="#FF6701">总计用车次数</font>
          <font size="5" color="#FEA82F">前30日用车次数</font>
          <font size="5" color="#FFC288">前7日用车次数</font>
          <font size="5" color="#77ACF1">昨日用车次数</font>
          <font size="5" color="#04009A">今日用车次数</font>
        </div>
        <div class="value">
          <font size="5" color="#3EDBF0">60</font>
          <font size="5" color="#3EDBF0">21</font>
          <font size="5" color="#3EDBF0">17</font>
          <font size="5" color="#3EDBF0">13</font>
          <font size="5" color="#3EDBF0">9</font>
        </div> -->
        <div class="box">
          <div class="title"><font class="title" size="5" color="#FF6701">总计用车次数</font></div>
          <div class="value"><font class="value" size="5" color="#3EDBF0">60</font></div>
        </div>
        <div class="box">
          <div class="title"><font class="title" size="5" color="#FEA82F">前30日用车次数</font></div>
          <div class="value"><font class="value" size="5" color="#3EDBF0">21</font></div>
          <div class="compare">
            <trend flag="down" style="margin-right: 5px">
              <span slot="term">环比</span>
              12%
            </trend>
            <trend flag="up">
              <span slot="term">同比</span>
              15%
            </trend>
          </div>
        </div>
        <div class="box">
          <div class="title"><font class="title" size="5" color="#FFC288">前7日用车次数</font></div>
          <div class="value"><font class="value" size="5" color="#3EDBF0">60</font></div>
          <div class="compare">
            <trend flag="down" style="margin-right: 5px">
              <span slot="term">环比</span>
              19%
            </trend>
            <trend flag="up">
              <span slot="term">同比</span>
              11%
            </trend>
          </div>
        </div>
        <div class="box">
          <div class="title"><font class="title" size="5" color="#77ACF1">昨日用车次数</font></div>
          <div class="value"><font class="value" size="5" color="#3EDBF0">13</font></div>
          <div class="compare">
            <trend flag="down" style="margin-right: 5px">
              <span slot="term">环比</span>
              8%
            </trend>
            <trend flag="up">
              <span slot="term">同比</span>
              12%
            </trend>
          </div>
        </div>
        <div class="box">
          <div class="title"><font class="title" size="5" color="#FF6701">今日用车次数</font></div>
          <div class="value"><font class="value" size="5" color="#3EDBF0">9</font></div>
          <div class="compare">
            <trend flag="down" style="margin-right: 5px">
              <span slot="term">环比</span>
              21%
            </trend>
            <trend flag="up">
              <span slot="term">同比</span>
              19%
            </trend>
          </div>
        </div>
      </div>
      <div class="chartPrt">
        <Pie :dataSource="dataSource" />
      </div>
    </div>
    <div class="filterPrt">
      <div class="filterCtx">
        请选择统计时间段：
        <a-range-picker :default-value="defaultRange" :format="dateFormat" />&nbsp;&nbsp;
        <div style="float:right;margin-right:10px">
          <a-button type="primary">搜索</a-button>
          <a-button style="margin-left:10px">导出</a-button>
        </div>
      </div>
    </div>
    <div class="centerChart">
      <a-col :sm="8" :md="8" :xl="7">
        <a-card title="用车次数排行榜" :bordered="false" class="cardCenter1">
          <!-- <rank-list :list="rankList" style="width: 400px; margin: 0 auto" /> -->
          <div class="cardCenter">
            <bar :dataSource="rankList" :height="220" style="padding: 0px 0px 0px 0px;" />
          </div>
          <!-- <a style="float:right">查看全部</a> -->
        </a-card>
      </a-col>

      <a-col :sm="8" :md="8" :xl="7">
        <a-card title="维修次数排行榜" :bordered="false">
          <!-- <rank-list :list="rankList2" style="width: 400px; margin: 0 auto" /> -->
          <bar :dataSource="rankList2" :height="220" style="padding: 0px 0px 0px 0px;" />
        </a-card>
      </a-col>
      <a-col :sm="8" :md="8" :xl="7">
        <a-card title="保养统计（月）" :bordered="false" style="padding: 0px 0px 0px 0px;">
          <Pie :dataSource="dataSource1" style="margin-right:80px" :height="240" />
        </a-card>
      </a-col>
    </div>

    <div class="filterPrt">
      <div class="filterCtx">
        请选择统计时间段：
        <a-range-picker :default-value="defaultRange" :format="dateFormat" />&nbsp;&nbsp;
        <a-select style="width: 80px" defaultValue="车牌号" @select="conditionOnSelect">
          <a-select-option key="1" value="车牌号">车牌号</a-select-option>
          <a-select-option key="2" value="用车人">用车人</a-select-option>
          <a-select-option key="3" value="司机">司机</a-select-option>
        </a-select>
        <a-input-search :placeholder="`请输入${currentCondition}搜索`" style="width: 200px" @search="onSearch" />
        <a-button style="float: right; margin-right: 10px">导出</a-button>
      </div>
    </div>
    <div class="details">
      <a-table :columns="columns" :data-source="tableData">
        <a slot="user" slot-scope="text" @click="showpersonalInfoModal(text)">{{ text }}</a>
        <a slot="driver" slot-scope="text" @click="showpersonalInfoModal(text)">{{ text }}</a>
      </a-table>
    </div>
    <a-modal v-model="showpersonalInfoVisbile" title="个人信息" :destroyOnClose="true" :footer="null">
      <personal-info :info="currentInfo" />
    </a-modal>
  </div>
</template>

<script>
import Pie from '@/components/chart/Pie'
import moment from 'moment'
import { getCurrentDate, getLastWeekDate, getLastMonthDate } from '@/components/_util/DateUtil.js'
import { vehicleUsageRecord } from '@/mock/demoData.js'
import personalInfo from '../components/personalInfo.vue'
import RankList from '@/components/chart/RankList'
import Bar from '@/components/chart/Bar'
import LineChartMultid from '@/components/chart/LineChartMultid'
import Trend from '@/components/Trend'
const dataSource = [
  { item: '前30日使用', count: 21 },
  { item: '前7日使用', count: 17 },
  { item: '昨日使用', count: 13 },
  { item: '今日使用', count: 9 }
]
const dataSource1 = [
  { item: '闽A123406', count: 4 },
  { item: '闽A123402', count: 1 },
  { item: '闽A123405', count: 2 },
  { item: '闽A123403', count: 1 }
]
const columns = [
  {
    title: '车牌号',
    dataIndex: 'licenseNum'
  },
  {
    title: '用车人',
    dataIndex: 'user',
    scopedSlots: { customRender: 'user' }
  },
  {
    title: '用车事由',
    dataIndex: 'reason'
  },
  {
    title: '乘客数',
    dataIndex: 'passengerCount'
  },
  {
    title: '司机',
    dataIndex: 'driver',
    scopedSlots: { customRender: 'driver' }
  },
  {
    title: '用车时间',
    dataIndex: 'goTime'
  },
  {
    title: '收车时间',
    dataIndex: 'backTime'
  },
  {
    title: '出发地',
    dataIndex: 'from'
  },
  {
    title: '目的地',
    dataIndex: 'to'
  },
  {
    title: '单双程',
    dataIndex: 'isBack'
  }
]
export default {
  data() {
    return {
      dataSource: dataSource,
      dataSource1,
      columns: columns,
      tableData: vehicleUsageRecord,
      dateFormat: 'YYYY/MM/DD',
      defaultRange: [moment(getLastMonthDate(), this.dateFormat), moment(getCurrentDate(), this.dateFormat)],
      // current_start_date: formatDate(new Date().getTime() - 30 * 24 * 3600 * 1000, 'yyyy-MM-dd'),
      currentCondition: '车牌号',
      showpersonalInfoVisbile: false,
      currentInfo: undefined,
      rankList: [],
      rankList1: [],
      rankList2: []
    }
  },
  components: { Pie, personalInfo, RankList, Bar, LineChartMultid, Trend },
  created() {
    // setTimeout(() => {

    // }, 1000)
    this.loadRankListData()
    // this.initLogInfo()
  },
  methods: {
    conditionOnSelect(value, option) {
      // console.log(value);
      this.currentCondition = value
    },
    showpersonalInfoModal(text) {
      this.currentInfo = { name: text }
      console.log(text)
      this.showpersonalInfoVisbile = true
    },
    loadRankListData() {
      ;(this.rankList = [
        {
          x: '闽A123406',
          次数: 10
        },
        {
          x: '闽A123404',
          次数: 5
        },
        {
          x: '闽A123403',
          次数: 5
        },
        {
          x: '闽A123402',
          次数: 2
        },
        {
          x: '闽A123401',
          次数: 1
        }
      ]),
        (this.rankList1 = [
          {
            ['name']: '闽A123406',
            ['total']: '3km/L'
          },
          {
            ['name']: '闽A123404',
            ['total']: '5km/L'
          },
          {
            ['name']: '闽A123402',
            ['total']: '10km/L'
          }
        ]),
        (this.rankList2 = [
          {
            x: '闽A123406',
            次数: 10
          },
          {
            x: '闽A123404',
            次数: 5
          },
          {
            x: '闽A123403',
            次数: 5
          },
          {
            x: '闽A123402',
            次数: 2
          },
          {
            x: '闽A123401',
            次数: 1
          }
        ])
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .filterPrt {
    width: 98%;
    height: 50px;
    background-color: #ffffff;
    margin-top: 10px;
    .filterCtx {
      margin-left: 20px;
      margin-top: 8px;
    }
  }
  .centerChart {
    display: flex;
    justify-content: space-around;
    width: 98%;
    margin-top: 10px;
  }
  .overview {
    width: 98%;
    height: 260px;
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .fontPrt {
      width: 70%;
      display: flex;
      justify-content: space-around;
      .box {
        // width: 35%;
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 7%;
        // justify-content: center;
        .title {
          margin-bottom: 7%;
          font {
            margin-top: auto;
            margin-bottom: auto;
          }
        }
        .value {
          margin-bottom: 7%;
        }
        .compare {
          // width: 90%;
        }
      }
    }
    .chartPrt {
      width: 30%;
    }
  }
  .details {
    margin-top: 10px;
    width: 98%;
    background-color: #ffffff;
    padding: 10px;
  }
  .cardCenter1 {
  }
  .cardCenter {
    width: 95%;
    height: 95%;
    margin: 0 auto;
  }
}
</style>
