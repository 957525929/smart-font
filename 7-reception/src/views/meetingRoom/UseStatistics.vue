<template>
  <!-- 会议统计 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>按预约类型筛选：</span>
        </a-col>
        <a-col>
          <a-select :style="{width:'150px'}" @change="handleChange" default-value="公司">
            <a-select-option value="公司">公司</a-select-option>
            <a-select-option value="个人">个人</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>按区域筛选：</span>
        </a-col>
        <a-col>
          <a-select
            :style="{width:'300px'}"
            showSearch
            @change="handleChange"
            default-value="福建烟草公司机关A区域1号楼"
          >
            <a-select-option value="福建烟草公司机关A区域1号楼">福建烟草公司机关A区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关A区域2号楼">福建烟草公司机关A区域2号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域1号楼">福建烟草公司机关B区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域2号楼">福建烟草公司机关B区域2号楼</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>按日期筛选：</span>
        </a-col>
        <a-col>
          <a-icon type="calendar" :style="{ fontSize: '20px', marginRight: '5px' }" />
          <span>从&nbsp;</span>
          <a-date-picker placeholder="请选择开始" v-model="dateStart"  :format="dateFormat">
            <a-icon slot="suffixIcon" type="suffixIcon" />
          </a-date-picker>
          <span>&nbsp;到&nbsp;</span>
          <a-date-picker
            placeholder="请选择结束"
             :format="dateFormat"
            :defaultValue="moment(getCurrentData(), 'YYYY年MM月DD日')"
          >
            <a-icon slot="suffixIcon" type="suffixIcon" />
          </a-date-picker>
          <!-- <j-date v-model="queryParam.time_begin" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择开始时间" ></j-date> -->
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <a-button
            :style="{ background: '#49a9ee', color: 'white'}"
            icon="search"
            @click="searchQuery"
          >查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
      </a-row>
    </div>

    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <!-- <div style="margin-top: 20px">
      <a-table :data-source="dataSta" :pagination="false" rowKey="theme">
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议次数" data-index="number" align="center"></a-table-column>
        <a-table-column title="与会人数" data-index="membersNumber" align="center"></a-table-column>
        <a-table-column title="会议预算" data-index="budget" align="center"></a-table-column>
      </a-table>
    </div>-->
    <br />
    <bar v-bind:dataSource="dataSource" v-bind:title="title"></bar>
  </a-card>
</template>
<script>
import moment from 'moment'
import Bar from '@/components/chart/Bar'
import { formatDate } from '@/utils/util'
import JDate from '@/components/jeecg/JDate'
const dataSta = [
  {
    theme: '福建烟草公司机关A区域1号楼',
    number: '30',
    membersNumber: '90',
    budget: '12500'
  },
  {
    theme: '福建烟草公司机关A区域2号楼',
    number: '4',
    membersNumber: '12',
    budget: '900'
  },
  {
    theme: '福建烟草公司机关B区域1号楼',
    number: '9',
    membersNumber: '30',
    budget: '18000'
  },
  {
    theme: '福建烟草公司机关B区域2号楼',
    number: '1',
    membersNumber: '30',
    budget: '21000'
  }
]
export default {
  components: {
    Bar,
    JDate
  },
  data() {
    return {
      dateFormat: 'YYYY年MM月DD日',
      dataSta,
      dateStart:undefined,
      dataSource: [
        {
          x: '会议室203',
          y: 10
        },
        {
          x: '会议室204',
          y: 3
        },
        {
          x: '会议室205',
          y: 3
        },
        {
          x: '会议室207',
          y: 8
        },
        {
          x: '会议室208',
          y: 17
        },
        {
          x: '会议室209',
          y: 10
        }
      ],
      title: '会议室预约次数'
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
    handleChange() {},
    searchQuery() {
      // console.log(formatDate(new Date().getTime()-2*24*3600*1000,"YYYY年MM月DD日"))
      console.log(
        moment(new Date())
          .subtract(1, 'months')
          .format('YYYY-MM-DD')
      )
    },
    searchReset() {
      this.dataSta = dataSta
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