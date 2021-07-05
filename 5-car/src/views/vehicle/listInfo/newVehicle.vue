<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="车牌号">
        <a-input v-model="form.licenseNum" />
      </a-form-model-item>
      <a-form-model-item label="号牌种类">
        <a-select v-model="form.licenseType" placeholder="请选择号牌种类">
          <a-select-option key="1" value="小型车">小型车</a-select-option>
          <a-select-option key="2" value="大型车">大型车</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="座位数">
        <a-input v-model="form.seatNum" />
      </a-form-model-item>
      <a-form-model-item label="车辆品牌">
       <a-input v-model="form.brand" />
      </a-form-model-item>
      <a-form-model-item label="购车时间">
         <a-date-picker v-model="form.date1" show-time type="date" placeholder="选择发车时间" style="width: 100%" />
      </a-form-model-item>
      <a-form-model-item label="车辆图片">
         <a-button> <a-icon type="upload" /> 上传图片 </a-button>
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
        licenseNum: '',
        licenseType: undefined,
        seatNum: undefined,
        brand:'',
        date1: undefined,
      },
    }
  },
}
</script>

<style>
</style>