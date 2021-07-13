<template>
  <a-card>
    <!-- 上部 -->

    <span>开锁时间段：</span>
    <a-date-picker
      v-model="startValue"
      :disabled-date="disabledStartDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="开始时间"
      @openChange="handleStartOpenChange"
    />
    <a-divider type="vertical"/>
    <a-date-picker
      v-model="endValue"
      :disabled-date="disabledEndDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="结束时间"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />

    <br/><br/>

    <span>锁编号：</span>
    <a-input style="width: 11%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>

    <a-divider type="vertical"/>

    <span>区域：</span>
    <a-cascader
      style="width: 19%"
      :options="selectOptions"
      change-on-select
      @change="areaChange"
      placeholder="请选择区域"
    />

    <a-divider type="vertical"/>

    <span>房间：</span>
    <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

    <br/><br/>

    <span>开锁方式：</span>
    <a-select style="width: 15%" placeholder="请选择开锁方式" @change="openlockChange" allowClear>
      <a-select-option value="1"> 指纹开锁</a-select-option>
      <a-select-option value="2"> 密码开锁</a-select-option>
      <a-select-option value="3"> 远程开锁</a-select-option>
    </a-select>

    <a-divider type="vertical"/>

    <span>开锁人所属部门：</span>
    <a-select style="width: 19%" placeholder="请选择部门" @change="deptChange" allowClear>
      <a-select-option v-for="(item, index) in deptData" :key="index">
        {{ item.deptName }}
      </a-select-option>
    </a-select>

    <a-divider type="vertical"/>

    <span>开锁人：</span>
    <a-input style="width: 11%" placeholder="请输入姓名" v-model="name" allowClear></a-input>


    <br/><br/>

    <!-- 下部 -->
    <a-row type="flex" justify="end">
      <a-col>
        <a-button @click="check">查询</a-button>
        <a-divider type="vertical"/>
        <a-button @click="showConfirm">导出</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import {areaData} from '../roomManager/data/area'
import {deptData} from '../roomManager/data/dept'

export default {
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      lockNum: '',
      selectOptions: areaData,
      roomNum: '',
      deptData: deptData,
      name: '',
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

    areaChange(value) {
    },

    openlockChange(value) {
    },

    deptChange(value) {
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
  },
}
</script>
<style>
</style>