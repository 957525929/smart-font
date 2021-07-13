<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </a-card>
</template>
<script>
import { alertData } from './data/alertData.js'

const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum' },
  { title: '区域', dataIndex: 'area', key: 'area' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum' },
  { title: '报警时间', dataIndex: 'time', key: 'time' },
  { title: '报警方式', dataIndex: 'methods', key: 'methods' },
  { title: '报警消除时间', dataIndex: 'endTime', key: 'endTime' },
  { title: '维修电话', dataIndex: 'repairPerson', key: 'repairPerson' },
]

export default {
  data() {
    return {
      data: alertData,
      columns,
    }
  },
}
</script>