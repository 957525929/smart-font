<template>
    <div class="">
        <a-tabs default-active-key="1" :activeKey="current" @change="callback">
            <a-tab-pane v-for="item in fixMenu" :tab="item.title" :key="item.key">
                <PageTemplate :columns="columns" :searchCon="searchCon">
                    <a-table :columns="columns" :data-source="data">
                        <span slot="action" slot-scope="text, record">
                            <template v-for="(i, index) in record.action">
                                <TableDrawer :ref="item.key" :title="i.tagName" :infoDetail="infoDetail"></TableDrawer>
                                <a @click.stop="show(item.key)" >{{ i.tagName }}</a>
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
//js
import { fixMenu } from './js/index.js'
const NEW_FIXLIST = Object.freeze({ fixMenu })

export default {
    name: 'fixList',
    components: { PageTemplate,TableDrawer  },
    created() {
        this.loadMenu()
    },
    data() {
        return {
            current: 0,
            fixMenu: { ...NEW_FIXLIST.fixMenu },
            columns: [],
            searchCon: {},
            data: [],
            infoDetail:[]
        }
    },
    mounted() {
        // console.log(this.fixMenu[0].content)
    },
    methods: {
        show(type){
            this.$refs[type][0].showDrawer()
        },
        loadMenu() {
            let temp = require('./js/' + this.fixMenu[this.current].content + '.js')
            let result = Object.freeze(temp)
            this.columns = result.columns
            this.searchCon = result.searchCon
            this.data = result.data
            this.infoDetail = result.infoDetail
        },
        loadData() {
            // 请求数据
        },
        callback(key) {
            this.current = key
        },
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>