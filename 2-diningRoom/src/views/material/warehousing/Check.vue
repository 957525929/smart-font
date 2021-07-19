<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form1">
        <a-row :gutter="24">
          <a-col :xl="8" :lg="8" :md="9" :sm="24">
            <a-form-item label="采购日期">
              <j-date  v-decorator="['purchaseStartDate', {initialValue:this.purchaseStartDate}]" style='width: 47%;'/>
              <span class="query-group-split-cust"></span>
              <j-date  v-decorator="['purchaseEndDate', {initialValue:this.purchaseEndDate}]" style='width: 47%;' />
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="5" :md="6" :sm="24">
            <a-form-item label="采购人">
              <a-select
                allowClear
                placeholder="请选择"
                v-decorator="['purchasePeople']"
              >
                <a-select-option v-for="d in purchasePeopleSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <template v-if="toggleSearchStatus">

            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="采购名称">
                <a-input placeholder="请输入" v-decorator="['headline']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="5" :md="6" :sm="24">
              <a-form-item label="供应商">
                <a-select
                  allowClear
                  placeholder="请选择"
                  v-decorator="['provider']"
                >
                  <a-select-option v-for="d in manuSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button icon="search" @click='handleQueryOk'>查询</a-button>
              <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </a-col>
          </span>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"
      >
        <span slot="action" slot-scope="text, record">
          <router-link :to="{name:'material-warehousing-warehousingDetails', params:record }">查看详情</router-link>
          <a-divider type="vertical" />
          <a-dropdown v-if='record.checkState == 1' disabled style=' color: rgba(0,0,0,0.5); cursor: no-drop; '>
            <a class="ant-dropdown-link">审核 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" >通过</a-menu-item>
              <a-menu-item key="2" >不通过</a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-dropdown v-else>
            <a class="ant-dropdown-link">审核 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click='checkPass(record)'>通过</a-menu-item>
              <a-menu-item key="2" @click='checkNoPass(record)'>不通过</a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>


    <a-modal
      :title="'入库审核'"
      :width="800"
      :visible="checkModelVisible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 60%;overflow-y: hidden">

      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="不通过原因"  required prop="ps">
            <a-textarea rows="5" v-model="model.ps" placeholder="请输入"/>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>

  </a-card>
</template>

<script>

import PurInModal from './PurInModal'
import moment from 'moment'
import JDate from '../../../components/jeecg/JDate'
import { message } from 'ant-design-vue'

export default {
  name: "Check",
  components: {
    PurInModal,
    JDate,
  },
  data () {
    return {
      form1: this.$form.createForm(this),
      purchaseStartDate:moment().subtract(1, 'months').format('YYYY-MM-DD'),
      purchaseEndDate:moment().format('YYYY-MM-DD'),
      manuSelectData:[
        {
          value : 1,
          text : '程埔头市场',
        },
        {
          value : 2,
          text : '闽侯菜市场',
        },
      ],
      purchasePeopleSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '李四',
        },
      ],
      checkoutPeopleSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '李四',
        },
      ],
      description: '采购入库',
      dataSource: [
        {
          id:'1',
          purchaseOrderNumber: 'GZZT20210704001',
          headline: '7月4号采购单1',
          purchasePeople: '张三',
          purchaseDate: '2020-07-04',
          purchaseNum: '100',
          totalMoney: '200.00',
          checkoutPeople: '-',
          checkoutDate: '-',
          provider : '程埔头市场',
          checkState: 0,
        },
        // {
        //   id:'2',
        //   purchaseOrderNumber: 'GZZT20210404002',
        //   headline: '4月4号采购单2',
        //   purchasePeople: '李四',
        //   purchaseDate: '2020-04-04',
        //   purchaseNum: '200',
        //   totalMoney: '2000.00',
        //   checkoutPeople: '张三',
        //   checkoutDate: '2020-04-04',
        //   provider : '闽侯菜市场',
        //   checkState: 1,
        // },
        // {
        //   id:'3',
        //   purchaseOrderNumber: 'GZZT20210404003',
        //   headline: '4月4号采购单3',
        //   purchasePeople: '李五',
        //   purchaseDate: '2020-04-04',
        //   purchaseNum: '200',
        //   totalMoney: '2000.00',
        //   checkoutPeople: '张三',
        //   checkoutDate: '2020-04-04',
        //   provider : '闽侯菜市场',
        //   checkState: -1,
        // },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          align:"center",
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'采购单号',
          align:"center",
          dataIndex: 'purchaseOrderNumber',
        },
        {
          title:'采购名称',
          align:"center",
          dataIndex: 'headline',
          // customRender:function (text) {
          //   return !text?"":(text.length>10?text.substr(0,10):text)
          // }
        },
        {
          title:'采购人',
          align:"center",
          dataIndex: 'purchasePeople'
        },
        {
          title:'采购日期',
          align:"center",
          dataIndex: 'purchaseDate'
        },
        {
          title:'供应商',
          align:"center",
          dataIndex: 'provider'
        },
        // {
        //   title:'采购总数',
        //   align:"center",
        //   dataIndex: 'purchaseNum'
        // },
        // {
        //   title:'总金额',
        //   align:"center",
        //   dataIndex: 'totalMoney'
        // },
        // {
        //   title:'审核人',
        //   align:"center",
        //   dataIndex: 'checkoutPeople'
        // },
        // {
        //   title:'审核日期',
        //   align:"center",
        //   dataIndex: 'checkoutDate'
        // },
        {
          title:'审核状态',
          align:"center",
          dataIndex: 'checkState',
          customRender:function (text) {
            return text==0?<a-badge color="blue" text="待审核" /> : text==1?<a-badge color="green" text="已通过" /> : <a-badge color="red" text="未通过" />
          }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action'},
        }
      ],
      toggleSearchStatus: false,
      selectedRowKeys: [],


      checkModelVisible: false,
      model: {},
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
      },
      confirmLoading: false,
      validatorRules:{
        ps: [
          { required: true, message: '请输入'},
          { min: 0, max: 126, message: '长度不超过 126 个字符', trigger: 'blur' },
        ],
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
    onSelectChange(selectedRowKeys, selectedRows) {
      console.log('selectedRowKeys: ', selectedRowKeys);
      console.log('selectedRows: ', selectedRows);
      this.selectedRowKeys = selectedRowKeys;
    },
    onClearSelected() {
      this.selectedRowKeys = [];
    },
    handleReset() {
      this.form1.resetFields();//重置基本信息
    },
    handleQueryOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },
    checkPass(){
      message.success('审核通过')
    },
    checkNoPass(record){
      this.model = Object.assign({}, record);
      this.checkModelVisible = true;
    },
    close () {
      // this.$emit('close');
      this.checkModelVisible = false;
    },
    handleOk () {
      const that = this;
      // 触发表单验证
      this.$refs.form.validate(valid => {
        if (valid) {
          that.confirmLoading = true;
          let obj;
          console.log(this.model)
          if(!this.model.id){
            // obj=addRole(this.model);
          }else{
            // obj=editRole(this.model);
          }
          // obj.then((res)=>{
          //   if(res.success){
          //     that.$message.success(res.message);
          //     that.$emit('ok');
          //   }else{
          //     that.$message.warning(res.message);
          //   }
          // }).finally(() => {
          //   that.confirmLoading = false;
          //   that.close();
          // })
          that.confirmLoading = false;
          that.close();
        }else{
          return false;
        }
      })
    },
    handleCancel () {
      this.close()
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
