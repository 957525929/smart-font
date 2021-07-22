<template>
  <div>
    <PageTemplate
      :columns="columns"
      :searchCon="searchCon"
    >
      <a-button
        type="primary"
        @click="checkAll"
      >一键通过核查</a-button>
      <div
        class="ant-alert ant-alert-info"
        style="margin: 16px 0"
      >
        <i class="anticon anticon-info-circle ant-alert-icon"></i>
        已选择
        <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>
        项
        <a style="margin-left: 24px">清空</a>
      </div>
      <a-table
        rowKey="orderId"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns"
        :data-source="data"
        :pagination="{
                    size: 'small',
                    pageSize: 10,
                    showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }"
      >
        <span
          slot="action"
          slot-scope="text, record"
        >
          <template v-for="(i, index) in record.action">
            <a
              href="#"
              @click.stop="handleOps(i.com, record.orderId)"
            >{{ i.tagName }}</a>
            <component
              :is="i.com"
              :ref="i.com"
              :key="index"
              :title="i.tagName"
              :infoDetail="infoDetail"
            ></component>
            <a-divider
              type="vertical"
              v-if="index !== record.action.length - 1"
            />
          </template>
        </span>
      </a-table>
    </PageTemplate>
  </div>
</template>
 
<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data, taskList, infoDetail } from './js/check.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_CHECK = Object.freeze({ columns, data, taskList, infoDetail, typeToComponent })

export default {
  name: 'fixcheck',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.loadData()
  },
  data() {
    return {
      visible: false,
      columns: NEW_CHECK.columns.filter((item) => {
        return !item.hideInTable
      }),
      searchCon: {},
      data: NEW_CHECK.data,
      infoDetail: NEW_CHECK.columns.filter((item) => {
        return !item.hideInDetail
      }),
      selectedRowKeys: [],
    }
  },
  methods: {
    checkAll() {
      if (!this.selectedRowKeys || this.selectedRowKeys.length != 1) {
        this.$message.warning('请先选中一条记录')
        return
      }
      this.$confirm({
        title: '是否通过所有选项的核查?',
        onOk() {
          console.log('Oops errors!')
        },
        onCancel() {},
      })
    },
    handleOps(type, id) {
      if (type === 'TableDrawer') {
        let temp = this.data.filter((item) => item.orderId == id)[0]
        this.infoDetail.map((item) => {
          item.value = temp[item.key]
          return item
        })
      } else {
        this.infoDetail = NEW_CHECK.taskList.filter((item) => !item.hideInDetail)
      }
      let tempValue = [...NEW_CHECK.typeToComponent].filter(([key, value]) => key === type)
      this.$refs[type][0][tempValue[0][1]]()
    },
    loadData() {
      // 请求数据
      this.columns.forEach((item) => {
        if (item.valueEnum) {
          this.data.map((res) => {
            res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
            return res
          })
        }
      })
    },
    onSelectChange(keys, rows) {
      this.selectedRowKeys = keys
      // this.selectedRows = rows
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>