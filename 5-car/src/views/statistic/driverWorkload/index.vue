<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        请选择司机：
        <a-select :defaultValue="driverList[0].name" style="width: 200px">
          <a-select-option v-for="d in driverList" :key="d.key">{{ d.name }}</a-select-option> </a-select
        >&nbsp;&nbsp; 请选择结算年月：
        <a-month-picker :default-value="defaultDate" :format="monthFormat" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
      </div>
    </div>
    <div class="overview">
      <div class="fontPrt">
        <div class="title">
          <font size="5" color="#04009A">总计出车次数</font>
          <font size="5" color="#FF6701">平均出车次数</font>
        </div>
        <div class="value">
          <font size="5" color="#3EDBF0">{{ driverWorkloadPie[0].count+'次' }}</font>
          <font size="5" color="#3EDBF0">{{ driverWorkloadPie[1].count +'次/天'}}</font>
        </div>
      </div>
      <div class="chartPrt1">
        <Pie :dataSource="driverWorkloadPie" />
      </div>
      <div class="chartPrt2">
        <LineChartMultid :fields="LineChartFields" :dataSource="driverWorkloadLineChart" :aliases="fieldsRename" />
      </div>
    </div>
    <div class="details">
      <a-table :columns="columns" :data-source="tableData">
        <a slot="user" slot-scope="text" @click="showpersonalInfoModal(text)">{{ text }}</a>
      </a-table>
    </div>
    <a-modal v-model="showpersonalInfoVisbile" title="个人信息" :destroyOnClose="true" :footer="null">
      <personal-info :info="currentInfo" />
    </a-modal>
  </div>
</template>

<script>
import Pie from '@/components/chart/Pie'
import LineChartMultid from '@/components/chart/LineChartMultid'
import moment from 'moment'
import { driverList, driverWorkloadPie, driverWorkloadLineChart, driverWorkloadList } from '@/mock/demoData.js'
import personalInfo from '../components/personalInfo.vue'
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
    title: '用车时间',
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
      driverWorkloadPie: driverWorkloadPie,
      columns: columns,
      tableData: [...driverWorkloadList, ...driverWorkloadList, ...driverWorkloadList, ...driverWorkloadList],
      monthFormat: 'YYYY年MM月',
      defaultDate: moment('2021/06', this.monthFormat),
      driverList: driverList,
      LineChartFields: ['work', 'absence'],
      fieldsRename: [
        { field: 'work', alias: '出车次数' },
        { field: 'absence', alias: '缺勤次数' },
      ],
      driverWorkloadLineChart: driverWorkloadLineChart,
      showpersonalInfoVisbile: false,
      currentInfo: undefined,
    }
  },
  components: { Pie, LineChartMultid, personalInfo },
  methods: {
    showpersonalInfoModal(text) {
      this.currentInfo = { name: text }
      console.log(text);
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
    .filterCtx {
      margin-left: 20px;
      margin-top: 8px;
    }
  }
  .overview {
    margin-top: 10px;
    width: 98%;
    height: 300px;
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .fontPrt {
      width: 20%;
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
    .chartPrt1 {
      width: 18%;
    }
    .chartPrt2 {
      width: 50%;
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