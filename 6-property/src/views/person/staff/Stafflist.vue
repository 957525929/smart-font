<template>
    <PageTemplate :columns="columns" :searchCon="searchCon">
        <a-table :columns="columns" :data-source="data">
            <a-rate slot="eva" slot-scope="text, record" disabled v-model="record.eva"/>
            <span slot="action" slot-scope="text, record">
                <template v-for="(i, index) in record.action">
                    <a>{{ i.tagName }}</a>
                    <a-divider type="vertical" v-if="index !== record.action.length - 1" />
                </template>
            </span>
        </a-table>
    </PageTemplate>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import { columns, data } from './js/index.js'
const NEW_STAFFLIST = Object.freeze({ columns, data })
export default {
    name: 'staffList',
    components: { PageTemplate },
    created() {
        // this.getList()
    },
    data() {
        return {
            searchCon: {},
            data: NEW_STAFFLIST.data,
            columns: NEW_STAFFLIST.columns
        }
    },
    methods: {},
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>