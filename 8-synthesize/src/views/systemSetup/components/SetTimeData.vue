<template>
  <a-form ref="form" :model="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
    <a-form-item label="开始前（天）">
      <a-Input v-model="form.startTask" placeholder="请输入天数"></a-Input>
    </a-form-item>

    <a-form-item label="提醒周期">
      <a-select v-model="form.cycle" placeholder="请选择提醒周期">
        <a-select-option value="0" @click="show">提醒一次</a-select-option>
        <a-select-option value="1" @click="show">每天</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="提醒时间">
      <a-Input v-model="form.time" placeholder="请选择时间" />
    </a-form-item>

    <a-form-item label="结束前（天）">
      <a-Input v-model="form.deadlineTask" placeholder="请输入天数"></a-Input>
    </a-form-item>

    <a-form-item label="提醒周期">
      <a-select v-model="form.cycle1" placeholder="请选择提醒周期">
        <a-select-option value="0" @click="show1">提醒一次</a-select-option>
        <a-select-option value="1" @click="show1">每天</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="提醒时间">
      <a-Input v-model="form.time1" placeholder="请选择时间" />
    </a-form-item>

    <a-form-item
      label="提醒方式                                    "
      prop="methods"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <a-select v-model="form.methods" placeholder="请选择提醒方式">
        <a-select-option value="0">系统</a-select-option>
        <a-select-option value="1">短信</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 10 }">
      <a-button type="primary" @click="submitForm('form')"> 提交 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm()"> 重置 </a-button>
    </a-form-item>
    <a-modal v-model="visible" width="350px" title="时间" @ok="confirm" @cancel="handleCancel">
      <a-form-item :labelCol="labelCol1" :wrapperCol="wrapperCol1" label="时间">
        <a-date-picker @change="getDateTime" placeholder="请选择时间" />
      </a-form-item>
    </a-modal>
    <a-modal v-model="visible1" width="350px" title="时间" @ok="confirm1" @cancel="handleCancel">
      <a-form-item :labelCol="labelCol1" :wrapperCol="wrapperCol1" label="时间">
        <a-date-picker @change="getDateTime" placeholder="请选择时间" />
      </a-form-item>
    </a-modal>
  </a-form>
</template>

<script>
import JCron from '@/components/jeecg/JCron'
export default {
  name: 'SetTime',
  components: {
    JCron,
  },
  data() {
    return {
      form: {},
      visible: false,
      visible1: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      labelCol1: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol1: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.form = {}
    },
    show() {
      this.visible = true
    },
    show1() {
      this.visible1 = true
    },
    getDateTime(value, dateString) {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
      this.timeOut = dateString
      this.timeOut1 = dateString
      console.log('----------------------')
      console.log(this.timeOut)
    },
    confirm() {
      this.visible = false
      this.form.time = this.timeOut
    },
    confirm1() {
      this.visible1 = false
      this.form.time1 = this.timeOut1
    },
    handleCancel() {
      this.visible = false
    },
  },
}
</script>

<style>
</style>