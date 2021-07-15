<template>
  <!-- 会议申请 -->
  <div class="page-header-index-wide">
    <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="18" :style="{ marginBottom: '24px' }">
        <a-form :form="form">
          <ul class="clearfix">
            <li class="fl nav-item">
              会议名称
              <a-input placeholder="请输入会议名称" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              负责人姓名
              <a-input placeholder="请输入负责人姓名" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              负责人电话
              <a-input placeholder="请输入负责人电话" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              会议时间
              <a-range-picker @change="onChange" :style="{width:'300px'}"/>
            </li>
            <li class="fl nav-item">
              会议地点
              <a-input placeholder="请输入会议地点" :style="{width:'300px'}"></a-input>
            </li>
            <li class="fl nav-item">
              会议预算
              <a-input placeholder="请输入会议预算" :style="{width:'300px'}"></a-input>
            </li>
            <li class="nav-item">
              会议成员
              <!-- <img src="./成员.png" alt width="240px" height="80px" /> -->
            </li>
            <li class="nav-item">
              备注
              <a-textarea placeholder="请输入会议备注" :auto-size="{ minRows: 4, maxRows: 6 }" :style="{width:'800px'}"/>
              <!-- <a-input placeholder="请输入会议备注" type="textarea" :style="{width:'800px'}"></a-input> -->
            </li>
          </ul>
          <a-button :style="{ background: '#49a9ee', color: 'white' }">提交申请</a-button>
          <a-button :style="{ background: '#49a9ee', color: 'white' }">保存草稿</a-button>
        </a-form>
      </a-col>
      <a-col :sm="24" :md="24" :xl="6" :style="{ marginBottom: '24px'}">
        <a-tree
    v-model="checkedKeys"
    checkable
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    @expand="onExpand"
    @select="onSelect"
  />
      </a-col>
    </a-row>
  </div>
</template>
<script>
const treeData = [
  {
    title: "运营A组",
    key: "0-0",
    children: [
      { title: "0-0-0-0", key: "0-0-0-0" },
      { title: "0-0-0-1", key: "0-0-0-1" },
      { title: "0-0-0-2", key: "0-0-0-2" }
    ]
  },
  {
    title: "运营B组",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" }
    ]
  },
  {
    title: "产品B组",
    key: "0-2",
    children: [
      { title: "0-2-0-0", key: "0-2-0-0" },
      { title: "0-2-0-1", key: "0-2-0-1" },
      { title: "0-2-0-2", key: "0-2-0-2" }
    ]
  },
  {
    title: "研发A组",
    key: "0-3",
    children: [
      { title: "0-3-0-0", key: "0-3-0-0" },
      { title: "0-3-0-1", key: "0-3-0-1" },
      { title: "0-3-0-2", key: "0-3-0-2" }
    ]
  },
  {
    title: "研发B组",
    key: "0-4",
    children: [
      { title: "0-4-0-0", key: "0-4-0-0" },
      { title: "0-4-0-1", key: "0-4-0-1" },
      { title: "0-4-0-2", key: "0-4-0-2" }
    ]
  }
];
export default {
  data() {
    return {
      form: {},
      dateFormat: 'YYYY年MM月DD日',
         expandedKeys: ["0-1-0-0", "0-1-0-0"],
      autoExpandParent: true,
      checkedKeys: ["0-1-0-0"],
      selectedKeys: [],
      treeData
    }
  },
   watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
        onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    }
  }
  
}
</script>
<style>
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
  padding: 24px 0px;
  text-align: center;
}
#app #components-layout-demo-basic .ant-layout-sider {
  background: #aaa;
  color: #fff;
  text-align: center;
}

#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
/* fffff */
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
.nav-item {
  width: 90px;
  margin-right: 250px;
  margin-bottom: 20px;
}
</style>