<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="人员名称">
                <a-input placeholder="请输入" v-decorator="['staffName']"></a-input>
              </a-form-item>
            </a-col>

            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
        <a-col :md="6" :sm="24">
          <a-button icon="search" @click='handleQueryOk'>查询</a-button>
          <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>
        </a-col>
      </span>

          </a-row>
        </a-form>
      </div>
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
    <span slot="isPurchasePeople" slot-scope="text, record">
      <a-switch checked-children="是" un-checked-children="否" :default-checked="text == '是'" @change='switchPurchasePeople(record)'/>
    </span>
          <span slot="ischeckoutPeople" slot-scope="text, record">
      <a-switch checked-children="是" un-checked-children="否" :default-checked="text == '是'" @change='switchcheckoutPeople(record)'/>
    </span>
          <span slot="action" slot-scope="text, record">
      <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>
    </span>
        </a-table>
      </div>
    </a-card>

    <a-modal
      :title="title"
      :width="600"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 50%;overflow-y: hidden"
    >
      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="人员名称" required prop="roleCode">
            <a-input v-model="model.roleCode" :disabled="roleDisabled"  placeholder="请输入人员名称"/>
          </a-form-model-item>
<!--          <a-form-model-item label="采购人" >-->
<!--            <a-switch v-model="model.roleName" checked-children="是" un-checked-children="否"  />-->
<!--          </a-form-model-item>-->
          <a-form-model-item label="审核人" >
            <a-switch v-model="model.description" checked-children="是" un-checked-children="否"  />
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>
</template>

<script>

export default {
  name: "CheckPeople",
  components: {},
  data () {
    return {
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id:'1',
          staffName: '张三',
          isPurchasePeople: '是',
          ischeckoutPeople: '否',
        },
        {
          id:'2',
          staffName: '李四',
          isPurchasePeople: '是',
          ischeckoutPeople: '是',
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
          title:'人员名称',
          align:"center",
          dataIndex: 'staffName',
        },
        // {
        //   title:'采购人',
        //   align:"center",
        //   dataIndex: 'isPurchasePeople',
        //   filters: [
        //     { text: '是', value: '是' },
        //     { text: '否', value: '否' },
        //   ],
        //   filterMultiple: false,
        //   onFilter: (value, record) => record.isPurchasePeople.indexOf(value) === 0,
        //   scopedSlots: { customRender: 'isPurchasePeople'},
        // },
        {
          title:'审核人',
          align:"center",
          dataIndex: 'ischeckoutPeople',
          filters: [
            { text: '是', value: '是' },
            { text: '否', value: '否' },
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.ischeckoutPeople.indexOf(value) === 0,
          scopedSlots: { customRender: 'ischeckoutPeople'},
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


      title:"添加人员",
      visible: false,
      roleDisabled: false,
      model: {},
      layout: {
        labelCol: { span: 4, offset: 4 },
        wrapperCol: { span: 8 },
      },
      confirmLoading: false,
      validatorRules:{
        roleCode: [
          { required: true, message: '请输入人员名称!'},
        ],
      },

    }
  },
  methods: {
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
    switchPurchasePeople(record) {
      console.log("采购人:", record);
    },
    switchcheckoutPeople(record) {
      console.log("审核人:", record);
    },

    add () {
      this.edit({});
    },
    edit (record) {
      this.model = Object.assign({}, record);
      this.visible = true;
      //编辑页面禁止修改角色编码
      if(this.model.id){
        this.roleDisabled = true;
      }else{
        this.roleDisabled = false;
      }
    },
    close () {
      this.$emit('close');
      this.visible = false;
    },
    handleOk () {
      console.log(this.model)
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
