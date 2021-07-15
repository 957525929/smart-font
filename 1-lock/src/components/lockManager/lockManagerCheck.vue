<template>
  <a-card>
    <!-- 上部 -->
    <span>锁状态：</span>

    <a-select style="width: 11%" default-value="1" @change="lockChange" allowClear>
      <a-select-option value="1"> 低电量 </a-select-option>
      <a-select-option value="2"> 关闭 </a-select-option>
      <a-select-option value="3"> 开锁 </a-select-option>
    </a-select>

    <br /><br />

    <span>工号： &nbsp;&nbsp; </span>
    <a-input style="width: 11%" placeholder="请输入工号" v-model="Num" allowClear></a-input>

    <a-divider type="vertical" />

    <span>姓名：</span>
    <a-input style="width: 11%" placeholder="请输入姓名" v-model="name" allowClear></a-input>

    <br /><br />

    <span>位置： &nbsp;&nbsp; </span>
    <a-cascader
      style="width: 22%"
      :options="selectOptions"
      change-on-select
      @change="areaChange"
      placeholder="请选择位置"
    />

    <a-divider type="vertical" />

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <a-divider type="vertical" />

    <template v-if="toggleSearchStatus">
      <br /><br />
      <span>锁编号：</span>
      <a-input style="width: 11%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>
      <a-divider type="vertical" />
    </template>
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
      toggleSearchStatus: false,
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
    handleToggleSearch() {
      this.toggleSearchStatus = !this.toggleSearchStatus
    },
    lockChange(value) {
      console.log(value)
    },
  },
}
</script>
