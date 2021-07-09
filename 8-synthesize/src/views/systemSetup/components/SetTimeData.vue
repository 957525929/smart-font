<template>
  <a-form-model ref="form" :model="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
    <a-form-model-item label="提醒周期" prop="cycle">
      <a-select v-model="form.cycle" placeholder="请选择提醒周期">
        <a-select-option value="0">提醒一次</a-select-option>
        <a-select-option value="1">每天</a-select-option>
        <a-select-option value="2">法定工作日</a-select-option>
        <a-select-option value="3">法定节假日</a-select-option>
        <a-select-option value="4">周一至周五</a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item label="提醒方式" prop="methods" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-select v-model="form.methods" placeholder="请选择提醒方式">
        <a-select-option value="0">电话</a-select-option>
        <a-select-option value="1">短信</a-select-option>
        <a-select-option value="2">邮箱</a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item label="提醒方式" prop="time" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-time-picker v-model="form.time" />
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 14, offset: 10}">
      <a-button type="primary" @click="submitForm('form')">
        提交
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('form')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import JCron from "@/components/jeecg/JCron";
export default {
  name: "SetTime",
  components: {
    JCron
  },
  data() {
    return {
      form: {

      },

      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>