<template>
  <a-card :bordered="false" class="card-area">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <!-- 搜索区域 -->
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="4" :sm="6">
            <a-form-item label="部门">
              <a-select v-model="queryParam.department" placeholder="请选择部门">
                <a-select-option value="">不限</a-select-option>
                <a-select-option value="1">营销部</a-select-option>
                <a-select-option value="2">专卖部</a-select-option>
                <a-select-option value="3">配送部</a-select-option>
                <a-select-option value="4">后勤部</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="8">
            <a-form-item label="金额" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input-number v-model="queryParam.min" :min="1" :max="10000000" :decimalSeparator="0"/>
                <span style="width: 10px;">~</span>
              <a-input-number v-model="queryParam.max" :min="1" :max="10000000" :decimalSeparator="0"/>
            </a-form-item>
          </a-col>

          <a-col :md="10" :sm="12">
            <a-form-item label="时间" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <j-date v-model="queryParam.time_begin" :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" style="width:45%" placeholder="请选择开始时间" ></j-date>
              <span style="width: 10px;">~</span>
              <j-date v-model="queryParam.time_end" :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" style="width:45%" placeholder="请选择结束时间"></j-date>
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
      <a-button type="primary" icon="download" @click="handleExportXls('领用信息')">导出</a-button>
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

          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <receive-modal ref="modalForm" @ok="modalFormOk"></receive-modal>
  </a-card>
</template>

<script>
  import ReceiveModal from './modules/ReceiveModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "ReceiveList",
    mixins:[JeecgListMixin],
    components: {
      ReceiveModal,
      JDate
    },
    data () {
      return {
        description: '库存管理页面',
        // 查询条件
        queryParam: {roleName:'',},
        dataSource: [
          {
            id:1,
            receiveDepertment:'营销部',
            receiveName:'张丰',
            articleName: '马克笔',
            batch: '20210514',
            receiveNum: '2',
            price: '20',
            receivePrice: '40',
            unit:'盒',
            receiveTime: '2021-06-01 09:48:59'
          },
          {
            id:2,
            receiveDepertment:'专卖部',
            receiveName:'林俐',
            articleName: '打印机',
            batch: '20210324',
            receiveNum: '1',
            price: '1600',
            receivePrice: '1600',
            unit:'台',
            receiveTime: '2021-05-23 15:10:11'
          },
          {
            id:3,
            receiveDepertment:'后勤部',
            receiveName:'陈琳',
            articleName: 'A4纸',
            batch: '20210105',
            receiveNum: '1',
            price: '128',
            receivePrice: '128',
            unit:'箱',
            receiveTime: '2021-05-11 10:24:18'
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
            title: '部门',
            align:"center",
            dataIndex: 'receiveDepertment'
          },
          {
            title: '领用人',
            align:"center",
            dataIndex: 'receiveName'
          },
          {
            title: '办公用品名称',
            align:"center",
            dataIndex: 'articleName'
          },
          {
            title: '批次',
            dataIndex: 'batch',
            align:"center"
          },
          {
            title: '领用数量',
            dataIndex: 'receiveNum',
            align:"center"
          },
          {
            title: '计量单位',
            dataIndex: 'unit',
            align:"center"
          },
          {
            title: '金额(元)',
            dataIndex: 'receivePrice',
            align:"center"
          },
          {
            title: '领用时间',
            dataIndex: 'receiveTime',
            align:"center"
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