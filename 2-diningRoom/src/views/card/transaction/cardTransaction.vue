<template>
  <a-card :bordered="false">
    <a-tabs>
      <a-tab-pane key="1" tab="消费记录"> <consume /></a-tab-pane>
      <a-tab-pane key="2" tab="充值记录" force-render><recharge /> </a-tab-pane>
      <a-tab-pane key="3" tab="退款记录"> <refund /></a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
import consume from './components/consume.vue'
import refund from './components/refund.vue'
import recharge from './components/recharge.vue'
export default {
  components: { consume, recharge, refund },
  data() {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>
