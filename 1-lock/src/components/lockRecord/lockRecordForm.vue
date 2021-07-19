<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </a-card>
</template>
<script>
import { roomData } from '@comp/roomManager/data/room'
import { formatDate } from '@/utils/util'

const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum' },
  { title: '位置', dataIndex: 'area', key: 'area' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum' },
  { title: '开锁时间', dataIndex: 'day', key: 'time' },
  { title: '开锁方式', dataIndex: 'methods', key: 'methods' },
  { title: '开锁人所属部门', dataIndex: 'peopleDept', key: 'peopleDept' },
  { title: '开锁人姓名', dataIndex: 'people', key: 'people' },
]

export default {
  data() {
    return {
      data: roomData,
      columns,
    }
  },
  mounted() {
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i].day = formatDate(new Date().getTime() - 0 * 24 * 3600 * 1000, 'yyyy-MM-d') + ' ' + this.data[i].time
    }
    this.data[this.data.length - 1].day =
      formatDate(new Date().getTime() - 1 * 24 * 3600 * 1000, 'yyyy-MM-d') + ' ' + this.data[this.data.length - 1].time
  },
}
</script>