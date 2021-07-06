<template>
    <PageTemplate :columns="staffColumns" :searchCon="searchCon" :formdata="data">
        <template>
            <a-rate slot="eva" slot-scope="text, record" disabled name="tableSlot"/>
        </template>
        
        <!-- {{content}} -->
    </PageTemplate>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import {  columns , data } from "./js/index.js";
const NEW_STAFFLIST = Object.freeze({  columns , data }) 
export default {
    name: 'staffList',
    components: { PageTemplate },
    created() {
        // this.getList()
    },
    data() {
        return {
            searchCon: {},
            data:NEW_STAFFLIST.data,
            staffColumns:NEW_STAFFLIST.columns,
            content:`<a-rate slot="eva" slot-scope="text, record" disabled />`
        }
    },
    methods: {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>