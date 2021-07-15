<template>
  <a-card>
    <!-- 上部 -->
    <span>报警时间段：</span>
    <a-date-picker
      v-model="startValue"
      :default-value="moment('2021-02-01')"
      :disabled-date="disabledStartDate"
      format="YYYY-MM-DD"
      @openChange="handleStartOpenChange"
      style="width: 18.5%"
    />
    <a-divider type="vertical" />
    <a-date-picker
      v-model="endValue"
      :default-value="moment('2021-07-01')"
      :disabled-date="disabledEndDate"
      format="YYYY-MM-DD"
      :open="endOpen"
      @openChange="handleEndOpenChange"
      style="width: 18%"
    />

    <span style="font-weight: bold"> &nbsp; | &nbsp; </span>

    <span>位置：</span>
    <a-cascader
      style="width: 23%"
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
      <span class="lockNum">锁编号： &nbsp; &nbsp; &nbsp; </span>
      <a-input style="width: 11%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>
      <a-divider type="vertical" />
    </template>

    <!-- 下部 -->
    <a @click="handleToggleSearch">
      {{ toggleSearchStatus ? '收起' : '展开' }}
      <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
    </a>

    <br /><br />
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
import { areaData } from '../roomManager/data/area'
import moment from 'moment'

export default {
  data() {
    return {
      lockNum: '',
      selectOptions: areaData,
      roomNum: '',
      startValue: null,
      endValue: null,
      endOpen: false,
      toggleSearchStatus: false,
    }
  },
  watch: {
    startValue(val) {
      console.log('startValue', val)
    },
    endValue(val) {
      console.log('endValue', val)
    },
  },
  methods: {
    moment,
    areaChange(value) {},

    //日期选择
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    },

    check() {
      // console.log(this.lockNum)
    },

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
  },
}
</script>
<style>
</style>