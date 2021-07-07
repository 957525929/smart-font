<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入车牌号搜索" style="width: 300px" @search="onSearch" />
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData" :pagination="pagination">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-popconfirm
            slot="actions"
            title="确认通过该用车申请？"
            ok-text="是"
            cancel-text="否"
            @confirm="pass(index)"
          >
            <a>通过</a>
          </a-popconfirm>
          <a slot="actions" @click="showUnpassModal(index)">驳回</a>
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
              <a-divider type="vertical" />
              {{ item.isBack }}
            </div>
            <a slot="title" @click="showDetails(item)">{{ item.user+'-'+item.time+'-01' }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            <!-- <font :class="item.status == '审核中' ? 'redFont' : 'greenFont'">{{ '状态：' + item.status }}</font> -->
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose="true">
      <mydetails :id="currentItem" />
    </a-modal>

    <a-modal v-model="unpassModalVisible" title="用车申请驳回" :destroyOnClose="true" @ok="handleUnpass">
      <div>驳回理由：</div>
      <a-textarea placeholder="请输入驳回该申请的原因" :rows="4" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
import { verifyList } from '@/mock/demoData.js'
export default {
  data() {
    return {
      listData: verifyList,
      detailsVisible: false,
      unpassModalVisible: false,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10,
      },
      currentItem: undefined, //点击列表操作时的记录
      currentIndex: undefined,
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
      this.listData.splice(index, 1)
    },
    showUnpassModal(index) {
      this.currentIndex = index
      this.unpassModalVisible = true
    },
    handleUnpass() {
      this.listData.splice(this.currentIndex, 1)
      this.unpassModalVisible = false
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
  }
}
</style>