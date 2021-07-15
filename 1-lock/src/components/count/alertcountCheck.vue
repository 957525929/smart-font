<template>
  <a-card>
    <!-- 上部 -->
    <a-row type="flex">
      <a-col :span="14">
        <span>报警时间段：</span>
        <a-date-picker
          v-model="startValue"
          :disabled-date="disabledStartDate"
          format="YYYY-MM-DD"
          placeholder="开始时间"
          @openChange="handleStartOpenChange"
          style="width: 30%"
        />
        <a-divider type="vertical" />
        <a-date-picker
          v-model="endValue"
          :disabled-date="disabledEndDate"
          format="YYYY-MM-DD"
          placeholder="结束时间"
          :open="endOpen"
          @openChange="handleEndOpenChange"
          style="width: 31%"
        />

        <br /><br />

        <span>位置： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
        <a-cascader
          style="width: 36%"
          :options="selectOptions"
          change-on-select
          @change="areaChange"
          placeholder="请选择位置"
        />

        <a-divider type="vertical" />

        <span>房间：</span>
        <a-input style="width: 19%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

        <br /><br />

        <span>报警方式： &nbsp; &nbsp;</span>
        <a-select style="width: 22%" placeholder="请选择开锁方式" @change="openlockChange" allowClear>
          <a-select-option value="1"> 低电量</a-select-option>
          <a-select-option value="2"> 密码错误多次</a-select-option>
        </a-select>

        <a-divider type="vertical" />

        <template v-if="toggleSearchStatus">
          <br /><br />
          <span class="lockNum">锁编号： &nbsp; &nbsp; &nbsp; </span>
          <a-input style="width: 22%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>
          <a-divider type="vertical" />
        </template>

        <!-- 下部 -->
        <a @click="handleToggleSearch">
          {{ toggleSearchStatus ? '收起' : '展开' }}
          <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
        </a>
        <br /><br /><br />
        <a-row type="flex">
          <a-col>
            <a-button @click="check">查询</a-button>
            <a-divider type="vertical" />
            <a-button @click="showConfirm">导出</a-button>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="7">
        <span>
          <bar :dataSource="dataSource" :height="180" />
        </span>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </a-card>
</template>
<script>
import { areaData } from '../roomManager/data/area'
import Bar from '@/components/chart/Bar'

export default {
  components: {
    Bar,
  },
  data() {
    return {
      lockNum: '',
      selectOptions: areaData,
      roomNum: '',
      startValue: null,
      endValue: null,
      endOpen: false,
      toggleSearchStatus: false,
      dataSource: [
        { x: '低电量报警', y: 6 },
        { x: '密码错误多次', y: 6 },
      ],
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
    openlockChange(value) {},
  },
}
</script>
<style>
</style>