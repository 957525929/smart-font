<template>
    <a-row :gutter="10">
        <a-col :md="7" :sm="24">
            <a-card :bordered="false">
                <a-row>
                    <a-button @click="handleAdd(1)" type="primary">添加部门</a-button>
                    <a-button @click="handleAdd(2)" type="primary" style="margin-left: 10px">添加下级</a-button>
                    <a-button type="primary" icon="download" @click="handleExportXls('部门信息')" style="margin-left: 10px">导出</a-button>
                    <a-upload
                        name="file"
                        :showUploadList="false"
                        :multiple="false"
                        :headers="tokenHeader"
                        :action="importExcelUrl"
                        @change="handleImportExcel"
                    >
                        <a-button type="primary" icon="import" style="margin-left: 10px">导入</a-button>
                    </a-upload>
                    <a-button title="删除多条数据" @click="batchDel" type="default" style="margin-left: 10px">批量删除</a-button>
                    <!--<a-button @click="refresh" type="default" icon="reload" :loading="loading">刷新</a-button>-->
                </a-row>
                <div style="background: #fff; padding-left: 16px; height: 100%; margin-top: 5px">
                    <a-input-search
                        @search="onSearch"
                        style="width: 100%; margin-top: 10px"
                        placeholder="请输入分组名称"
                    />
                    <!-- 树-->
                    <template v-if="departTree.length > 0">
                        <!--组织机构-->
                        <a-tree
                            showLine
                            :selectedKeys="selectedKeys"
                            :checkStrictly="true"
                            @select="onSelect"
                            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
                            :treeData="departTree"
                            :autoExpandParent="autoExpandParent"
                            :expandedKeys="iExpandedKeys"
                            @expand="onExpand"
                        />
                    </template>
                </div>
            </a-card>
        </a-col>

        <a-col :md="17" :sm="24">
            <a-card :bordered="false">
                <PageTemplate ref="DeptRoleInfo" @clearSelectedDepartKeys="clearSelectedDepartKeys"></PageTemplate>
                <!-- <dept-role-info/> -->
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
//   import {queryMyDepartTreeList, searchByKeywords} from '@/api/api'
//   import {JeecgListMixin} from '@/mixins/JeecgListMixin'
//   import DeptRoleInfo from './modules/DeptRoleInfo'
import PageTemplate from '@/components/page/PageTemplate.vue'
import { DepartTree } from './js/index.js'

export default {
    name: 'devConfig',
    // mixins: [JeecgListMixin],
    components: {
        //   DeptUserInfo,
        PageTemplate,
    },
    data() {
        return {
            departTree: DepartTree,
            selectedKeys: [],
            autoExpandParent: true,
            iExpandedKeys: [],
            // currentDeptId: '',

            // loading: false,

            // currFlowId: '',
            // currFlowName: '',
            // disable: true,
            // treeData: [],
            // visible: false,

            // rightClickSelectedKey: '',
            // hiding: true,
            // model: {},
            // dropTrigger: '',
            // depart: {},
            // disableSubmit: false,
            // checkedKeys: [],

            // autoIncr: 1,
            // currSelected: {},
            // form: this.$form.createForm(this),
            // labelCol: {
            //   xs: {span: 24},
            //   sm: {span: 5}
            // },
            // wrapperCol: {
            //   xs: {span: 24},
            //   sm: {span: 16}
            // },
            // graphDatasource: {
            //   nodes: [],
            //   edges: []
            // }
        }
    },
    methods: {
        onSearch(value) {
            let that = this
            // if (value) {
            //     searchByKeywords({ keyWord: value, myDeptSearch: '1' }).then((res) => {
            //         if (res.success) {
            //             that.departTree = []
            //             for (let i = 0; i < res.result.length; i++) {
            //                 let temp = res.result[i]
            //                 that.departTree.push(temp)
            //             }
            //         } else {
            //             that.$message.warning(res.message)
            //         }
            //     })
            // } else {
            //     //   that.loadTree()
            // }
        },
        onExpand(expandedKeys) {
            this.iExpandedKeys = expandedKeys
            this.autoExpandParent = false
        },
        onSelect(selectedKeys, e) {
            if (this.selectedKeys[0] !== selectedKeys[0]) {
                this.selectedKeys = [selectedKeys[0]]
            }
            let record = e.node.dataRef
            this.checkedKeys.push(record.id)
            this.$refs.DeptRoleInfo.onClearSelected()
            this.$refs.DeptRoleInfo.open(record)
        },
        clearSelectedDepartKeys() {
            this.checkedKeys = []
            this.selectedKeys = []
            this.currentDeptId = ''
            this.$refs.DeptRoleInfo.currentDeptId = ''
        },
    },
    created() {
        //   this.currFlowId = this.$route.params.id
        //   this.currFlowName = this.$route.params.name
        // this.loadTree()
    },
}
</script>

<style scoped>
@import '~@assets/less/common.less';
</style>