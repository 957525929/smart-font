<template>
    <PageTemplate :columns="columns" :searchCon="searchCon">
        <a-button type="primary" @click="showStaffForm"><a-icon type="plus"></a-icon>新增</a-button>
        <TableModal title="新增人员" :infoDetail="loginInfo" ref="devModal"></TableModal>
        <a-table :columns="columns" :data-source="data" style="margintop: 15px">
            <a-rate slot="eva" slot-scope="text, record" disabled v-model="record.eva" />
            <span slot="action" slot-scope="text, record">
                <template v-for="(i, index) in record.action">
                    <a-popconfirm
                        title="确认删除此人?"
                        ok-text="是"
                        cancel-text="否"
                        @confirm="confirm"
                        @cancel="cancel"
                        v-if="i.com === 'TableDelete'"
                    >
                        <a href="#" @click="showDelete">{{ i.tagName }}</a>
                    </a-popconfirm>
                    <template v-else>
                        <a href="#" @click.stop="handleOps(i.com, record.devId)">{{ i.tagName }}</a>
                        <component
                            :is="i.com"
                            :ref="i.com"
                            :key="index"
                            :title="i.tagName"
                            :infoDetail="infoDetail"
                        ></component>
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
//js
import { columns, data, infoDetail, devDetail, detailDevData } from './js/index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_STAFFLIST = Object.freeze({ columns, data, infoDetail, typeToComponent, devDetail, detailDevData })
export default {
    name: 'staffList',
    components: { PageTemplate, TableDrawer, TableModal },
    created() {
        this.getList()
    },
    data() {
        return {
            searchCon: {},
            data: NEW_STAFFLIST.data,
            columns: NEW_STAFFLIST.columns,
            infoDetail: NEW_STAFFLIST.infoDetail,
            loginInfo: NEW_STAFFLIST.infoDetail,
            detailData: {},
            devDetail: NEW_STAFFLIST.devDetail,
            detailDevData: NEW_STAFFLIST.detailDevData,
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
        showStaffForm() {
            this.loginInfo = this.infoDetail.filter((item) => !item.hideInLogin)
            this.$refs.devModal.showModal()
        },
        handleOps(type, id) {
            if (type === 'TableDrawer') {
                this.infoDetail = this.devDetail.filter((item) => !item.hideInDetail)
                //请求详情(无网络)
                this.detailData = this.detailDevData.filter((item) => item.Id == id)[0]
                this.infoDetail = this.infoDetail.map((item) => {
                    item.value = this.detailData[item.key]
                    return item
                })
            } else {
                this.infoDetail = this.infoDetail.filter((item) => !item.hideInDetail)
                //请求详情(无网络)
                this.detailData = this.data.filter((item) => item.Id === id)[0]
            }

            let tempValue = [...NEW_STAFFLIST.typeToComponent].filter(([key, value]) => key === type)
            this.$refs[type][0][tempValue[0][1]]()
            // type !== 'TableDelete' ?  : this[tempValue[0][1]]()
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