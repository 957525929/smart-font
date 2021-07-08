<template>
  <page-layout :title="title">
    <a-card :bordered="false">
      <detail-list title="基本信息">
        <view v-for="item in basicInfo" :key="item.key">
          <detail-list-item :term="item.title">{{item.value}}</detail-list-item>
        </view>
<!--         
        <detail-list-item term="状态">已取货</detail-list-item>
        <detail-list-item term="销售单号">1234123421</detail-list-item>
        <detail-list-item term="子订单">3214321432</detail-list-item> -->
      </detail-list>
      <a-divider style="margin-bottom: 32px"/>

      <div class="title">维修记录</div>
      <s-table
        style="margin-bottom: 24px" 
        :columns="fixColumns" 
        :data="fixData">
      </s-table>

      <div class="title">保养记录</div>
      <s-table
        style="margin-bottom: 24px" 
        :columns="proColumns" 
        :data="proeData">

        <!-- <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status" :text="status | statusFilter"/>
        </template> -->

      </s-table>

      <div class="title">运维参数</div>
      <s-table
        style="margin-bottom: 24px" 
        :columns="runColumns" 
        :data="runData">

        <!-- <template
          slot="status"
          slot-scope="status">
          <a-badge :status="status" :text="status | statusFilter"/>
        </template> -->

      </s-table>
    </a-card>
  </page-layout>
</template>

<script>
//js
import {data} from './js/index.js'
import detail from "./js/detail.js";
  import PageLayout from '@/components/page/PageLayout'
  import STable from '@/components/table/'
  import DetailList from '@/components/tools/DetailList'
  import ABadge from "ant-design-vue/es/badge/Badge"
  const DetailListItem = DetailList.Item
const NEW_DETAIL = Object.freeze(detail)
  export default {
    // onLoad(params){console.log(params,this.$route.params.id);},
    components: {
      PageLayout,
      ABadge,
      DetailList,
      DetailListItem,
      STable
    },
    mounted() {
      console.log(this.$route.params.id,...NEW_DETAIL,detail)
      this.basicData = NEW_DETAIL.basicData.filter(item=>{
        item.devId==this.$route.params.id
      })[0]
      console.log(this.basicData);
      this.getBasic()
    },
    data () {
      return {
        basicInfo:NEW_DETAIL.basicInfo,
        basicData:{},
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          'processing': '进行中',
          'success': '完成',
          'failed': '失败'
        }
        return statusMap[status]
      }
    },
    computed: {
      title () {
        return this.$route.meta.title
      }
    },
    methods: {
      getBasic(){
        
        this.basicInfo.map(item=>{
          item.value = this.basicData[item.key]
          return item
        })
        console.log(this.basicInfo);
      }
    },

  }
</script>

<style lang="less" scoped>
  .title {
    color: rgba(0,0,0,.85);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }
</style>