<template>
    <div class="">
        <TableModal title="养护计划" :infoDetail="loginInfo" ref="planModal"></TableModal>
        <a-tabs default-active-key="1" :activeKey="current" @change="callback">
            <a-tab-pane v-for="item in proMenu" :tab="item.title" :key="item.key">
                <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
                    <a-button type="primary" @click="showProForm" icon="plus">新增养护计划</a-button>
                    <!-- <TableModal title="养护计划" :infoDetail="loginInfo" ref="planModal"></TableModal> -->
                    <a-button type="primary" icon="import" style="marginLeft: 10px">导入</a-button>
                    <a-button type="primary" icon="export" style="marginLeft: 10px">导出</a-button>
                    <a-table :columns="columns" :data-source="data" :pagination="{
                        size:'small',
                    pageSize:10,
                    showTotal:(total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }">
                        <span slot="action" slot-scope="text, record">
                            <template v-for="(i, index) in record.action">
                                <TableDrawer :ref="item.key" :title="i.tagName" :infoDetail="infoDetail"></TableDrawer>
                                <a @click.stop="show(item.key, record.devId, record.taskStatus)">{{ i.tagName }}</a>
                                <a-divider type="vertical" v-if="index !== record.action.length - 1" />
                            </template>
                        </span>
                    </a-table>
                </PageTemplate>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { proMenu, loginInfo } from './js/index.js'
const NEW_PROLIST = Object.freeze({ proMenu, loginInfo })

export default {
    name: 'proList',
    components: { PageTemplate, TableDrawer, TableModal },
    created() {
        this.loadMenu()
    },
    data() {
        return {
            current: 0,
            proMenu: { ...NEW_PROLIST.proMenu },
            columns: [],
            searchCon: {},
            data: [],
            loginInfo: NEW_PROLIST.loginInfo.filter((item) => !item.hideInLogin),
        }
    },
    methods: {
        show(type, id, taskType) {
            // if (this.current === 0) {
            //     let menuData = NEW_PROLIST.proMenu.filter((item) => item.title == taskType)[0]
            //     let tempCol = require('./js/' + menuData.content + '.js')
            //     let result = Object.freeze(tempCol)
            //     this.infoDetail = result.infoDetail.filter((item) => !item.hideInDetail)
            // }
            //请求详情(无网络)
            let temp = this.data.filter((item) => item.devId == id)[0]
            this.infoDetail = this.infoDetail.map((item) => {
                item.value = temp[item.key]
                return item
            })
            this.$refs[type][0].showDrawer()
        },
        loadMenu() {
            let result = require('./js/' + this.proMenu[this.current].content + '.js')
            this.columns = result.columns
            this.searchCon = result.searchCon
            this.data = result.data
            this.infoDetail = result.infoDetail.filter((item) => !item.hideInDetail)
            this.loadData()
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
        callback(key) {
            this.current = key
            this.loadMenu()
        },
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>