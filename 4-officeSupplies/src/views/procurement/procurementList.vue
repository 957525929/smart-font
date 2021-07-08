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

          <a-col :md="4" :sm="6">
            <a-form-item label="状态">
              <a-select v-model="queryParam.department" placeholder="请选择状态">
                <a-select-option value="">不限</a-select-option>
                <a-select-option value="1">待审批</a-select-option>
                <a-select-option value="2">通过</a-select-option>
                <a-select-option value="3">未通过</a-select-option>
              </a-select>
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
          <div class="div" v-if="record.status == 1">
              <span style="margin:0 10px ">|</span>
              <a-popconfirm
                title="提交审批结果?"
                ok-text="通过"
                cancel-text="不通过"
                @confirm="confirm"
                @cancel="cancel"
              >
                  <a href="javascript:;" @click="handleCheck(record.id)">审批</a>
              </a-popconfirm>
          </div>
            <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                 <a @click="handleDetail(record)">详情</a>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
        <template slot="applyStatus" slot-scope="status">
          <a-tag v-if="status == '1'" color="cyan">待审批</a-tag>
          <a-tag v-if="status == '2'" color="green">通过</a-tag>
          <a-tag v-if="status == '3'" color="orange">未通过</a-tag>
        </template>
      </a-table>
    </div>
    <a-modal v-model="visible" title="审批不通过" @ok="handleOk">
      <a-input placeholder="请填写审批不通过原因" />
    </a-modal>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <procurement-modal ref="modalForm" @ok="modalFormOk"></procurement-modal>
  </a-card>
</template>

<script>
  import ProcurementModal from './modules/ProcurementModal'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "ProcurementList",
    mixins:[JeecgListMixin],
    components: {
      ProcurementModal,
      JDate
    },
    data () {
      return {
        description: '采购管理页面',
        // 查询条件
        queryParam: {roleName:'',},
        visible:false,
        dataSource: [
          {
            id:1,
            applyDepertment:'后勤部',
            applyName:'郝式平',
            articleName: '订书机',
            applyNum: '3',
            unit:'台',
            status:1,
            applyTime: '2021-07-07 09:48:59',
            applyReason: '办公需要',
            remark:''
          },
          {
            id:2,
            applyDepertment:'营销部',
            applyName:'张丰',
            articleName: '马克笔',
            applyNum: '2',
            unit:'盒',
            status:2,
            applyTime: '2021-05-12 09:48:59',
            applyReason: '会议需要',
            remark:''
          },
          {
            id:3,
            applyDepertment:'专卖部',
            applyName:'林俐',
            articleName: '打印机',
            applyNum: '1',
            unit:'台',
            status:3,
            applyTime: '2021-05-21 14:40:50',
            applyReason: '业务需要',
            remark:'已有库存，可到仓库领取'
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
            title: '申请部门',
            align:"center",
            dataIndex: 'applyDepertment'
          },
          {
            title: '申请人',
            align:"center",
            dataIndex: 'applyName'
          },
          {
            title: '状态',
            dataIndex: 'status',
            align:"center",
            scopedSlots: { customRender: 'applyStatus' }
          },
          {
            title: '办公用品名称',
            align:"center",
            dataIndex: 'articleName'
          },
          {
            title: '申请数量',
            dataIndex: 'applyNum',
            align:"center"
          },
          {
            title: '计量单位',
            dataIndex: 'unit',
            align:"center"
          },
          {
            title: '申请时间',
            dataIndex: 'applyTime',
            align:"center"
          },
          {
            title: '申请理由',
            dataIndex: 'applyReason',
            align:"center",
            ellipsis: true
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
      handleCheck(id) {

      },
      confirm(e) {
        console.log(e);
        this.$message.success('审批通过');

      },
      cancel(e) {
        this.visible = true;
        console.log(e);
        // this.$message.error('审核合格');
      },
    }
  }
</script>
@import '~@assets/less/common.less'
<style scoped>
  .div {
    display: inline-block;
  }
</style>