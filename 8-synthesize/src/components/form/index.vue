<template>
  <a-form-model ref="formRef" :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item
      v-for="item in formItem"
      :key="item.name"
      :prop="item.name"
      :label="item.label"
      :rules="item.rules"
    >
      <!--Input-->
      <a-input
        v-if="item.type === 'input'"
        :placeholder="`${type_msg[item.type]}${item.label}`"
        v-model="formData[item.name]"
      ></a-input>
      <a-textarea
        v-if="item.type === 'textarea'"
        :placeholder="`${type_msg[item.type]}${item.label}`"
        :rows="item.rows"
        v-model="formData[item.name]"
      ></a-textarea>
      <a-checkbox-group v-if="item.type === 'checkbox'" v-model="formData[item.name]" :options="item.options">
      </a-checkbox-group>
      <a-select v-if="item.type === 'select'" v-model="formData[item.name]">
        <a-select-option v-for="x in item.option" :key="x.value">
          {{ x.label }}
        </a-select-option>
      </a-select>
      <div v-if="item.type === 'picker'">
        <a-date-picker
          :format="item.format"
          :placeholder="`${type_msg[item.type]}${item.label}`"
          v-model="formData[item.name]"
        />
        ~
        <a-date-picker
          :format="item.format"
          :placeholder="`${type_msg[item.type]}${item.label1}`"
          v-model="formData[item.name1]"
        />
      </div>
      <!-- {{item.options}} -->
    </a-form-model-item>

    <!--按钮-->
    <!-- <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button
        v-for="item in formHandler"
        :key="item.key"
        :type="item.type"
        @click="item.handler && item.handler()"
        style="margin-right: 10px"
        >{{ item.label }}</a-button
      >
    </a-form-item> -->
  </a-form-model>
</template>

<script>
export default {
  props: {
    formItem: {
      type: Array,
      default: () => []
    },
    //按钮
    formHandler: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => []
    },
    labelCol: {
      type: Object,
      default: () => []
    },
    wrapperCol: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      //是否存在必填规则
      type_msg: {
        input: '请填写',
        select: '请选择',
        textarea: '请填写',
        picker: '请选择'
      },
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 14
      }
    }
  },
  methods: {
    initFormData() {
      this.formItem.forEach(item => {
        //rules规则
        if (item.required) {
          this.rules(item)
        }
        //自定义规则
        if (item.validator) {
          item.rules = item.validator
        }
      })
    },
    rules(item) {
      const requestRules = [
        {
          required: true,
          message: `${this.type_msg[item.type]}${item.label}`,
          trigger: 'change'
        }
      ]
      //其他的rules的规则
      if (item.rules && item.rules.length > 0) {
        item.rules = requestRules.concat(item.rules)
      } else {
        item.rules = requestRules
      }
      console.log(item.rules)
    }
  },
  watch: {
    formItem: {
      handler(newValue) {
        this.initFormData()
      },
      immediate: true
    }
  }
}
</script>

<style></style>
