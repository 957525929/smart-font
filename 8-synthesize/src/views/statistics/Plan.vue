<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">

        <a-row :gutter="10">

          <a-col :md="6" :sm="9">
            <a-form-item label="类型">
              <a-select class="w150" placeholder="请选择类型">
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
                <a-select-option value="3">未完成</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="10">
            <a-form-item label="时间">
              <a-date-picker class="w140" placeholder="请选择时间" />
              ~
              <a-date-picker class="w140" placeholder="请选择时间" />
            </a-form-item>
          </a-col>

          <a-col>
            <a-button style="float:right;margin-right:10px" type="primary"> 查询
            </a-button>
          </a-col>

        </a-row>

      </a-form>

      <BarMultid :dataSource="dataSource" :fields="field" :height="420" />
    </div>
  </a-card>
</template>

<script>

import BarMultid from '@/components/chart/BarMultid'
export default {
  name: 'ChartDemo',
  components: {
    BarMultid
  },
  data() {
    return {
      field: [
        "2017", "2018", "2019", "2020", "2021"
      ],
      dataSource: [
        {
          "type": "未完成", // 列名
          "2017": 320,
          "2018": 332,
          "2019": 301,
          "2020": 334,
          "2021": 390,
        },
        {
          "type": "进行中",
          "2017": 220,
          "2018": 182,
          "2019": 191,
          "2020": 234,
          "2021": 290,
        },
        {
          "type": "已完成",
          "2017": 150,
          "2018": 232,
          "2019": 201,
          "2020": 154,
          "2021": 190,
        }
      ]
    }
  }
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