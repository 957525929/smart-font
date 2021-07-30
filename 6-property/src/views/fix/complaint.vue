<template>
  <PageTemplate :columns="columns">
    <a-table :columns="columns" :data-source="data" style="margintop: 15px"
      :pagination="{size:'small',pageSize: 10,showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`}">
      <span slot="action" slot-scope="text, record">
        <a href="#" @click="handleDetail(record.comId)">详情</a>
        <TableDrawer title="投诉详情" :infoDetail="infoDetail" ref="TableDrawer"></TableDrawer>
        <a-divider type="vertical" />
        <a href="#" @click="handleModal">处理</a>
        <TableModal title="投诉处理" :infoDetail="taskList" ref="TableModal"></TableModal>
      </span>
      <span slot="comStatus" slot-scope="text">
        <a-badge :status="text == '已处理' ? 'success' : 'error'" />{{ text}}
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
import { columns, data, taskList } from './js/complaint.js'
const NEW_COMLIST = Object.freeze({ columns, data, taskList })
export default {
  name: 'staffList',
  components: { PageTemplate, TableDrawer, TableModal },
  data() {
    return {
      data: NEW_COMLIST.data,
      columns: NEW_COMLIST.columns.filter((item) => !item.hideInTable),
      infoDetail: NEW_COMLIST.columns.filter((item) => !item.hideInDetail),
      taskList: NEW_COMLIST.taskList,
    }
  },
  methods: {
    handleDetail(id) {
      let temp = this.data.filter((item) => item.comId == id)[0]
      this.infoDetail.map((item) => {
        item.value = temp[item.key]
        return item
      })
      this.$refs.TableDrawer.showDrawer()
    },
    handleModal() {
      this.$refs.TableModal.showModal()
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>