<template>
  <a-card>
    <!-- 上部 -->

    <span>开锁时间段：</span>
    <a-date-picker
      style="width: 18.3%"
      :default-value="moment(getstardate())"
      v-model="startValue"
      :disabled-date="disabledStartDate"
      format="YYYY-MM-DD"
      @openChange="handleStartOpenChange"
    />
    <a-divider type="vertical" />
    <!-- :placeholder="endDate" -->
    <a-date-picker
      style="width: 18%"
      :default-value="moment(getenddate())"
      v-model="endValue"
      :disabled-date="disabledEndDate"
      format="YYYY-MM-DD"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />

    <span style="font-weight: bold"> &nbsp; | &nbsp; </span>

    <span>开锁人所属部门：</span>
    <a-select style="width: 18%" placeholder="请选择部门" @change="deptChange" allowClear>
      <a-select-option v-for="(item, index) in deptData" :key="index">
        {{ item.deptName }}
      </a-select-option>
    </a-select>

    <a-divider type="vertical" />

    <span>开锁人姓名：</span>
    <a-input style="width: 13.6%" placeholder="请输入姓名" v-model="name" allowClear></a-input>

    <br /><br />

    <span>位置： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
    <a-cascader
      style="width: 29%"
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
      <span>锁编号： &nbsp; &nbsp; &nbsp; </span>
      <a-input style="width: 13%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>

      <a-divider type="vertical" />

      <span>开锁方式：</span>
      <a-select style="width: 17.8%" placeholder="请选择开锁方式" @change="openlockChange" allowClear>
        <a-select-option value="1"> 指纹开锁</a-select-option>
        <a-select-option value="2"> 密码开锁</a-select-option>
        <a-select-option value="3"> 远程开锁</a-select-option>
      </a-select>

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
import { areaData } from '../roomManager/data/area'
import { deptData } from '../roomManager/data/dept'
import moment from 'moment'
import { formatDate } from '@/utils/util'

export default {
  // mounted() {
  //   this.endDate = formatDate(new Date().getTime() - 0 * 24 * 3600 * 1000, 'yyyy/MM/dd')
  //   this.starDate = formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyy/MM/dd')
  // },
  data() {
    return {
      starDate: '',
      endDate: '',
      startValue: null,
      endValue: null,
      endOpen: false,
      lockNum: '',
      selectOptions: areaData,
      roomNum: '',
      deptData: deptData,
      name: '',
      toggleSearchStatus: false,
      endate: '2021-06-18',
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
    //日期选择
    getstardate() {
      this.starDate = formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyy/MM/d')
      return this.starDate
    },
    getenddate() {
      this.endDate = formatDate(new Date().getTime() - 0 * 24 * 3600 * 1000, 'yyyy/MM/d')
      return this.endDate
    },
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

    areaChange(value) {},

    openlockChange(value) {},

    deptChange(value) {},

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