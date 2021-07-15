<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"></a-table>
  </a-card>
</template>
<script>
import { lockCount } from './data/lockCount.js'

const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum', width: '10%' },
  { title: '位置', dataIndex: 'area', key: 'area', width: '25%' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum', width: '10%' },
  { title: '低电量报警', dataIndex: 'lowElect', key: 'lowElect', width: '11%' },
  { title: '密码错误多次', dataIndex: 'error', key: 'error' },
]

export default {
  data() {
    return {
      data: lockCount,
      columns,
    }
  },
  methods: {},
}
</script>