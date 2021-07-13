<template>
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
      <a-form :form="form">
        <a-form-item label="申请部门" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'applyDepertment', validatorRules.applyDepertment]" placeholder="请选择申请部门" :getPopupContainer= "(target) => target.parentNode" :disabled="disableSubmit">
            <a-select-option value="">不限</a-select-option>
            <a-select-option value="1">卷烟销售管理处</a-select-option>
            <a-select-option value="2">物流管理处</a-select-option>
            <a-select-option value="3">烟叶管理处</a-select-option>
            <a-select-option value="4">人事处</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="申请人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'applyName', validatorRules.applyName]" placeholder="请选择申请人" :getPopupContainer= "(target) => target.parentNode" :disabled="disableSubmit">
            <a-select-option value="1">张丰</a-select-option>
            <a-select-option value="2">王立成</a-select-option>
            <a-select-option value="3">陈晓</a-select-option>
            <a-select-option value="4">林研希</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="状态" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="!!model.id">
          <a-select v-decorator.trim="[ 'status', validatorRules.status]" placeholder="请选择审批状态" :getPopupContainer= "(target) => target.parentNode" :disabled="disableSubmit">
            <a-select-option :value="1">待审批</a-select-option>
            <a-select-option :value="2">通过</a-select-option>
            <a-select-option :value="3">未通过</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="办公用品名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <office-category v-if="!disableSubmit"></office-category>
          <a-select v-decorator.trim="[ 'articleName', validatorRules.articleName]" placeholder="请选择办公用品名称" :getPopupContainer= "(target) => target.parentNode" :disabled="disableSubmit">
            <a-select-option :value="1">马克笔</a-select-option>
            <a-select-option :value="2">A4纸</a-select-option>
            <a-select-option :value="3">打印机</a-select-option>
          </a-select>
        </a-form-item>


        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请数量">
          <a-input-number class="inputWitdh"  placeholder="请输入申请数量"   v-decorator.trim="[ 'applyNum', validatorRules.applyNum]"  :min="1" :max="10000000" :decimalSeparator="0" :disabled="disableSubmit"/>
        </a-form-item>

        <a-form-item label="计量单位" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="!!model.id">
          <a-select v-decorator.trim="[ 'unit', validatorRules.unit]" placeholder="请选择计量单位" :getPopupContainer= "(target) => target.parentNode" :disabled="disableSubmit">
            <a-select-option :value="1">个</a-select-option>
            <a-select-option :value="2">盒</a-select-option>
            <a-select-option :value="3">箱</a-select-option>
            <a-select-option :value="4">台</a-select-option>
            <a-select-option :value="5">张</a-select-option>
            <a-select-option :value="6">把</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item v-if="!!model.id"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="申请时间">
          <j-date class="inputWitdh" v-decorator.trim="[ 'applyTime', validatorRules.applyTime]"  :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择申请时间" :disabled="disableSubmit"></j-date>
        </a-form-item>

        <a-form-item label="申请理由" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea v-decorator.trim="[ 'applyReason', validatorRules.applyReason]"  placeholder="请输入申请理由" auto-size :disabled="disableSubmit"/>
        </a-form-item>

        <a-form-item v-if="!!model.id"
                     :labelCol="labelCol"
                     :wrapperCol="wrapperCol"
                     label="审核时间">
          <j-date class="inputWitdh" v-decorator.trim="[ 'checkTime', validatorRules.checkTime]"  :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择审核时间" :disabled="disableSubmit"></j-date>
        </a-form-item>

        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="!!model.id">
          <a-textarea v-decorator.trim="[ 'remark', validatorRules.remark]"  placeholder="" auto-size :disabled="disableSubmit"/>
        </a-form-item>

      </a-form>
    </a-spin>
    <template slot="footer">
      <a-button type="primary"  v-show="!disableSubmit"
                @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script>
  import pick from 'lodash.pick'
  import {addRole,editRole,duplicateCheck } from '@/api/api'
  import JDate from '@/components/jeecg/JDate'
  import OfficeCategory from '@/components/table/officeCategory'

  export default {
    name: "ReceiveModal",
    components: {
      JDate,
      OfficeCategory
    },
    data () {
      return {
        title:"操作",
        visible: false,
        disableSubmit:false,
        roleDisabled: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
          applyDepertment:{
            rules: [
              { required: true, message: '请选择申请部门!' },
            ]},
          applyName:{
            rules: [
              { required: true, message: '请选择申请人!' },
            ]},
          status:{
            rules: [
              { required: true, message: '请选择审批状态!' },
            ]},
          articleName:{
            rules: [
              { required: true, message: '请选择办公用品名称!' },
            ]},
          applyNum: {
            rules: [
            { required: true, message: '请输入申请数量!' }
          ]},
          unit: {
            rules: [
            { required: true, message: '请选择计量单位!' }
          ]},
          applyTime: {
            rules: [
              { required: true, message: '请选择申请时间!' }
            ]},
          applyReason:{
            rules: [
              { required: true, message: '请输入申请理由!' }
            ]}
        },
      }
    },
    created () {
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;

        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'id', 'applyDepertment', 'applyName', 'status','articleName', 'applyNum','unit','applyTime', 'applyReason', 'checkTime', 'remark'))
        });

      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let formData = Object.assign(this.model, values);
            let obj;
            console.log(formData)
            if(!this.model.id){
              obj=addRole(formData);
            }else{
              obj=editRole(formData);
            }
            obj.then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })
          }
        })
      },
      handleCancel () {
        this.close()
      },
      validateRoleCode(rule, value, callback){
        if(/[\u4E00-\u9FA5]/g.test(value)){
          callback("角色编码不可输入汉字!");
        }else{
          var params = {
            tableName: "sys_role",
            fieldName: "role_code",
            fieldVal: value,
            dataId: this.model.id,
          };
          duplicateCheck(params).then((res)=>{
            if(res.success){
              callback();
            }else{
              callback(res.message);
            }
          });
        }
      }

    }
  }
</script>

<style scoped>
.inputWitdh {
  width: 100%;
}
</style>