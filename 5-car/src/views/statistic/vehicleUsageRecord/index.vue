<template>
  <div class="root">
    <div class="overview">
      <div class="fontPrt">
        <div class="title">
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
        <a-select style="width: 80px" defaultValue="车牌号" @select="conditionOnSelect">
          <a-select-option key="1" value="车牌号">车牌号</a-select-option>
          <a-select-option key="2" value="用车人">用车人</a-select-option>
          <a-select-option key="3" value="司机">司机</a-select-option>
        </a-select>
        <a-input-search :placeholder="`请输入${currentCondition}搜索`" style="width: 200px" @search="onSearch" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
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
import { getCurrentDate, getLastWeekDate } from '@/components/_util/DateUtil.js'
import { vehicleUsageRecord } from '@/mock/demoData.js'
import personalInfo from '../components/personalInfo.vue'
const dataSource = [
  { item: '前30日使用', count: 21 },
  { item: '前7日使用', count: 17 },
  { item: '昨日使用', count: 13 },
  { item: '今日使用', count: 9 },
]
const columns = [
  {
    title: '车牌号',
    dataIndex: 'licenseNum',
  },
  {
    title: '用车人',
    dataIndex: 'user',
    scopedSlots: { customRender: 'user' },
  },
  {
    title: '用车事由',
    dataIndex: 'reason',
  },
  {
    title: '乘客数',
    dataIndex: 'passengerCount',
  },
  {
    title: '司机',
    dataIndex: 'driver',
    scopedSlots: { customRender: 'driver' },
  },
  {
    title: '发车时间',
    dataIndex: 'goTime',
  },
  {
    title: '收车时间',
    dataIndex: 'backTime',
  },
  {
    title: '出发地',
    dataIndex: 'from',
  },
  {
    title: '目的地',
    dataIndex: 'to',
  },
  {
    title: '单双程',
    dataIndex: 'isBack',
  },
]
export default {
  data() {
    return {
      dataSource: dataSource,
      columns: columns,
      tableData: vehicleUsageRecord,
      dateFormat: 'YYYY/MM/DD',
      defaultRange: [moment(getLastWeekDate(), this.dateFormat), moment(getCurrentDate(), this.dateFormat)],
      currentCondition: '车牌号',
      showpersonalInfoVisbile: false,
      currentInfo: undefined,
    }
  },
  components: { Pie, personalInfo },
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
  },
}
</script>

<style lang='less' scoped>
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
      .title {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-around;
        font {
          margin-top: auto;
          margin-bottom: auto;
        }
      }
      .value {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-around;
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
}
</style>