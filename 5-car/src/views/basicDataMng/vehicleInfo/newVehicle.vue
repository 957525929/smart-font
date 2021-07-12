<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="车辆品牌">
        <!-- <a-input v-model="form.brand" /> -->
        <a-select v-model="form.brand" showSearch> 
          <a-select-option key="1">奥迪</a-select-option>
          <a-select-option key="2">大众</a-select-option>
          <a-select-option key="3">丰田</a-select-option>
          <a-select-option key="4">本田</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="车牌号">
        <a-input v-model="form.licenseNum" />
      </a-form-model-item>
      <a-form-model-item label="车辆种类">
        <a-select v-model="form.licenseType" placeholder="请选择号牌种类">
          <a-select-option key="1">微型轿车</a-select-option>
          <a-select-option key="2">小型轿车</a-select-option>
          <a-select-option key="3">紧凑型轿车</a-select-option>
          <a-select-option key="4">中级轿车</a-select-option>
          <a-select-option key="5">中高级轿车</a-select-option>
          <a-select-option key="6">高级轿车</a-select-option>
          <a-select-option key="7">跑车</a-select-option>
          <a-select-option key="8">小型SUV</a-select-option>
          <a-select-option key="9">紧凑型SUV</a-select-option>
          <a-select-option key="10">中型SUV</a-select-option>
          <a-select-option key="11">中大型SUV</a-select-option>
          <a-select-option key="12">全尺寸SUV</a-select-option>
          <a-select-option key="14">MPV</a-select-option>
          <a-select-option key="15">微型客车</a-select-option>
          <a-select-option key="16">小型客车</a-select-option>
          <a-select-option key="17">中型客车</a-select-option>
          <a-select-option key="18">大型客车</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="座位数">
        <a-input v-model="form.seatNum" />
      </a-form-model-item>
      <a-form-model-item label="购车时间">
        <a-date-picker v-model="form.date1" type="date" placeholder="选择购车时间" style="width: 100%" />
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
        brand: undefined,
        date1: undefined,
      },
    }
  },
}
</script>

<style>
</style>