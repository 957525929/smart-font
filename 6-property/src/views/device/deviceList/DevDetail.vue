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

            <div class="title">运维参数</div>
            <a-table style="margin-bottom: 24px" :columns="runInfo" :data-source="runData"> </a-table>
        </a-card>
    <!-- </page-layout> -->
</template>

<script>
//js
import { data } from './js/index.js'
import { basicInfo, fixInfo, proInfo, runInfo } from './js/detail.js'
import PageLayout from '@/components/page/PageLayout'
import STable from '@/components/table/'
const NEW_DETAIL = Object.freeze({ basicInfo, fixInfo,  proInfo, runInfo})
const basic = [
    {
        id:1001,
        key: 0,
        devId: 1001,
        devName: 'waterPipe_1001',
        devType: 2,
        devStatus: 0,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '张英',
        loginTime: '2021-06-22 17：55：55',
        manufacturer: '日丰企业集团有限公司',
        batch: 'M127894'
    },
    {
      id:2001,
        key: 1,
        devId: 2001,
        devName: 'wire_2001',
        devType: 1,
        devStatus: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 1,
        fixStaff: '刘涛',
        loginTime: '2021-06-21 10：55：55',
        manufacturer: '国网福建省电力有限公司',
        batch: 'N2169'
    },
    {
      id:3001,
        key: 2,
        devId: 3001,
        devName: 'air_3001',
        devType: 0,
        devStatus: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 2,
        fixStaff: '王翔',
        loginTime: '2021-06-29 08：55：55',
        manufacturer: '珠海格力电器股份有限公司',
        batch: 'A2421'
    },
]
const fix = [
   {
       id:2001,
        key: 0,
        devId: 1,
        devName: "18楼停电",
        taskStatus:1,
        devType: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '刘涛',
        deliveryTime: '2021-06-22 17：55：55',
        fixedTime:"2021-06-24 17：55：55",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        },{
            tagName:"审核下发",
            com:"TableModal"
        },{
            tagName:"忽略",
            com:""
        }]
    },
    {
        id:2001,
        key: 1,
        devId: 2,
        devName: "18楼频繁断电停电",
        taskStatus:2,
        devType: 1,
        deliveryTime:"2021-06-22 10：55：55",
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '刘涛',
        fixedTime: "2021-06-22 20：00：00",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },
    {
        id:1001,
        key: 2,
        devId: 3,
        devName: "卫生间停水",
        taskStatus:3,
        devType: 2,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '王翔',
        deliveryTime: '2021-06-20 17：55：55',
        fixedTime:"2021-06-21 17：55：55",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },
    {
        id:3001,
        key: 3,
        devId: 4,
        devName: "空调调控温度无反应",
        taskStatus:4,
        devType: 0,
        deliveryTime:"2021-06-19 17：55：55",
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        techSituation: 0,
        fixStaff: '张英',
        fixedTime: "2021-06-22 20：00：00",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    },{
        id:2001,
        key:4,
        devId: 5,
        devName: "18楼停电",
        taskStatus:5,
        devType: 1,
        assets: '烟草大厦',
        institution: '福建烟草公司',
        phone: '18232145698',
        fixStaff: '刘涛',
        deliveryTime: '2021-06-18 17：55：55',
        fixedTime:"2021-06-18 19：00：00",
        action:[{
            tagName:"详情",
            com:"TableDrawer"
        }]
    }
]
const pro = [{
  id:2001,
    key: 0,
    devId: 1,
    devName: "烟草大厦18楼频繁断电",
    taskType: 2,
    taskStatus: 1,
    devStatus: 1,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    fixedTime: '2021-06-22 18：55：55',
    expectTime: '2021-06-23 14：25：35',
    action: [{
      tagName: "详情",
      com: "TableDrawer"
    }]
  },
  {
    id:3001,
    key: 1,
    devId: 2,
    devName: "空调漏水",
    taskType: 1,
    taskStatus: 2,
    devStatus: 0,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '13332145698',
    fixStaff: '张英',
    fixedTime: '2021-06-24 10：55：11',
    expectTime: '2021-06-24 14：25：12',
    action: [{
      tagName: "详情",
      com: "TableDrawer"
    }]
  },
  {
    id:2001,
    key: 2,
    devId: 3,
    devName: "电路老化检查",
    taskType: 0,
    taskStatus: 3,
    devStatus: 0,
    assets: '烟草大厦',
    institution: '福建烟草公司',
    phone: '18232145698',
    fixStaff: '刘涛',
    fixedTime: '2021-06-19 10：55：55',
    expectTime: '2021-06-19 14：25：35',
    action: [{
      tagName: "详情",
      com: "TableDrawer"
    }]
  }
]
export default {
    // onLoad(params){console.log(params,this.$route.params.id);},
    components: {
        PageLayout,
        STable,
    },
    mounted() {
        this.getBasic()
        this.getFix()
        this.getPro()
    },
    data() {
        return {
            basicInfo: NEW_DETAIL.basicInfo,
            basicData: {},
            fixInfo: NEW_DETAIL.fixInfo,
            fixData: fix,
            proInfo: NEW_DETAIL.proInfo,
            proData: pro,
            runInfo: NEW_DETAIL.runInfo,
            runData: NEW_DETAIL.run,
        }
    },
    computed: {
        Id() {
            return this.$route.params.id
        },
    },
    methods: {
        getBasic() {
            this.basicData = basic.filter((item) => {
                return item.devId == this.Id
            })[0]
            this.basicInfo.map((item) => {
                if (item.valueEnum) {
                    this.basicData[item.key] = item.valueEnum[this.basicData[item.key]].tableValue
                } else {
                    item.value = this.basicData[item.key]
                }
                return item
            })
        },
        getFix() {
            this.fixData = fix.filter((item) => {
              console.log(item);
                return item.id == this.Id
            })
            console.log(this.fixData);
            this.fixInfo.forEach((item) => {
                if (item.valueEnum) {
                    this.fixData.map((res) => {
                        res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
                         return res
                    })
                }
               
            })
        },
        getPro() {
            this.proData = this.proData.filter((item) => {
                return item.id == this.Id
            })
            this.proInfo.forEach((item) => {
                if (item.valueEnum) {
                    this.proData.map((res) => {
                        res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
                         return res
                    })

                } 
                
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