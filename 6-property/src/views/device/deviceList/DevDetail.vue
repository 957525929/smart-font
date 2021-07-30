<template>
  <!-- <page-layout title="设备详情"> -->
  <a-card :bordered="false">
    <a-descriptions title="基本信息">
      <a-descriptions-item :label="item.title" v-for="item in basicInfo" :key="item.key">{{
                item.value
            }}</a-descriptions-item>
    </a-descriptions>
    <a-divider style="margin-bottom: 32px" />

    <div class="title">维修记录</div>
    <a-table style="margin-bottom: 24px" :columns="fixInfo" :data-source="fixData"> </a-table>

    <div class="title">保养记录</div>
    <a-table style="margin-bottom: 24px" :columns="proInfo" :data-source="proData"> </a-table>

  </a-card>
  <!-- </page-layout> -->
</template>

<script>
//js
import { data as basic } from './js/index.js'
import { basicInfo, fixInfo, proInfo } from './js/detail.js'
import PageLayout from '@/components/page/PageLayout'

const NEW_DETAIL = Object.freeze({ basicInfo, fixInfo, proInfo })
const fix = [
  {
    id: 2001,
    key: 0,
    devId: 1,
    devName: '18楼停电',
    taskStatus: '待审核',
    devType: '电器系统',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    deliveryTime: '2021-06-22 17：55：55',
    fixedTime: '2021-06-24 17：55：55',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
      {
        tagName: '审核下发',
        com: 'TableModal',
      },
      {
        tagName: '忽略',
        com: '',
      },
    ],
  },
  {
    id: 2001,
    key: 1,
    devId: 2,
    devName: '18楼频繁断电停电',
    taskStatus: '待派单',
    devType: '电器系统',
    deliveryTime: '2021-06-22 10：55：55',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    techSituation: 0,
    fixStaff: '刘涛',
    fixedTime: '2021-06-22 20：00：00',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
  {
    id: 1001,
    key: 2,
    devId: 3,
    devName: '卫生间停水',
    taskStatus: '待维修',
    devType: '给排水系统',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '王翔',
    deliveryTime: '2021-06-20 17：55：55',
    fixedTime: '2021-06-21 17：55：55',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
  {
    id: 3001,
    key: 3,
    devId: 4,
    devName: '空调调控温度无反应',
    taskStatus: '待核查',
    devType: '空调、通风系统',
    deliveryTime: '2021-06-19 17：55：55',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    techSituation: 0,
    fixStaff: '张英',
    fixedTime: '2021-06-22 20：00：00',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
  {
    id: 2001,
    key: 4,
    devId: 5,
    devName: '18楼停电',
    taskStatus: '已完成',
    devType: '电器系统',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    deliveryTime: '2021-06-18 17：55：55',
    fixedTime: '2021-06-18 19：00：00',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
]
const pro = [
  {
    id: 2001,
    key: 0,
    devId: 1,
    devName: '烟草大厦18楼频繁断电',
    taskType: '设备巡检',
    taskStatus: '待保养',
    devStatus: '在修',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    fixedTime: '2021-06-22 18：55：55',
    expectTime: '2021-06-23 14：25：35',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
  {
    id: 3001,
    key: 1,
    devId: 2,
    devName: '空调漏水',
    taskType: '设备点检',
    taskStatus: '待核查',
    devStatus: '在用',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '13332145698',
    fixStaff: '张英',
    fixedTime: '2021-06-24 10：55：11',
    expectTime: '2021-06-24 14：25：12',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
  {
    id: 2001,
    key: 2,
    devId: 3,
    devName: '电路老化检查',
    taskType: '一级保养',
    taskStatus: '已完成',
    devStatus: '在用',
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    fixedTime: '2021-06-19 10：55：55',
    expectTime: '2021-06-19 14：25：35',
    action: [
      {
        tagName: '详情',
        com: 'TableDrawer',
      },
    ],
  },
]

export default {
  components: {
    PageLayout,
  },
  mounted() {
    this.getBasic()
    this.getFix()
    this.getPro()
  },
  data() {
    return {
      basicInfo: NEW_DETAIL.basicInfo,
      basic: {},
      fixInfo: NEW_DETAIL.fixInfo,
      fixData: fix,
      proInfo: NEW_DETAIL.proInfo,
      proData: pro,
    }
  },
  computed: {
    Id() {
      return this.$route.params.id
    },
  },
  methods: {
    getBasic() {
      this.basic = basic.filter((item) => {
        return item.devId == this.Id
      })[0]
      this.basicInfo.map((item) => {
        item.value = this.basic[item.key]
        return item
      })
    },
    getFix() {
      this.fixData = fix.filter((item) => {
        return item.id == this.Id
      })
      this.fixInfo.map((item) => {
        item.value = this.fixData[item.key]
        return item
      })
    },
    getPro() {
      this.proData = pro.filter((item) => {
        return item.id == this.Id
      })
      this.proInfo.map((item) => {
        item.value = this.proData[item.key]
        return item
      })
    },
  },
}
</script>

<style lang="less" scoped>
.title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>