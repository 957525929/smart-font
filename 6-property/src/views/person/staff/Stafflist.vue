<template>
    <PageTemplate :columns="columns" :searchCon="searchCon">
        <a-table :columns="columns" :data-source="data">
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
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { columns, data, infoDetail } from './js/index.js'
import { typeToComponent } from '@/utils/tableUtils.js'
const NEW_STAFFLIST = Object.freeze({ columns, data, infoDetail, typeToComponent })
export default {
    name: 'staffList',
    components: { PageTemplate, TableDrawer, TableModal },
    created() {
        // this.getList()
    },
    data() {
        return {
            searchCon: {},
            data: NEW_STAFFLIST.data,
            columns: NEW_STAFFLIST.columns,
            infoDetail: NEW_STAFFLIST.infoDetail,
            visible: false,
        }
    },
    methods: {
        handleOps(type) {
            let tempValue = [...NEW_STAFFLIST.typeToComponent].filter(([key, value]) => key === type)
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