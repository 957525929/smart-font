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
                   <a-col :xl="8" :lg="9" :md="10" :sm="24">
            <a-form-item label="出租日期">
              <j-date placeholder="请选择开始" class="query-group-cust" ></j-date>
              <span class="query-group-split-cust"></span>
              <j-date placeholder="请选择结束" class="query-group-cust"></j-date>
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
      <a-button type="link"  @click="myHandleAdd"   icon="plus">新增</a-button>
      <a-button type="link" icon="download">导出</a-button>
      <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="link" icon="import">导入</a-button>
      </a-upload> -->

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
        <span slot="contractDetail">
           <a class="ant-dropdown-link" @click="viewDetail"  >查看合同</a>
        </span>
        <span slot="action" slot-scope="text,record">
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
    <!-- 添加租赁合同记录 -->
    <a-modal
      title="新增租赁合同记录"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form-model :layout="form.layout" :model="form" >
        <a-form-model-item label="资产编号" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.assetNunmber" />
        </a-form-model-item>
        <a-form-model-item label="资产名称" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.assetName" />
        </a-form-model-item>
        <a-form-model-item label="资产租金" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.lentValue" />
        </a-form-model-item>
        <a-form-model-item label="资产所有人" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.assetOwner" />
        </a-form-model-item>
        <a-form-model-item label="资产使用人" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.assetUser" />
        </a-form-model-item>
        <a-form-model-item label="流转原因" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.transReason" />
        </a-form-model-item>
        <a-form-model-item label="租出日期" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.lentTime" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <!-- 查看合同详情 -->
    <a-modal
      title="合同详情"
      :visible="detailvisible"
      :confirm-loading="confirmLoading"
      @ok="handleOk1"
      @cancel="handleCancel1"
      width="70%"
    >
      <a-descriptions title="资产租赁合同详情" layout="vertical" bordered >
        <a-descriptions-item label="资产名称">
          B107—24号宗地
        </a-descriptions-item>
        <a-descriptions-item label="资产编号">
          ZCAT2021070500
        </a-descriptions-item>
        <a-descriptions-item label="租金">
          400000
        </a-descriptions-item>
        <a-descriptions-item label="出租方">
          烟草公司
        </a-descriptions-item>
        <a-descriptions-item label="承租方" >
          福州纵图有限科技公司
        </a-descriptions-item>
        <a-descriptions-item label="合同有效期" >
          2018-04-24———2025-04-24
        </a-descriptions-item>
        <a-descriptions-item label="支付方式" :span="3">
          <a-badge status="processing" text="网络转账" />
        </a-descriptions-item>
        <a-descriptions-item label="卡号">
          ××××××××××
        </a-descriptions-item>
        <a-descriptions-item label="收缴凭证">
          ××××××××××
        </a-descriptions-item>
        <a-descriptions-item label="付款周期">
          24个月
        </a-descriptions-item>
<!--        <a-descriptions-item label="Config Info">-->
<!--        </a-descriptions-item>-->
      </a-descriptions>
    </a-modal>

  </a-card>
</template>

<script>
import {setDataSource} from "@views/modules/online/cgform/util/TableUtils";
import JDate from "@comp/jeecg/JDate";
export default {
  name: "rent",
  components: {
    JDate,
  },
  data () {
      return {
        description: '资产变化表',
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
          lentValue: '300000.00',
          assetOwner: '张三',
          assetUser: '李四',
          recordDate: '2020-07-05',
          transReason: '商用',
         // contractDetail:'查看详情',
          remark : '无',
        },
        {
          key:'2',
          assetNunmber: 'ZCAT2021070501',
          assetName: '烟草烘干机',
          lentValue: '10000.00',
          assetOwner: '张三',
          assetUser: '李四',
          recordDate: '2020-07-05',
          transReason: '商用',
        //  contractDetail:'查看详情',
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
            align:"center",
            fixed: 'left',
            width:130,
            dataIndex: 'assetNunmber',
          },
          {
            title:'资产名称',
            align:"center",
            dataIndex: 'assetName'
          },
          {
            title:'资产租金',

            align:"center",
            dataIndex: 'lentValue'
          },
          {
            title:'资产所有人',
    
            align:"center",
            dataIndex: 'assetOwner'
          },
          {
            title:'资产使用人',
    
            align:"center",
            dataIndex: 'assetUser'
          },
          
          {
            title:'流转原因',

            align:"center",
            dataIndex: 'transReason'
          },
          {
            title:'租出日期',

            align:"center",
            dataIndex: 'recordDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'合同详情',
            align:"center",
            dataIndex: 'contractDetail',
            scopedSlots: { customRender: 'contractDetail' },
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
        visible: false,   //新增面板
        detailvisible:false,  //合同详情
        confirmLoading: false,
        //新增表单
        form: {
          assetNunmber: '',
          assetName: '',
          lentValue: '',
          assetOwner: '',
          assetUser: '',
          transReason: '',
          lentTime: '',
          recordDate: '2020-07-05',
          contractDetail:'合同详情',
          remark : '无',
        },
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
      console.log("e",e);
      // const dataSource = [...this.dataSource];
      // this.dataSource = dataSource.filter(item => item.key !== key);
      this.$message.success('删除成功');
      console.log("ddddataSource",this.dataSource)
    },
      purchaseDateOnChange(date, dateString) {
      console.log(date, dateString);
    },
      //查看合同详情
      viewDetail() {
        this.detailvisible = true;
      },
      //新增模块
      myHandleAdd() {
        this.visible = true;
      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        const newdata=this.form;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
        // this.dataSource=[...dataSource,form];
        // console.log("dataSource",this.dataSource)
        const { dataSource } = this;
        this.dataSource = [...dataSource,  newdata];
        console.log("dataSource",this.dataSource)
        this.form={};
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
      handleCancel1(e) {
        this.detailvisible = false;
      },
      handleOk1(e) {
        this.detailvisible = false;
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