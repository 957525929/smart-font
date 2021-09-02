<template>
  <a-card :bordered="false">
    <a-tabs>
      <a-tab-pane key="1" tab="充值"><Recharge column="交易方式" money="充值金额"/> </a-tab-pane>
      <a-tab-pane key="2" tab="退款" force-render> <Recharge column="退款方式"/></a-tab-pane>
    </a-tabs>
  </a-card>
</template>
<script>
import Recharge from './component/recharge.vue'
export default {
  components: { Recharge }
}
</script>
<style lang="less" scoped></style>
