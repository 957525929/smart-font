<template>
  <!-- 会议统计 -->
  <div>
    <!-- 查询区域 -->
    <div style="background-color: #fff;padding: 15px 10px;">
      <a-row type="flex" align="middle">
        <a-col>
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按预约类型筛选</span>
        </a-col>
        <a-col>
          <a-select :style="{width:'150px'}" @change="handleChange" placeholder="请选择预约类型" v-model="typeAppoint">
            <a-select-option value="公司会议">公司会议</a-select-option>
            <a-select-option value="个人">个人</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col style="margin-left:30px">
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按酒店名称筛选</span>
        </a-col>
        <a-col>
          <a-select mode="tags" :style="{width:'300px'}" showSearch @change="handleChange" placeholder="请选择酒店名称"
            v-model="selectHotel">
            <a-select-option value="福州富力威斯汀酒店">福州富力威斯汀酒店</a-select-option>
            <a-select-option value="福州品悦酒店">福州品悦酒店</a-select-option>
            <a-select-option value="福州世纪金源酒店">福州世纪金源酒店</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col style="margin-left:30px">
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按日期筛选</span>
        </a-col>
        <a-col>
          <a-radio-group v-model="time" @change="timeSelsect">
            <a-radio-button value="week">本周</a-radio-button>
            <a-radio-button value="month">本月</a-radio-button>
            <a-radio-button value="month">本季度</a-radio-button>
            <a-radio-button value="year">本年</a-radio-button>
            <a-radio-button value="custom">自定义</a-radio-button>
          </a-radio-group>
        </a-col>
        <a-col v-if="customSelect" style='margin-left:10px;'>
          <a-date-picker placeholder="请选择开始" :format="dateFormat" v-model="dateStart"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker placeholder="请选择结束" :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"></a-date-picker>
        </a-col>
      </a-row>
      <a-row type="flex" align="middle" style="margin-top:20px">
        <a-col :span="17"></a-col>
        <a-col>
          <a-button style='margin-left:20px;background:#49a9ee;color:white' icon="search" @click="searchQuery">查询
          </a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          <a-button style='margin-left:20px;background:orange;color:white;margin-left: 8px' @click="analysis">智能分析
          </a-button>
          <a-button style='margin-left:20px;background:#49a9ee;color:white;margin-left: 8px' icon="download"
            @click="handleExportXls('协议酒店统计')">导出</a-button>
        </a-col>
      </a-row>
    </div>
    <div style="background-color: #fff;margin-top:10px; padding: 15px 10px;">
      <a-row type="flex" align="middle">
        <a-col :span="10">
          <h3 style="font-size: 16px; font-weight: 600;">酒店预约次数</h3>
          <!-- <bar v-bind:dataSource="dataSource"  v-bind:height="height"></bar> -->
          <LineChartMultid style='margin-top: 50px;' :dataSource="dataSourceLine" :fields='fieldsLine'
            :aliases="fieldsRename" />
        </a-col>
        <a-col :span="1"></a-col>
        <a-col :span="12">
          <pie title="饼图" v-bind:height="heightPie" v-bind:dataSource="dataSourcePie"></pie>
        </a-col>
      </a-row>
    </div>
    <div style="background-color: #fff;margin-top:10px; padding: 15px 10px;">
      <a-table :data-source="dataHotel" :pagination="false" rowKey="index">
        <a-table-column title="序号" data-index="index" align="center"></a-table-column>
        <a-table-column title="协议酒店" data-index="hotel" align="center"></a-table-column>
        <a-table-column title="预约类型" data-index="type" align="center"></a-table-column>
        <a-table-column title="预约次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="预约次数占比（%）" data-index="numberProportion" align="center"></a-table-column>
      </a-table>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import Pie from '@/components/chart/Pie'
  import LineChartMultid from '@/components/chart/LineChartMultid'
  import {
    JeecgListMixin
  } from '@/mixins/JeecgListMixin'
  const dataHotel = [{
      index: 1,
      hotel: '福州富力威斯汀酒店',
      type: '公司会议',
      number: 30,
      numberProportion: '35%'
    },
    {
      index: 2,
      hotel: '福州富力威斯汀酒店',
      type: '个人',
      number: 8,
      numberProportion: '9%'
    },
    {
      index: 3,
      hotel: '福州品悦酒店',
      type: '公司会议',
      number: 20,
      numberProportion: '23%'
    },
    {
      index: 4,
      hotel: '福州品悦酒店',
      type: '个人',
      number: 11,
      numberProportion: '13%'
    },
    {
      index: 5,
      hotel: '福州世纪金源酒店',
      type: '公司会议',
      number: 12,
      numberProportion: '14%'
    },
    {
      index: 6,
      hotel: '福州世纪金源酒店',
      type: '个人',
      number: 5,
      numberProportion: '6%'
    },
  ]
  export default {
    mixins: [JeecgListMixin],
    components: {
      Pie,
      LineChartMultid
    },
    data() {
      return {
        typeAppoint:'全部',
        time: 'custom',
        customSelect: true,
        dateFormat: 'YYYY年MM月DD日',
        dateStart: undefined,
        dataHotel,
        selectHotel: [],
        dataSourcePie: [{
            item: '福州富力威斯汀酒店',
            count: 38
          },
          {
            item: '福州品悦酒店',
            count: 31
          },
          {
            item: '福州世纪金源酒店',
            count: 17
          }
        ],
        heightPie: 300,
        fieldsLine: ['公司会议', '个人'],
        fieldsRename: [{
            field: '公司会议',
            alias: '公司会议'
          },
          {
            field: '个人',
            alias: '个人'
          },
        ],
        dataSourceLine: [{
            "type": "福州富力威斯汀酒店",
            "公司会议": 30,
            "个人": 8,
          },
          {
            "type": "福州品悦酒店",
            "公司会议": 20,
            "个人": 11,
          },
          {
            "type": "福州世纪金源酒店",
            "公司会议": 12,
            "个人": 5,
          },
        ],
        url: {
          list: "/sys/user/list",
          exportXlsUrl: "/sys/user/exportXls",
        },
      }
    },
    created() {
      let start = moment(new Date())
        .subtract(1, 'months')
        .format('YYYY-MM-DD')
      this.dateStart = this.moment(start, 'YYYY-MM-DD')
    },
    methods: {
      moment,
      timeSelsect(e) {
        console.log(`checked = ${e.target.value}`);
        if (e.target.value == 'custom') {
          this.customSelect = true
        } else {
          this.customSelect = false
        }
      },
      handleChange(value) {
        if (value.indexOf('全部') != -1) {
          this.selectHotel = ["全部"]
        }
      },
      searchQuery() {},
      searchReset() {
        this.dataSource = dataSource
        this.selectHotel = []
      },
      getCurrentData() {
        return new Date().toLocaleDateString()
      }
    }
  }
</script>