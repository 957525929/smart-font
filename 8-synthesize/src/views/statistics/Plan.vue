<template>
  <div>
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
      </div>
    </a-card>

    <a-card class="margin-top">
      <h2>任务状态统计:</h2>
      <a-row>
        <a-col :sm="16" :md="16" :xl="16">
          <a-row>
            <a-col>
              <a-row>
                <a-col :span="6">
                  <HeadInfo title="未开始" :content="20" />
                </a-col>
                <a-col :span="6">
                  <HeadInfo title="进行中" :content="15" />
                </a-col>
                <a-col :span="6">
                  <HeadInfo title="已完成" :content="30" />
                </a-col>
                <a-col :span="6">
                  <HeadInfo title="已超期" :content="10" />
                </a-col>
              </a-row>
            </a-col>
            <a-col>
              <!-- <AreaChartTy :dataSource="areaData" x="时间" y="数量" :height="350" /> -->
              <BarMultid :dataSource="dataSource" :fields="field" :height="330" />
            </a-col>
          </a-row>
        </a-col>
        <a-col :sm="8" :md="8" :xl="8" style="margin-top:10px">
          <pie :height="350" :dataSource="dataSource1" />
        </a-col>
      </a-row>
    </a-card>

    <a-row :gutter="24" class="margin-top">
      <a-col :sm="10" :md="10" :xl="10" :style="{ marginBottom: '15px' }" :height="450">
        <a-card :bordered="false" :title="`即将逾期(${dataSource2.length})`">
          <!-- <div slot="extra">
            <a v-if="dataSource2 && dataSource2.length > 0" @click="goPage">更多</a>
          </div> -->
          <a-list size="small">
            <a-list-item :key="index" v-for="(item, index) in dataSource2">
              <a-list-item-meta>
                <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar" />
                <a slot="title">{{ item.title }}</a>
                <div slot="description">{{ item.description }}</div>
              </a-list-item-meta>
              <div slot="actions">
                <a>详情</a>
              </div>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :sm="6" :md="6" :xl="7">
        <a-row :gutter="24" :style="{ marginBottom: '10px' }">
          <chart-card title="完成数" total="18">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px">
                <span slot="term">周同比</span>
                12%
              </trend>
              <trend flag="down">
                <span slot="term">日同比</span>
                11%
              </trend>
            </div>
            <template slot="footer">日均完成数<span>5</span></template>
          </chart-card>
        </a-row>
        <!-- <a-divider /> -->
      </a-col>
      <a-col :sm="8" :md="8" :xl="7">
        <chart-card title="任务完成率" total="78%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-progress color="rgb(19, 194, 194)" :target="80" :percentage="78" :height="8" />
          </div>
          <template slot="footer">
            <trend flag="down" style="margin-right: 16px">
              <span slot="term">同周比</span>
              12%
            </trend>
            <trend flag="up">
              <span slot="term">日环比</span>
              80%
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>

    <!-- <a-card class="margin-top">
      <h2>任务状态统计:</h2>
      <BarMultid :dataSource="dataSource" :fields="field" :height="420" />
    </a-card> -->
  </div>
</template>

<script>
import BarMultid from '@/components/chart/BarMultid'
import moment from 'moment'
import { formatDate } from '@/utils/util'
import Pie from '@/components/chart/Pie'
import HeadInfo from '@/components/tools/HeadInfo'
import AreaChartTy from '@/components/chart/AreaChartTy'
import ChartCard from '@/components/ChartCard'
import RankList from '@/components/chart/RankList'
import Trend from '@/components/Trend'
import MiniProgress from '@/components/chart/MiniProgress'
export default {
  name: 'ChartDemo',
  components: {
    BarMultid,
    Pie,
    HeadInfo,
    AreaChartTy,
    ChartCard,
    RankList,
    Trend,
    MiniProgress
  },
  data() {
    return {
      rankList: [],
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
          2021.07: 8
        },
        {
          type: '进行中',
          2021.02: 7,
          2021.03: 5,
          2021.04: 18,
          2021.05: 8,
          2021.06: 12,
          2021.07: 8
        },
        {
          type: '已完成',
          2021.02: 10,
          2021.03: 8,
          2021.04: 10,
          2021.05: 5,
          2021.06: 2,
          2021.07: 12
        },
        {
          type: '已超期',
          2021.02: 12,
          2021.03: 7,
          2021.04: 5,
          2021.05: 12,
          2021.06: 17,
          2021.07: 2
        }
      ],
      areaData: [],
      dataSource1: [
        { item: '未开始', count: 40 },
        { item: '进行中', count: 21 },
        { item: '已完成', count: 17 },
        { item: '已超期', count: 13 }
      ],
      dataSource2: [
        {
          title: '2021年第三季度总结',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description: '逾期时间：2021-09-30 23:59:59',
          owner: '刘涛',
          startAt: '2021-06-22 17:55:55',
          progress: {
            value: 90
          }
        }
      ]
    }
  },
  mounted() {
    // this.searchCols = this.field.filter((item) => {
    //   return item
    // })
  },
  created() {
    setTimeout(() => {
      this.loadAreaData(), this.loadRankListData()
    }, 1000)
  },
  methods: {
    loadRankListData() {
      this.rankList = [
        {
          ['name']: '王富贵',
          ['total']: 2
        },
        {
          ['name']: '孙二喜',
          ['total']: 1
        },
        {
          ['name']: '李三七',
          ['total']: 0
        }
      ]
    },
    // 加载AreaChartTy的数据
    loadAreaData() {
      this.areaData = this.loadData('x', 'y', 500, 100)
    },
    loadData(x, y, max, min, before = '', after = '年') {
      let data = []
      for (let i = 0; i < 10; i += 1) {
        data.push({
          [x]: `${before}${i + 2011}${after}`,
          [y]: Math.floor(Math.random() * max) + min
        })
      }
      return data
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
.margin-top {
  margin-top: 10px;
}
</style>
