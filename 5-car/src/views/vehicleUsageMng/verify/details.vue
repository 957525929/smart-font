<template>
  <div class="root">
    <a-descriptions bordered>
      <a-descriptions-item label="用车人"> {{ id.user }} </a-descriptions-item>
      <a-descriptions-item label="用车人电话"> {{ data.userContact }} </a-descriptions-item>
      <a-descriptions-item label="乘客数"> {{ data.passengerCount + '人' }}</a-descriptions-item>
      <a-descriptions-item label="用车时间"> {{ id.time }}</a-descriptions-item>
      <a-descriptions-item label="用车事由" :span="2"> {{ data.reason }}</a-descriptions-item>
      <a-descriptions-item label="出发地"> {{ id.from }} </a-descriptions-item>
      <a-descriptions-item label="目的地">{{ id.to }} </a-descriptions-item>
      <a-descriptions-item label="单双程">{{ id.isBack }} </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
const mockData = {
  reason: '公务出差', //用车事由
  userContact: '18656661997',
  driver: '卢本伟',
  driverContact: '15556666666',
  passengerCount: 4,
}
export default {
  mounted() {
    console.log('详情传值', this.id)
  },
  data() {
    return {
      data: mockData,
    }
  },
  props: ['id'],
}
</script>

<style lang="less" scoped>
</style>