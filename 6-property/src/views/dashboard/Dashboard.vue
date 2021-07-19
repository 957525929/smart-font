<template>
    <div class="page-header-index-wide">
        <a-row :gutter="24">
            <a-col :sm="24" :md="24" :xl="24" :style="{ marginBottom: '15px' }">
                <a-card :bordered="false">
                    <div class="detail">
                        <div class="avatar">
                            <a-avatar :src="avatar" />
                        </div>
                        <div class="headerContent">
                            <div class="title">
                                {{ timeFix }}，{{ nickname() }}<span class="welcome-text">，{{ welcome() }}</span>
                            </div>
                            <div>物业管理员 | 福建烟草 - 物业部 - 物业管理平台</div>
                        </div>
                        <div class="extra">
                            <a-row class="more-info" :gutter="24">
                                <a-col :span="12">
                                    <head-info title="设备数" content="1" :bordered="false" />
                                </a-col>
                                <a-col :span="12">
                                    <head-info title="人员数" content="2" :bordered="false" />
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="24">
            <a-col :sm="24" :md="24" :xl="24" :style="{ marginBottom: '15px' }">
                <a-card :bordered="false" title="设备状况">
                    <div class="extra-wrapper" slot="extra">
                        <div class="extra-item">
                            <a v-for="item in Object.values(period)">{{item.tableValue}}</a>
                        </div>
                        <a-range-picker :style="{ width: '256px' }" />
                    </div>
                    <a-row>
                        <a-col :sm="16" :md="16" :xl="16">
                            <a-row>
                                <a-col>
                                    <a-row>
                                        <a-col :span="6">
                                            <head-info title="待审核" :content="1"></head-info>
                                        </a-col>
                                        <a-col :span="6">
                                            <head-info title="待派单" :content="1"></head-info>
                                        </a-col>
                                        <a-col :span="6">
                                            <head-info title="待维修" :content="1"></head-info>
                                        </a-col>
                                        <a-col :span="6">
                                            <head-info title="待核查" :content="1"></head-info>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col>
                                    <area-chart-ty :dataSource="areaData" x="时间" y="数量" :height="height"/>
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :sm="8" :md="8" :xl="8">
                            <pie :height="350" />
                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="24">
            <a-col :sm="10" :md="10" :xl="10" :style="{ marginBottom: '15px' }" :height="450">
                <a-card :bordered="false" :title="`问题待办(${dataSource.length})`">
                    <div slot="extra">
                        <a v-if="dataSource && dataSource.length > 0" @click="goPage">更多</a>
                    </div>
                    <a-list size="small">
                        <a-list-item :key="index" v-for="(item, index) in dataSource">
                            <a-list-item-meta>
                                <a-avatar slot="avatar" size="large" shape="square" :src="item.avatar" />
                                <a slot="title">{{ item.title }}</a>
                                <div slot="description"><a-icon type="environment"></a-icon>{{ item.description }}</div>
                            </a-list-item-meta>
                            <div slot="actions">
                                <a>详情</a>
                            </div>
                        </a-list-item>
                    </a-list>
                </a-card>
            </a-col>
            <a-col :sm="6" :md="6" :xl="6">
                <a-row :gutter="24" :style="{ marginBottom: '10px' }">
                    <chart-card title="故障数" total="18">
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
                        <template slot="footer">日均故障数<span>5</span></template>
                    </chart-card>
                </a-row>
                <!-- <a-divider /> -->
                <a-row :gutter="24">
                    <chart-card title="问题响应率" total="78%">
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
                </a-row>
            </a-col>
            <a-col :sm="8" :md="8" :xl="8">
                <a-card title="设备故障率排行榜" :bordered="false">
                    <rank-list :list="rankList" style="width: 500px; margin: 0 auto" />
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapGetters } from 'vuex'
//vue
import PageHeader from '@/components/page/PageHeader'
import HeadInfo from '@/components/tools/HeadInfo'
//chart
import RankList from '@/components/chart/RankList'
import Pie from '@/components/chart/Pie'
import ChartCard from '@/components/ChartCard'
import AreaChartTy from '@/components/chart/AreaChartTy'
import { period } from "@/utils/dataDictionary.js";
// ====================================
import ACol from 'ant-design-vue/es/grid/Col'
import ATooltip from 'ant-design-vue/es/tooltip/Tooltip'
import MiniBar from '@/components/chart/MiniBar'
import MiniProgress from '@/components/chart/MiniProgress'
import Bar from '@/components/chart/Bar'
import LineChartMultid from '@/components/chart/LineChartMultid'

import Trend from '@/components/Trend'
import { getLoginfo, getVisitInfo } from '@/api/api'

const barData = []
for (let i = 0; i < 12; i += 1) {
    barData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
    })
}

const DataSet = require('@antv/data-set')
export default {
    name: 'IndexChart',
    //     components: {
    //   Bar, MiniBar, BarMultid, AreaChartTy, LineChartMultid,
    //   Radar, MiniProgress, RankList,
    //   TransferBar, Trend, Liquid, MiniArea, BarAndLine
    // },
    components: {
        PageHeader,
        HeadInfo,
        RankList,
        Pie,
        ChartCard,
        AreaChartTy,
        // ====
        ATooltip,
        ACol,

        MiniBar,
        MiniProgress,
        Bar,
        Trend,
        LineChartMultid,
    },
    data() {
        return {
            period,
            timeFix: timeFix(),
            avat: '@/assets/avat.jpg',
            rankList: [],
            areaData: [],
            //row3
            dataSource: [
                {
                    title: '18楼断电',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                    description: '福建省福州市烟草大厦',
                    owner: '刘涛',
                    startAt: '2021-06-22 17:55:55',
                    progress: {
                        value: 90,
                    },
                },
                // {
                //     title: '中央空调故障',
                //     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                //     description: '福建省福州市烟草大厦',
                //     owner: '付晓晓',
                //     startAt: '2021-06-26 22:44',
                //     progress: {
                //         value: 90,
                //     },
                // },
                // {
                //     title: '停水',
                //     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                //     description: '福建省福州市烟草大厦',
                //     owner: '付晓晓',
                //     startAt: '2021-06-26 22:44',
                //     progress: {
                //         value: 90,
                //     },
                // },
            ],
            loading: true,
            center: null,

            barData,
            loginfo: {},
            visitFields: ['ip', 'visit'],
            visitInfo: [],
            indicator: <a-icon type="loading" style="font-size: 24px" spin />,
        }
    },
    created() {
        setTimeout(() => {
            this.loading = !this.loading
            this.loadRankListData()
            this.loadAreaData()
        }, 1000)
        this.initLogInfo()
    },
    methods: {
        ...mapGetters(['nickname', 'welcome']),
        initLogInfo() {
            getLoginfo(null).then((res) => {
                if (res.success) {
                    Object.keys(res.result).forEach((key) => {
                        res.result[key] = res.result[key] + ''
                    })
                    this.loginfo = res.result
                }
            })
            getVisitInfo().then((res) => {
                if (res.success) {
                    console.log('aaaaaa', res.result)
                    this.visitInfo = res.result
                }
            })
        },
        loadRankListData() {
            this.rankList = [{
                ['name']:"wire_2001",
                ['total']:2
            },{
                ['name']:"air_3001",
                ['total']:1
            },{
                ['name']:"waterPipe_1001",
                ['total']:0
            }]
        },
        // 加载AreaChartTy的数据
        loadAreaData() {
            this.areaData = this.loadData('x', 'y', 500, 100)
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
        //row3
        goPage() {
            // this.$message.success("请根据具体业务跳转页面")
            this.$router.push({ path: '/device/fix/Fixlist' })
        },
    },
}
</script>

<style lang="less" scoped>
.detail {
    display: flex;
    .avatar {
        flex: 0 1 72px;
        margin: 0 24px 8px 0;

        & > span {
            border-radius: 72px;
            display: block;
            width: 72px;
            height: 72px;
        }
    }
    .headerContent {
        flex: auto;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
    .title {
        font-size: 20px;
        font-weight: 500;

        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 16px;
        flex: auto;
    }
    }
    .extra {
        
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 280px;
        text-align: right;
    //         .more-info{
    //     width;
    // }
    }

}
//row2
.extra-wrapper {
    line-height: 55px;
    padding-right: 24px;

    .extra-item {
        display: inline-block;
        margin-right: 24px;

        a {
            margin-left: 24px;
        }
    }
}
//row3
.index-md-title {
    postion: relative;
    padding-left: 24px;
    width: 100%;
    color: #fff;
    font-size: 21px;
    font-family: cursive;
}
.index-md-title img {
    position: absolute;
    height: 32px;
    top: 2px;
    left: 14px;
}

.index-container-ty .ant-card-body {
    /*border-left:1px solid #90aeff;
    /*border-right:1px solid #90aeff;
    border-bottom:1px solid #90aeff;*/
}

.index-container-ty .ant-table-thead > tr > th,
.index-container-ty .ant-table-tbody > tr > td {
    border-bottom: 1px solid #90aeff;
}

.index-container-ty
    .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th,
.index-container-ty
    .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th {
    border-bottom: 1px solid #90aeff;
}

.index-container-ty
    .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th {
    border-bottom: 1px solid #90aeff;
}

.index-container-ty .ant-table-small {
    border: 1px solid #90aeff;
}

.index-container-ty .ant-table-placeholder {
    padding: 0;
}
/* 首页访问量统计 */
.head-info {
    position: relative;
    text-align: left;
    padding: 0 32px 0 0;
    min-width: 125px;

    &.center {
        text-align: center;
        padding: 0 32px;
    }

    span {
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        font-size: 0.95rem;
        line-height: 42px;
        margin-bottom: 4px;
    }
    p {
        line-height: 42px;
        margin: 0;
        a {
            font-weight: 600;
            font-size: 1rem;
        }
    }
}
</style>