<template>
  <PageTemplate :columns="devColumns" :searchCon="searchCon">
    <a-button type="primary" @click="showDevForm" icon="plus">部件登记</a-button>
    <a-button type="primary" icon="import" style="marginLeft: 10px">导入</a-button>
    <a-button type="primary" icon="export" style="marginLeft: 10px">导出</a-button>

    <TableModal title="部件登记" :infoDetail="loginInfo" ref="devModal"></TableModal>
    <a-table :columns="devColumns" :data-source="data" :pagination="{
                size: 'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }">
      <span slot="action" slot-scope="text, record">
        <template v-for="(i, index) in record.action">
          <a-popconfirm title="确认删除?" ok-text="是" cancel-text="否" @confirm="confirm" @cancel="cancel"
            v-if="i.com === 'TableDelete'">
            <a href="#" @click="showDelete">{{ i.tagName }}</a>
          </a-popconfirm>
          <template v-else-if="i.com === 'router-link'">
            <router-link :to="{ name: i.url, params: { id: record.devId } }">{{ i.tagName }}</router-link>
          </template>
          <template v-else>
            <a href="#" @click.stop="handleOps(i.com, record.devId)">{{ i.tagName }}</a>
            <component :is="i.com" :ref="i.com" :key="index" :title="i.tagName" :infoDetail="infoDetail"></component>
          </template>
          <a-divider type="vertical" v-if="index !== record.action.length - 1" />
        </template>
      </span>
    </a-table>
  </PageTemplate>
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { devColumns, data, infoDetail, loginInfo } from './js/index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_DEVLIST = Object.freeze({ devColumns, data, infoDetail, typeToComponent, loginInfo })
export default {
  name: 'deviceList',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.getList()
  },
  data() {
    return {
      searchCon: {},
      data: NEW_DEVLIST.data,
      devColumns: NEW_DEVLIST.devColumns,
      infoDetail: NEW_DEVLIST.infoDetail.filter((item) => !item.hideInDetail),
      loginInfo: NEW_DEVLIST.loginInfo.filter((item) => !item.hideInLogin),
      visible: false,
    }
  },
  methods: {
    goto(url, id) {
      this.$router.push({ name: url, params: { id: id } })
    },
    getList() {
      devColumns.forEach((item) => {
        if (item.valueEnum) {
          this.data.map((res) => {
            res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
            return res
          })
        }
      })
    },
    showDevForm() {
      this.$refs.devModal.showModal()
    },
    handleOps(type, id) {
      let tempValue = [...NEW_DEVLIST.typeToComponent].filter(([key, value]) => key === type)[0]
      //处理数据
      let tempData = this.data.filter((item) => item.devId === id)[0]
      this.infoDetail = this.infoDetail.map((item) => {
        item.value = tempData[item.key]
        return item
      })
      this.$refs[type][0][tempValue[1]]()
    },
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