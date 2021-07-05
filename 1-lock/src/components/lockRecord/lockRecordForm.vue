<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="action">
        <a-popconfirm title="确定删除当前记录吗？" ok-text="确定" cancel-text="取消">
          <a href="#">删除</a>
        </a-popconfirm>
      </span>
    </a-table>
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
    title: '工号',
    dataIndex: 'Num',
    key: 'Num',
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
    title: '房间',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: '开锁时间',
    dataIndex: 'openTime',
    key: 'openTime',
  },
  {
    title: '开锁方式',
    dataIndex: 'methods',
    key: 'methods',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    id: 1,
    lockNum: 'S0001',
    Num: 'A001',
    name: '张三',
    sex: '男',
    apartment: '配送部',
    room: 'B-402',
    workTime: '08:30',
    endTime: '18:00',
    openTime: '2020-01-12 14:35:25',
    methods: '密码开锁',
  },
  {
    key: '2',
    id: 2,
    lockNum: 'S0002',
    Num: 'A002',
    name: '李四',
    sex: '女',
    apartment: '营销部',
    room: 'C-305',
    workTime: '09:00',
    endTime: '19:00',
    openTime: '2021-05-12 18:30:28',
    methods: '指纹开锁',
  },
  {
    key: '3',
    id: 3,
    lockNum: 'S0003',
    Num: 'A003',
    name: '王五',
    sex: '男',
    apartment: '营销部',
    room: 'D-205',
    workTime: '07:40',
    endTime: '18:30',
    openTime: '2021-03-21 19:11:46',
    methods: '指纹开锁',
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