<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="基本信息">
        <a-form-model :model="basicInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="车辆品牌">
            <a-input v-model="basicInfo.brand" />
          </a-form-model-item>
          <a-form-model-item label="车牌号">
            <a-input v-model="basicInfo.licenseNum" />
          </a-form-model-item>
          <a-form-model-item label="车辆种类">
            <a-select v-model="basicInfo.licenseType" placeholder="请选择号牌种类">
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
            <a-input v-model="basicInfo.seatNum" />
          </a-form-model-item>
          <a-form-model-item label="购车时间">
            <a-date-picker v-model="basicInfo.date1" type="date" placeholder="选择发车时间" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="车辆图片">
            <a-button> <a-icon type="upload" /> 重新上传 </a-button>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 8 }">
            <a-button type="primary"> 确定 </a-button>
            <a-button style="margin-left: 10px"> 取消 </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="2" tab="保养信息">
        <a-form-model :model="maintainInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="保险周期（月）">
            <a-input v-model="maintainInfo.insurancePeriod" />
          </a-form-model-item>
          <a-form-model-item label="年审周期（月）">
            <a-input v-model="maintainInfo.verifyPeriod" />
          </a-form-model-item>
          <a-form-model-item label="常规保养周期（月）">
            <a-input v-model="maintainInfo.maintainPeriod" />
          </a-form-model-item>
          <a-form-model-item label="常规保养路程周期">
            <a-input v-model="maintainInfo.maintainDistancePeriod" />
          </a-form-model-item>
          <a-form-model-item label="下次交强险时间">
            <a-date-picker v-model="maintainInfo.nextQX" type="date" placeholder="请选择时间" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="下次商业险时间">
            <a-date-picker v-model="maintainInfo.nextSYX" placeholder="请选择时间" type="date" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="下次货物险时间">
            <a-date-picker v-model="maintainInfo.nextHWX" placeholder="请选择时间" type="date" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="下次司机险时间">
            <a-date-picker v-model="maintainInfo.nextSJX" placeholder="请选择时间" type="date" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="下次年审时间">
            <a-date-picker v-model="maintainInfo.nextNS" placeholder="请选择时间" type="date" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item label="下次保养时间">
            <a-date-picker v-model="maintainInfo.nextBY" placeholder="请选择时间" type="date" style="width: 100%" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 8 }">
            <a-button type="primary"> 确定 </a-button>
            <a-button style="margin-left: 10px"> 取消 </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="3" tab="其它信息">
        <a-form-model :model="otherInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="车架号">
            <a-input v-model="otherInfo.cjh" />
          </a-form-model-item>
          <a-form-model-item label="发动机号">
            <a-input v-model="otherInfo.fdjh" />
          </a-form-model-item>
          <a-form-model-item label="备注">
            <a-input v-model="otherInfo.remark" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 8 }">
            <a-button type="primary"> 确定 </a-button>
            <a-button style="margin-left: 10px"> 取消 </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 15 },
      basicInfo: {
        licenseNum: this.licenseNum,
        licenseType: '小型轿车',
        seatNum: 5,
        brand: '奥迪',
        date1: moment('2019-03-15', 'YYYY-MM-DD'),
      },
      maintainInfo: {
        insurancePeriod: 12,
        verifyPeriod: 12,
        maintainPeriod: 6,
        maintainDistancePeriod: 5000,
        nextQX: moment('2022-06-03', 'YYYY-MM-DD'),
        nextSYX: undefined,
        nextHWX: undefined,
        nextSJX: undefined,
        nextNS: moment('2022-06-03', 'YYYY-MM-DD'),
        nextBY: moment('2022-12-03', 'YYYY-MM-DD'),
      },
      otherInfo: {
        cjh: '',
        fdjh: '',
        remark: '',
      },
    }
  },
  props: ['licenseNum'],
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>

<style>
</style>