<template>
    <a-row :gutter="24" style="minHeight: 800px">
        <!-- <a-col :md="24" :sm="24"> -->
            <a-card style="margin: 10px">
                <TableModal ref="groupModal" title="添加分组类别" :infoDetail="groupInfo"></TableModal>
                <TableModal ref="deleteModal" title="删除分组类别" :infoDetail="deleteInfo"></TableModal>
                <a-button @click="handleAdd(1)" type="primary" style="margin: 10px">新建组别</a-button>
                 <a-button @click="handleDelete" style="margin: 10px">删除组别</a-button>
                <a-dropdown :trigger="[this.dropTrigger]" @visibleChange="dropStatus">
                <a-card style="margin: 10px;width:calc(100%/3)" hoverable title="区域">
                    <a slot="extra" href="#">空调、通风系统</a>
                    <a-row> 
                    <TableModal ref="groupModal" title="新增目录项" :infoDetail="devInfo"></TableModal>
                    <TableModal ref="editModal" title="编辑目录名" :infoDetail="devInfo"></TableModal>
                        <!-- <a-col :md="7" :sm="24"> -->
                        <a-button @click="handleAdd(1)" type="primary" style="margin: 10px">添加分组</a-button>
                        <a-button @click="handleAdd(3)" type="primary" style="margin: 10px">编辑组名</a-button>
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
                        >
                            <a-button type="primary" icon="import" style="margin: 10px">导入</a-button>
                        </a-upload>
                        <a-button style="margin: 10px" @click="handleAdd">批量删除</a-button>                        
                        <!-- </a-col> -->
                    </a-row>
                    <div style="background: #fff; padding-left: 16px; height: 100%; margin-top: 5px">
                        <a-input-search style="margin-top: 10px" placeholder="请输入分组名称" />
                        <!-- 树-->
                        <template v-if="group1Tree.length > 0">
                            <!--组织机构-->
                            <a-tree
                                :checkable="checkable"
                                @check="onCheck"
                                :selectedKeys="selectedKeys"
                                :checkStrictly="true"
                                @select="onSelect"
                                :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
                                :treeData="group1Tree"
                                :autoExpandParent="autoExpandParent"
                                :expandedKeys="iExpandedKeys"
                                @expand="onExpand"
                            />
                        </template>
                    </div>
                </a-card>
                </a-dropdown>
            </a-card>
        <!-- </a-col> -->
    </a-row>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { typeToComponent,groupTree } from '@/utils/dataDictionary.js'
import { groupInfo, devInfo, data,deleteInfo } from './js/index.js'
const NEW_TOOLLIST = Object.freeze({ data, groupInfo, typeToComponent, devInfo,deleteInfo,groupTree })
export default {
    name: 'devConfig',
    components: {
        PageTemplate,
        TableModal,
    },
    data() {
        return {
            deleteInfo:NEW_TOOLLIST.deleteInfo,
            checkable:false,
            group1Tree:NEW_TOOLLIST.groupTree,
            selectedKeys: [],
            autoExpandParent: true,
            iExpandedKeys: [],
            //table
            searchCon: {},
            data: NEW_TOOLLIST.data,
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
        handleDelete() {
        this.$refs.deleteModal.showModal()
      },
        handleAdd(num) {
            
            if (num == 1) {
                this.$refs.groupModal.showModal()
            } else if (num == 2) {
                this.checkable=true
                this.checkedSelected.length !== 1
                    ? this.$message.warning('请选中唯一的上级部门！')
                    : this.$refs.devInfo.showModal(this.selectedKeys);
            }else if (num == 3) {
                this.checkable=true
                this.checkedSelected.length !== 1
                    ? this.$message.warning('请选中唯一的上级部门！')
                    : this.$refs.editModal.showModal(this.selectedKeys);
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