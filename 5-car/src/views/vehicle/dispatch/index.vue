<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入车牌号搜索" style="width: 300px" @search="onSearch" />
        <a-button @click="showNewTask" type="primary" style="float: right; margin-right: 10px">新建派车</a-button>
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions" @click="showSelectDriver(item)">改派</a>
          <a slot="actions" @click="showDetails(item)">详情</a>
          <a slot="actions">删除</a>
          <a-list-item-meta>
            <div slot="description">
              {{ '用车人：' + item.user }}
              <a-divider type="vertical" />
              {{ '用车时间：' + item.time }}
              <a-divider type="vertical" />
              {{ '出发地：' + item.from }}
              <a-divider type="vertical" />
              {{ '目的地：' + item.to }}
               <a-divider type="vertical" />
               {{  item.isBack }}
            </div>
            <a slot="title" @click="showDetails(item)">{{ item.licenseNum }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            司机：<a>{{item.driver}}</a>
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose='true'>
      <mydetails :id="currentItem" />
    </a-modal>
    <a-modal v-model="selectDriverVisible" title="改派司机" :destroyOnClose='true'>
      <select-driver :id="currentItem" />
    </a-modal>
    <a-modal v-model="newTaskVisible" title="新建派车任务" :destroyOnClose='true' :footer="null" :maskClosable='false'>
      <new-task :id="currentItem" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
import selectDriver from './selectDriver.vue'
import newTask from './newTask.vue'
const listData = [
  {
    licenseNum: '测A123402',
    driver: '卢本伟',
    user: '胡桃',
    time: '2021-6-29',
    from: '福州市',
    to: '南京市',
    isBack:'双程'
  },
]
export default {
  data() {
    return {
      listData: listData,
      detailsVisible: false,
      selectDriverVisible:false,
      currentItem: null, //点击详情时的记录
      newTaskVisible:false
    }
  },
  components: {
    mydetails,
    selectDriver,
    newTask
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    showDetails(item) {
      this.currentItem = item
      this.detailsVisible = true
    },
    showSelectDriver(item){
      this.currentItem = item
      this.selectDriverVisible = true
    },
    showNewTask(){
      this.newTaskVisible=true
    }
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