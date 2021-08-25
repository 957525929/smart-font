<template>
  <div>
    <!-- <countCheck /> -->

    <!-- <lockcountForm /> -->
    <a-card>
      <span>位置：</span>
      <a-cascader
        style="width: 30%"
        :options="selectOptions"
        change-on-select
        @change="areaChange"
        :default-value="['0', '01', '011']"
        placeholder="请选择位置"
        :display-render="displayRender"
      />
      <a-divider type="vertical" />
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
      <a-divider type="vertical" />
      <a-button @click="check">查询</a-button>
      <a-divider type="vertical" />
      <a-button @click="showConfirm">导出</a-button>
    </a-card>
    <div class="chart">
      <a-card class="chart1">
        <div style="font-weight: bold">开锁次数统计</div>
        <Dabiao />
      </a-card>
      <a-card class="chart2">
        <div style="font-weight: bold">开锁方式统计</div>
        <Pie />
      </a-card>
      <a-card class="chart3">
        <!-- <div style="font-weight: bold">异常开锁信息</div>
        <br /><br />
        <a-timeline>
          <a-timeline-item color="red">{{ starDate }} 21:25:11 密码开锁</a-timeline-item>
          <a-timeline-item color="red">{{ endDate }} 22:11:36 远程开锁</a-timeline-item>
        </a-timeline> -->
      </a-card>
    </div>
    <lockcountForm />
  </div>
</template>
<script>
// import countCheck from '../../components/count/countCheck.vue'
import lockcountForm from '../../components/count/lockcountForm.vue'
import { areaData } from '../../components/roomManager/data/area.js'
import moment from 'moment'
import { formatDate } from '@/utils/util'

import Dabiao from './components/Dabiao.vue'
import Pie from './components/Pie.vue'

export default {
  components: {
    // countCheck,
    lockcountForm,
    Dabiao,
    Pie
  },
  data() {
    return {
      selectOptions: areaData,
      starDate: '',
      endDate: '',
      startValue: null,
      endValue: null,
      endOpen: false
    }
  },
  methods: {
    moment,
    displayRender({ labels }) {
      return labels.join('.')
    },
    getstardate() {
      this.starDate = formatDate(new Date().getTime() - 31 * 24 * 3600 * 1000, 'yyyy/MM/d')
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
        }
      })
    }
  }
}
</script>
<style scoped>
.chart {
  display: flex;
}
.chart1 {
  flex: 1;
}
.chart2 {
  flex: 1;
}
.chart3 {
  flex: 1;
}
</style>
