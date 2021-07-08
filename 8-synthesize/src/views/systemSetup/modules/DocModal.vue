<template>
  <a-modal :title="title" :width="400" :visible="visible" :confirmLoading="confirmLoading" @ok="handleOk" @cancel="handleCancel" okText="提交" cancelText="关闭">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="文档类型" hasFeedback>
          <a-input style="width:200px" placeholder="请输入文档类型" v-decorator="['docType', {rules: [{ required: true, message: '请输入文档类型!' }]}]" />
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import { httpAction } from '@/api/manage'
import JCron from "@/components/jeecg/JCron";
import pick from 'lodash.pick'
// import moment from "moment"

export default {
  name: "TaskListModel",
  components: {
    JCron
  },
  data() {
    return {
      title: "操作",
      buttonStyle: 'solid',
      visible: false,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      cron: {
        label: '',
        value: ''
      },
      confirmLoading: false,
      form: this.$form.createForm(this),
      validatorRules: {

      },
      url: {
        add: "/sys/quartzJob/add",
        edit: "/sys/quartzJob/edit",
      },
    }
  },
  created() {
  },
  methods: {
    add() {
      this.edit({});
    },
    edit(record) {
      let that = this;
      that.form.resetFields();
      this.model = Object.assign({}, record);
      console.log(this.model)
      this.visible = true;
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'docType'));
      });

    },
    close() {
      this.$emit('close');
      this.visible = false;
    },
    handleOk() {
      const that = this;
      // 触发表单验证
      this.form.validateFields((err, values) => {
        console.log('values', values)
        if (!err) {
          if (typeof values.cronExpression == "undefined" || Object.keys(values.cronExpression).length == 0) {
            this.$message.warning('请输入cron表达式!');
            return false;
          }

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
          //时间格式化

          console.log('提交参数', formData)
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
    // setCorn(data) {
    //   console.log('data)', data);
    //   this.$nextTick(() => {
    //     this.model.cronExpression = data;
    //   })

    //   // console.log(Object.keys(data).length==0);
    //   if (Object.keys(data).length == 0) {
    //     this.$message.warning('请输入cron表达式!');
    //   }
    // },
    // validateCron(rule, value, callback) {
    //   if (!value) {
    //     callback()
    //   } else if (Object.keys(value).length == 0) {
    //     callback("请输入cron表达式!");
    //   }
    // },

  }
}
</script>

<style scoped>
.w140 {
  width: 140px;
}
</style>