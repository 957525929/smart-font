<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="用车人">
        <a-input v-model="form.user" />
      </a-form-model-item>
      <a-form-model-item label="司机">
        <a-select v-model="form.driver" placeholder="请指派司机">
          <a-select-option key="1" value="卢本伟">卢本伟</a-select-option>
          <a-select-option key="2" value="孙笑川">孙笑川</a-select-option>
          <a-select-option key="3" value="张三">张三</a-select-option>
          <a-select-option key="4" value="马保国">马保国</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="所需座数">
        <a-input v-model="form.seatNum" />
      </a-form-model-item>
      <a-form-model-item label="用车时间">
        <a-date-picker v-model="form.date1" show-time type="date" placeholder="选择发车时间" style="width: 100%" />
      </a-form-model-item>
      <a-form-model-item label="用车事由">
        <a-input v-model="form.reason" />
      </a-form-model-item>
      <a-form-model-item label="出发地">
        <a-input v-model="form.from" />
      </a-form-model-item>
      <a-form-model-item label="目的地">
        <a-input v-model="form.to" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary"> 创建 </a-button>
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
        user: '',
        driver: undefined,
        seatNum: undefined,
        date1: undefined,
        reason: '',
        from: '',
        to: '',
      },
    }
  },
}
</script>

<style>
</style>