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
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item">
          <a slot="actions" @click="showDetails(item)">详情</a>
          <a-list-item-meta>
            <div slot="description">
              {{ '用车人：' + item.user }}
              <a-divider type="vertical" />
              {{ '发车时间：' + item.time }}
              <a-divider type="vertical" />
              {{ '出发地：' + item.from }}
              <a-divider type="vertical" />
              {{ '目的地：' + item.to }}
              <a-divider type="vertical" />
              {{ item.isBack }}
            </div>
            <a slot="title" @click="showDetails(item)">{{ item.licenseNum }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            <font :class="item.status == '使用中' ? 'redFont' : 'greenFont'">{{ '状态：' + item.status }}</font>
          </div>
        </a-list-item>
      </a-list>
    </div>

    <a-modal v-model="detailsVisible" :footer="null" title="详情" :width="735" :destroyOnClose="true">
      <mydetails :id="currentItem" />
    </a-modal>
  </div>
</template>

<script>
import mydetails from './details.vue'
const listData = [
  {
    licenseNum: '测A123403',
    status: '使用中',
    user: '萧瑟',
    time: '2021-6-29',
    from: '福州市',
    to: '南京市',
    isBack: '双程',
  },
  {
    licenseNum: '测A123404',
    status: '已收车',
    user: '张三',
    time: '2021-6-29',
    from: '福州市',
    to: '南京市',
    isBack: '双程',
  },
]
export default {
  data() {
    return {
      listData: listData,
      detailsVisible: false,
      currentCondition: '车牌号',
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
    conditionOnSelect(value, option) {
      // console.log(value);
      this.currentCondition = value
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
      color: orangered;
    }
    .greenFont {
      color: blue;
    }
  }
}
</style>