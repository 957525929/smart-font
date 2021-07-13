<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="operation" slot-scope="record">
      <a @click="change(record)">变更</a>

      <!-- 房间变更功能 -->
      <a-modal v-model="visible" title="变更" @ok="handleOk">
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
      <a @click="add(record)">添加人员</a>
      <a-modal v-model="visibleAdd" title="添加人员" @ok="handleOkAdd">
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
              <a-select-option value="1"> 办公室 </a-select-option>
              <a-select-option value="2"> 生产部 </a-select-option>
              <a-select-option value="3"> 购销部 </a-select-option>
              <a-select-option value="4"> 信息中心 </a-select-option>
            </a-select>
          </a-col>
        </a-row>

        <br />

        <a-row type="flex" align="middle">
          <a-col :span="4">姓名：</a-col>
          <a-col :span="10">
            <a-select style="width: 100%" placeholder="请选择姓名" @change="handleChange" allowClear>
              <a-select-option value="name1"> 张三 </a-select-option>
              <a-select-option value="name2"> 李四 </a-select-option>
              <a-select-option value="name3"> 王五 </a-select-option>
              <a-select-option value="name4"> 赵六 </a-select-option>
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

        <!-- <a-divider type="vertical" /> -->

        <!-- 调动 -->

        <!-- <a @click="move(record)">调动</a>
        <a-modal v-model="visibleMove" title="人员调动" @ok="handleOkMove">
          <a-row type="flex" align="middle">
            <a-col :span="4">工号：</a-col>
            <a-col :span="10"> </a-col>
          </a-row>
        </a-modal>

        <br /> -->

        <!-- 调动结束 -->
      </span>
    </a-table>
  </a-table>
</template>
<script>
const columns = [
  { title: '区域', dataIndex: 'area', key: 'area', width: '30%' },
  { title: '房间号', dataIndex: 'roomNum', key: 'roomNum', width: '30%' },
  { title: '操作', key: 'operation', scopedSlots: { customRender: 'operation' } },
]

const data = [
  {
    key: 1,
    area: '福建烟草公司/A区域/1号楼',
    roomNum: '101',
    innerData: [
      {
        key: 11,
        dept: '财务管理处',
        num: 'A001',
        name: '张三',
        gender: '男',
        phone: '15860273034',
      },
      {
        key: 12,
        dept: '财务管理处',
        num: 'A111',
        name: '李丝',
        gender: '女',
        phone: '13854641624',
      },
      {
        key: 13,
        dept: '安全管理处',
        num: 'B221',
        name: '王五',
        gender: '男',
        phone: '13235905384',
      },
    ],
  },
  {
    key: 2,
    area: '福建烟草公司/A区域/2号楼',
    roomNum: '202',
    innerData: [
      {
        key: 21,
        dept: '物流管理处',
        num: 'A111',
        name: '张山',
        gender: '男',
        phone: '13459773253',
      },
      {
        key: 22,
        dept: '物流管理处',
        num: 'C311',
        name: '李斯',
        gender: '男',
        phone: '17656871251',
      },
    ],
  },
  {
    key: 3,
    area: '福建烟草公司/A区域/2号楼',
    roomNum: '303',
    innerData: [
      {
        key: 31,
        dept: '物流管理处',
        num: 'A221',
        name: '张珊',
        gender: '女',
        phone: '15860173035',
      },
      {
        key: 32,
        dept: '物流管理处',
        num: 'B654',
        name: '李思',
        gender: '女',
        phone: '17651258645',
      },
      {
        key: 33,
        dept: '烟叶管理处',
        num: 'A112',
        name: '王武',
        gender: '男',
        phone: '13850641598',
      },
    ],
  },
  {
    key: 4,
    area: '福建烟草公司/B区域/1号楼',
    roomNum: '404',
    innerData: [
      {
        key: 41,
        dept: '信息中心',
        num: 'D221',
        name: '赵柳',
        gender: '女',
      },
    ],
  },
  {
    key: 5,
    area: '福建烟草公司/A区域/3号楼',
    roomNum: '503',
  },
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
      data,
      columns,
      innerColumns,
      visible: false,
      visibleAdd: false,
      visibleMove: false,
      selectedItems: [],
      rowRecord: {},
      Num: '',
      name: '',
      moveIndex: 0,
    }
  },
  computed: {
    //多选员工
    filteredOptions() {
      return OPTIONS.filter((o) => !this.selectedItems.includes(o))
    },
  },
  methods: {
    confirm() {
      console.log('ok')
    },
    cancel() {
      console.log('no')
    },
    //房间变更功能
    change(value) {
      console.log('change')
      this.visible = true
      this.rowRecord = value
      console.log(this.rowRecord)
      let arr = []
      value.innerData.forEach((e) => {
        arr.push(e.name)
        this.selectedItems = arr
      })
      console.log(this.selectedItems)
    },
    handleOk() {
      this.visible = false
    },
    deptChange(value) {
      console.log(value)
    },
    peopleChange(selectedItems) {
      this.selectedItems = selectedItems
    },
    // 添加人员
    add(value) {
      this.visibleAdd = true
      this.rowRecord = value
    },
    handleOkAdd() {
      this.visibleAdd = false
    },
    genderChange(value) {
      console.log(value)
    },
    // 调动
    // move(value) {
    //   this.visibleMove = true
    //   this.rowRecord = value
    //   console.log(this.rowRecord)
    // },
    // handleOkMove() {
    //   this.visibleMove = false
    // },
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>