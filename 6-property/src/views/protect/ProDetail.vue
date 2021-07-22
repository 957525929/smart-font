<template>
    <!-- <page-layout title="设备详情"> -->
    <a-card :bordered="false">
        <a-descriptions title="基本信息">
            <a-descriptions-item :label="item.title" v-for="item in basicInfo" :key="item.key">{{
                item.value
            }}</a-descriptions-item>
        </a-descriptions>
        <a-divider style="margin-bottom: 32px" />

        <div class="title">保养记录</div>
        <a-table :columns="proRecord" :data-source="proData">
            <span slot="ifRun" slot-scope="text"
                ><a-badge :status="text == 0 ? 'success' : 'error'" />{{ text == 0 ? '是' : '否' }}</span
            >
            <span slot="ifnormal" slot-scope="text">
                <a-badge :status="text == 0 ? 'success' : 'error'" />{{ text == 0 ? '是' : '否' }}</span
            >
            <span slot="action" slot-scope="text, record">
                <template v-for="(i, index) in record.action">
                    <a-popconfirm
                        title="确认通过核查?"
                        ok-text="是"
                        cancel-text="否"
                        v-if="i.com === 'TableDelete'"
                    >
                        <a href="#">{{ i.tagName }}</a>
                    </a-popconfirm>
                    <template v-else>
                        <component
                            :is="i.com"
                            :ref="i.com"
                            :key="index"
                            :title="i.tagName"
                            :infoDetail="infoDetail"
                        ></component>
                        <a @click="show(i.com, record.recordId)">{{ i.tagName }}</a>
                    </template>

                    <a-divider type="vertical" v-if="index !== record.action.length - 1" />
                </template>
            </span>
        </a-table>

        <div class="title">区域设备详情</div>
        <a-table :columns="toolInfo" :data-source="toolData" class="components-table-demo-nested">
            <span slot="action" slot-scope="text, record">
                <template v-for="(i, index) in record.action.filter((item) => item.tagName === '详情')">
                    <template v-if="i.com === 'router-link'">
                        <router-link :to="{ name: i.url, params: { id: record.devId } }">{{ i.tagName }}</router-link>
                    </template>
                    <a-divider type="vertical" v-if="index !== record.action.length - 1" />
                </template>
            </span>
        </a-table>
    </a-card>
    <!-- </page-layout> -->
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { data } from './js/all.js'
import { basicInfo } from './js/detail.js'
import { proRecord } from './js/index.js'
import { data as devData, devColumns } from '@/views/device/deviceList/js/index.js'
import { handleTableData } from '@/utils/util.js'
const NEW_DETAIL = Object.freeze({ basicInfo, proRecord, devData, devColumns })
export default {
    components: { PageTemplate, TableDrawer, TableModal },
    mounted() {
        this.getData()
    },
    data() {
        return {
            basicInfo: NEW_DETAIL.basicInfo.filter((item) => {
                return !item.hideInDetail
            }),
            basicData: {},
            proRecord: NEW_DETAIL.proRecord.filter((item) => {
                return !item.hideInTable
            }),
            proData: {},
            infoDetail: NEW_DETAIL.proRecord.filter((item) => {
                return !item.hideInDetail
            }),
            toolInfo: NEW_DETAIL.devColumns.filter((item) => !item.hideInTable),
            toolData: NEW_DETAIL.devData,
        }
    },
    computed: {
        Id() {
            return this.$route.params.id
        },
    },
    methods: {
        getData() {

            this.basicData = data.filter((item) => {
                return item.taskId === this.Id
            })[0]
            this.proData = this.basicData.records
            this.toolData = this.toolData.filter((item) => {
                return item.groupKey == this.basicData.areaKey
            })
            let menu = new Map([
                ['basicInfo', 'basicData'],
                ['proRecord', 'proData'],
                ['toolInfo', 'toolData'],
            ])
            Array.from(menu).forEach(([key, value]) => {
                this[key] = handleTableData(this[key], this[value])[0]
                this[value] = handleTableData(this[key], this[value])[1]
            })
            
        },
        show(type, id) {
            let temp = this.proData.filter((item) => {
                return item.recordId === id
            })[0]
            this.infoDetail = handleTableData(this.infoDetail, temp)[0]
            this.$refs[type][0].showDrawer()
        },
    },
}
</script>

<style lang="less" scoped>
.title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
}
</style>