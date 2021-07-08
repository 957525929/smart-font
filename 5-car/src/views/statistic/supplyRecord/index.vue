<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-date-picker />&nbsp;&nbsp;
        <a-select style="width: 80px" defaultValue="车牌号" @select="conditionOnSelect">
          <a-select-option key="1" value="车牌号">车牌号</a-select-option>
          <a-select-option key="2" value="用车人">用车人</a-select-option>
          <a-select-option key="3" value="司机">司机</a-select-option>
        </a-select>
        <a-input-search :placeholder="`请输入${currentCondition}搜索`" style="width: 200px" @search="onSearch" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
      </div>
    </div>

    <div class="tablePrt">
      <a-table :columns="columns" :data-source="tableData">
        <a slot="card">查看</a>
        <a slot="driver" slot-scope="text">{{ text }}</a>
        <a slot="record" slot-scope="text">{{ text }}</a>
        <a slot="img">查看</a>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '车牌号',
    dataIndex: 'licenseNum',
  },
  {
    title: '加油时间',
    dataIndex: 'supplyTime',
  },
  {
    title: '加油类型',
    dataIndex: 'supplyType',
  },
  {
    title: '加油站',
    dataIndex: 'gasStation',
  },
  {
    title: '金额',
    dataIndex: 'amount',
  },
  {
    title: '油料单价',
    dataIndex: 'unitPrice',
  },
  {
    title: '加油时公里数',
    dataIndex: 'distance',
  },
  {
    title: '油卡',
    dataIndex: 'card',
    scopedSlots: { customRender: 'card' },
  },
  {
    title: '报销司机',
    dataIndex: 'driver',
    scopedSlots: { customRender: 'driver' },
  },
  // {
  //   title: '关联用车记录',
  //   dataIndex: 'record',
  //   scopedSlots: { customRender: 'record' },
  // },
  {
    title: '票据图片',
    dataIndex: 'img',
    scopedSlots: { customRender: 'img' },
  },
]
const tableData = [
  {
    licenseNum: '测A123401',
    supplyTime: '2021-06-29',
    supplyType: '汽油#92',
    gasStation: '上三路加油站',
    amount: '88元',
    unitPrice: '8.01元/升',
    distance: '4.6',
    driver: '秦桧',
    // record: '测A123404-2021-06-29-001',
  },
  {
    licenseNum: '测A123402',
    supplyTime: '2021-07-01',
    supplyType: '汽油#92',
    gasStation: '首山路加油站',
    amount: '92元',
    unitPrice: '8.01元/升',
    distance: '5.8',
    driver: '袁世凯',
    // record: '测A123404-2021-06-29-001',
  },
  {
    licenseNum: '测A123403',
    supplyTime: '2021-07-02',
    supplyType: '汽油#92',
    gasStation: '上三路加油站',
    amount: '80元',
    unitPrice: '8.01元/升',
    distance: '4.2',
    driver: '吴三桂',
    // record: '测A123404-2021-06-29-001',
  },
  {
    licenseNum: '测A123404',
    supplyTime: '2021-07-02',
    supplyType: '汽油#92',
    gasStation: '上三路加油站',
    amount: '88元',
    unitPrice: '8.01元/升',
    distance: '4.6',
    driver: '魏忠贤',
    // record: '测A123404-2021-06-29-001',
  },
  {
    licenseNum: '测A123405',
    supplyTime: '2021-07-03',
    supplyType: '汽油#92',
    gasStation: '首山路加油站',
    amount: '99元',
    unitPrice: '8.01元/升',
    distance: '7.6',
    driver: '孙笑川',
    // record: '测A123404-2021-06-29-001',
  },
  {
    licenseNum: '测A123406',
    supplyTime: '2021-07-04',
    supplyType: '汽油#92',
    gasStation: '首山路加油站',
    amount: '88元',
    unitPrice: '8.01元/升',
    distance: '8.8',
    driver: '严嵩',
    // record: '测A123404-2021-06-29-001',
  }
]
export default {
  data() {
    return {
      tableData: tableData,
      columns: columns,
      currentCondition: '车牌号',
    }
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    conditionOnSelect(value, option) {
      this.currentCondition = value
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
  .tablePrt {
    margin-top: 10px;
    width: 98%;
    background-color: #ffffff;
    padding: 20px;
  }
}
</style>