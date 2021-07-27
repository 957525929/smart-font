<template>
  <div class="page-header-index-wide">
    <a-card :bordered="false">
    <a-row :gutter="24">
      <div class="salesCard">
      <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
        <div class="extra-wrapper" slot="tabBarExtraContent">
          <a-range-picker :style="{width: '256px'}"
                          :mode="['month', 'month']"
                          format="YYYY-MM"
                          :value="monthvalue"
                          @panelChange="handlePanelChange1"
          />
        </div>
        <a-tab-pane loading="true"  tab="租赁统计"  key="1" style="color:white">
          <div>
            <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '10px' }">
              <chart-card :loading="loading" title="收租金额" total="￥126,560元">
<!--                <a-tooltip title="指标说明" slot="action">-->
<!--                  <a-icon type="info-circle-o" />-->
<!--                </a-tooltip>-->
              </chart-card>
            </a-col>
            <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '10px' }">
              <chart-card :loading="loading" title="收租次数" :total="'44次'">
<!--                <a-tooltip title="指标说明" slot="action">-->
<!--                  <a-icon type="info-circle-o" />-->
<!--                </a-tooltip>-->
                <!--          <div>-->
                <!--            <mini-area />-->
                <!--          </div>-->
                <!--          <template slot="footer">本月收租次数<span> {{ '34' | NumberFormat }}</span></template>-->
              </chart-card>
            </a-col>
            <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '10px' }">
              <chart-card :loading="loading" title="缴租金额" total="￥77,320元">
<!--                <a-tooltip title="指标说明" slot="action">-->
<!--                  <a-icon type="info-circle-o" />-->
<!--                </a-tooltip>-->
                <div>
                </div>
              </chart-card>
            </a-col>
            <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '10px' }">
              <chart-card :loading="loading" title="缴租次数" :total="'36次'">
<!--                <a-tooltip title="指标说明" slot="action">-->
<!--                  <a-icon type="info-circle-o" />-->
<!--                </a-tooltip>-->
              </chart-card>
            </a-col>
          </div>
        </a-tab-pane>

      </a-tabs>
      </div>

    </a-row>
    <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px',marginTop:'0'}">
<!--          <div class="extra-wrapper" slot="tabBarExtraContent">-->
<!--            <a-range-picker :style="{width: '256px'}"-->
<!--                            :mode="['month', 'month']"-->
<!--                            format="YYYY-MM"-->
<!--                            :value="monthvalue"-->
<!--                            @panelChange="handlePanelChange1"-->
<!--            />-->
<!--          </div>-->
          <a-tab-pane loading="true" tab="出租收入金额" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="金额（万元）" :dataSource="barData" yaxisText="出租收入金额（万元）"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="收租记录" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="缴租支出金额" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="金额（万元）" :dataSource="barData" yaxisText="缴租支出金额（万元）"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <rank-list title="缴租记录" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    </a-card>
      <br/>
    <a-row>
      <a-col :span="24">
        <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
          <div class="salesCard">
            <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
              <div class="extra-wrapper" slot="tabBarExtraContent">
                <a-range-picker :style="{width: '256px'}"
                                :mode="['month', 'month']"
                                format="YYYY-MM"
                                :value="monthvalue1"
                                @panelChange="handlePanelChange2"
                />
              </div>
              <a-tab-pane loading="true" tab="资产流转次数统计" key="1">
                <a-card :loading="loading" :bordered="false">
                  <line-chart-multid :fields="visitFields" :dataSource="visitInfo" ></line-chart-multid>
                </a-card>
              </a-tab-pane>

            </a-tabs>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import ChartCard from '@/components/ChartCard'
  import ACol from "ant-design-vue/es/grid/Col"
  import ATooltip from "ant-design-vue/es/tooltip/Tooltip"
  import MiniArea from '@/components/chart/MiniArea'
  import MiniBar from '@/components/chart/MiniBar'
  import MiniProgress from '@/components/chart/MiniProgress'
  import RankList from '@/components/chart/RankList'
  import Bar from '@/components/chart/Bar'
  import LineChartMultid from '@/components/chart/LineChartMultid'
  import HeadInfo from '@/components/tools/HeadInfo.vue'

  import Trend from '@/components/Trend'
  import moment from "moment";
  const barData = []
  // for (let i = 0; i < 12; i += 1) {
  //   barData.push({
  //     x: `${i + 1}月`,
  //     y: Math.floor(Math.random() * 10000) + 200
  //   })
  // }
  export default {
    name: "IndexChart",
    components: {
      ATooltip,
      ACol,
      ChartCard,
      MiniArea,
      MiniBar,
      MiniProgress,
      RankList,
      Bar,
      Trend,
      LineChartMultid,
      HeadInfo
    },
    data() {
      return {
        loading: true,
        center: null,
        rankList:[
          {"name":"2021-07-15 方正有限公司房屋与建筑物合同","total":50000},
          {"name":"2021-07-05 福州朝阳贸易有限公司房屋与建筑物合同","total":12340},
          {"name":"2021-06-15 福州烟草加工厂房屋与建筑物合同","total":34000},
          {"name":"2020-07-15 方正有限公司房屋与建筑物合同","total":50000},
          {"name":"2020-07-05 福州朝阳贸易有限公司房屋与建筑物合同","total":12340},
          {"name":"2020-06-15 福州烟草加工厂房屋与建筑物合同","total":34000},
        ],
        barData:[
          {"x":"方正有限公司","y":2,},
          {"x":"卷烟厂","y":8,},
          {"x":"福州朝阳贸易有限公司","y":9,},
          {"x":"福州烟草加工厂","y":5,},
          {"x":"福州康和有限公司","y":12,},
          {"x":"福州国贸有限公司","y":8,},
          {"x":"云南烟草集团","y":9,},
          {"x":"一汽大众","y":5,},
          {"x":"云烟代理有限公司","y":5,},
        ],
        loginfo:{},
        visitFields:['房屋和建筑物','一般办公设备','专用设备','运输设备','其他资产'],
        visitInfo:
          [
            {
              "月":"2021-01",
              "房屋和建筑物":1,"一般办公设备":3,"专用设备":4,"运输设备":5,"其他资产":6,
              "type":"2021-01"
            },
            {
              "月":"2021-02",
              "房屋和建筑物":2,"一般办公设备":5,"专用设备":1,"运输设备":2,"其他资产":3,
              "type":"2021-02"
            },
            {
              "月":"2021-03",
              "房屋和建筑物":3,"一般办公设备":6,"专用设备":1,"运输设备":2,"其他资产":1,
              "type":"2021-03"
            },
            {
              "月":"2021-04",
              "房屋和建筑物":4,"一般办公设备":5,"专用设备":1,"运输设备":2,"其他资产":3,
              "type":"2021-04"
            },
            {
              "月":"2021-05",
              "房屋和建筑物":3,"一般办公设备":5,"专用设备":4,"运输设备":5,"其他资产":6,
              "type":"2021-05"
            },
            {
              "月":"2021-06",
              "房屋和建筑物":6,"一般办公设备":5,"专用设备":1,"运输设备":2,"其他资产":3,
              "type":"2021-06"
            },
            {
              "月":"2021-07",
              "房屋和建筑物":3,"一般办公设备":7,"专用设备":1,"运输设备":2,"其他资产":1,
              "type":"2021-07"
            },
            {
              "月":"2021-08",
              "房屋和建筑物":9,"一般办公设备":5,"专用设备":1,"运输设备":2,"其他资产":3,
              "type":"2021-08"
            },
        ],

        monthvalue: [moment('2021-06','YYYY-MM'), moment('2021-08','YYYY-MM')],
        monthvalue1: [moment('2021-01','YYYY-MM'), moment('2021-08','YYYY-MM')],
      }
    },
    created() {
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    },
    methods: {
     //日期选择
      moment,
      handlePanelChange1(value, mode) {
        this.monthvalue = value;
      },
      handlePanelChange2(value, mode) {
        this.monthvalue1 = value;
      },
    }
  }
</script>

<style lang="less" scoped>
  .circle-cust{
    position: relative;
    top: 28px;
    left: -100%;
  }
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
      color: rgba(0, 0, 0, .45);
      display: inline-block;
      font-size: .95rem;
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