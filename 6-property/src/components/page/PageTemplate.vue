<template>
    <a-row align="top">
        <a-col :span="24">
            <SearchCard  v-on="$listeners" v-bind="$attrs" :columns="searchCols"></SearchCard>
            <a-card style="width: 100%;margin-top:10px">
                <slot></slot>               
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import SearchCard from '../search/SearchCard.vue'
export default {
    name: 'WrapperdList',
    props: {
        columns:{
            type:Array,
            default:()=> []
        },
        formdata: {
            type:Array,
            default:()=> []
        }
    },
    components: { SearchCard },
    mounted(){
        this.searchCols = this.columns.filter(item=>{
            return !item.hideInSearch
        })
    },
    data() {
        return {
            expand: false,
            searchCols:[]
        }
    },
    inheritAttrs: false,
    methods: {
    },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
.ant-advanced-search-form {
    padding: 24px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
    display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
    flex: 1;
}

#components-form-demo-advanced-search .ant-form {
    max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
}
</style>