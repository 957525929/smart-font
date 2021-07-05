<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search :placeholder="`请输入车牌号搜索`" style="width: 200px" @search="onSearch" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
        <a-button type="primary" style="float: right; margin-right: 10px" @click="newVehicleVisible=true">新增</a-button>
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions" @click="showDetails(item)">详情</a>
          <a slot="actions">修改</a>
          <a slot="actions">删除</a>
          <a-list-item-meta>
            <div slot="description">
              {{ '保险到期' + item.BX }}
              <a-divider type="vertical" />
              {{ '保养到期' + item.BY }}
              <a-divider type="vertical" />
              {{ '年审到期' + item.NS }}
            </div>
            <a slot="title" @click="showDetails(item)">{{ item.licenseNum }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            <font :class="item.status == '正常' ? 'greenFont' : 'redFont'">{{ '状态：' + item.status }}</font>
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose="true">
      <mydetails :licenseNum="currentLicenseNum" />
    </a-modal>
    <a-modal v-model="newVehicleVisible" title="新增车辆" :destroyOnClose='true' :footer="null" :maskClosable='false'>
      <new-vehicle />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
import newVehicle from './newVehicle.vue'
const listData = [
  {
    licenseNum: '测A123401',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    licenseNum: '测A123402',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    licenseNum: '测A123403',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    licenseNum: '测A123404',
    status: '维修中',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
]
export default {
  data() {
    return {
      listData: listData,
      detailsVisible: false,
      newVehicleVisible:false,
      currentLicenseNum: null, //记录点击详情时的车牌号
    }
  },
  components: {
    mydetails,
    newVehicle
  },
  methods: {
    showDetails(item) {
      this.currentLicenseNum = item.licenseNum
      this.detailsVisible = true
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
  .listPrt {
    margin-top: 10px;
    width: 98%;
    background-color: #ffffff;
    padding: 20px;
    .redFont {
      color: orangered;
    }
    .greenFont {
      color: green;
    }
  }
}
</style>