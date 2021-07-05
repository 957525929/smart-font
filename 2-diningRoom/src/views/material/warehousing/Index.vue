<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" >
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="单据编号">
              <a-input placeholder="请输入单据编号" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="8" :lg="9" :md="10" :sm="24">
            <a-form-item label="单据日期">
              <j-date placeholder="请选择开始" class="query-group-cust"></j-date>
              <span class="query-group-split-cust"></span>
              <j-date placeholder="请选择结束" class="query-group-cust"></j-date>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="供应商">
                <j-dict-select-tag dictCode="bas_supplier,name,id" placeholder="请选择供应商"/>
              </a-form-item>
            </a-col>
            <a-col :xl="4" :lg="6" :md="7" :sm="24">
              <a-form-item label="是否通过">
                <j-dict-select-tag dictCode="yn"/>
              </a-form-item>
            </a-col>
            <a-col :xl="4" :lg="6" :md="7" :sm="24">
              <a-form-item label="是否作废">
                <j-dict-select-tag dictCode="yn"/>
              </a-form-item>
            </a-col>
          </template>

          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button type="primary" icon="search">查询</a-button>
              <a-button icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </a-col>
          </span>

        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="link" icon="plus">新增</a-button>
      <a-button type="link" icon="download" :disabled="!hasSelected">导出</a-button>
      <i class="anticon anticon-info-circle ant-alert-icon"></i>已选择<a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
      <a style="margin-left: 12px" @click="onClearSelected" v-if='hasSelected'>清空</a>

    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="key"
        :scroll="{ x: 2200}"
        :columns="columns"
        :dataSource="dataSource"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        >
        <span slot="action" slot-scope="text, record">
          <a>编辑</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" >
                <a-popconfirm title="确定删除吗?" >删除</a-popconfirm>
              </a-menu-item>
              <a-menu-item key="2" >审核</a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

  </a-card>
</template>

<script>


import JSelectUserByDep from '@/components/jeecgbiz/JSelectUserByDep'
import JSuperQuery from '@/components/jeecg/JSuperQuery.vue';
import JDate from '@/components/jeecg/JDate.vue'


export default {
  name: "Index",
  components: {
    JDate,
    JSuperQuery,
    JSelectUserByDep,
  },

  data () {
    return {
      description: '采购入库',
      dataSource: [
        {
          key:'1',
          billNo: 'dfh2001',
          billDate: '2020-01-20 19:55:55',
        }
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          fixed: 'left',
          width:40,
          align:"center",
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'单据编号',
          fixed: 'left',
          width:180,
          align:"center",
          dataIndex: 'billNo',
          scopedSlots: { customRender: 'billNo' }
        },
        {
          title:'单据日期',
          width:90,
          align:"center",
          dataIndex: 'billDate',
          customRender:function (text) {
            return !text?"":(text.length>10?text.substr(0,10):text)
          }
        },
        {
          title:'源单号',
          width:180,
          align:"center",
          dataIndex: 'sourceNo'
        },
        {
          title:'制单人',
          width:75,
          align:"center",
          dataIndex: 'createBy_dictText'
        },
        {
          title:'业务员',
          width:75,
          align:"center",
          dataIndex: 'clerkId_dictText'
        },
        {
          title:'供应商',
          align:"left",
          dataIndex: 'supplierId_dictText'
        },
        {
          title:'处理状态',
          width:75,
          align:"center",
          dataIndex: 'billProcStatus_dictText'
        },
        {
          title:'是否通过',
          width:75,
          align:"center",
          dataIndex: 'isApproved_dictText'
        },
        {
          title:'是否关闭',
          width:75,
          align:"center",
          dataIndex: 'isClosed_dictText'
        },
        {
          title:'是否作废',
          width:75,
          align:"center",
          dataIndex: 'isVoided_dictText'
        },
        {
          title:'备注',
          align:"left",
          dataIndex: 'remark'
        },
        {
          title:'生效时间',
          width:90,
          align:"center",
          dataIndex: 'effectiveTime',
          customRender:function (text) {
            return !text?"":(text.length>10?text.substr(0,10):text)
          }
        },
        {
          title:'审核人',
          width:75,
          align:"center",
          dataIndex: 'approverId_dictText'
        },
        {
          title:'流程',
          width:100,
          align:"center",
          dataIndex: 'flowId'
        },
        {
          title:'创建时间',
          width:90,
          align:"center",
          dataIndex: 'createTime',
          customRender:function (text) {
            return !text?"":(text.length>10?text.substr(0,10):text)
          }
        },
        {
          title:'创建部门',
          width:120,
          align:"center",
          dataIndex: 'sysOrgCode_dictText'
        },
        {
          title:'修改时间',
          width:90,
          align:"center",
          dataIndex: 'updateTime',
          customRender:function (text) {
            return !text?"":(text.length>10?text.substr(0,10):text)
          }
        },
        {
          title:'修改人',
          width:75,
          align:"center",
          dataIndex: 'updateBy_dictText'
        },
        {
          title: '操作',
          dataIndex: 'action',
          fixed:'right',
          width:120,
          align:"center",
          scopedSlots: { customRender: 'action'},
        }
      ],
      toggleSearchStatus: false,
      selectedRowKeys: [],
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    handleToggleSearch() {
      if(this.toggleSearchStatus) this.toggleSearchStatus=false;
      else this.toggleSearchStatus=true;
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    onClearSelected() {
      this.selectedRowKeys = [];
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.table-page-search-wrapper {
  margin-bottom: 8px;
}

.table-page-search-wrapper .ant-form-item,
.table-page-search-wrapper .table-page-search-submitButtons {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
