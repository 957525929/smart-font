<!--<template>-->
<!--  <div>-->
<!--    <a-card :bordered="false">-->
<!--      <a-tabs default-active-key="1">-->
<!--        <a-tab-pane key="1" tab="采购人员">-->
<!--          <purch-people/>-->
<!--        </a-tab-pane>-->
<!--        <a-tab-pane key="2" tab="审核人员">-->
<!--          <CheckPeople/>-->
<!--        </a-tab-pane>-->
<!--        <a-tab-pane key="3" tab="留样人员">-->
<!--          <people/>-->
<!--        </a-tab-pane>-->
<!--      </a-tabs>-->
<!--    </a-card>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import PurchPeople from './PurchPeople'-->
<!--import CheckPeople from './CheckPeople'-->
<!--import People from '../../food/finished/People'-->

<!--export default {-->
<!--  name: "Index",-->
<!--  components: {-->
<!--    People,-->
<!--    PurchPeople,-->
<!--    CheckPeople,-->
<!--  },-->
<!--  data() {-->
<!--    return {}-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--@import '~@assets/less/common.less';-->

<!--</style>-->

<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="人员名称">
                <a-input placeholder="请输入人员名称" v-decorator="['staffName']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="联系方式">
                <a-input placeholder="请输入联系方式" v-decorator="['phone']"></a-input>
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
          <span slot="role" slot-scope="text, record">
            <a-tag v-for='item in text' :key='item' :color="item=='采购人员'?'green':item=='审核人员'?'red':'purple'">{{ item }}</a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <a @click='edit(record)'>编辑</a>
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
      :maskClosable='false'
    >
      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="人员名称" required prop="staffName">
            <a-input v-model="model.staffName"   placeholder="请输入人员名称" style='width: 60%'/>
          </a-form-model-item>
          <a-form-model-item label="联系方式" required prop="phone">
            <a-input v-model="model.phone"   placeholder="请输入联系方式" style='width: 60%'/>
          </a-form-model-item>
          <a-form-model-item label="角色" required prop="role">
            <a-select mode="multiple" placeholder="请选择角色" v-model="model.role">
              <a-select-option value="采购人员">采购人员</a-select-option>
              <a-select-option value="审核人员">审核人员</a-select-option>
              <a-select-option value="留样人员">留样人员</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>
</template>

<script>

export default {
  name: "PurchPeople",
  components: {},
  data () {
    return {
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id:'1',
          staffName: '张三',
          role: ['采购人员', '审核人员', ],
          phone:'15802022547'
        },
        {
          id:'2',
          staffName: '李四',
          role: ['采购人员', '审核人员', '留样人员', ],
          phone:'15802022548'
        },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          align:"left",
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'人员名称',
          align:"left",
          dataIndex: 'staffName',
        },
        {
          title:'联系方式',
          align:"left",
          dataIndex: 'phone',
        },
        {
          title:'角色',
          align:"left",
          dataIndex: 'role',
          scopedSlots: { customRender: 'role'},
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"left",
          scopedSlots: { customRender: 'action'},
        }
      ],


      title:"添加人员",
      visible: false,
      model: {},
      layout: {
        labelCol: { span: 4, offset: 1 },
        wrapperCol: { span: 16 },
      },
      confirmLoading: false,
      validatorRules:{
        staffName: [
          { required: true, message: '请输入人员名称!'},
        ],
        role: [
          { required: true, message: '请选择角色!'},
        ],
        phone: [
          { required: true, message: '请输入联系方式!'},
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号!' },
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

    add () {
      this.edit({});
    },
    edit (record) {
      this.model = Object.assign({}, record);
      this.visible = true;
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
