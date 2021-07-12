<template>
  <div class="page-header-index-wide">
    <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px' }">
        <a-icon type="line" :rotate="90" :style="{'color':'#49a9ee'}" />按日期选择：
        <br />
        <a-range-picker @change="onChange" />
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
        <a-icon type="line" :rotate="90" :style="{'color':'#49a9ee'}" />按会议室筛选：
        <br />
        <a-cascader :options="optionsOne" placeholder="省公司2楼" @change="onChange" />
         <a-cascader :options="optionsTwo" placeholder="多媒体会议厅" @change="onChange" />
      </a-col>
      <a-col :sm="24" :md="24" :xl="8" :style="{ marginBottom: '24px'}">
        <pie title="饼图" :height="height" />
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
      optionsOne: [
        {
          value: '省公司1楼',
          label: '省公司1楼'
        },
         {
          value: '省公司2楼',
          label: '省公司2楼'
        },
         {
          value: '省公司3楼',
          label: '省公司3楼'
        },
      ],
        optionsTwo: [
        {
          value: '多媒体会议室',
          label: '多媒体会议室'
        },
         {
          value: '普通会议室',
          label: '普通会议室'
        },
         {
          value: '高级会议室',
          label: '高级会议室'
        },
      ],
      height: 420,
      rankList: [],
      barData: [],
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
    onChange(date, dateString) {
      console.log(date, dateString)
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
