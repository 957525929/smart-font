<template>
  <div>
    <a-card>
      <span>智能锁安装状态：</span>
      <a-select style="width: 12%" default-value="1" @change="lockChange" allowClear>
        <a-select-option value="1"> 未安装 </a-select-option>
        <a-select-option value="2"> 已安装 </a-select-option>
      </a-select>

      <a-divider type="vertical" />

      <span>位置：</span>
      <a-tree-select
        v-model="value"
        placeholder="请选择位置"
        style="width: 27%"
        :tree-data="treeData"
        tree-checkable
        :show-checked-strategy="SHOW_PARENT"
        search-placeholder="Please select"
      />

      <a-divider type="vertical" />

      <span>房间：</span>
      <a-input style="width: 11%" placeholder="请输入房间号" v-model="roomNum" allowClear></a-input>

      <br /><br />

      <a-row type="flex" justify="end">
        <a-col>
          <a-button @click="check">查询</a-button>

          <a-divider type="vertical" />

          <a-button @click="handleAdd" class="butt">新增</a-button>
          <a-modal v-model="addVisible" title="新增" @ok="addOk">
            <a-row type="flex" align="middle">
              <a-col :span="6">智能锁安装状态：</a-col>
              <a-col :span="17">
                <a-select style="width: 100%" default-value="1" @change="lockChange1" allowClear>
                  <a-select-option value="1"> 未安装 </a-select-option>
                  <a-select-option value="2"> 已安装 </a-select-option>
                </a-select>
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="6">位置：</a-col>
              <a-col :span="17">
                <a-tree-select
                  v-model="value1"
                  placeholder="请选择区域"
                  style="width: 100%"
                  :tree-data="treeData"
                  tree-checkable
                  :show-checked-strategy="SHOW_PARENT"
                  search-placeholder="Please select"
                />
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="6">房间：</a-col>
              <a-col :span="17">
                <a-select mode="multiple" style="width: 100%" placeholder="请选择房间号" @change="handleChange">
                  <a-select-option v-for="(item, index) in roomnumber" :key="index">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </a-col>
            </a-row>
          </a-modal>

          <a-divider type="vertical" />
        </a-col>

        <a-upload accept=".xlsx,.xls">
          <a-button>导入</a-button>
        </a-upload>

        <a-col>
          <a-divider type="vertical" />

          <a-button @click="showConfirm">导出</a-button>
        </a-col>
      </a-row>
    </a-card>

    <a-card>
      <a-table :columns="columns" :data-source="installdata">
        <span slot="action" slot-scope="text, record">
          <a @click="edit(record)">编辑</a>
          <a-modal v-model="visibleEdit" title="编辑" @ok="editOk">
            <a-row type="flex" align="middle">
              <a-col :span="6">位置：</a-col>
              <a-col :span="14">
                {{ rowrecord.area }}
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="6">房间：</a-col>
              <a-col :span="14">
                <a-input
                  style="width: 100%"
                  placeholder="请输入房间号"
                  v-model="rowrecord.roomNum"
                  allowClear
                ></a-input>
              </a-col>
            </a-row>

            <br />

            <a-row type="flex" align="middle">
              <a-col :span="6">智能锁安装状态：</a-col>
              <a-col :span="14">
                <a-select style="width: 100%" default-value="1" @change="lockChange2" allowClear>
                  <a-select-option value="1"> 未安装 </a-select-option>
                  <a-select-option value="2"> 已安装 </a-select-option>
                </a-select>
              </a-col>
            </a-row>
          </a-modal>

          <a-divider type="vertical" />

          <a-popconfirm title="确定删除吗？" ok-text="确定" cancel-text="取消" @confirm="confirm" @cancel="cancel">
            <a href="#">删除</a>
          </a-popconfirm>
        </span>

        <span slot="install" slot-scope="record">
          <a-tag :color="record.install === '未安装' ? 'red' : 'green'">
            {{ record.install }}
          </a-tag>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import { areaData } from '../../components/roomManager/data/area.js'
import { installdata } from './data/installdata'
import { treeData } from './data/treeData.js'
import { TreeSelect } from 'ant-design-vue'
const SHOW_PARENT = TreeSelect.SHOW_PARENT

const columns = [
  { title: '位置', dataIndex: 'area', key: 'area', width: '30%' },
  { title: '房间', dataIndex: 'roomNum', key: 'roomNum', width: '10%' },
  { title: '智能锁安装状态', key: 'install', scopedSlots: { customRender: 'install' }, width: '20%' },
  { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'action' } },
]

export default {
  data() {
    return {
      selectOptions: areaData,
      roomNum: '',
      roomNum1: '',
      addVisible: false,
      installdata: installdata,
      columns: columns,
      visibleEdit: false,
      rowrecord: '',
      value: [],
      treeData: treeData,
      SHOW_PARENT,
      value1: [],
      roomnumber: ['101', '102', '103', '104'],
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    displayRender({ labels }) {
      return labels.join('.')
    },
    lockChange() {},
    lockChange1() {},
    lockChange2() {},
    areaChange(value) {},
    areaChange1(value) {},
    areaChange2(value) {},
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
    handleAdd() {
      this.addVisible = true
    },
    addOk() {
      this.addVisible = false
    },
    edit(record) {
      this.visibleEdit = true
      this.rowrecord = record
    },
    editOk() {
      this.visibleEdit = false
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