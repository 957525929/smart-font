<template>
  <a-card>
    <a-table :columns="columns" :data-source="roomData">
      <span slot="operation" slot-scope="record">
        <a @click="roomChange(record)">变更</a>

        <!-- 房间变更功能 -->
        <a-modal v-model="roomVisible" title="变更" @ok="roomOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">区域：</a-col>
            <a-col :span="10"> {{ rowRecord.area }} </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">房间号：</a-col>
            <a-col :span="10"> {{ rowRecord.roomNum }} </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">员工：</a-col>
            <a-col :span="20">
              <a-select
                mode="multiple"
                placeholder="请选择员工"
                :value="selectedItems"
                style="width: 100%"
                @change="peopleChange"
              >
                <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-modal>
        <!-- 房间变更功能结束 -->

        <a-divider type="vertical" />

        <!-- 添加人员 -->
        <a @click="penpleAdd(record)">添加人员</a>
        <a-modal v-model="visibleAdd" title="添加人员" @ok="addOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">区域：</a-col>
            <a-col :span="10"> {{ rowRecord.area }} </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">房间号：</a-col>
            <a-col :span="10"> {{ rowRecord.roomNum }} </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4"> 部门： </a-col>
            <a-col :span="10">
              <a-select style="width: 100%" placeholder="请选择部门" @change="deptChange" allowClear>
                <a-select-option v-for="(item, index) in deptData" :key="index">
                  {{ item.deptName }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">姓名：</a-col>
            <a-col :span="10">
              <a-select style="width: 100%" placeholder="请选择姓名" @change="selectPeople" allowClear>
                <a-select-option v-for="(item, index) in Person" :key="index"> {{ item }} </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-modal>
        <!-- 添加人员结束 -->
      </span>

      <a-table
        slot="expandedRowRender"
        slot-scope="record"
        :columns="innerColumns"
        :data-source="record.innerData"
        :pagination="false"
        size="small"
      >
        <span slot="operation">
          <a-popconfirm
            title="确定解绑当前员工吗？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a href="#">解绑</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-table>
  </a-card>
</template>
<script>
import { roomData } from './data/room.js'
import { deptData } from './data/dept.js'

const columns = [
  { title: '位置', dataIndex: 'area', key: 'area', width: '30%' },
  { title: '房间号', dataIndex: 'roomNum', key: 'roomNum', width: '30%' },
  { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
]

const innerColumns = [
  { title: '部门', dataIndex: 'dept', key: 'dept', width: '15%' },
  { title: '工号', dataIndex: 'num', key: 'num', width: '10%' },
  { title: '姓名', dataIndex: 'name', key: 'name', width: '10%' },
  { title: '性别', dataIndex: 'gender', key: 'gender', width: '10%' },
  { title: '联系电话', dataIndex: 'phone', key: 'phone', width: '20%' },
  { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
]

const OPTIONS = ['张三', '李四', '王五', '赵柳']

export default {
  data() {
    return {
      roomData: roomData,
      columns,
      roomVisible: false,
      rowRecord: {},
      selectedItems: [],
      visibleAdd: false,
      deptData: deptData,
      Person: OPTIONS,
      innerColumns,
    }
  },
  computed: {
    //多选员工
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o))
    },
  },
  methods: {
    roomChange(value) {
      this.roomVisible = true
      this.rowRecord = value
      let arr = []
      value.innerData.forEach((e) => {
        arr.push(e.name)
        this.selectedItems = arr
      })
      // console.log(this.selectedItems)
    },
    roomOk() {
      this.roomVisible = false
    },
    peopleChange(selectedItems) {
      this.selectedItems = selectedItems
    },
    penpleAdd(value) {
      this.visibleAdd = true
      this.rowRecord = value
    },
    addOk() {
      this.visibleAdd = false
    },
    deptChange(value) {
      // console.log(value)
    },
    selectPeople(value) {
      // console.log(value)
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