<template>
  <div>
    <a-card>
      <span>负责区域：</span>
      <a-tree-select
        v-model="value"
        placeholder="请选择区域"
        style="width: 27%"
        :tree-data="treeData"
        tree-checkable
        :show-checked-strategy="SHOW_PARENT"
        search-placeholder="Please select"
      />

      <a-divider type="vertical" />

      <span>类型：</span>
      <a-select style="width: 11%" placeholder="请选择类型" @change="typeChange" allowClear>
        <a-select-option value="1"> 智能锁厂商 </a-select-option>
        <a-select-option value="2"> 后勤管理 </a-select-option>
      </a-select>

      <a-divider type="vertical" />

      <span> 姓名： </span>
      <a-input style="width: 11%" placeholder="请输入姓名" v-model="nameCheck" allowClear></a-input>

      <a-row type="flex" justify="end">
        <a-col>
          <a-button @click="handleAdd" class="butt">新增</a-button>
          <a-modal v-model="addVisible" title="新增" @ok="addOk">
            <a-row type="flex" align="middle">
              <a-col :span="4">类型：</a-col>
              <a-col :span="17">
                <a-select style="width: 100%" default-value="1" @change="selectChange" allowClear>
                  <a-select-option value="1"> 智能锁厂商 </a-select-option>
                  <a-select-option value="2"> 后勤管理 </a-select-option>
                </a-select>
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="4">姓名：</a-col>
              <a-col :span="17">
                <a-select
                  v-if="this.selectvalue == 2"
                  style="width: 100%"
                  placeholder="请选择人员姓名"
                  @change="nameChange"
                  allowClear
                >
                  <a-select-option value="1"> 郑叹 </a-select-option>
                  <a-select-option value="2"> 王久 </a-select-option>
                </a-select>
                <a-input
                  v-if="selectvalue == 1"
                  style="width: 100%"
                  placeholder="请输入姓名"
                  v-model="name"
                  allowClear
                ></a-input>
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="4">联系电话：</a-col>
              <a-col :span="17">
                <a-input style="width: 100%" placeholder="请输入联系电话" v-model="phone" allowClear></a-input>
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="4">负责区域：</a-col>
              <a-col :span="17">
                <a-tree-select
                  v-model="value"
                  placeholder="请选择区域"
                  style="width: 100%"
                  :tree-data="treeData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="Please select"
                />
              </a-col>
            </a-row>
          </a-modal>

          <a-divider type="vertical" />
          <a-button @click="check">查询</a-button>

          <a-divider type="vertical" />

          <a-button @click="showConfirm">导出</a-button>
        </a-col>
      </a-row>
    </a-card>
    <a-card>
      <div class="table-operator"></div>
      <a-table :columns="columns" :data-source="repairData">
        <span slot="action" slot-scope="text, record">
          <a @click="edit(record)">编辑</a>
          <a-modal v-model="visibleEdit" title="编辑" @ok="editOk">
            <a-row type="flex" align="middle">
              <a-col :span="4">姓名：</a-col>
              <a-col :span="17">
                <a-input style="width: 100%" placeholder="请输入姓名" v-model="rowRecord.name" allowClear></a-input>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="4">联系电话：</a-col>
              <a-col :span="17">
                <a-input style="width: 100%" placeholder="请输入电话" v-model="rowRecord.phone" allowClear></a-input>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="4">类型：</a-col>
              <a-col :span="17">
                <a-select
                  style="width: 100%"
                  placeholder="请选择类型"
                  @change="selectChange"
                  :default-value="rowRecord.type"
                  allowClear
                >
                  <a-select-option value="1"> 智能锁厂商 </a-select-option>
                  <a-select-option value="2"> 后勤管理 </a-select-option>
                </a-select>
              </a-col>
            </a-row>
            <br />
            <a-row type="flex" align="middle">
              <a-col :span="4">负责区域：</a-col>
              <a-col :span="17">
                <a-tree-select
                  v-model="valueEdit"
                  placeholder="请选择区域"
                  style="width: 100%"
                  :tree-data="treeData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="Please select"
                />
              </a-col>
            </a-row>
          </a-modal>

          <a-divider type="vertical" />

          <a-popconfirm title="确定删除吗？" ok-text="确定" cancel-text="取消" @confirm="confirm" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { repairData } from './data/repairData.js'
import { areaData } from '../../components/roomManager/data/area.js'
import { TreeSelect } from 'ant-design-vue'
const SHOW_PARENT = TreeSelect.SHOW_PARENT
import { treeData } from './data/treeData.js'

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name', width: '10%' },
  { title: '联系电话', dataIndex: 'phone', key: 'phone', width: '15%' },
  { title: '类型', dataIndex: 'type', key: 'type', width: '15%' },
  { title: '负责区域', dataIndex: 'area', key: 'area', width: '25%' },
  { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'action' } },
]

export default {
  data() {
    return {
      repairData: repairData,
      columns: columns,
      name: '',
      phone: '',
      addVisible: false,
      selectOptions: areaData,
      value: [],
      treeData: treeData,
      SHOW_PARENT,
      nameCheck: '',
      visibleEdit: false,
      rowRecord: '',
      valueEdit: [],
      selectvalue: '1',
    }
  },
  methods: {
    handleAdd() {
      this.addVisible = true
    },
    addOk() {
      this.addVisible = false
    },
    selectChange(value) {
      this.selectvalue = value
    },
    nameChange(value) {},
    areaChange(value) {},
    typeChange() {},
    check() {},
    showConfirm() {
      this.$confirm({
        title: '是否导出当前表单？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          // console.log('OK')
        },
        onCancel() {
          // console.log('Cancel')
        },
      })
    },
    edit(record) {
      this.visibleEdit = true
      this.rowRecord = record
      this.valueEdit = record.area
    },
    editOk() {
      this.visibleEdit = false
    },
    delet() {},
    confirm() {
      // console.log('ok')
    },
    cancel() {
      // console.log('no')
    },
  },
}
</script>