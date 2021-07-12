<template>
  <a-card :bordered="false">
    <h2>设置提醒时间</h2>
    <h1>优先级:</h1>
    <a-tabs>
      <a-tab-pane key="1" tab="高">
        <SetTimeData />
      </a-tab-pane>
      <a-tab-pane key="2" tab="中" force-render>
        <SetTimeData />
      </a-tab-pane>
      <a-tab-pane key="3" tab="低">
        <SetTimeData />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>


<script>
import SetTimeData from './components/SetTimeData.vue'

export default {
  components: {
    SetTimeData
  },

}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>