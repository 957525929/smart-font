<template>
  <a-card :bordered="false">
    <h2>设置提醒时间</h2>
    <a-form :form="form">
      <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="重点任务">
        <a-select ref="select">
          <a-select-option value="1">2021年第一季度总结</a-select-option>
          <a-select-option value="0">2021年第二季度总结</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="提醒周期">
        <a-select ref="select">
          <a-select-option value="0">1天</a-select-option>
          <a-select-option value="1">3天</a-select-option>
          <a-select-option value="2">7天</a-select-option>
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
        <a-button type="primary" @click="onSubmit">添加</a-button>
        <a-button style="margin-left: 10px">取消</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
// import QuartzJobModal from './modules/QuartzJobModal'
import { getAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";

export default {
  // name: "QuartzJobList",
  mixins: [JeecgListMixin],
  components: {
    JEllipsis
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
<style scoped>
@import '~@assets/less/common.less';
</style>