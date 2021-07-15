<template>
  <a-card :bordered="false" class="card-area">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <!-- 搜索区域 -->
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="名称" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input placeholder="请输入办公用品名称查询" v-model="queryParam.name"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="4" :sm="6">
            <a-form-item label="库存状态">
              <a-select v-model="queryParam.sex" placeholder="请选择库存状态">
                <a-select-option value="">请选择</a-select-option>
                <a-select-option value="1">充裕</a-select-option>
                <a-select-option value="2">紧张</a-select-option>
                <a-select-option value="3">缺货</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

<!--          <a-col :md="6" :sm="8">
            <a-form-item label="单价" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input-number v-model="queryParam.min" :min="1" :max="10000000" :decimalSeparator="0" />
                <span style="width: 10px;">~</span>
              <a-input-number v-model="queryParam.max" :min="1" :max="10000000" :decimalSeparator="0" />
            </a-form-item>
          </a-col>-->

          <a-col :md="10" :sm="12">
            <a-form-item label="时间" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <j-date v-model="queryParam.time_begin" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择开始时间" ></j-date>
              <span style="width: 10px;">~</span>
              <j-date v-model="queryParam.time_end" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择结束时间"></j-date>
            </a-form-item>
          </a-col>



          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button type="primary" @click="searchQuery">查询</a-button>
              <a-button style="margin-left: 8px" @click="searchReset">重置</a-button>
            </a-col>
          </span>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator"  style="margin-top: 5px">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('库存信息')">导出</a-button>
<!--      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">-->
<!--        <a-button type="primary" icon="import">导入</a-button>-->
<!--      </a-upload>-->

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作 <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择&nbsp;<a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项&nbsp;&nbsp;
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange">

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
              <a>删除</a>
          </a-popconfirm>
        </span>
        <template slot="stockStatus" slot-scope="status">
          <a-tag v-if="status == '1'" color="green">充裕</a-tag>
          <a-tag v-if="status == '2'" color="orange">紧张</a-tag>
          <a-tag v-if="status == '3'" color="red">缺货</a-tag>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <stock-modal ref="modalForm" @ok="modalFormOk"></stock-modal>
  </a-card>
</template>


<script>
  import StockModal from './modules/StockModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import {formatDate} from "@/utils/util";

  export default {
    name: "StocKList",
    mixins:[JeecgListMixin],
    components: {
      StockModal,
      JDate
    },
    data () {
      return {
        description: '库存管理页面',
        // 查询条件
        queryParam: {
          roleName:'',
          time_begin:formatDate(new Date().getTime()-30*24*3600*1000,"yyyy-MM-dd"),
          time_end:formatDate(new Date().getTime(),"yyyy-MM-dd")
        },
        dataSource: [
          {
            id:1,
            articleName: '马克笔',
            enterTime: formatDate(new Date().getTime()-2*24*3600*1000,"yyyy-MM-dd") + '  14:36:45',
            stockNum: '20',
            price: '20',
            stockPrice: '400',
            threshold: '10',
            unit:'盒',
            status: '1'
          },
          {
            id:2,
            articleName: '打印机',
            enterTime: formatDate(new Date().getTime()-10*24*3600*1000,"yyyy-MM-dd") + '  09:31:45',
            stockNum: '2',
            price: '1600',
            stockPrice: '3200',
            threshold: '2',
            unit:'台',
            status: '2'
          },
          {
            id:3,
            articleName: 'A4纸',
            enterTime:formatDate(new Date().getTime()-15*24*3600*1000,"yyyy-MM-dd") + '  16:26:15',
            stockNum: '0',
            price: '128',
            stockPrice: '0',
            threshold: '5',
            unit:'箱',
            status: '3'
          },
        ],
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '办公用品名称',
            align:"center",
            dataIndex: 'articleName'
          },
          {
            title: '入库时间',
            align:"center",
            dataIndex: 'enterTime'
          },
          {
            title: '库存数量',
            align:"center",
            dataIndex: 'stockNum'
          },
          {
            title: '单价(元)',
            dataIndex: 'price',
            align:"center"
          },
          {
            title: '库存价值(元)',
            dataIndex: 'stockPrice',
            align:"center"
          },
          {
            title: '警示阀值',
            dataIndex: 'threshold',
            align:"center"
          },
          {
            title: '计量单位',
            dataIndex: 'unit',
            align:"center"
          },
          {
            title: '库存状态',
            dataIndex: 'status',
            align:"center",
            scopedSlots: { customRender: 'stockStatus' }
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
        url123: {
          list: "/sys/role/list",
          delete: "/sys/role/delete",
          deleteBatch: "/sys/role/deleteBatch",
          exportXlsUrl: "/sys/role/exportXls",
          importExcelUrl: "sys/role/importExcel",
        },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      handlePerssion: function(roleId){
       // alert(roleId);
        this.$refs.modalUserRole.show(roleId);
      },
      onChangeDate(date, dateString) {
        console.log(date, dateString);
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>