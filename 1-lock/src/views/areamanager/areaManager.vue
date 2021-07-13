<template>
  <div>
    <div class="table-operator">
      <a-button @click="handleAdd">新增</a-button>
    </div>
    <!-- defaultExpandAllRows="{true}" -->
    <a-table :columns="columns" :data-source="dataSource" :expanded-row-keys.sync="expandedRowKeys"> </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    scopedSlots: { customRender: 'action' },
    align: 'center',
    width: 150,
  },
]

const data = [
  {
    key: 1,
    name: '福建烟草公司',
    children: [
      {
        key: 11,
        name: 'A区域',
        children: [
          {
            key: 111,
            name: '1号楼',
          },
          {
            key: 112,
            name: '2号楼',
          },
        ],
      },
      {
        key: 12,
        name: 'B区域',
        children: [
          {
            key: 121,
            name: '1号楼',
          },
          {
            key: 122,
            name: '2号楼',
          },
        ],
      },
    ],
  },
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  },
}

export default {
  data() {
    return {
      columns: columns,
      expandedRowKeys: [],
      rowSelection,
      dataSource: data,
    }
  },
  methods: {
    handleAdd() {
      console.log('handleAdd')
    },
  },
}
</script>
<style>
</style>