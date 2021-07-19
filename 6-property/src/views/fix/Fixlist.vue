<template>
    <a-tabs default-active-key="1" :activeKey="current" @change="callback">
        <a-tab-pane v-for="item in fixMenu" :tab="item.title" :key="item.key">
            <PageTemplate :columns="columns" :searchCon="searchCon">
                <a-table
                 :columns="columns"
                 :data-source="data"
                 :pagination="{
                     size:'small',
                    pageSize:10,
                    showTotal:(total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }"
                >
                    <span slot="action" slot-scope="text, record">
                        <template v-for="(i, index) in record.action">
                            <a href="#" @click.stop="handleOps(i.com, record.devId, record.taskStatus)">{{
                                i.tagName
                            }}</a>
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
        </a-tab-pane>
    </a-tabs>
</template>
 
<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { fixMenu } from './js/index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_FIXLIST = Object.freeze({ fixMenu, typeToComponent })

export default {
    name: 'fixList',
    components: { PageTemplate, TableDrawer, TableModal },
    created() {
        this.loadMenu()
    },
    data() {
        return {
            current: 0,
            fixMenu: NEW_FIXLIST.fixMenu,
            columns: [],
            searchCon: {},
            data: [],
            infoDetail: [],
            taskList: [],
        }
    },
    mounted() {
        // console.log(this.fixMenu[0].content)
    },
    methods: {
        handleOps(type, id, taskType) {
            const menuData = this.fixMenu.filter((item) => item.title == taskType || item.key == taskType)[0]
            if (type === 'TableDrawer') {
                if (this.current === 0) {
                    let tempCol = require('./js/' + menuData.content + '.js')
                    let result = Object.freeze(tempCol)
                    this.infoDetail = result.infoDetail.filter((item) => !item.hideInDetail)
                }
                //请求详情(无网络)
                let temp = this.data.filter((item) => item.devId == id)[0]
                this.infoDetail = this.infoDetail.map((item) => {
                    item.value = temp[item.key]
                    return item
                })
            } else {
                if (taskType == '待审核' || taskType == 1) {
                    let tempModal = require('./js/' + menuData.content + '.js')
                    // let result = Object.freeze(tempModal)
                    this.infoDetail = tempModal.taskList.filter((item) => !item.hideInDetail)
                }
            }
            let tempValue = [...NEW_FIXLIST.typeToComponent].filter(([key, value]) => key === type)
            this.$refs[type][0][tempValue[0][1]]()
        },
        loadMenu() {
            let temp = require('./js/' + this.fixMenu[this.current].content + '.js')
            let result = Object.freeze(temp)
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