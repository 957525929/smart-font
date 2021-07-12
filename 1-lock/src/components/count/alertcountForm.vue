<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="text, record, index">
        <a @click="showModal(index)">详情</a>
        <a-modal v-model="visible" title="报警记录详情" :footer="null">
          <a-timeline mode="alternate">
            <a-timeline-item v-for="(item, index) in alertDate[rowIndex]" :key="index">{{ item }}</a-timeline-item>
          </a-timeline>
          <br />
        </a-modal>
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
    title: '本日',
    dataIndex: 'day',
    key: 'day',
  },
  {
    title: '本周',
    dataIndex: 'week',
    key: 'week',
  },
  {
    title: '本月',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: '本年',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '全部',
    dataIndex: 'all',
    key: 'all',
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
    lockNum: 'S0001',
    buildNum: '1号楼',
    roomNum: '101',
    dept: '办公室',
    day: '0',
    week: '0',
    month: '0',
    year: '2',
    all: '3',
  },
  {
    key: '2',
    lockNum: 'S0002',
    buildNum: '2号楼',
    roomNum: '211',
    dept: '生产部',
    day: '1',
    week: '1',
    month: '1',
    year: '4',
    all: '7',
  },
  {
    key: '3',
    lockNum: 'S0003',
    buildNum: '1号楼',
    roomNum: '203',
    dept: '购销部',
    day: '0',
    week: '0',
    month: '1',
    year: '2',
    all: '4',
  },
  {
    key: '4',
    lockNum: 'S0004',
    buildNum: '1号楼',
    roomNum: '402',
    dept: '信息中心',
    day: '0',
    week: '1',
    month: '1',
    year: '2',
    all: '3',
  },
]

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      alertDate: [
        ['电量不足 2021-05-01', '密码锁故障 2021-03-22', '密码锁故障 2021-01-05'],
        ['电量不足 2021-05-01', '密码锁故障 2021-03-22', '密码锁故障 2021-01-05'],
        ['电量不足 2021-05-01', '密码锁故障 2021-03-22', '密码锁故障 2021-01-05'],
        ['电量不足 2021-05-01', '密码锁故障 2021-03-22', '密码锁故障 2021-01-05'],
      ],
      rowIndex: 0,
    }
  },
  methods: {
    showModal(value) {
      this.visible = true
      this.rowIndex = value
      console.log(this.rowIndex)
    },
  },
}
</script>