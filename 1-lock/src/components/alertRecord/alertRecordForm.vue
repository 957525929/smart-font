<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="action">
        <a @click="showModal">详情</a>
        <a-modal v-model="visible" title="报警记录详情" :footer="null">
          <a-timeline mode="alternate">
            <a-timeline-item>密码锁故障 2020-09-01</a-timeline-item>
            <a-timeline-item>密码锁故障 2020-12-22</a-timeline-item>
            <a-timeline-item>密码锁故障 2021-03-12</a-timeline-item>
            <a-timeline-item>... 2021-04-05</a-timeline-item>
          </a-timeline>
          <br />
        </a-modal>

        <a-divider type="vertical" />

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
    title: '房间',
    dataIndex: 'room',
    key: 'room',
  },
  {
    title: '报警时间',
    dataIndex: 'repairTime',
    key: 'repairTime',
  },
  {
    title: '报警内容',
    dataIndex: 'content',
    key: 'content',
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
    room: 'B-402',
    repairTime: '2020-01-12 14:35:25',
    content: '密码锁故障',
  },
  {
    key: '2',
    lockNum: 'S0002',
    room: 'C-305',
    repairTime: '2021-05-12 18:30:28',
    content: '密码锁故障',
  },
  {
    key: '3',
    lockNum: 'S0003',
    room: 'D-205',
    repairTime: '2021-03-21 19:11:46',
    content: '...',
  },
]

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
  },
}
</script>