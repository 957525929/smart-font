<template>
    <div class="">
        <TableModal title="养护计划" :infoDetail="addplan" ref="planModal"></TableModal>
        <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
            <a-button type="primary" @click="showProForm" icon="plus">新增养护计划</a-button>
            <a-button type="primary" icon="import" style="marginLeft: 10px">导入</a-button>
            <a-button type="primary" icon="export" style="marginLeft: 10px">导出</a-button>
            <a-table
                :columns="columns"
                :data-source="data"
                :pagination="{
                    size: 'small',
                    pageSize: 10,
                    showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }"
            >
                <span slot="action" slot-scope="text, record">
                    <template v-for="(i, index) in record.action">
                        <template v-if="i.com === 'router-link'">
                            <router-link :to="{ name: i.url, params: { id: record.taskId } }">{{
                                i.tagName
                            }}</router-link>
                        </template>
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
import { data } from './js/all.js'
import { columns,  addplan } from './js/protect.js'
import {  handleTableData} from "@/utils/util.js";
const NEW_PROLIST = Object.freeze({ columns, data, addplan })

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
            data: NEW_PROLIST.data.filter(item=>item.taskStatus==0),
            infoDetail: NEW_PROLIST.columns.filter((item) => {
                return !item.hideInDetail
            }),
            addplan: NEW_PROLIST.addplan.filter((item) => {
                return !item.hideInModal
            }),
        }
    },
    methods: {
        loadData() {
            // 请求数据
            this.data.map(item=>{
                let temp = handleTableData( this.columns, item)
                this.columns = temp[0]
                return  temp[1]
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