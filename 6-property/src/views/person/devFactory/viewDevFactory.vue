<template>
    <!-- <div> -->
    <PageTemplate :columns="devColumns" :searchCon="searchCon">
        <a-button type="primary" @click="showDevForm"><a-icon type="plus"></a-icon>厂商登记</a-button>
        <TableModal title="厂商登记" :infoDetail="loginInfo" ref="devModal"></TableModal>
        <a-table
            :columns="devColumns"
            :data-source="data"
            style="margintop: 15px"
            :pagination="{
                size:'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }"
        >
            <span slot="action" slot-scope="text, record">
                <a href="javascript:;" @click="handleDetail(record.devId)">详情</a>
                <TableDrawer title="厂商登记" :infoDetail="loginInfo" ref="devDrawer"></TableDrawer>
                <!-- <div v-for="item in equips" :key="item.tagName" slot="equips" slot-scope="text, record">
                        <a-tag>{{item.tagName}}</a-tag>
                    </div> -->
            </span>
        </a-table>
    </PageTemplate>
    <!-- </div> -->
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { columns, data, infoDetail } from './js/index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_DEVLIST = Object.freeze({ columns, data, infoDetail, typeToComponent })
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
            devColumns: NEW_DEVLIST.columns,
            infoDetail: NEW_DEVLIST.infoDetail,
            detailData: {},
            loginInfo: NEW_DEVLIST.infoDetail,
            visible: false,
        }
    },
    methods: {
        getList() {
            this.devColumns.forEach((item) => {
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
            this.loginInfo = this.infoDetail.filter((item) => !item.hideInLogin)
        },
        handleDetail(id) {
            // this.infoDetail = this.infoDetail.filter(item=>!item.hideInDetail)
            // //请求详情(无网络)
            // this.detailData = this.data.filter(item=>item.devId===id)[0]

            //处理数据
            let tempData = this.data.filter((item) => item.devId === id)[0]
            this.infoDetail = this.infoDetail.map((item) => {
                item.value = tempData[item.key]
                return item
            })
            this.$refs.devDrawer.showDrawer()
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