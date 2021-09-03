<template>
  <a-form ref="form" :model="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item>
      <label slot="label">部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门</label>
      <a-select
        v-decorator="['department', { rules: [{ required: true, message: '请选择所在部门' }] }]"
        placeholder="请选择部门"
        v-model="form.department"
      >
        <a-select-option value="物流管理处">
          物流管理处
        </a-select-option>
        <a-select-option value="烟叶管理处">
          烟叶管理处
        </a-select-option>
        <a-select-option value="审计部">
          审计部
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <label slot="label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</label>
      <a-select
        v-decorator="['name', { rules: [{ required: true, message: '请选择职员姓名' }] }]"
        placeholder="请选择职员姓名"
        @change="handleChange"
        v-model="form.name"
      >
        <a-select-option value="王富贵">
          王富贵
        </a-select-option>
        <a-select-option value="李翠花">
          李翠花
        </a-select-option>
        <a-select-option value="王二蛋">
          王二蛋
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item v-show="this.key">
      <label slot="label">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</label>
      <a-input v-model="form.card" disabled> </a-input>
    </a-form-item>
    <a-form-item v-show="this.key">
      <label slot="label">余额&nbsp;(元)</label>
      <a-input v-model="form.endMoney" disabled> </a-input>
    </a-form-item>
    <a-form-item v-show="this.key">
      <label slot="label">{{ column }}</label>
      <a-select
        v-decorator="['name', { rules: [{ required: true, message: '请选择职员姓名' }] }]"
        :placeholder="`请选择${column}`"
      >
        <a-select-option value="微信">
          微信
        </a-select-option>
        <a-select-option value="支付宝">
          支付宝
        </a-select-option>
        <a-select-option value="现金">
          现金
        </a-select-option>
        <a-select-option value="银行卡">
          银行卡
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item v-show="!this.money && this.key">
      <label slot="label">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注</label>
      <a-textarea placeholder="请输入具体原因" :rows="5" />
    </a-form-item>
    <a-form-item v-show="this.money && this.key">
      <label slot="label">{{ money }}</label>
      <a-input v-model="form.money"> </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm()"> 重置 </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { formatDate } from '../../../../utils/util'
export default {
  props: {
    column: {
      type: String,
      default: ''
    },
    money: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {
        card: '',
        money: '',
        endMoney: ''
      },
      key: ''
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleChange(value) {
      console.log(value)
      this.key = value
      if (this.key == '李翠花') {
        ;(this.form.card = 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd')),
          (this.form.endMoney = '200.50')
      } else if (this.key == '王富贵') {
        ;(this.form.card = 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd')),
          (this.form.endMoney = '1000.50')
      } else if (this.key == '王二蛋') {
        ;(this.form.card = 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd')),
          (this.form.endMoney = '10.50')
      }
    },
    resetForm() {
      this.form = {}
      this.key = ''
    }
  }
}
</script>
