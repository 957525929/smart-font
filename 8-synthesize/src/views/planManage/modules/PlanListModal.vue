<template>
  <a-modal :title="title" :width="800" :visible="visible" :confirmLoading="confirmLoading" @ok="handleOk" @cancel="handleCancel" okText="保存计划" cancelText="关闭">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="计划名称">
          <a-input style="width:200px" placeholder="请输入计划名称" v-decorator="['planName', {rules: [{ required: true, message: '请输入计划名称!' }]}]" />
        </a-form-item>
        <a-form-item v-if="this.model.key" :labelCol="labelCol" :wrapperCol="wrapperCol" label="状态">
          <a-select style="width:100px" ref="select" v-decorator="['status']">
            <a-select-option value="0">未开始</a-select-option>
            <a-select-option value="1">进行中</a-select-option>
            <a-select-option value="2">已完成</a-select-option>
            <a-select-option value="3">未完成</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="时间">
          <a-date-picker format="YYYY-MM-DD HH:mm:ss" placeholder="开始时间" v-decorator="['startTime', {rules: [{ required: true, message: '请选择开始时间!' }]}]" />
          ~
          <a-date-picker format="YYYY-MM-DD HH:mm:ss" placeholder="结束时间" v-decorator="['completionTime', {rules: [{ required: true, message: '请选择结束时间!' }]}]" />
        </a-form-item>
        <a-form-item label="概述" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea :rows="10" v-decorator="['content']" />
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import JCron from "@/components/jeecg/JCron";
import pick from 'lodash.pick'

import moment from "moment"

export default {
  name: "PlanListModal",
  components: {
    JCron
  },
  mounted() {
    // console.log('详情传值', this.id)
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
      confirmLoading: false,
      form: this.$form.createForm(this),
      url: {
        add: "/sys/quartzJob/add",
        edit: "/sys/quartzJob/edit",
      },
    }
  },
  created() {
  },
  methods: {
    add(record) {
      let that = this;
      that.form.resetFields();
      this.model = Object.assign({}, record);
      console.log(this.model)
      this.visible = true;
    },
    edit(record) {
      let that = this;
      that.form.resetFields();
      this.model = Object.assign({}, record);
      // console.log(this.model)
      this.visible = true;
      // if (this.model.startTime) {
      //   this.model.startTime = moment(this.model.startTime, 'YYYY-MM-DD');
      // }
      // if (this.model.deadline) {
      //   this.model.deadline = moment(this.model.deadline, 'YYYY-MM-DD');
      // }
      this.model.startTime = this.model.startTime ? moment(this.model.startTime, 'YYYY/MM/DD HH:mm:ss') : null;
      this.model.completionTime = this.model.completionTime ? moment(this.model.completionTime, 'YYYY/MM/DD HH:mm:ss') : null;
      console.log(this.model.startTime)
      // console.log(this.model.deadline)
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model, 'planName', 'status', 'startTime', 'completionTime', 'content'));
      });

    },
    close() {
      this.$emit('close');
      this.visible = false;
    },
    handleOk() {
      let that = this;
      that.form.resetFields();
    },
    handleCancel() {
      this.close()
    },
  }
}
</script>

<style scoped>
.w140 {
  width: 140px;
}
</style>