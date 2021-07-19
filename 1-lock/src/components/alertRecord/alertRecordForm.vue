<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </a-card>
</template>
<script>
import { alertData } from './data/alertData.js'
import { formatDate } from '@/utils/util'

const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum' },
  { title: '位置', dataIndex: 'area', key: 'area' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum' },
  { title: '报警时间', dataIndex: 'day', key: 'time' },
  { title: '报警方式', dataIndex: 'methods', key: 'methods' },
  { title: '报警消除时间', dataIndex: 'endTime', key: 'endTime' },
  { title: '维修电话', dataIndex: 'repairPerson', key: 'repairPerson' },
]

export default {
  mounted() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].day =
        formatDate(new Date().getTime() - i * 60 * 24 * 3600 * 1000, 'yyyy-MM-d') + ' ' + this.data[i].time
      this.data[i].endTime =
        formatDate(new Date().getTime() - i * 59 * 24 * 3600 * 1000, 'yyyy-MM-d') + ' ' + this.data[i].etime
    }
  },
  data() {
    return {
      data: alertData,
      columns,
    }
  },
}
</script>