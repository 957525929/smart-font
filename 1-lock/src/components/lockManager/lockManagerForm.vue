<template>
  <a-table :columns="columns" :data-source="lockData">
    <span slot="operation" slot-scope="record">
      <a @click="openInformation(record)">人员详情</a>
      <a-modal v-model="informationVisible" title="人员详情" :footer="null">
        <a-table :columns="innerColumns" :data-source="childData"></a-table>
      </a-modal>
      <a-divider type="vertical"/>
      <a-popconfirm
        title="确定远程开锁当前房间吗？"
        ok-text="确定"
        cancel-text="取消"
        @confirm="confirm"
        @cancel="cancel"
      >
        <a href="#">远程开锁</a>
      </a-popconfirm>
    </span>
    <span slot="status" slot-scope="record">
      <a-tag :color="record.tag === '0' ? 'cyan': record.tag === '1' ? 'green': 'red'"> {{ record.status }} </a-tag>
    </span>
  </a-table>
</template>
<script>
import {roomData} from "@comp/roomManager/data/room";

const columns = [
  {title: '锁编号', dataIndex: 'lockNum', key: 'lockNum'},
  {title: '区域', dataIndex: 'area', key: 'area', width: '30%'},
  {title: '房间号', dataIndex: 'roomNum', key: 'roomNum'},
  {title: '状态', key: 'status', scopedSlots: {customRender: 'status'}},
  {title: '操作', key: 'operation', scopedSlots: {customRender: 'operation'}},
]

const innerColumns = [
  {title: '部门', dataIndex: 'dept', key: 'dept'},
  {title: '工号', dataIndex: 'num', key: 'num'},
  {title: '姓名', dataIndex: 'name', key: 'name'},
  {title: '性别', dataIndex: 'gender', key: 'gender'},
  {title: '联系电话', dataIndex: 'phone', key: 'phone'},
]

export default {
  data() {
    return {
      lockData: roomData,
      informationVisible: false,
      columns,
      innerColumns,
      childData:{},
    }
  },
  methods: {
    openInformation(record) {
      this.informationVisible = true
      this.childData = record.innerData
    },
    confirm() {
      // console.log('ok')
    },
    cancel() {
      // console.log('no')
    },
  },
}
</script>