<template>
    <div>
        <PageTemplate :columns="devColumns" :searchCon="searchCon">
            <a-button type="primary" @click="showDevForm"><a-icon type="plus"></a-icon>设备登记</a-button>
            <TableModal title="设备登记" :infoDetail="loginInfo" ref="devModal"></TableModal>
            <a-table :columns="devColumns" :data-source="data">
                <span slot="action" slot-scope="text, record">
                    <template v-for="(i, index) in record.action">
                        <a-popconfirm
                            title="确认注销此设备?"
                            ok-text="是"
                            cancel-text="否"
                            @confirm="confirm"
                            @cancel="cancel"
                            v-if="i.com === 'TableDelete'"
                        >
                            <a href="#" @click="showDelete">{{ i.tagName }}</a>
                        </a-popconfirm>
                        <template v-else>
                            <a href="#" @click.stop="handleOps(i.com)">{{ i.tagName }}</a>
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
    </div>
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { devColumns, data, infoDetail,loginInfo } from './index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_DEVLIST = Object.freeze({ devColumns, data, infoDetail, typeToComponent,loginInfo })
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
            devColumns: NEW_DEVLIST.devColumns,
            infoDetail: NEW_DEVLIST.infoDetail,
            loginInfo:NEW_DEVLIST.loginInfo,
            visible: false,
        }
    },
    methods: {
        getList(){
            devColumns.forEach(item=>{
                if(item.valueEnum){
                    this.data.map(res=>{
                        res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
                        return res
                    })                
                }
            })
        },
        showDevForm() {
            this.$refs.devModal.showModal()
        },
        handleOps(type) {
            let tempValue = [...NEW_DEVLIST.typeToComponent].filter(([key, value]) => key === type)
            let self = this
            self.$refs[type][0][tempValue[0][1]]()
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