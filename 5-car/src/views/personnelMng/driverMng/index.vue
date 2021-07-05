<template>
  <div class="root">
    <div class="filterPrt">
      <div class="filterCtx">
        <a-input-search placeholder="请输入车牌号搜索" style="width: 300px" @search="onSearch" />
      </div>
    </div>
    <div class="listPrt">
      <a-list item-layout="horizontal" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item">
           <a slot="actions">编辑</a>
           <a slot="actions" @click="bindVisible=true">绑定车辆</a>
           <a slot="actions">删除</a>
          <a-list-item-meta>
            <div slot="description">
              {{ '联系方式：' + item.phoneNum }}
            </div>
            <a slot="title">{{ item.name }}</a>
            <a-avatar slot="avatar" icon="car" style="backgroundcolor: #04009a" />
          </a-list-item-meta>
          <div>
            <font :class="item.status == '空闲'||item.status =='出勤中' ? 'greenFont' : 'redFont'">{{ '状态：' + item.status }}</font>
          </div>
        </a-list-item>
      </a-list>
    </div>
     <a-modal v-model="bindVisible" :footer="null" title="车辆绑定" :destroyOnClose="true">
       <a-transfer
      :data-source="mockData"
      :titles="['未绑定的车辆', '该司机绑定的车辆']"
      :target-keys="targetKeys"
      :render="item => item.licenseNum"
      listStyle='width:200px'
      @change="handleChange"
    />
    </a-modal>
  </div>
</template>

<script>
const listData = [
  {
    name:'张三',
    phoneNum:'13712341234',
    status:'空闲'
  },
   {
    name:'卢本伟',
    phoneNum:'13712341234',
    status:'出勤中'
  },
   {
    name:'孙笑川',
    phoneNum:'13712341234',
    status:'空闲'
  },
   {
    name:'马保国',
    phoneNum:'13712341234',
    status:'病假'
  }
]
const mockData=[
  {
    key:'1',
    licenseNum: '测A123401',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    key:'2',
    licenseNum: '测A123402',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    key:'3',
    licenseNum: '测A123403',
    status: '正常',
    BX: '2022-06-03',
    BY: '2021-12-03',
    NS: '2022-06-03',
  },
  {
    key:'4',
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
      bindVisible: false, 
      mockData:mockData,
      targetKeys:['1','4']
    }
  },
  components: {
    
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
     handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys;

      console.log('targetKeys: ', nextTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
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
