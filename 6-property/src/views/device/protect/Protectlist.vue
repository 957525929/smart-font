<template>
    <div class="">
        <a-tabs default-active-key="1" :activeKey="current" @change="callback">
            <a-tab-pane v-for="item in proMenu" :tab="item.title" :key="item.key">
                <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data"></PageTemplate>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import { proMenu } from './js/index.js'
const NEW_PROLIST = Object.freeze({proMenu})

export default {
    name: 'proList',
    components: { PageTemplate },
    created(){
        this.loadMenu()
    },
    data() {
        return {
            current:0,
            proMenu: {...NEW_PROLIST.proMenu},
            columns:[],
            searchCon:{},
            data:[]
        }
    },
    methods: {
        loadMenu(){
            let result = require("./js/"+this.proMenu[this.current].content+".js")
            this.columns=result.columns
            this.searchCon=result.searchCon
            this.data=result.data
        },
        loadData(){
            // 请求数据
        },
        callback(key) {
            this.current = key
        }
    }
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>