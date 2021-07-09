<template>
  <a-card>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: '锁编号',
    dataIndex: 'lockNum',
    key: 'lockNum',
  },
  {
    title: '楼号',
    dataIndex: 'buildNum',
    key: 'buildNum',
  },
  {
    title: '房间',
    dataIndex: 'roomNum',
    key: 'roomNum',
  },
  {
    title: '部门',
    dataIndex: 'dept',
    key: 'dept',
  },
  {
    title: '报警时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '报警方式',
    dataIndex: 'methods',
    key: 'methods',
  },
]

const data = [
  {
    key: '1',
    lockNum: 'S0001',
    buildNum: '1号楼',
    roomNum: '101',
    dept: '办公室',
    time: '2021-05-09 08:30:21',
    methods: '密码锁故障',
  },
  {
    key: '2',
    lockNum: 'S0004',
    buildNum: '2号楼',
    roomNum: '211',
    dept: '生产部',
    time: '2021-03-21 20:25:12',
    methods: '低电量',
  },
  {
    key: '3',
    lockNum: 'S0002',
    buildNum: '1号楼',
    roomNum: '203',
    dept: '购销部',
    time: '2021-01-09 08:32:34',
    methods: '密码错误多次',
  },
]

export default {
  data() {
    return {
      data,
      columns,
    }
  },
}
</script>