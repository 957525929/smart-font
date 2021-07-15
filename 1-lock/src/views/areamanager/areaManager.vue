<template>
  <div>
    <div class="table-operator">
      <a-button @click="handleAdd" class="butt">新增</a-button>
      <a-modal v-model="addVisible" title="新增" @ok="addOk">
        <a-row type="flex" align="middle">
          <a-col :span="4">类型：</a-col>
          <a-col>
            <a-radio-group v-model="addValue" @change="addChange">
              <a-radio :value="1"> 公司 </a-radio>
              <a-radio :value="2"> 区域 </a-radio>
              <a-radio :value="3"> 楼房 </a-radio>
            </a-radio-group>
          </a-col>
        </a-row>
        <br />
        <a-row type="flex" align="middle">
          <a-col :span="4">名称：</a-col>
          <a-col :span="10">
            <a-input style="width: 100%" placeholder="请输入名称" v-model="name" allowClear></a-input>
          </a-col>
        </a-row>
      </a-modal>
    </div>
    <a-table :columns="columns" :data-source="dataSource" :expandedRowsChange="expandedRowKeys">
      <span slot="action" slot-scope="text, record">
        <a @click="edit(record)">编辑</a>
        <a-modal v-model="editVisible" title="编辑" @ok="editOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">类型：</a-col>
            <a-col>
              <a-radio-group v-model="rowRecord.value" @change="addChange">
                <a-radio :value="1"> 公司 </a-radio>
                <a-radio :value="2"> 区域 </a-radio>
                <a-radio :value="3"> 楼房 </a-radio>
              </a-radio-group>
            </a-col>
          </a-row>

          <br />

          <a-row type="flex" align="middle">
            <a-col :span="4">名称：</a-col>
            <a-col :span="10">
              <a-input style="width: 100%" v-model="rowRecord.name" allowClear></a-input>
            </a-col>
          </a-row>
          <br />

          <a-row type="flex" align="middle" v-if="rowRecord.value == 2 || rowRecord.value == 3">
            <a-col :span="4">上级名称：</a-col>
            <a-col :span="10">
              <a-input style="width: 100%" v-model="rowRecord.upName" allowClear></a-input>
            </a-col>
          </a-row>
        </a-modal>
        <a-divider type="vertical" />
        <a @click="nextAdd(record)">添加下级</a>
        <a-modal v-model="nextAddVisible" title="添加下级" @ok="nextAddOk">
          <a-row type="flex" align="middle">
            <a-col :span="4">类型：</a-col>
            <a-col>
              <a-radio-group v-model="nextAddValue" @change="addChange">
                <a-radio :value="1"> 公司 </a-radio>
                <a-radio :value="2"> 区域 </a-radio>
                <a-radio :value="3"> 楼房 </a-radio>
              </a-radio-group>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex" align="middle">
            <a-col :span="4">名称：</a-col>
            <a-col :span="10">
              <a-input style="width: 100%" placeholder="请输入名称" v-model="name" allowClear></a-input>
            </a-col>
          </a-row>
          <br />
          <a-row type="flex" align="middle" v-if="rowRecord.value == 2 || rowRecord.value == 3">
            <a-col :span="4">上级名称：</a-col>
            <a-col :span="10">
              <a-input style="width: 100%" v-model="rowRecord.upName" allowClear></a-input>
            </a-col>
          </a-row>
        </a-modal>
      </span>
    </a-table>
  </div>
</template>
<script>
import { data } from './data/areaData.js'

const columns = [
  { title: '名称', dataIndex: 'name', key: 'name', width: '20%' },
  { title: '类型', dataIndex: 'type', key: 'type', width: '20%' },
  { title: '操作', dataIndex: 'action', scopedSlots: { customRender: 'action' } },
]

export default {
  data() {
    return {
      columns: columns,
      expandedRowKeys: [],
      dataSource: data,
      addVisible: false,
      addValue: 1,
      name: '',
      editVisible: false,
      rowRecord: '',
      nextAddVisible: false,
      nextAddValue: 0,
    }
  },
  methods: {
    handleAdd() {
      this.addVisible = true
    },
    addOk() {
      this.addVisible = false
    },
    addChange(e) {
      // console.log('radio checked', e.target.value)
    },
    edit(value) {
      this.editVisible = true
      this.rowRecord = value
    },
    editOk() {
      this.editVisible = false
    },
    nextAdd(value) {
      this.nextAddVisible = true
      this.nextAddValue = value.value + 1
      this.rowRecord = value
    },
    nextAddOk() {
      this.nextAddVisible = false
    },
  },
}
</script>
<style>
</style>