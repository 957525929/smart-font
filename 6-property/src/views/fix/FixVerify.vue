<template>
  <!-- <TableModal title="处理反馈" :infoDetail="loginInfo" ref="feedbackModal"></TableModal> -->
  <PageTemplate
    :columns="columns"
    :searchCon="searchCon"
  >
    <a-button
      type="primary"
      @click="passAll"
    >批量通过审核</a-button>
    <a-button
      @click="passAll"
      style="margin:10px"
    >批量不通过审核</a-button>
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
      :columns="columns"
      :data-source="data"
      :pagination="{
                size: 'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
    >
      <span
        slot="action"
        slot-scope="text, record"
      >
        <a
          href="#"
          @click="handleDetail( record.orderId)"
        >详情
          <TableDrawer
            ref="TableDrawer"
            title="详情"
            :infoDetail="infoDetail"
          ></TableDrawer>
        </a>
        <a-divider type="vertical" />
        <a-popconfirm
          title="确认通过并开始受理?"
          ok-text="是"
          cancel-text="否"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a
            href="#"
            @click="showDelete"
          >通过</a>
        </a-popconfirm>
        <a-divider type="vertical" />
        <a
          href="#"
          style='color:RGB(243,112,36)'
          @click="handleNoPass()"
        >不通过</a>
        <TableModal
          ref="TableModal"
          title="反馈意见"
          :infoDetail="infoDetail"
        ></TableModal>
      </span>
    </a-table>
  </PageTemplate>
</template>
 
<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data, taskList, infoDetail } from './js/verify.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_FIXLIST = Object.freeze({ columns, data, taskList, infoDetail, typeToComponent })

export default {
  name: 'fixverify',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.loadData()
  },
  data() {
    return {
      visible: false,
      columns: NEW_FIXLIST.columns.filter((item) => {
        return !item.hideInTable
      }),
      searchCon: {},
      data: NEW_FIXLIST.data,
      infoDetail: NEW_FIXLIST.columns.filter((item) => {
        return !item.hideInDetail
      }),
      selectedRowKeys: [],
    }
  },
  methods: {
    passAll() {
      if (!this.selectedRowKeys || this.selectedRowKeys.length != 1) {
        this.$message.warning('请先选中一条记录')
        return
      }
      this.$confirm({
        title: '是否通过所有工单的审核?',
        onOk() {
          console.log('Oops errors!')
        },
        onCancel() {},
      })
    },
    handleNoPass() {
      this.infoDetail = NEW_FIXLIST.taskList.filter((item) => !item.hideInDetail)
      //   let tempValue = [...NEW_FIXLIST.typeToComponent].filter(([key, value]) => key === type)
      this.$refs.TableModal.showModal()
    },
    handleDetail(id) {
      let temp = this.data.filter((item) => item.orderId == id)[0]
      this.infoDetail.map((item) => {
        item.value = temp[item.key]
        return item
      })

      //   let tempValue = [...NEW_FIXLIST.typeToComponent].filter(([key, value]) => key === type)
      this.$refs.TableDrawer.showDrawer()
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
    showDelete() {
      this.visible = true
    },
    confirm() {
      this.visible = false
      this.$message.success('操作成功')
    },
    cancel() {
      this.visible = false
    },
    onSelectChange(keys, rows) {
      this.selectedRowKeys = keys
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>