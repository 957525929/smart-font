<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入用车人姓名搜索" style="width: 300px" @search="onSearch" />
        <a-button @click="showNewTask" type="primary" style="float: right; margin-right: 10px"
          ><a-icon type="plus" />新建派车</a-button
        >
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData" :pagination="pagination">
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions" @click="showDispatchModal(item)">{{ item.driver ? '改派' : '派单' }}</a>
          <!-- <a slot="actions" @click="showDetails(item)">详情</a> -->
          <!-- <a slot="actions">删除</a> -->
          <a-list-item-meta>
            <div slot="description">
              {{ '用车人：' + item.user }}
              <a-divider type="vertical" />
              {{ '用车时间：' + item.time+'  15:00' }}
              <a-divider type="vertical" />
              {{ '出发地：' + item.from }}
              <a-divider type="vertical" />
              {{ '目的地：' + item.to }}
              <a-divider type="vertical" />
              {{ item.isBack }}
            </div>
            <a slot="title" @click="showDetails(item)">{{ item.user + '-' + item.time + '-01' }}</a>
            <a-avatar slot="avatar" icon="solution" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div v-if="item.driver">
            车辆：{{ item.licenseNum }}
            <a-divider type="vertical" />
            司机：{{ item.driver }}
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose="true">
      <mydetails :id="currentItem" />
    </a-modal>
    <a-modal v-model="dispatchVisible" :title="dispatchType" :destroyOnClose="true" width="660px">
      <a-divider>调度信息</a-divider>
      <mydetails :id="currentItem" />
      <a-divider>车辆/司机指派</a-divider>
      <!-- <select-driver :id="currentItem" /> -->
      <div>
        <div style="margin-top: 10px; text-align: center">
          请选择车辆：
          <a-select style="width: 200px" @change="onCarChange" v-model="selectedCar">
            <a-select-option v-for="d in vehicleList" :key="d.key">
              {{ d.licenseNum + '（座位数：' + d.seatNum + '）' }}
            </a-select-option>
          </a-select>
        </div>
        <div style="margin-top: 10px; text-align: center">
          请选择司机：
          <a-select style="width: 200px" v-model="selectedDriver">
            <a-select-option v-for="d in driverList" :key="d.key">
              {{ d.name }}
            </a-select-option>
          </a-select>
        </div>
      </div>
    </a-modal>
    <a-modal v-model="newTaskVisible" title="新建派车任务" :destroyOnClose="true" :footer="null" :maskClosable="false">
      <new-task :id="currentItem" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
import newTask from './newTask.vue'
import { dispatchList, driverList, vehicleList } from '@/mock/demoData.js'
export default {
  mounted() {
    let alterList = []
    for (let i = 0; i < driverList.length; ++i) {
       //对象深度复制
      let temp = {};
      temp.key=driverList[i].key
      temp.name=driverList[i].name
      temp.phoneNum=driverList[i].phoneNum
      temp.bindCar=driverList[i].bindCar
      if (temp.name == '张三' || temp.name == '卢本伟' || temp.name == '孙笑川') {
        temp.name += '*'
      }
      alterList[i] = temp
    }
    this.driverList = alterList
    // console.log(alterList);
  },
  data() {
    return {
      listData: dispatchList,
      driverList: undefined,
      vehicleList: vehicleList,
      detailsVisible: false,
      dispatchVisible: false,
      currentItem: null, //点击列表操作栏时的记录
      dispatchType: '派单',
      newTaskVisible: false,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10,
      },
      selectedDriver: null,
      selectedCar: null,
    }
  },
  components: {
    mydetails,
    newTask,
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    showDetails(item) {
      this.currentItem = item
      this.detailsVisible = true
    },
    showDispatchModal(item) {
      this.currentItem = item
      console.log(item)
      if (item.driver) {
        this.dispatchType = '改派'
      } else {
        this.dispatchType = '派单'
      }
      this.dispatchVisible = true
    },
    showNewTask() {
      this.newTaskVisible = true
    },
    onCarChange() {
      this.selectedDriver = '张三*'
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
  }
}
</style>