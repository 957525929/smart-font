<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
          <a-col :xl="5" :lg="7" :md="8" :sm="24">
            <a-form-item label="资产名称">
              <a-input placeholder="请输入资产名称"></a-input>
            </a-form-item>
          </a-col>
         <a-col :xl="5" :lg="5" :md="6" :sm="24">
            <a-form-item label="资产所有人">
              <a-select
                allowClear
                placeholder="请选择资产所有人"
              >
                <a-select-option v-for="d in manuSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="5" :lg="5" :md="6" :sm="24">
            <a-form-item label="资产使用人">
              <a-select
                allowClear
                placeholder="请选择资产使用人"
              >
                <a-select-option v-for="d in userSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" icon="search">查询</a-button>
              <a-button icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->
    
    <!-- 操作按钮区域 -->
    <div class="table-operator">
<!--      <a-button type="link" @click="myHandleAdd"  icon="plus">新增</a-button>-->
      <a-button type="link"  @click="myHandleAdd"  icon="plus">新增</a-button>
      <a-button type="link" icon="download">导出</a-button>
      <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="link" icon="import">导入</a-button>
      </a-upload> -->

      <!-- <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item :disabled="!isBatchDelEnabled" key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown> -->
      <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
      <a style="margin-left: 12px" @click="onClearSelected">清空</a>

    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :scroll="{x:2500}"
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
        >

        <span slot="action" slot-scope="text, record">
          <!-- <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> -->
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" >编辑</a-menu-item>
              <a-menu-item key="2" >
                <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>
    <sal-receivable-modal ref="modalForm" @ok="modalFormOk"></sal-receivable-modal>
  </a-card>
</template>

<script>
  // import { billListMixin } from '../erp/mixins/billListMixin.js'
  import JDictSelectTag from "@comp/dict/JDictSelectTag";
  import JDate from "@comp/jeecg/JDate";
  import ListColumnsSetter from "@views/erp/components/ListColumnsSetter";
  import SalReceivableModal from "@views/erp/finance/modules/SalReceivableModal";
  import {JeecgListMixin} from "@/mixins/JeecgListMixin";
  import {billListMixin} from "@views/erp/mixins/billListMixin";

  export default {
    name: "signin",
    mixins:[JeecgListMixin, billListMixin],
    components: {
      JDictSelectTag,
      JDate,
      ListColumnsSetter,
      SalReceivableModal
    },
    data () {
      return {
        description: '资产列表',
        manuSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '王一',
        },
      ],
        userSelectData:[
          {
            value : 1,
            text : '李四',
          },
          {
            value : 2,
            text : '赵正',
          },
        ],
        dataSource: [
        {
          key:'1',
          assetNunmber: 'ZCAT2021070500',
          assetName: 'B107—24号宗地',
          assetValue: '3000000.00',
          assetOwner: '张三',
          recordDate: '2020-07-05',
          remark : '无',
        },
        {
          key:'2',
          assetNunmber: 'ZCAT2021070501',
          assetName: '烟草烘干机',
          assetValue: '10000.00',
          assetOwner: '张三',
          recordDate: '2020-07-05',
          remark : '无',
        },
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
            title:'资产编号',
            fixed:'left',
            width:130,
            align:"center",
            dataIndex: 'assetNunmber',
          },
          {
            title:'资产名称',
            align:"center",
            dataIndex: 'assetName'
          },
          {
            title:'资产价值',
            align:"center",
            dataIndex: 'assetValue'
          },
          {
            title:'资产所有人',
            align:"center",
            dataIndex: 'assetOwner'
          },
          {
            title:'登记日期',
            width:90,
            align:"center",
            dataIndex: 'recordDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
        dictOptions:{},
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
      },
      deletConfirm(e) {
        console.log(e);
        this.$message.success('删除成功');
      },
      purchaseDateOnChange(date, dateString) {
        console.log(date, dateString);
      },
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
