<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </a-card>
</template>
<script>
import {roomData} from "@comp/roomManager/data/room";

const columns = [
  {title: '锁编号', dataIndex: 'lockNum', key: 'lockNum',},
  {title: '区域', dataIndex: 'area', key: 'area',},
  {title: '房间', dataIndex: 'roomNum', key: 'roomNum',},
  {title: '开锁时间', dataIndex: 'time', key: 'time',},
  {title: '开锁方式', dataIndex: 'methods', key: 'methods',},
  {title: '开锁人所属部门', dataIndex: 'peopleDept', key: 'peopleDept',},
  {title: '开锁人', dataIndex: 'people', key: 'people',},
]

export default {
  data() {
    return {
      data: roomData,
      columns,
    }
  },
}
</script>