<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search :placeholder="`请输入车牌号搜索`" style="width: 200px" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
        <a-button type="primary" style="float: right; margin-right: 10px" @click="newVehicleVisible = true"
          ><a-icon type="plus" />新增</a-button
        >
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData" :pagination="pagination">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" @click="showDetails(item)">详情</a>
          <a slot="actions" @click="showEditForm(item)">修改</a>
          <a-popconfirm
            slot="actions"
            title="确认删除该车辆及其全部相关信息吗？"
            ok-text="是"
            cancel-text="否"
            @confirm="listData.splice(index, 1)"
          >
            <a>删除</a>
          </a-popconfirm>
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
    <a-modal v-model="newVehicleVisible" title="新增车辆" :destroyOnClose="true" :footer="null" :maskClosable="false">
      <new-vehicle />
    </a-modal>
    <a-modal v-model="editFormVisible" title="修改车辆信息" :destroyOnClose="true" :footer="null" :maskClosable="false">
      <edit-form :licenseNum="currentLicenseNum" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
import newVehicle from './newVehicle.vue'
import editForm from './edit.vue'
import { vehicleList } from '@/mock/demoData.js'
export default {
  data() {
    return {
      listData: vehicleList,
      detailsVisible: false,
      newVehicleVisible: false,
      editFormVisible: false,
      currentLicenseNum: null, //记录点击详情时的车牌号
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10,
      },
    }
  },
  components: {
    mydetails,
    newVehicle,
    editForm,
  },
  methods: {
    showDetails(item) {
      this.currentLicenseNum = item.licenseNum
      this.detailsVisible = true
    },
    showEditForm(item) {
      this.currentLicenseNum = item.licenseNum
      this.editFormVisible = true
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