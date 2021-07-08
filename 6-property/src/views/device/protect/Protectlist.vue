<template>
    <div class="">
        <a-tabs default-active-key="1" :activeKey="current" @change="callback">
            <a-tab-pane v-for="item in proMenu" :tab="item.title" :key="item.key">
                <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
                    <a-table :columns="columns" :data-source="data">
                        <span slot="action" slot-scope="text, record">
                            <template v-for="(i, index) in record.action">
                                <TableDrawer :ref="item.key" :title="i.tagName" :infoDetail="infoDetail"></TableDrawer>
                                <a @click.stop="show(item.key)">{{ i.tagName }}</a>
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
import { proMenu } from './js/index.js'
const NEW_PROLIST = Object.freeze({ proMenu })

export default {
    name: 'proList',
    components: { PageTemplate, TableDrawer,TableModal },
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
            infoDetail: [],
        }
    },
    methods: {
        show(type) {
            this.$refs[type][0].showDrawer()
        },
        loadMenu() {
            let result = require('./js/' + this.proMenu[this.current].content + '.js')
            this.columns = result.columns
            this.searchCon = result.searchCon
            this.data = result.data
            this.infoDetail = result.infoDetail
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