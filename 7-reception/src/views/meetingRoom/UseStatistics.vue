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
          <a-select :style="{width:'200px'}" @change="handleChange" placeholder="请选择预约类型" v-model="typeAppoint">
            <a-select-option value="公司会议">公司会议</a-select-option>
            <a-select-option value="个人">个人</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
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
          <a-date-picker placeholder="请选择开始" v-model="dateStart" :format="dateFormat"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker placeholder="请选择结束" :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"></a-date-picker>
          <!-- <j-date v-model="queryParam.time_begin" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择开始时间" ></j-date> -->
        </a-col>
      </a-row>
      <br />
      <a-row type="flex" align="middle">
        <a-col>
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按位置筛选</span>
        </a-col>
        <a-col>
          <a-cascader style="width: 400px" :options="selectOptions" change-on-select @change="areaChange"
            :default-value="defaultT" placeholder="请选择位置" :display-render="displayRender" />
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span style='font-weight: bold;margin-right:10px;font-size:15px'>按房间号筛选</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入房间号" v-model="searchValue"></a-input>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col>
          <a-button :style="{ background: '#49a9ee', color: 'white'}" icon="search" @click="searchQuery">查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          <a-button style='margin-left:20px;background:orange;color:white;margin-left: 8px' @click="analysis">智能分析
          </a-button>
          <a-button style='margin-left:20px;background:#49a9ee;color:white;margin-left: 8px' icon="download"
            @click="handleExportXls('协议酒店统计')">导出</a-button>
        </a-col>
      </a-row>
    </div>

    <div style="background: #f0f2f5; padding: 10px">
      <a-row :gutter="16">
        <a-col :span="3">
          <a-card>
            <a-statistic title="预约总次数" :value="statistic.applyNumTotal" :precision="0"
              :value-style="{ color: '#3f8600' }" style="margin-right: 50px">
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic title="公司会议预约总次数" :value="statistic.companyTotal" :precision="0" class="demo-class"
              :value-style="{ color: '#3aa1ff' }">
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic title="个人预约总次数" :value="statistic.personalTotal" :precision="0" class="demo-class"
              :value-style="{ color: '#36cbcb' }">
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic title="公司会议占比" :value="statistic.companyTotalProportion" :precision="0" class="demo-class"
              :value-style="{ color: '#3aa1ff' }">
              <template #prefix>
                <a-icon type="pie-chart" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic title="个人会议占比" :value="statistic.personalTotalProportion" :precision="0" class="demo-class"
              :value-style="{ color: '#36cbcb' }">
              <template #prefix>
                <a-icon type="pie-chart" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3" v-if="visibleSta">
          <a-card>
            智能分析结论
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div style="background-color: #fff; padding: 15px 10px;">
      <a-row type="flex" align="middle">
        <a-col :span="13">
          <h3 style="font-size: 16px; font-weight: 600;">会议室预约次数</h3>
          <div ref="meetingNumber" style="height:400px"></div>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col :span="10">
          <pie title="饼图" v-bind:height="heightPie" v-bind:dataSource="dataSourcePie"></pie>
        </a-col>
      </a-row>
    </div>
    <div style="background-color: #fff;margin-top:10px; padding: 15px 10px;">
      <a-table :data-source="dataSys" :pagination="false" rowKey="index">
        <a-table-column title="序号" data-index="index" align="center"></a-table-column>
        <a-table-column title="位置" data-index="area" align="center"></a-table-column>
        <a-table-column title="房间号" data-index="room" align="center"></a-table-column>
        <a-table-column title="预约类型" data-index="type" align="center"></a-table-column>
        <a-table-column title="预约次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="预约次数占比（%）" data-index="numberProportion" align="center"></a-table-column>
      </a-table>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import {
    formatDate
  } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import {
    areaData
  } from './data/area.js'
  import Pie from '@/components/chart/Pie'
  import {
    JeecgListMixin
  } from '@/mixins/JeecgListMixin'
  const dataSys = [{
      index: '1',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室203',
      type: '公司会议',
      number: '8',
      numberProportion: '20%',
    },
    {
      index: '2',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室203',
      type: '个人',
      number: '2',
      numberProportion: '5%',
    },
    {
      index: '3',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室204',
      type: '公司会议',
      number: '2',
      numberProportion: '5%',
    },
    {
      index: '4',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室204',
      type: '个人',
      number: '1',
      numberProportion: '2%',
    },
    {
      index: '5',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室205',
      type: '公司会议',
      number: '1',
      numberProportion: '2%',
    },
    {
      index: '6',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室205',
      type: '个人',
      number: '2',
      numberProportion: '5%',
    },
    {
      index: '7',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室207',
      type: '公司会议',
      number: '5',
      numberProportion: '12%',
    },
    {
      index: '8',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室207',
      type: '个人',
      number: '3',
      numberProportion: '7%',
    },
    {
      index: '9',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室208',
      type: '公司会议',
      number: '10',
      numberProportion: '24%',
    },
    {
      index: '10',
      area: '中国烟草总公司福建省公司机关.A区域.1号楼',
      room: '会议室208',
      type: '个人',
      number: '7',
      numberProportion: '17%',
    },
  ]
  const dataSourcePie = [{
      item: '会议室203',
      count: 10
    },
    {
      item: '会议室204',
      count: 3
    },
    {
      item: '会议室205',
      count: 3
    },
    {
      item: '会议室207',
      count: 8
    },
    {
      item: '会议室208',
      count: 17
    }
  ]
  export default {
    mixins: [JeecgListMixin],
    components: {
      JDate,
      Pie
    },
    data() {
      return {
        typeAppoint: '全部',
        time: 'custom',
        customSelect: true,
        selectOptions: areaData,
        defaultT: ['0', '01', '011'],
        dateFormat: 'YYYY年MM月DD日',
        dataSys,
        dateStart: undefined,
        searchValue: '',
        dataSourcePie,
        heightPie: 300,
        statistic: {
          applyNumTotal: '41',
          companyTotal: '26',
          personalTotal: '15',
          companyTotalProportion: '63%',
          personalTotalProportion: '37%',
        },
        visibleSta:false,
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
    mounted() {
      this.getMeetingNumber();
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
      getMeetingNumber() {
        const meetingNumberChar = this.$echarts.init(this.$refs.meetingNumber);
        const option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['type', '公司会议', '个人'],
              ['会议室203', 8, 2],
              ['会议室204', 2, 1],
              ['会议室205', 1, 2],
              ['会议室207', 5, 3],
              ['会议室208', 10, 7]
            ]
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
          series: [{
              type: 'bar',
              color: '#3aa1ff'
            },
            {
              type: 'bar',
              color: '#36cbcb'
            },
          ]
        };
        meetingNumberChar.setOption(option);
      },
      analysis() {

        if (this.visibleSta) {
          this.visibleSta = false
        } else {
          this.visibleSta = true
        }
      },
      displayRender({
        labels
      }) {
        return labels.join('.')
      },
      areaChange(value) {
        console.log(value)
      },
      handleChange() {},
      searchQuery() {
        // console.log(formatDate(new Date().getTime()-2*24*3600*1000,"YYYY年MM月DD日"))
        // console.log(
        //   moment(new Date())
        //     .subtract(1, 'months')
        //     .format('YYYY-MM-DD')
        // )
      },
      searchReset() {
        this.searchValue = ''
      },
      getCurrentData() {
        return new Date().toLocaleDateString()
      },
      getStartData() {
        // const d=new Date().getTime()-30*24*3600*1000
        // console.log(d)
        // return d.toDateString();
      }
    }
  }
</script>