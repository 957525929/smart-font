<template>
  <PageTemplate
    :columns="columns"
    :searchCon="searchCon"
  >
    <a-button
      type="primary"
      @click="showDevForm"
      icon="plus"
    >设备登记</a-button>
    <a-button
      type="primary"
      icon="import"
      style="marginLeft: 10px"
    >导入</a-button>
    <a-button
      type="primary"
      icon="export"
      style="marginLeft: 10px"
    >导出</a-button>
    <TableModal
      title="设备登记"
      :infoDetail="loginInfo"
      ref="devModal"
    ></TableModal>
    <TableModal
      ref="TableModal"
      title="编辑设备信息"
      :infoDetail="infoDetail"
    ></TableModal>
    <a-table
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
        <a href="#">
          <router-link :to="{ name: 'device-DevDetail', params: { id: record.devId } }">详情</router-link>
        </a>
        <a-divider type="vertical" />
        <a-popconfirm
          title="确认注销此设备?"
          ok-text="是"
          cancel-text="否"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a
            href="#"
            @click="showDelete"
          >删除</a>
        </a-popconfirm>
        <a-divider type="vertical" />
        <a
          href="#"
          @click="handleOps( record.devId)"
        >编辑</a>
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
      columns: NEW_DEVLIST.devColumns.filter((item) => !item.hideInTable),
      infoDetail: NEW_DEVLIST.devColumns.filter((item) => !item.hideInDetail),
      loginInfo: NEW_DEVLIST.loginInfo.filter((item) => !item.hideInLogin),
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
    showDevForm() {
      this.$refs.devModal.showModal()
    },
    handleOps(id) {
      //   let tempValue = [...NEW_DEVLIST.typeToComponent].filter(([key, value]) => key === type)[0]
      //处理数据
      let tempData = this.data.filter((item) => item.devId === id)[0]
      this.infoDetail = NEW_DEVLIST.devColumns
        .filter((item) => !item.hideInEdit)
        .map((item) => {
          if (item.type === 'a-cascader') {
            item.value = tempData[item.key].split('-')
          } else {
            item.value = tempData[item.key]
          }
          return item
        })
      this.$refs.TableModal.showModal()
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
      this.$message.success('操作成功')
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