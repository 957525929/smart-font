<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="供应商">
                <a-input placeholder="请输入" v-decorator="['manuName']"></a-input>
              </a-form-item>
            </a-col>
            <template v-if="toggleSearchStatus">
              <a-col :xl="5" :lg="8" :md="9" :sm="24">
                <a-form-item label="联系人">
                  <a-input placeholder="请输入" v-decorator="['manuPeople']"></a-input>
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
      <!-- 查询区域-END -->

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button type="link" icon="plus" @click='add'>新增</a-button>
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
          :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"
        >
        <span slot="action" slot-scope="text, record">
          <a style='margin-right: 1%' @click='edit(record)'>编辑</a>
          <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>
        </span>
        </a-table>
      </div>

    </a-card>

    <a-modal
      :title="title"
      :width="800"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 85%;overflow-y: hidden">

      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="供应商名称" required prop="purchaseOrderNumber">
            <a-input v-model="model.purchaseOrderNumber" placeholder="请输入供应商名称"/>
          </a-form-model-item>
          <a-form-model-item label="供应商地址" required prop="manuAddress">
            <a-input v-model="model.manuAddress" placeholder="请输入供应商地址"/>
          </a-form-model-item>
          <a-form-model-item label="联系人名称" required prop="purchasePeople">
            <a-input v-model="model.purchasePeople" placeholder="请输入联系人名称"/>
          </a-form-model-item>
          <a-form-model-item label="联系人电话" required prop="purchaseDate">
            <a-input v-model="model.purchaseDate" placeholder="请输入联系人电话"/>
          </a-form-model-item>
          <a-form-model-item label="供应商说明"  prop="purchaseNum">
            <a-textarea :rows="5" v-model="model.purchaseNum" placeholder="请输入供应商说明"/>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>



</template>

<script>


export default {
  name: "Index",
  components: {},
  data () {
    return {
      form1: this.$form.createForm(this),
      description: '采购入库',
      dataSource: [
        {
          id:'1',
          purchaseOrderNumber: '程埔头菜市场',
          manuAddress: '福建省福州市仓山区对胡街道32号',
          purchasePeople: '邝火火',
          purchaseDate: '15802022547',
          purchaseNum: '暂无',
        },
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
          title:'供应商名称',
          align:"center",
          dataIndex: 'purchaseOrderNumber',
        },
        {
          title:'供应商地址',
          align:"center",
          dataIndex: 'manuAddress',
        },
        {
          title:'联系人名称',
          align:"center",
          dataIndex: 'purchasePeople'
        },
        {
          title:'联系人电话',
          align:"center",
          dataIndex: 'purchaseDate'
        },
        {
          title:'供应商说明',
          align:"center",
          dataIndex: 'purchaseNum'
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

      title:"操作",
      visible: false,
      model: {},
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
      },
      confirmLoading: false,
      validatorRules:{
        purchaseOrderNumber: [
          { required: true, message: '请输入供应商名称!'},
        ],
        manuAddress: [
          { required: true, message: '请输入供应商地址!' },
        ],
        purchasePeople: [
          { required: true, message: '请输入联系人名称!'},
        ],
        purchaseDate: [
          { required: true, message: '请输入联系人电话!'},
        ],
        purchaseNum: [
          { min: 0, max: 126, message: '长度不超过 126 个字符', trigger: 'blur' }
        ]
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
    deletConfirm(e) {
      console.log(e);
      this.$message.success('删除成功');
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


    add () {
      this.edit({});
    },
    edit (record) {
      console.log(record)
      this.model = Object.assign({}, record);
      console.log(this.model)
      this.visible = true;
    },
    close () {
      this.$emit('close');
      this.visible = false;
    },
    handleOk () {
      const that = this;
      // 触发表单验证
      this.$refs.form.validate(valid => {
        if (valid) {
          that.confirmLoading = true;
          let obj;
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
