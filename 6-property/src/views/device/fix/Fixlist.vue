<template>
    <div class="wrapper">
    <a-tabs default-active-key="1" @change="callback" v-for="(item, index) in fixMenu" :key="item" :activeKey="current">
        <a-tab-pane :tab="item.title" :key="index">
            <PageTemplate :data="item.content"></PageTemplate>
                            <!-- :columns="item.fixList.allColumns"
                :searchCon="item.fixList.allSearchCon"
                :formdata="item.fixList.allData" -->
        </a-tab-pane>
        <!-- <a-tab-pane key="2" tab="Tab 2" force-render> Content of Tab Pane 2 </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane> -->
    </a-tabs>
    </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import { fixMenu, fixList } from './index.js'
const NEW_FIXLIST = Object.freeze({ fixMenu, fixList })

export default {
    name: 'fixList',
    components: { PageTemplate },
    data() {
        return {
            current:0,
            fixMenu: NEW_FIXLIST.fixMenu,
            fixList: NEW_FIXLIST.fixList,
        }
    },
    mounted() {
        console.log(this.fixList)
    },
    methods: {
        callback(key) {
          this.current=key
            console.log(key)
        },
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.wrapper{
  display: flex;
  flex-direction: row;
}
</style>