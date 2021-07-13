<template>
  <a-card>
    <!-- 上部 -->

    <span>锁编号：</span>
    <a-input style="width: 11%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>

    <a-divider type="vertical" />

    <span>区域：</span>
    <a-cascader
      style="width: 19%"
      :options="selectOptions"
      change-on-select
      @change="areaChange"
      placeholder="请选择区域"
    />

    <a-divider type="vertical" />

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <a-divider type="vertical" />

    <template v-if="toggleSearchStatus">
      <span>工号：</span>
      <a-input style="width: 11%" placeholder="请输入工号" v-model="Num" allowClear></a-input>

      <a-divider type="vertical" />

      <span>姓名：</span>
      <a-input style="width: 11%" placeholder="请输入姓名" v-model="name" allowClear></a-input>
    </template>

    <br /><br />

    <!-- 下部 -->
    <a @click="handleToggleSearch">
      {{ toggleSearchStatus ? '收起' : '展开' }}
      <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
    </a>
    <a-row type="flex" justify="end">
      <a-col>
        <a-button @click="check">查询</a-button>
        <a-divider type="vertical" />
        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import { areaData } from '../roomManager/data/area.js'

export default {
  data() {
    return {
      lockNum: '',
      selectOptions: areaData,
      roomNum: '',
      Num: '',
      name: '',
      toggleSearchStatus: '',
    }
  },
  methods: {
    areaChange(value) {},
    handleToggleSearch() {},

    //查询
    check() {
      // console.log(this.lockNum)
    },

    // 导出点击功能
    showConfirm() {
      this.$confirm({
        title: '是否导出当前表单？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          // console.log('OK')
        },
        onCancel() {
          // console.log('Cancel')
        },
      })
    },
  },
}
</script>