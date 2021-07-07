<template>
  <a-form>
    <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="提醒周期">
      <a-select ref="select">
        <a-select-option value="0">提醒一次</a-select-option>
        <a-select-option value="1">每天</a-select-option>
        <a-select-option value="2">法定工作日</a-select-option>
        <a-select-option value="3">法定节假日</a-select-option>
        <a-select-option value="4">周一至周五</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="提醒方式">
      <a-select ref="select">
        <a-select-option value="0">电话</a-select-option>
        <a-select-option value="1">短信</a-select-option>
        <a-select-option value="2">邮箱</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="提醒时间">
      <a-time-picker />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 10 }">
      <a-button type="primary">提交</a-button>
      <a-button style="margin-left: 10px">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "",
  components: {

  },
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    }
  }
}
</script>

<style>
</style>