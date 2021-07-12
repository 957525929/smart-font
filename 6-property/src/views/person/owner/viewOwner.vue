<template>
    <div>
        <PageTemplate :columns="columns" :searchCon="searchCon">
            <a-table :columns="columns" :data-source="data" style="marginTop:15px">
            </a-table>
        </PageTemplate>
    </div>
</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
// import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
// import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { columns, data } from './js/index.js'
// import { typeToComponent } from '@/utils/dataDictionary.js'
const NEW_DEVLIST = Object.freeze({ columns, data})
export default {
    name: 'deviceList',
    components: { PageTemplate, 
    // TableDrawer, TableModal 
    },
    created() {
        this.getList()
    },
    data() {
        return {
            searchCon: {},
            data: NEW_DEVLIST.data,
            columns: NEW_DEVLIST.columns,
            // infoDetail: NEW_DEVLIST.infoDetail,
            // detailData:{},
            // loginInfo:NEW_DEVLIST.infoDetail,
            // visible: false,
        }
    },
    methods: {
        getList(){
            this.columns.forEach(item=>{
                if(item.valueEnum){
                    this.data.map(res=>{
                        res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
                        return res
                    })                
                }
            })
        },
        // showDevForm() {
        //     this.$refs.devModal.showModal()
        //     this.loginInfo = this.infoDetail.filter(item=>!item.hideInLogin)
        // },
        // handleDetail(id) {
        //     // this.infoDetail = this.infoDetail.filter(item=>!item.hideInDetail)
        //     // //请求详情(无网络)
        //     // this.detailData = this.data.filter(item=>item.devId===id)[0]
            
        //                 //处理数据
        //     let tempData = this.data.filter((item) => item.devId === id)[0]
        //     this.infoDetail = this.infoDetail.map((item) => {
        //         item.value = tempData[item.key]
        //         return item
        //     })
        //     this.$refs.devDrawer.showDrawer()
        // },
        // confirm() {
        //     this.visible = false
        //     this.$message.success('success')
        // },
        // cancel() {
        //     this.visible = false
        // },
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>