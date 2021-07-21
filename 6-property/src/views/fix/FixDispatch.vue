<template>
    <PageTemplate :columns="columns" :searchCon="searchCon">
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
                    <a href="#" @click.stop="handleOps(i.com, record.orderId)">{{ i.tagName }}</a>
                    <component
                        :is="i.com"
                        :ref="i.com"
                        :key="index"
                        :title="i.tagName"
                        :infoDetail="infoDetail"
                    ></component>
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
import { columns, data, taskList, infoDetail } from './js/dispatch.js'
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
        }
    },
    methods: {
        handleOps(type, id) {
            if (type === 'TableDrawer') {
                let temp = this.data.filter((item) => item.orderId == id)[0]
                this.infoDetail.map((item) => {
                    item.value = temp[item.key]
                    return item
                })
            } else {
                this.infoDetail = NEW_FIXLIST.taskList.filter((item) => !item.hideInDetail)
            }
            let tempValue = [...NEW_FIXLIST.typeToComponent].filter(([key, value]) => key === type)
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
        }
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>