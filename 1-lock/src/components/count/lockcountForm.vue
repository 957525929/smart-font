<template>
  <a-card>
    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="text, record">
        <a @click="showModal(record)">详情</a>
        <a-modal v-model="visible" title="开锁记录统计" :footer="null">
          <a-table :columns="innercolumns" :data-source="rowRecord.innerData"></a-table>
          <br />
        </a-modal>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { lockCount } from './data/lockCount.js'

const columns = [
  { title: '锁编号', dataIndex: 'lockNum', key: 'lockNum' },
  { title: '位置', dataIndex: 'area', key: 'area' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum' },
  { title: '指纹开锁', dataIndex: 'figerLock', key: 'figerLock' },
  { title: '密码开锁', dataIndex: 'numLock', key: 'numLock' },
  { title: '远程开锁', dataIndex: 'remoteLock', key: 'remoteLock' },
  { title: '操作', key: 'action', scopedSlots: { customRender: 'action' } },
]

const innercolumns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '部门', dataIndex: 'dept', key: 'name' },
  { title: '指纹开锁', dataIndex: 'figerLock', key: 'figerLock' },
  { title: '密码开锁', dataIndex: 'numLock', key: 'numLock' },
  { title: '远程开锁', dataIndex: 'remoteLock', key: 'remoteLock' },
]

export default {
  data() {
    return {
      data: lockCount,
      columns,
      visible: false,
      rowRecord: {},
      innercolumns: innercolumns,
    }
  },
  methods: {
    showModal(value) {
      this.visible = true
      this.rowRecord = value
    },
  },
}
</script>