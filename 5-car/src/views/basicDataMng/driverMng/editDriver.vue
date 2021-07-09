<template>
  <div>
    <a-form-model :model="driverInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="姓名">
        <a-input v-model="driverInfo.name" />
      </a-form-model-item>
      <a-form-model-item label="手机号">
        <a-input v-model="driverInfo.phoneNum" />
      </a-form-model-item>
      <a-form-model-item label="绑定车辆">
        <a-transfer
          :data-source="vehicleList"
          :titles="['可选车辆', '已绑'+originInfo.name+'的车辆']"
          :target-keys="targetKeys"
          :render="(item) => item.licenseNum"
          listStyle="width:200px"
          @change="handleChange"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 16 }">
        <a-button type="primary"> 确定 </a-button>
        <a-button style="margin-left: 10px"> 取消 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { vehicleList } from '@/mock/demoData.js'
export default {
  data() {
    return {
      vehicleList: vehicleList,
      targetKeys: this.originInfo.bindCar,
      labelCol: { span: 7 },
      wrapperCol: { span: 15 },
      driverInfo: {
        name: this.originInfo.name,
        phoneNum: this.originInfo.phoneNum,
      },
    }
  },
  props: ['originInfo'],
  methods: {
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys
      console.log('targetKeys: ', nextTargetKeys)
      console.log('direction: ', direction)
      console.log('moveKeys: ', moveKeys)
    },
  },
}
</script>

<style>
</style>