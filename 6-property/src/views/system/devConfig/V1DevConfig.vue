<template>
    <a-row :gutter="10">
        <a-col :md="24" :sm="24">
            <a-card :bordered="false">
                <TableModal ref="groupModal" title="添加分组" :infoDetail="groupInfo"></TableModal>
                <a-row>
                    <!-- <a-col :md="7" :sm="24"> -->
                    <a-button @click="handleAdd(2)" type="primary" style="margin: 10px">添加分组</a-button>
                    <a-button
                        type="primary"
                        icon="download"
                        @click="handleExportXls('部门信息')"
                        style="margin-left: 10px"
                        >导出</a-button
                    >
                    <a-upload
                        name="file"
                        :showUploadList="false"
                        :multiple="false"
                        :headers="tokenHeader"
                        :action="importExcelUrl"
                        @change="handleImportExcel"
                    >
                        <a-button type="primary" icon="import" style="margin: 10px">导入</a-button>
                    </a-upload>
                    <a-button style="margin: 10px" @click="handleAdd">批量删除</a-button>                        
                    <!-- </a-col> -->

                </a-row>
                <div style="background: #fff; padding-left: 16px; height: 100%; margin-top: 5px">
                    <a-input-search style="width: 100%; margin-top: 10px" placeholder="请输入分组名称" />
                    <!-- 树-->
                    <template v-if="departTree.length > 0">
                        <!--组织机构-->
                        <a-tree
                            :checkable="checkable"
                            @check="onCheck"
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
        <!-- <a-col :md="17" :sm="24">
            <a-card :bordered="false">
                <TableModal
                 title="添加分类"
                  :infoDetail="devInfo"
                   ref="devModal"
                   />
                <PageTemplate
                    @clearSelectedDepartKeys="clearSelectedDepartKeys"
                    :columns="devColumns"
                    :searchCon="searchCon"
                >
                    <a-button @click="handleAdd(1)" type="primary" v-show="visible" style="marginBottom:10px" icon="plus">新增</a-button>
                    
                    <a-table :columns="devColumns" :data-source="data" v-show="visible">
                        <span slot="action" slot-scope="text, record">
                            <template v-for="(i, index) in record.action">
                                <a-popconfirm
                                    title="确认删除此零件?"
                                    ok-text="是"
                                    cancel-text="否"
                                    @confirm="confirm"
                                    @cancel="cancel"
                                    v-if="i.com === 'TableDelete'"
                                >
                                    <a href="#" @click="showDelete">{{ i.tagName }}</a>
                                </a-popconfirm>
                                <template v-else>
                                    <a href="#" @click.stop="handleOps(i.com, record.devId)">{{ i.tagName }}</a>
                                    <component
                                        :is="i.com"
                                        :ref="i.com"
                                        :key="index"
                                        :title="i.tagName"
                                        :infoDetail="infoDetail"
                                    ></component>
                                </template>
                                <a-divider type="vertical" v-if="index !== record.action.length - 1" />
                            </template>
                        </span>
                    </a-table>
                </PageTemplate>
            </a-card>
        </a-col> -->
    </a-row>
</template>

<script>
//   import {queryMyDepartTreeList, searchByKeywords} from '@/api/api'
//   import {JeecgListMixin} from '@/mixins/JeecgListMixin'
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { typeToComponent,DepartTree } from '@/utils/dataDictionary.js'
import { groupInfo, devInfo, devColumns, data } from './js/index.js'
const NEW_TOOLLIST = Object.freeze({ devColumns, data, groupInfo, typeToComponent, devInfo })
export default {
    name: 'devConfig',
    components: {
        PageTemplate,
        TableModal,
    },
    data() {
        return {
            checkable:false,
            departTree: DepartTree,
            selectedKeys: [],
            autoExpandParent: true,
            iExpandedKeys: [],
            //table
            searchCon: {},
            data: NEW_TOOLLIST.data,
            devColumns: NEW_TOOLLIST.devColumns,
            groupInfo: NEW_TOOLLIST.groupInfo.filter((item) => !item.hideInLogin),
            devInfo: NEW_TOOLLIST.devInfo.filter((item) => !item.hideInLogin),
            visible: false,
            checkedSelected:[]
        }
    },
    mounted() {
       this.devInfo.forEach(item=>{
           if(item.valueEnum){
               this.data.map(res=>{
                   res[item.key] = item.valueEnum[res[item.key]].tableValue
                   return res
               })
           }
       })
    },
    methods: {
        handleAdd(num) {
            this.checkable=true
            if (num == 1) {
                this.$refs.devModal.showModal()
            } else if (num == 2) {
                this.checkedSelected.length !== 1
                    ? this.$message.warning('请选中唯一的上级部门！')
                    : this.$refs.groupModal.showModal(this.selectedKeys);
            }
        },
        onExpand(expandedKeys) {
            this.iExpandedKeys = expandedKeys
            this.autoExpandParent = false
        },
        onSelect(selectedKeys, e) {
            this.currSelected = selectedKeys
            let record = e.node.dataRef
            this.visible = false
            this.data = this.data.filter((item) => {
                return item.devId == record.key
            })
            this.visible = true

            // this.$refs.DeptRoleInfo.onClearSelected()
            // this.$refs.DeptRoleInfo.open(record)
        },
        clearSelectedDepartKeys() {
            this.checkedKeys = []
            this.selectedKeys = []
            this.currentDeptId = ''
            this.$refs.DeptRoleInfo.currentDeptId = ''
        },
        onCheck(checkedKeys, info) {
            this.checkedSelected = checkedKeys.checked
            console.log('onCheck', checkedKeys, info)
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