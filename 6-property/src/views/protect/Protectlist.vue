<template>
  <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
    <a-table :columns="columns" :data-source="data" :pagination="{
                size: 'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }">
      <span slot="action" slot-scope="text, record">
        <template v-for="(i, index) in record.action">
          <template v-if="i.com === 'router-link'">
            <router-link :to="{ name: i.url, params: { id: record.taskId } }">{{ i.tagName }}</router-link>
          </template>
          <template v-else>
            <component :is="i.com" :ref="i.com" :key="index" :title="i.tagName" :infoDetail="infoDetail"></component>
            <a @click.stop="show(item.key, record.devId)">{{ i.tagName }}</a>
          </template>
          <a-divider type="vertical" v-if="index !== record.action.length - 1" />
        </template>
      </span>
    </a-table>
  </PageTemplate>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data } from './js/all.js'
const NEW_PROLIST = Object.freeze({ columns, data })

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
    }
  },
  methods: {
    show(type, id) {
      let temp = this.data.filter((item) => item.taskId == id)[0]
      this.infoDetail.map((item) => {
        item.value = temp[item.key]
        return item
      })
      this.$refs[type][0].showDrawer()
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
    showProForm() {
      this.$refs.planModal.showModal()
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>