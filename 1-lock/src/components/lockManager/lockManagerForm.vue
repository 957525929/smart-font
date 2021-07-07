<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="operation">
      <!-- <a>添加</a>
      <a-divider type="vertical" /> -->
      <!-- <a>初始化</a>
      <a-divider type="vertical" /> -->
      <a-popconfirm title="确定远程开锁吗？" ok-text="确定" cancel-text="取消" @confirm="confirm" @cancel="cancel">
        <a href="#">远程开锁</a>
      </a-popconfirm>
    </span>
    <a-table
      slot="expandedRowRender"
      slot-scope="record"
      :columns="innerColumns"
      :data-source="record.innerData"
      :pagination="false"
      size="small"
    >
      <!-- <span slot="operation">
        <a>解绑</a>
        <a-divider type="vertical" />
        <a>调动</a>
      </span> -->
    </a-table>
  </a-table>
</template>
<script>
const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum' },
  { title: '楼号', dataIndex: 'buildingNum', key: 'buildingNum' },
  { title: '房间号', dataIndex: 'roomNum', key: 'roomNum' },
  { title: '部门', dataIndex: 'dept', key: 'dept' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
]

const data = [
  {
    key: 1,
    lockNum: 'S0001',
    buildingNum: '1号楼',
    roomNum: '101',
    dept: '办公室',
    status: '已开锁',
    innerData: [
      {
        key: 11,
        num: 'A001',
        name: '张三',
        gender: '男',
      },
      {
        key: 12,
        num: 'A111',
        name: '李丝',
        gender: '女',
      },
      {
        key: 13,
        num: 'B221',
        name: '王五',
        gender: '男',
      },
    ],
  },
  {
    key: 2,
    lockNum: 'S0002',
    buildingNum: '2号楼',
    roomNum: '202',
    dept: '生产部',
    status: '密码锁故障',
    innerData: [
      {
        key: 21,
        num: 'A111',
        name: '张山',
        gender: '男',
      },
      {
        key: 22,
        num: 'C311',
        name: '李斯',
        gender: '男',
      },
    ],
  },
  {
    key: 3,
    lockNum: 'S0003',
    buildingNum: '2号楼',
    roomNum: '303',
    dept: '生产部',
    status: '低电量',
    innerData: [
      {
        key: 31,
        num: 'A221',
        name: '张珊',
        gender: '女',
      },
      {
        key: 32,
        num: 'B654',
        name: '李思',
        gender: '女',
      },
      {
        key: 33,
        num: 'A112',
        name: '王武',
        gender: '男',
      },
    ],
  },
  {
    key: 4,
    lockNum: 'S0004',
    buildingNum: '1号楼',
    roomNum: '404',
    dept: '购销部',
    status: '已开锁',
    innerData: [
      {
        key: 41,
        num: 'D221',
        name: '赵柳',
        gender: '女',
      },
    ],
  },
  {
    key: 5,
    lockNum: 'S0005',
    buildingNum: '3号楼',
    roomNum: '503',
    dept: '信息中心',
    status: '已锁',
  },
]

const innerColumns = [
  { title: '工号', dataIndex: 'num', key: 'num', width: '10%' },
  { title: '姓名', dataIndex: 'name', key: 'name', width: '10%' },
  { title: '性别', dataIndex: 'gender', key: 'gender' },
  // { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
]

export default {
  data() {
    return {
      data,
      columns,
      innerColumns,
    }
  },
  methods: {
    confirm() {
      console.log('ok')
    },
    cancel() {
      console.log('no')
    },
  },
}
</script>