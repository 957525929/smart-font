<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入车牌号搜索" style="width: 300px" @search="onSearch" />
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a slot="actions" v-if="item.status == '审核中'" @click="pass(index)">通过</a>
          <a slot="actions" v-if="item.status == '已通过'" @click="unpass(index)">不通过</a>
          <a slot="actions" @click="showDetails(item)">详情</a>
          <a-list-item-meta>
            <div slot="description">
              {{ '用车人：' + item.user }}
              <a-divider type="vertical" />
              {{ '用车时间：' + item.time }}
              <a-divider type="vertical" />
              {{ '出发地：' + item.from }}
              <a-divider type="vertical" />
              {{ '目的地：' + item.to }}
            </div>
            <a slot="title">{{ item.licenseNum }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            <font :class="item.status == '审核中' ? 'redFont' : 'greenFont'">{{ '状态：' + item.status }}</font>
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose='true'>
      <mydetails :id="currentItem" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
const listData = [
  {
    licenseNum: '测A123401',
    status: '审核中',
    user: '香菱',
    time: '2021-6-29',
    from: '福州市',
    to: '南京市',
  },
  {
    licenseNum: '测A123402',
    status: '已通过',
    user: '胡桃',
    time: '2021-6-29',
    from: '福州市',
    to: '南京市',
  },
]
export default {
  data() {
    return {
      listData: listData,
      detailsVisible: false,
      currentItem: null, //点击详情时的记录
    }
  },
  components: {
    mydetails,
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    pass(index) {
      this.listData[index].status = '已通过'
    },
    unpass(index) {
      this.listData[index].status = '审核中'
    },
    showDetails(item) {
      this.currentItem = item
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
      color: red;
    }
    .greenFont {
      color: green;
    }
  }
}
</style>