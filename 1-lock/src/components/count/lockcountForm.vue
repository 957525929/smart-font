<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </a-card>
</template>
<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: '锁编号',
    dataIndex: 'lockNum',
    key: 'lockNum',
  },
  {
    title: '房间',
    dataIndex: 'room',
    key: 'room',
  },

  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: '部门',
    dataIndex: 'apartment',
    key: 'apartment',
  },

  {
    title: '日',
    dataIndex: 'daylock',
    key: 'daylock',
  },
  {
    title: '月',
    dataIndex: 'monthlock',
    key: 'monthlock',
  },
  {
    title: '年',
    dataIndex: 'yearlock',
    key: 'yearlock',
  },
  {
    title: '全部',
    dataIndex: 'alllock',
    key: 'alllock',
  },
]

const data = [
  {
    key: '1',
    id: 1,
    lockNum: 'S0001',
    name: '张三',
    apartment: '配送部',
    room: 'B-402',
    daylock: '8',
    monthlock: '180',
    yearlock: '2400',
    alllock: '2400',
  },
  {
    key: '2',
    id: 2,
    lockNum: 'S0002',
    name: '李四',
    apartment: '营销部',
    room: 'C-305',
    daylock: '10',
    monthlock: '200',
    yearlock: '2861',
    alllock: '2861',
  },
  {
    key: '3',
    id: 3,
    lockNum: 'S0003',
    name: '王五',
    apartment: '营销部',
    room: 'D-205',
    daylock: '18',
    monthlock: '230',
    yearlock: '2890',
    alllock: '2890',
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