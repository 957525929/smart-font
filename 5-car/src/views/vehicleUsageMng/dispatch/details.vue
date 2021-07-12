<template>
  <div class="root">
    <a-descriptions>
      <!-- <a-descriptions-item label="车牌号">{{ id.licenseNum }}</a-descriptions-item> -->
      <a-descriptions-item label="用车人"> {{ id.user }} </a-descriptions-item>
      <a-descriptions-item label="用车人电话"> {{ id.userContact }} </a-descriptions-item>
      <a-descriptions-item label="乘客数"> {{ id.passengerCount + '人' }}</a-descriptions-item>
      <a-descriptions-item label="用车时间"> {{ id.time }}</a-descriptions-item>
      <!-- <a-descriptions-item label="司机"> {{ id.driver }} </a-descriptions-item> -->
      <a-descriptions-item label="用车事由"> {{ id.reason }}</a-descriptions-item>
      <!-- <a-descriptions-item label="司机电话"> {{ id.driverContact }} </a-descriptions-item> -->
      <a-descriptions-item label="出发地"> {{ id.from }} </a-descriptions-item>
      <a-descriptions-item label="目的地">{{ id.to }} </a-descriptions-item>
      <a-descriptions-item label="单双程">{{ id.isBack }} </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('详情传值', this.id)
  },
  data() {
    return {
    }
  },
  props: ['id'],
}
</script>

<style lang="less" scoped>
</style>