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
    title: '报修人',
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
    title: '验收人',
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
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
  },
   {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
  },
   {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
  },
   {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
  },
   {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
  },
   {
    licenseNum: '测A123401',
    reporter: '2021-06-24',
    unit: 'XXX4S店',
    amount: 'XXX',
    prtPrice:'XX',
    charger: '丁一',
    fixCtx:'XXXXXXXXXXX',
    changePrt: '轮胎、雨刷器、后视镜',
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