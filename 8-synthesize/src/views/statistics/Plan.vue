<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">
          <a-col :md="6" :sm="9">
            <a-form-item label="类型">
              <a-select default-value="1" class="w150" placeholder="请选择类型">
                <a-select-option value="0">计划</a-select-option>
                <a-select-option value="1">任务</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="9">
            <a-form-item label="状态">
              <a-select class="w150" placeholder="请选择状态">
                <a-select-option value="0">未开始</a-select-option>
                <a-select-option value="1">进行中</a-select-option>
                <a-select-option value="2">已完成</a-select-option>
                <a-select-option value="3">已超期</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="10">
            <a-form-item label="时间">
              <a-date-picker class="w150" format="YYYY-MM" :default-value="moment(current_start_date)" />
              ~
              <a-date-picker class="w150" format="YYYY-MM" :default-value="moment(current_stop_date)" />
            </a-form-item>
          </a-col>

          <a-col>
            <a-button style="float: right; margin-right: 10px" type="primary"> 查询 </a-button>
          </a-col>
        </a-row>
      </a-form>
      <h2>任务状态统计:</h2>
      <BarMultid :dataSource="dataSource" :fields="field" :height="420" />
    </div>
  </a-card>
</template>

<script>
import BarMultid from '@/components/chart/BarMultid'
import moment from 'moment'
import { formatDate } from '@/utils/util'
export default {
  name: 'ChartDemo',
  components: {
    BarMultid,
  },
  data() {
    return {
      moment,
      current_start_date: formatDate('2021-02', 'yyyy-MM-dd'),
      current_stop_date: formatDate('2021-07', 'yyyy-MM-dd'),
      field: ['2021.02', '2021.03', '2021.04', '2021.05', '2021.06', '2021.07'],
      dataSource: [
        {
          type: '未开始', // 列名
          2021.02: 8,
          2021.03: 1,
          2021.04: 4,
          2021.05: 5,
          2021.06: 2,
          2021.07: 8,
        },
        {
          type: '进行中',
          2021.02: 7,
          2021.03: 5,
          2021.04: 18,
          2021.05: 8,
          2021.06: 12,
          2021.07: 8,
        },
        {
          type: '已完成',
          2021.02: 10,
          2021.03: 8,
          2021.04: 10,
          2021.05: 5,
          2021.06: 2,
          2021.07: 12,
        },
        {
          type: '已超期',
          2021.02: 12,
          2021.03: 7,
          2021.04: 5,
          2021.05: 12,
          2021.06: 17,
          2021.07: 2,
        },
      ],
    }
  },
  mounted() {
    // this.searchCols = this.field.filter((item) => {
    //   return item
    // })
  },
}
</script>
<style lang="less" scoped>
.w150 {
  width: 150px;
}
.w140 {
  width: 140px;
}
</style>