<template>
  <a-card>
    <span>房间：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>锁编号：</span>
    <a-input style="width: 150px"></a-input>
    <a-divider type="vertical"/>
    <span>维修时间：</span>
    <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" style="width: 150px"/>
    <a-divider type="vertical"/>

    <br/><br/>
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
import moment from "moment";

export default {
  methods: {
    moment,
    // 查询点击功能
    showConfirm() {
      this.$confirm({
        title: "是否导出当前表单？",
        okText: "确认",
        cancelText: "取消",
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