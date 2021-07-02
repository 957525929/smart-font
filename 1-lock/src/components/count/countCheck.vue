<template>
  <a-card>
    <!-- 上部 -->
    <span>工号：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>姓名：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>部门：</span>
    <a-select default-value="market" style="width: 150px">
      <a-select-option value="market"> 营销部</a-select-option>
      <a-select-option value="distribution"> 配送部</a-select-option>
    </a-select>
    <a-divider type="vertical"/>
    <span>房间：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>锁编号：</span>
    <a-input style="width: 150px"></a-input>
    <br/><br/>


    <!-- 下部 -->
    <a-row justify="end" type="flex">
      <a-col>
        <a-button type="primary">查询</a-button>
        <a-divider type="vertical"/>
        <a-button @click="showConfirm">导出</a-button>
      </a-col>

    </a-row>
  </a-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {

    // 导出点击功能
    showConfirm() {
      this.$confirm({
        title: "是否导出当前表单？",
        okText: '确认',
        cancelText: '取消',
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "test",
      });
    },
  },
};
</script>