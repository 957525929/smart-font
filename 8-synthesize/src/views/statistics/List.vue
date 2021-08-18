<template>
  <div>
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
      <h2>文档类型统计:</h2>
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
        <a-card :bordered="false" :title="`最新上传(${dataSource2.length})`">
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
          <chart-card title="文件累计上传总数" total="108">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px">
                <span slot="term">月同比</span>
                12%
              </trend>
              <trend flag="down">
                <span slot="term">周同比</span>
                11%
              </trend>
            </div>
            <template slot="footer">月均上传数<span>25</span></template>
          </chart-card>
        </a-row>
      </a-col>

      <a-col :sm="8" :md="8" :xl="7">
        <!-- <a-row :gutter="24" :style="{ marginBottom: '10px' }"> -->
        <chart-card title="文件累计下载总数" total="101">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend flag="up" style="margin-right: 16px">
              <span slot="term">月同比</span>
              14%
            </trend>
            <trend flag="down">
              <span slot="term">周同比</span>
              11%
            </trend>
          </div>
          <template slot="footer">月均下载数<span>20</span></template>
        </chart-card>
        <!-- </a-row> -->
      </a-col>
    </a-row>
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
          type: '资产', // 列名
          2021.02: 10,
          2021.03: 8,
          2021.04: 5,
          2021.05: 15,
          2021.06: 12,
          2021.07: 20
        },
        {
          type: '会议纪要',
          2021.02: 1,
          2021.03: 6,
          2021.04: 12,
          2021.05: 11,
          2021.06: 15,
          2021.07: 12
        },
        {
          type: '记录',
          2021.02: 9,
          2021.03: 1,
          2021.04: 5,
          2021.05: 13,
          2021.06: 21,
          2021.07: 12
        },
        {
          type: '报告',
          2021.02: 15,
          2021.03: 21,
          2021.04: 3,
          2021.05: 5,
          2021.06: 25,
          2021.07: 10
        }
      ],
      dataSource1: [
        { item: '资产', count: 40 },
        { item: '会议纪要', count: 21 },
        { item: '记录', count: 17 },
        { item: '报告', count: 13 }
      ],
      dataSource2: [
        {
          title: '2021年总结报告',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description: '上传时间：2021-08-07 09:51:20	',
          owner: '刘涛',
          startAt: '2021-06-22 17:55:55',
          progress: {
            value: 90
          }
        },
        {
          title: '2021年季度巡查记录',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          description: '上传时间：2021-08-06 11:50:53	',
          owner: '刘涛',
          startAt: '2021-06-22 17:55:55',
          progress: {
            value: 90
          }
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
.margin-top {
  margin-top: 10px;
}
</style>
