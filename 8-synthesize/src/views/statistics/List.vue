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
          "type": "资产", // 列名
          "2017": 310,
          "2018": 332,
          "2019": 321,
          "2020": 334,
          "2021": 390,
        },
        {
          "type": "会议纪要",
          "2017": 220,
          "2018": 182,
          "2019": 131,
          "2020": 214,
          "2021": 290,
        },
        {
          "type": "记录",
          "2017": 120,
          "2018": 232,
          "2019": 201,
          "2020": 114,
          "2021": 190,
        },
        {
          "type": "报告",
          "2017": 102,
          "2018": 20,
          "2019": 300,
          "2020": 125,
          "2021": 40,
        }
      ]
    }
  }
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
