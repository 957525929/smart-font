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
      <a-button type="link"  @click="myHandleAdd"  icon="plus">新增</a-button>
      <a-button type="link" icon="download">导出</a-button>
      <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="link" icon="import">导入</a-button>
      </a-upload> -->

      <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
      <a style="margin-left: 12px" @click="onClearSelected">清空</a>

    </div>

    <!-- 统计数值区域 -->
    <div class="table-statistic " style="background: #ECECEC; padding: 15px">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card>
            <a-statistic
              title="收租总次数"
              :value="21"
              suffix="次"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template #prefix>
                <a-icon type="fund" />
                <!--                <a-icon type="arrow-up" />-->
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card>
            <a-statistic
              title="收租总金额"
              :value="24"
              :precision="2"
              suffix="万"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <a-icon type="dollar" />
                <!--                <a-icon type="arrow-down" />-->
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <br/>
    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="key"
        :scroll="{x:2500}"
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
        >
        <span slot="rentRemind">
           <a class="ant-dropdown-link" @click="textMessage()"  >发送提示短信</a>
        </span>
        <span slot="action" slot-scope="text, record">
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
    <!-- 添加收租记录 -->
    <a-modal
      title="新增收租记录"
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
        <a-form-model-item label="租赁时长" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.lentLength" />
        </a-form-model-item>
        <a-form-model-item label="支付周期" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
          <a-input v-model="form.payCycle" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </a-card>
</template>

<script>

import JDate from "@comp/jeecg/JDate";

export default {
  name: "collect",
  components: {
    JDate,
  },
  mounted(){
      console.log("1",this.dataSource)
    },
  data () {
      return {
        description: '收租列表',
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
          assetOwner: '张三',
          assetUser: '李四',
          lentValue:'200000',
          lentLength:'2010-07-05至2025-07-05',
          payCycle:'12个月',
          payState:'未收租',

        },
        {
          key:'2',
          assetNunmber: 'ZCAT2021070501',
          assetName: 'B107—31号宗地',
          assetOwner: '张三',
          assetUser: '李四',
          lentValue:'160000',
          lentLength:'2014-01-01至2024-12-31',
          payCycle:'1个月',
          payState:'未收租',

        },
        {
          key:'3',
          assetNunmber: 'ZCAT2021070502',
          assetName: '烟草烘干机',
          assetOwner: '张三',
          assetUser: '李四',
          lentValue:'20000',
          lentLength:'2020-07-05至2022-07-05',
          payCycle:'6个月',
          payState:'已收租',

        },
        {
          key:'4',
          assetNunmber: 'ZCAT2021070503',
          assetName: '电脑',
          assetOwner: '张三',
          assetUser: '李四',
          lentValue:'800',
          lentLength:'2020-01-01至2022-12-31',
          payCycle:'6个月',
          payState:'已收租',

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
            title:'租金',
            align:"center",
            dataIndex: 'lentValue'
          },
          {
            title:'租赁时长',
            align:"center",
            dataIndex: 'lentLength'
          },
          {
            title:'付款周期',
            align:"center",
            dataIndex: 'payCycle'
          },
          {
            title:'当前收租状态',
            align:"center",
            dataIndex: 'payState'
          },
          {
            title:'收租提醒',
            align:"center",
            dataIndex: 'rentRemind',
            scopedSlots: { customRender: 'rentRemind' },
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
        visible: false,
        confirmLoading: false,
        //新增表单
        form: {
          assetNunmber: '',
          assetName: '',
          lentValue: '',
          assetOwner: '',
          assetUser: '',
          lentLength: '',
          payCycle: '',
          payState:'未收租',
          rentRemind: '短信提示',
          remark : '查看记录',
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
        console.log(e);
        this.$message.success('删除成功');
      },
      purchaseDateOnChange(date, dateString) {
        console.log(date, dateString);
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
        this.dataSource = [...dataSource, newdata];
        this.form={};
        console.log("dataSource",this.dataSource)
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },

      //收租提示
      textMessage(){
        let secondsToGo = 5;
        const modal = this.$success({
          title: '收租短信提醒已发送',
          // content: `收租短信提醒已发送`,
        });

        setTimeout(() => {
          clearInterval(interval);
          modal.destroy();
        }, secondsToGo * 1000);
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
