<template>
  <!-- 会议统计 -->
  <div class="page-header-index-wide">
    <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px' }">
        <a-icon type="line" :rotate="90" :style="{'color':'#49a9ee'}" />按日期选择：
        <br />
        <a-range-picker
          :default-value="[moment('2021/06/05', dateFormat), moment('2021/06/08', dateFormat)]"
          :format="dateFormat"
        />
      </a-col>
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px'}">
        <mini-bar :dataSource="barData" :width="400" :height="200" />
      </a-col>
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px' }">
        <div style="padding-top: 150px;width:600px;height:200px">
          <mini-area :dataSource="areaData" x="月份" y="销售额" :height="height" />
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px' }">
        <a-icon type="line" :rotate="90" :style="{'color':'#49a9ee'}" />按主题筛选：
        <a-select default-value="周例会" :style="{width:'80%'}" showSearch @change="handleChange">
          <a-select-option value="周例会">周例会</a-select-option>
          <a-select-option value="项目会议">项目会议</a-select-option>
          <a-select-option value="物流会议">物流管理</a-select-option>
          <a-select-option value="安全会议">安全管理</a-select-option>
          <a-select-option value="管理会议">年度总结</a-select-option>
        </a-select>
        <br />
        <br />会议名称：
        <a-input placeholder="请输入会议名称" :style="{width:'85%'}" :value="meetingName"></a-input>
        <a-button
          :style="{ background: '#49a9ee', color: 'white' ,marginLeft:'50%',marginTop:'20px'}"
          @click="searchQuery"
        >查询</a-button>
      </a-col>
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px'}">
        <!-- <pie title="饼图" :height="height" /> -->
        <pie title="饼图" :height="height" v-bind:dataSource="dataSource"></pie>
      </a-col>
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px' }">
        <div style="padding-top: 150px;width:600px;height:200px">
          <mini-progress :percentage="30" :target="40" :height="30" />
          <mini-progress :percentage="51" :target="60" :height="30" color="#FFA500" />
          <mini-progress :percentage="66" :target="80" :height="30" color="#1E90FF" />
          <mini-progress :percentage="74" :target="70" :height="30" color="#FF4500" />
          <mini-progress :percentage="92" :target="100" :height="30" color="#49CC49" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import AreaChartTy from '@/components/chart/AreaChartTy'
import Bar from '@/components/chart/Bar'
import BarMultid from '@/components/chart/BarMultid'
import DashChartDemo from '@/components/chart/DashChartDemo'
import LineChartMultid from '@/components/chart/LineChartMultid'
import Liquid from '@/components/chart/Liquid'
import MiniBar from '@/components/chart/MiniBar'
import MiniArea from '@/components/chart/MiniArea'
import MiniProgress from '@/components/chart/MiniProgress'
import Pie from '@/components/chart/Pie'
import Radar from '@/components/chart/Radar'
import RankList from '@/components/chart/RankList'
import TransferBar from '@/components/chart/TransferBar'
import Trend from '@/components/chart/Trend'
import BarAndLine from '@/components/chart/BarAndLine'
import moment from 'moment'
export default {
  components: {
    Bar,
    MiniBar,
    BarMultid,
    AreaChartTy,
    LineChartMultid,
    Pie,
    Radar,
    DashChartDemo,
    MiniProgress,
    RankList,
    TransferBar,
    Trend,
    Liquid,
    MiniArea,
    BarAndLine
  },
  data() {
    return {
      dataSource:[ { item: '会议次数', count: 20 },{ item: '其他会议次数', count: 70 }],
      dateFormat: 'YYYY年MM月DD日',
      meetingName: '第一期周例会',
      height: 420,
      rankList: [],
      barData: [{x:1,y:100}],
      areaData: []
    }
  },
  created() {
    setTimeout(() => {
      this.loadBarData()
      this.loadAreaData()
      this.loadRankListData()
    }, 100)
  },
  methods: {
    moment,
    handleChange(value) {
      this.meetingName = value
    },
    loadData(x, y, max, min, before = '', after = '月') {
      let data = []
      for (let i = 0; i < 12; i += 1) {
        data.push({
          [x]: `${before}${i + 1}${after}`,
          [y]: Math.floor(Math.random() * max) + min
        })
      }
      return data
    },
    // 加载柱状图数据
    loadBarData() {
      this.barData = this.loadData('x', 'y', 1000, 200)
    },
    // 加载AreaChartTy的数据
    loadAreaData() {
      this.areaData = this.loadData('x', 'y', 500, 100)
    },
    loadRankListData() {
      this.rankList = this.loadData('name', 'total', 2000, 100, '北京朝阳 ', ' 号店')
    }
  }
}
</script>
<style>
/* #components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
} */
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#app #components-layout-demo-basic .ant-layout-sider {
  background: transparent;
}

#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>

