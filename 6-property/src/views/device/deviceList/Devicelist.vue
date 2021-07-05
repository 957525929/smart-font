<template>
    <PageTemplate :columns="devColumns" :searchCon="searchCon" :formdata="data"></PageTemplate>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import {  devColumns , data } from "./index.js";
const NEW_DEVLIST = Object.freeze({  devColumns , data }) 
export default {
    name: 'deviceList',
    components: { PageTemplate },
    created() {
        // this.getList()
    },
    data() {
        return {
            searchCon: {},
            data:NEW_DEVLIST.data,
            devColumns:NEW_DEVLIST.devColumns,
        }
    },
    methods: {}
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>