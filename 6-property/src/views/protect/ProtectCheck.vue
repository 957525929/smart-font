<template>
  <div class="">
    <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
      <a-button type="primary" @click="checkAll">批量通过核查</a-button>
      <a-button @click="checkAll" style="margin:10px">批量不通过核查</a-button>
      <div class="ant-alert ant-alert-info" style="margin: 16px 0">
        <i class="anticon anticon-info-circle ant-alert-icon"></i>
        已选择
        <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>
        项任务计划
        <a style="margin-left: 24px">清空</a>
      </div>
      <a-table rowKey="taskId" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns" :data-source="data" :pagination="{
                    size: 'small',
                    pageSize: 10,
                    showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }">
        <span slot="ifPlanDone" slot-scope="text">
          <a-badge :status="text == '全部完成'  ? 'success' : 'error'" />{{ text}}
        </span>
        <span slot="action" slot-scope="text, record">
          <router-link :to="{ name: 'device-proDetail', params: { id: record.taskId } }">详情</router-link>
          <a-divider type="vertical" />
          <a-popconfirm title="确认通过核查?" ok-text="是" cancel-text="否">
            <a href="#">通过</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <a href="#" style='color:RGB(243,112,36)' @click="handleNoPass">不通过</a>
          <TableModal ref="TableModal" title="反馈意见" :infoDetail="taskList"></TableModal>
        </span>
        <a-table rowKey="recordId" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
          slot="expandedRowRender" slot-scope="text, record" :columns="proRecord" :data-source="text.records"
          :pagination="false">
          <span slot="ifRun" slot-scope="text">
            <a-badge :status="text == 0 ? 'success' : 'error'" />{{ text == 0 ? '是' : '否' }}
          </span>
          <span slot="ifnormal" slot-scope="text">
            <a-badge :status="text == 0 ? 'success' : 'error'" />{{ text == 0 ? '是' : '否' }}
          </span>
          <span slot="action" slot-scope="text, record">
            <template v-for="(i, index) in record.action">
              <a-popconfirm title="确认通过核查?" ok-text="是" cancel-text="否" v-if="i.com === 'TableDelete'">
                <a href="#">{{ i.tagName }}</a>
              </a-popconfirm>
              <template v-else>
                <component :is="i.com" :ref="i.com" :key="index" :title="i.tagName" :infoDetail="proRecord"></component>
                <a @click.stop="show(i.com, record.recordId)">{{ i.tagName }}</a>
              </template>

              <a-divider type="vertical" v-if="index !== record.action.length - 1" />
            </template>
          </span>
        </a-table>
      </a-table>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data, taskList } from './js/check.js'
import { proRecord } from './js/index.js'
import { handleTableData } from '@/utils/util.js'
const NEW_PROLIST = Object.freeze({ columns, data, proRecord, taskList })

export default {
  name: 'proList',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.loadData()
  },
  data() {
    return {
      visible: false,
      columns: NEW_PROLIST.columns.filter((item) => {
        return !item.hideInTable
      }),
      searchCon: {},
      data: NEW_PROLIST.data,
      infoDetail: NEW_PROLIST.columns.filter((item) => {
        return !item.hideInDetail
      }),
      proRecord: NEW_PROLIST.proRecord.filter((item) => {
        return !item.hideInTable
      }),
      selectedRowKeys: [],
      taskList: [],
    }
  },
  methods: {
    handleNoPass() {
      this.taskList = NEW_PROLIST.taskList.filter((item) => !item.hideInDetail)
      this.$refs.TableModal.showModal()
    },
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
    onSelectChange(keys, rows) {
      this.selectedRowKeys = keys
    },
    show(type, id) {
      this.data[0].records.map((item) => {
        if (item.recordId == id) {
          let tempList = handleTableData(this.proRecord, item)
          this.proRecord = tempList[0]
          return tempList[1]
        }
      })
      // let temp = this.data[0].records.filter()[0]

      console.log(this.proRecord)
      //     return  temp[1]
      // this.infoDetail.map((item) => {
      //     item.value = temp[item.key]
      //     return item
      // })
      this.$refs[type][0].showDrawer()
    },
    loadData() {
      // 请求数据
      this.data.map((item) => {
        let temp = handleTableData(this.columns, item)
        this.columns = temp[0]
        return temp[1]
      })
      // this.columns.forEach((item) => {
      //     if (item.valueEnum) {
      //         this.data.map((res) => {
      //             res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
      //             return res
      //         })
      //     }
      // })
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>