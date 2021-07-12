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
        <a-form-item label="部门" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'receiveDepertment', validatorRules.receiveDepertment]" placeholder="请选择领用部门" :getPopupContainer= "(target) => target.parentNode">
            <a-select-option value="1">营销部</a-select-option>
            <a-select-option value="2">专卖部</a-select-option>
            <a-select-option value="3">配送部</a-select-option>
            <a-select-option value="4">后勤部</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="领用人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'receiveName', validatorRules.receiveName]" placeholder="请选择领用人" :getPopupContainer= "(target) => target.parentNode">
            <a-select-option value="1">张丰</a-select-option>
            <a-select-option value="2">王立成</a-select-option>
            <a-select-option value="3">陈晓</a-select-option>
            <a-select-option value="4">林研希</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="办公用品名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'articleName', validatorRules.name]" placeholder="请选择办公用品名称" :getPopupContainer= "(target) => target.parentNode">
            <a-select-option :value="1">马克笔</a-select-option>
            <a-select-option :value="2">打印机</a-select-option>
            <a-select-option :value="3">A4纸</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="批次" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'batch', validatorRules.batch]" placeholder="请输入购入批次" :getPopupContainer= "(target) => target.parentNode">
            <a-select-option :value="1">20210514</a-select-option>
            <a-select-option :value="2">20210320</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item v-if="!model.id" label="单价" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input-number class="inputWitdh"  placeholder="请输入单价"   v-decorator.trim="[ 'price', validatorRules.price]"  :min="1" :max="10000000" :disabled="true"/>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="领用数量">
          <a-input-number class="inputWitdh"  placeholder="请输入领用数量"   v-decorator.trim="[ 'receiveNum', validatorRules.receiveNum]"  :min="1" :max="10000000" :decimalSeparator="0"/>
        </a-form-item>

        <a-form-item label="计量单位" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator.trim="[ 'unit', validatorRules.unit]" placeholder="请选择计量单位" :getPopupContainer= "(target) => target.parentNode">
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
          label="领用时间">
          <j-date class="inputWitdh" v-decorator.trim="[ 'receiveTime', validatorRules.receiveTime]"  :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择领用时间" ></j-date>
        </a-form-item>

        <a-form-item v-if="!!model.id"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="金额(元)">
          <a-input-number  class="inputWitdh" placeholder="请输入金额"   v-decorator.trim="['receivePrice', validatorRules.receivePrice]"  :min="1" :max="10000000"/>
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import pick from 'lodash.pick'
  import {addRole,editRole,duplicateCheck } from '@/api/api'
  import JDate from '@/components/jeecg/JDate'

  export default {
    name: "ReceiveModal",
    components: {
      JDate
    },
    data () {
      return {
        title:"操作",
        visible: false,
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
          receiveDepertment:{
            rules: [
              { required: true, message: '请选择领用部门!' },
            ]},
          receiveName:{
            rules: [
              { required: true, message: '请选择领用人!' },
            ]},
          name:{
            rules: [
              { required: true, message: '请选择办公用品名称!' },
            ]},
          batch:{
            rules: [
              { required: true, message: '请选择购入批次!'}
            ]},
          receiveNum: {
            rules: [
            { required: true, message: '请输入领用数量!' }
          ]},
          unit: {
            rules: [
            { required: true, message: '请选择计量单位!' }
          ]},
          receivePrice: {
            rules: [
            { required: true, message: '请输入金额!' }
          ]},
          receiveTime: {
            rules: [
              { required: true, message: '请选择领用时间!' }
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
          this.form.setFieldsValue(pick(this.model,'id', 'receiveDepertment', 'receiveName','articleName', 'batch','receiveNum','unit', 'receivePrice', 'receiveTime'))
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