<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入司机名称搜索" style="width: 300px" @search="onSearch" />
        <a-button type="primary" style="float: right; margin-right: 10px">导出</a-button>
        <a-button type="primary" style="float: right; margin-right: 10px" @click="newDriverVisible = true"
          ><a-icon type="plus" />新增司机</a-button
        >
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="driverList" :pagination="pagination">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" @click="showEditDriver(item)">编辑</a>
          <!-- <a slot="actions" @click="bindVisible = true">绑定车辆</a> -->
          <a-popconfirm
            slot="actions"
            title="确认删除该司机及其全部相关信息吗？"
            ok-text="是"
            cancel-text="否"
            @confirm="deleteDriver(index)"
          >
            <a>删除</a>
          </a-popconfirm>
          <a-list-item-meta>
            <div slot="description">
              {{ '联系方式：' + item.phoneNum }}
            </div>
            <a slot="title">{{ item.name }}</a>
            <a-avatar slot="avatar" icon="user" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            绑定车辆：
            <span v-for="(d, index) in item.bindCar" :key="d">
              <a-divider v-if="index != 0" type="vertical" />
              {{ vehicleList[Number(d) - 1].licenseNum }}
            </span>
          </div>
        </a-list-item>
      </a-list>
    </div>
    <a-modal v-model="newDriverVisible" title="新增司机" :destroyOnClose="true" :footer="null" :maskClosable="false">
      <new-driver />
    </a-modal>
    <a-modal v-model="bindVisible" :footer="null" title="车辆绑定" :destroyOnClose="true">
      <a-transfer
        :data-source="vehicleList"
        :titles="['未绑定的车辆', '该司机绑定的车辆']"
        :target-keys="targetKeys"
        :render="(item) => item.licenseNum"
        listStyle="width:200px"
        @change="handleChange"
      />
    </a-modal>
    <a-modal v-model="editDriverVisible" title="编辑" :destroyOnClose="true" :footer="null" :maskClosable="false" width='760px'>
      <edit-driver :originInfo="currentDriver" />
    </a-modal>
  </div>
</template>

<script>
import newDriver from './newDriver.vue'
import editDriver from './editDriver.vue'
import { driverList, vehicleList } from '@/mock/demoData.js'
export default {
  data() {
    return {
      driverList: driverList,
      bindVisible: false,
      newDriverVisible: false,
      editDriverVisible: false,
      vehicleList: vehicleList,
      targetKeys: ['1', '4'],
      currentDriver: undefined,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 6,
      },
    }
  },
  components: {
    newDriver,
    editDriver,
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys
      console.log('targetKeys: ', nextTargetKeys)
      console.log('direction: ', direction)
      console.log('moveKeys: ', moveKeys)
    },
    showEditDriver(item) {
      this.currentDriver = item
      this.editDriverVisible = true
    },
    deleteDriver(index) {
      this.driverList.splice(index, 1)
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
      color: red;
    }
    .greenFont {
      color: green;
    }
  }
}
</style>
