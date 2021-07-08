<template>
  <a-drawer :title="title" :width="width" placement="right" @close="close" :visible="visible">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item label="文档名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="[ 'name', validatorRules.name]" placeholder="请输入文档名称"></a-input>
        </a-form-item>

        <a-form-item label="文档类型" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator="[ 'type', validatorRules.type]" style="width: 220px" placeholder="请选择文档类型">
            <a-select-option value="0">资产</a-select-option>
            <a-select-option value="1">会议纪要</a-select-option>
            <a-select-option value="2">记录</a-select-option>
            <a-select-option value="3">报告</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="上传文件" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-upload name="file" :multiple="true" :headers="headers">
            <a-input placeholder="请上传文件" v-decorator="[ 'document', validatorRules.document]">
              <upload-outlined></upload-outlined>
            </a-input>
          </a-upload>
        </a-form-item>

        <a-form-item label="概述" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea :rows="10" />
        </a-form-item>

      </a-form>
    </a-spin>

    <div>
      <a-button type="primary" @click="handleOk">确定</a-button>
      <a-button @click="handleCancel">取消</a-button>
    </div>
  </a-drawer>
</template>

<script>

import { httpAction } from '@/api/manage'
import pick from 'lodash.pick'
import { validateDuplicateValue } from '@/utils/util'
import JDate from '@/components/jeecg/JDate'
import JUpload from '@/components/jeecg/JUpload'
import JDictSelectTag from "@/components/dict/JDictSelectTag"

export default {
  name: "BasBankAccountModal",
  components: {
    JDate,
    JUpload,
    JDictSelectTag,
  },
  data() {
    return {
      action: "",
      form: this.$form.createForm(this),
      title: "操作",
      width: 600,
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
      confirmLoading: false,
      validatorRules: {
        name: {
          rules: [
            { required: true, message: '请输入文档名称!' },
          ]
        },
        type: {
          rules: [
            { required: true, message: '请选择上传文件类型!' },
          ]
        },
        document: {
          rules: [
            { required: true, message: '请上传文件' },
          ]
        },
      },
      url: {
        add: "/bas/basBankAccount/add",
        edit: "/bas/basBankAccount/edit",
      }
    }
  },

  computed: {
    readOnly: function () {
      return this.action !== "add" && this.action !== "edit"
    }
  },

  created() {
  },
  methods: {
    add() {
      this.edit({});
    },
    edit(record) {
      this.form.resetFields();
      this.model = Object.assign({}, record);
      this.visible = true;
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'accountNo', 'name', 'currency', 'initBal', 'bankNo', 'bankAddress', 'manager', 'note', 'attachment', 'isEnabled', 'createBy', 'createTime', 'updateBy', 'updateTime'))
      })
    },
    close() {
      this.$emit('close');
      this.visible = false;
    },
    handleOk() {
      const that = this;
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true;
          let httpurl = '';
          let method = '';
          if (!this.model.id) {
            httpurl += this.url.add;
            method = 'post';
          } else {
            httpurl += this.url.edit;
            method = 'put';
          }
          let formData = Object.assign(this.model, values);
          console.log("表单提交数据", formData)
          httpAction(httpurl, formData, method).then((res) => {
            if (res.success) {
              that.$message.success(res.message);
              that.$emit('ok');
            } else {
              that.$message.warning(res.message);
            }
          }).finally(() => {
            that.confirmLoading = false;
            that.close();
          })
        }

      })
    },
    handleCancel() {
      this.close()
    },
    popupCallback(row) {
      this.form.setFieldsValue(pick(row, 'accountNo', 'name', 'currency', 'initBal', 'bankNo', 'bankAddress', 'manager', 'note', 'attachment', 'isEnabled', 'createBy', 'createTime', 'updateBy', 'updateTime'))
    }

  }
}
</script>

<style lang="less" scoped>
/** Button按钮间距 */
.ant-btn {
  margin-left: 30px;
  margin-bottom: 30px;
  float: right;
}

.ant-row.ant-form-item {
  margin-bottom: 12px;
}
</style>