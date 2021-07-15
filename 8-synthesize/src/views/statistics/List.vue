<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">
          <a-col :md="6" :sm="9">
            <a-form-item label="文档类型">
              <a-select class="w150" placeholder="请选择文档类型">
                <a-select-option value="0">资产</a-select-option>
                <a-select-option value="1">会议纪要</a-select-option>
                <a-select-option value="2">记录</a-select-option>
                <a-select-option value="3">报告</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="10">
            <a-form-item label="时间">
              <a-date-picker
                class="w150"
                format="YYYY-MM"
                :default-value="moment(current_start_date, 'YYYY/MM')"
              />
              ~
              <a-date-picker
                class="w150"
                format="YYYY-MM"
                :default-value="moment(current_stop_date, 'YYYY/MM')"
              />
            </a-form-item>
          </a-col>

          <a-col>
            <a-button style="float: right; margin-right: 10px" type="primary"> 查询 </a-button>
          </a-col>
        </a-row>
      </a-form>

      <BarMultid :dataSource="dataSource" :fields="field" :height="420" />
    </div>
  </a-card>
</template>

<script>
import BarMultid from '@/components/chart/BarMultid'
import moment from 'moment'
export default {
  name: 'ChartDemo',
  components: {
    BarMultid,
  },
  data() {
    return {
      moment,
      field: ['2021.02', '2021.03', '2021.04', '2021.05', '2021.06', '2021.07'],
      dataSource: [
        {
          type: '资产', // 列名
          2021.02: 10,
          2021.03: 8,
          2021.04: 5,
          2021.05: 15,
          2021.06: 12,
          2021.07: 20,
        },
        {
          type: '会议纪要',
          2021.02: 1,
          2021.03: 6,
          2021.04: 12,
          2021.05: 11,
          2021.06: 15,
          2021.07: 12,
        },
        {
          type: '记录',
          2021.02: 9,
          2021.03: 1,
          2021.04: 5,
          2021.05: 13,
          2021.06: 21,
          2021.07: 12,
        },
        {
          type: '报告',
          2021.02: 15,
          2021.03: 21,
          2021.04: 3,
          2021.05: 5,
          2021.06: 25,
          2021.07: 10,
        },
      ],
    }
  },
  computed: {
    current_stop_date() {
      var nowDate = new Date()
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
        hour: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds(),
      }
      // console.log(date);
      let systemDate =
        date.year +
        '年' +
        date.month +
        '月' +
        date.date +
        '日' +
        date.hour +
        '时' +
        date.minutes +
        '分' +
        date.seconds +
        '秒'
      return systemDate
    },
    current_start_date() {
      var nowDate = new Date()
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() - 4,
        date: nowDate.getDate(),
        hour: nowDate.getHours(),
        minutes: nowDate.getMinutes(),
        seconds: nowDate.getSeconds(),
      }
      // console.log(date);
      let systemDate =
        date.year +
        '年' +
        date.month +
        '月' +
        date.date +
        '日' +
        date.hour +
        '时' +
        date.minutes +
        '分' +
        date.seconds +
        '秒'
      return systemDate
    },
  },
}
</script>
<style lang="less" scoped>
@import '~@assets/less/common.less';
.w150 {
  width: 150px;
}
.w140 {
  width: 140px;
}
</style>
