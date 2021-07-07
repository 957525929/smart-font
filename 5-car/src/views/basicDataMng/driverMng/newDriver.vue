<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="姓名">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="手机号">
        <a-input v-model="form.phone" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary"> 添加 </a-button>
        <a-button style="margin-left: 10px"> 取消 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 15 },
      form: {
        name: '',
        phone: '',
      },
    }
  },
}
</script>

<style>
</style>