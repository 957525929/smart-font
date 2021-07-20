<template>
  <a-card>
    <!-- 上部 -->
    <a-row type="flex">
      <a-col :span="14">
        <span>开锁时间段：</span>
        <a-date-picker
          style="width: 36%"
          :default-value="moment(getstardate())"
          v-model="startValue"
          :disabled-date="disabledStartDate"
          format="YYYY-MM-DD"
          @openChange="handleStartOpenChange"
        />
        <a-divider type="vertical" />
        <a-date-picker
          style="width: 37%"
          v-model="endValue"
          :disabled-date="disabledEndDate"
          format="YYYY-MM-DD"
          :default-value="moment(getenddate())"
          :open="endOpen"
          @openChange="handleEndOpenChange"
        />

        <br /><br />

        <span>开锁人部门：</span>
        <a-select style="width: 36%" placeholder="请选择部门" @change="deptChange" allowClear>
          <a-select-option v-for="(item, index) in deptData" :key="index">
            {{ item.deptName }}
          </a-select-option>
        </a-select>

        <a-divider type="vertical" />

        <span>开锁人：</span>
        <a-input style="width: 29%" placeholder="请输入姓名" v-model="name" allowClear></a-input>

        <br /><br />

        <span>位置： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
        <a-cascader
          style="width: 48%"
          :options="selectOptions"
          change-on-select
          @change="areaChange"
          placeholder="请选择位置"
        />

        <a-divider type="vertical" />

        <span>房间：</span>
        <a-input style="width: 19%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

        <a-divider type="vertical" />

        <template v-if="toggleSearchStatus">
          <br /><br />
          <span>锁编号： &nbsp; &nbsp; &nbsp; </span>
          <a-input style="width: 31.5%" placeholder="请输入锁编号" v-model="lockNum" allowClear></a-input>

          <a-divider type="vertical" />

          <span>开锁方式：</span>
          <a-select style="width: 32%" placeholder="请选择开锁方式" @change="openlockChange" allowClear>
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
          <div class="bartitle">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 开锁次数统计：</div>
          <br />
          <Pie :dataSource="dataSource" :height="180" />
        </span>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </a-card>
</template>
<script>
import { areaData } from '../roomManager/data/area'
import { deptData } from '../roomManager/data/dept'
// import Bar from '@/components/chart/Bar'
import Pie from '@/components/chart/Pie'
import moment from 'moment'
import { formatDate } from '@/utils/util'

export default {
  components: {
    // Bar,
    Pie,
  },
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
      toggleSearchStatus: false,
      dataSource: [
        { item: '指纹开锁', count: 251 },
        { item: '密码开锁', count: 101 },
        { item: '远程开锁', count: 6 },
      ],
      starDate: '',
      endDate: '',
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

    getstardate() {
      this.starDate = formatDate(new Date().getTime() - 181 * 24 * 3600 * 1000, 'yyyy/MM/d')
      return this.starDate
    },
    getenddate() {
      this.endDate = formatDate(new Date().getTime() - 0 * 24 * 3600 * 1000, 'yyyy/MM/d')
      return this.endDate
    },
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