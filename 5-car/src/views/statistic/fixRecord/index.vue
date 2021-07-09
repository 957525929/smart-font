<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        请选择统计时间段：
        <a-range-picker />&nbsp;&nbsp;
        <a-select style="width: 80px" defaultValue="车牌号" @select="conditionOnSelect">
          <a-select-option key="1" value="车牌号">车牌号</a-select-option>
          <a-select-option key="3" value="司机">司机</a-select-option>
        </a-select>
        <a-input-search :placeholder="`请输入${currentCondition}搜索`" style="width: 200px" @search="onSearch" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
      </div>
    </div>

    <div class="tablePrt">
      <a-table :columns="columns" :data-source="tableData">
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
    title: '报修时间',
    dataIndex: 'reporter',
  },
  {
    title: '承修单位',
    dataIndex: 'unit',
  },
  {
    title: '维修费用',
    dataIndex: 'amount',
  },
  {
    title: '配件费',
    dataIndex: 'prtPrice',
  },
  {
    title: '司机',
    dataIndex: 'charger',
  },
  {
    title: '维修项目内容',
    dataIndex: 'fixCtx',
  },
  {
    title: '更换主要部件',
    dataIndex: 'changePrt',
  },
  {
    title: '票据图片',
    dataIndex: 'img',
    scopedSlots: { customRender: 'img' },
  },
]
const tableData = [
  {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: '一汽4S店',
    amount: '450',
    prtPrice: '200',
    charger: '丁一',
    fixCtx: '更换损坏部件',
    changePrt: '轮胎、雨刷器、后视镜',
  },
  {
    licenseNum: '测A123402',
    reporter: '2021-06-25',
    unit: '一汽4S店',
    amount: '200',
    prtPrice: '80',
    charger: '王五',
    fixCtx: '更换损坏部件',
    changePrt: '轮胎',
  },
  {
    licenseNum: '测A123403',
    reporter: '2021-06-26',
    unit: '一汽4S店',
    amount: '300',
    prtPrice: '100',
    charger: '张三',
    fixCtx: '更换损坏部件',
    changePrt: '轮胎、后视镜',
  },
  {
    licenseNum: '测A123404',
    reporter: '2021-06-27',
    unit: '一汽4S店',
    amount: '450',
    prtPrice: '200',
    charger: '李四',
    fixCtx: '更换损坏部件',
    changePrt: '轮胎、雨刷器、后视镜',
  },
  {
    licenseNum: '测A123405',
    reporter: '2021-06-27',
    unit: '一汽4S店',
    amount: '100',
    prtPrice: '50',
    charger: '韩菱纱',
    fixCtx: '更换损坏部件',
    changePrt: '后视镜',
  },
  {
    licenseNum: '测A123406',
    reporter: '2021-06-28',
    unit: '一汽4S店',
    amount: '450',
    prtPrice: '200',
    charger: '李舜生',
    fixCtx: '更换损坏部件',
    changePrt: '轮胎、雨刷器、后视镜',
  },
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