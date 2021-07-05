<template>
    <div class="">
        <a-tabs default-active-key="1" :activeKey="current" @change="callback">
            <a-tab-pane v-for="item in fixMenu" :tab="item.title" :key="item.key">
                <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data"></PageTemplate>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import { fixMenu } from './js/index.js'
const NEW_FIXLIST = Object.freeze({fixMenu})

export default {
    name: 'fixList',
    components: { PageTemplate },
    created(){
        this.loadMenu()
    },
    data() {
        return {
            current:0,
            fixMenu: {...NEW_FIXLIST.fixMenu},
            columns:[],
            searchCon:{},
            data:[]
        }
    },
    mounted() {
        // console.log(this.fixMenu[0].content)
    },
    methods: {
        loadMenu(){
            let result = require("./js/"+this.fixMenu[this.current].content+".js")
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