<template>
  <PageTemplate :columns="columns" :searchCon="searchCon">
    <a-button type="primary" @click="showStaffForm">
      <a-icon type="plus"></a-icon>新增
    </a-button>
    <TableModal title="新增人员" :infoDetail="loginInfo" ref="devModal"></TableModal>
    <a-table :columns="columns" :data-source="data" style="margintop: 15px" :pagination="{
                size:'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }">
      <span slot="action" slot-scope="text, record">
        <a href="#" @click="handleDetail(record.Id)">详情</a>
        <TableDrawer title="人员详情" :infoDetail="infoDetail" ref="TableDrawer"></TableDrawer>
        <a-divider type="vertical" />
        <a href="#" @click="handleModal(record.Id)">编辑</a>
        <TableModal title="编辑人员" :infoDetail="editInfo" ref="TableModal"></TableModal>
        <a-divider type="vertical" />

        <a-popconfirm title="确认删除此人?" ok-text="是" cancel-text="否" @confirm="confirm" @cancel="cancel">
          <a href="#" @click="showDelete">删除</a>
        </a-popconfirm>
        <!-- <template v-for="(i, index) in record.action">
          <a-popconfirm title="确认删除此人?" ok-text="是" cancel-text="否" @confirm="confirm" @cancel="cancel"
            v-if="i.com === 'TableDelete'">
            <a href="#" @click="showDelete">{{ i.tagName }}</a>
          </a-popconfirm>
          <template v-else>
            <a href="#" @click.stop="handleOps(i.com, record.devId)">{{ i.tagName }}</a>
            <component :is="i.com" :ref="i.com" :key="index" :title="i.tagName" :infoDetail="infoDetail"></component>
          </template>
          <a-divider type="vertical" v-if="index !== record.action.length - 1" />
        </template> -->
      </span>
    </a-table>
  </PageTemplate>
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data, loginInfo, devDetail, detailDevData } from './js/index.js'
const NEW_STAFFLIST = Object.freeze({ columns, data, loginInfo, devDetail, detailDevData })
export default {
  name: 'staffList',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.getList()
  },
  data() {
    return {
      searchCon: {},
      data: NEW_STAFFLIST.data,
      columns: NEW_STAFFLIST.columns.filter((item) => !item.hideInTable),
      infoDetail: NEW_STAFFLIST.columns.filter((item) => !item.hideInDetail),
      loginInfo: NEW_STAFFLIST.loginInfo,
      editInfo: NEW_STAFFLIST.columns.filter((item) => !item.hideInEdit),
      detailData: {},
      devDetail: NEW_STAFFLIST.devDetail,
      detailDevData: NEW_STAFFLIST.detailDevData,
      visible: false,
    }
  },
  methods: {
    getList() {
      this.columns.forEach((item) => {
        if (item.valueEnum) {
          this.data.map((res) => {
            res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
            return res
          })
        }
      })
    },
    showStaffForm() {
      this.$refs.devModal.showModal()
    },
    handleDetail(id) {
      let temp = this.data.filter((item) => item.orderId == id)[0]
      this.infoDetail.map((item) => {
        item.value = temp[item.key]
        return item
      })
      this.$refs.TableDrawer.showDrawer()
    },
    handleModal(id) {
      let temp = this.data.filter((item) => item.orderId == id)[0]
      this.editInfo.map((item) => {
        item.value = temp[item.key]
        return item
      })
      this.$refs.TableModal.showModal()
    },
    // handleOps(type, id) {
    //   let tempValue = [...NEW_STAFFLIST.typeToComponent].filter(([key, value]) => key === type)
    //   //处理数据
    //   let tempData = this.data.filter((item) => item.devId === id)[0]
    //   this.infoDetail = this.infoDetail.map((item) => {
    //     item.value = tempData[item.key]
    //     return item
    //   })
    //   this.$refs[type][0][tempValue[0][1]]()
    // },
    handleVisibleChange(visible) {
      if (!visible) {
        this.visible = false
        return
      }
    },
    showDelete() {
      this.visible = true
    },
    confirm() {
      this.visible = false
      this.$message.success('success')
    },
    cancel() {
      this.visible = false
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>