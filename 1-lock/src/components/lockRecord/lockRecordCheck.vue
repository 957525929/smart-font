<template>
  <a-card>
    <span>房间：</span>
    <a-input style="width: 100px"></a-input>
    <a-divider type="vertical" />
    <span>姓名：</span>
    <a-input style="width: 100px"></a-input>
    <a-divider type="vertical" />
    <span>部门：</span>
    <a-select default-value="market" style="width: 100px">
      <a-select-option value="market"> 营销部</a-select-option>
      <a-select-option value="distribution"> 配送部</a-select-option>
    </a-select>
    <a-divider type="vertical" />
    <span>开锁时间：</span>
    <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" style="width: 100px" />
    ~
    <a-time-picker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" style="width: 100px" />
    <a-divider type="vertical" />
    <span>开锁方式：</span>
    <a-select default-value="remote" style="width: 100px">
      <a-select-option value="remote"> 远程开锁</a-select-option>
      <a-select-option value="finger"> 指纹</a-select-option>
    </a-select>

    <br /><br />
    <a-row justify="end" type="flex">
      <a-col>
        <a-button type="primary">查询</a-button>
        <a-divider type="vertical" />
        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import moment from 'moment'

export default {
  methods: {
    moment,

    // 查询点击功能
    showConfirm() {
      this.$confirm({
        title: '是否导出当前表单？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
        class: 'test',
      })
    },
  },
}
</script>