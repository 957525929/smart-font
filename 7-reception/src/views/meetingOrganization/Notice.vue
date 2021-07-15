<template>
  <div>
    <h2>会议通知</h2>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="预通知">
        <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="会议审核后（天）">
            <a-input placeholder="请输入天数（如：1）"></a-input>
          </a-form-model-item>
          <a-form-model-item label="选择通知周期">
            <a-select placeholder="请选择通知周期">
              <a-select-option value="每天">每天</a-select-option>
              <a-select-option value="每周">每周</a-select-option>
              <a-select-option value="工作日">工作日</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitA">确定</a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="2" tab="会议提醒" force-render>
        <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="会议开始前（天）">
            <a-input placeholder="请输入天数（如：1）"></a-input>
          </a-form-model-item>
          <a-form-model-item label="选择通知周期">
            <a-select placeholder="请选择通知周期">
              <a-select-option value="每天">每天</a-select-option>
              <a-select-option value="每周">每周</a-select-option>
              <a-select-option value="工作日">工作日</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitB">确定</a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      labelCol: { span: 4 },
      wrapperCol: { span: 7 }
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onChange() {
      console.log();
    },
    onSubmitA() {
      alert("成功");
    },
    onSubmitB() {
      alert("成功");
    }
  }
};
</script>
