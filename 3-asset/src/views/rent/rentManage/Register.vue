<template>
  <j-modal
    :title="'租金收缴 - 登记'"
    :width="'1200px'"
    :visible="modalVisible"
    :maskClosable="false"
    @cancel="handleCancel"
  >
    <!-- 主表单区域 -->
    <a-tabs default-active-key="1" >
      <a-tab-pane key="1" tab="基本信息">
        <a-form :form="form1">
          <a-row :gutter="16">
            <a-col :span="7">
              <a-form-item label="合同编号">
                <a-select
                  allowClear
                  placeholder="请选择合同编号"
                >
                  <a-select-option v-for="d in contractSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="出租方">
                <a-select
                  allowClear
                  placeholder="请选择承租方"
                >
                  <a-select-option v-for="d in ownerSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="承租方">
                <a-select
                  allowClear
                  placeholder="请选择承租方"
                >
                  <a-select-option v-for="d in payerSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="7">
              <a-form-item label="收租日期">
                <a-date-picker placeholder='' v-decorator="['payDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="收租金额">
                <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="承办人">
                <a-select
                  allowClear
                  placeholder="请选择承办人"
                >
                  <a-select-option v-for="d in wokerSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="收租凭证">
                <a-input v-decorator="['voucher', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="14">
              <a-form-item label="备注">
                <a-input v-decorator="['remark', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-tab-pane>
    </a-tabs>

    <!-- 底部按钮 -->
    <template slot="footer">
      <a-button key="cancel" @click="handleCancel">取消</a-button>
      <a-button key="reset" @click="handleReset">重置</a-button>
      <a-button key="submit" type="primary" @click='handleOk' >提交</a-button>
    </template>

  </j-modal>
</template>

<script>

import  JEditableTable from '@comp/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'
import moment from 'moment'
export default {
  name: 'register',

  components: {
    JEditableTable,
  },

  props: {
    modalVisible: Boolean,
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      basicInfoForm:{},
      detailsInfoForm:{},
      dataSource: [],
      //合同编号
      contractSelectData:[
        {
          value : 1,
          text : 'ZC0001',
        },
        {
          value : 2,
          text : 'ZC0002',
        },
        {
          value : 3,
          text : 'ZC0003',
        },
      ],
      //付款方
      payerSelectData:[
        {
          value : 1,
          text : '方正有限公司',
        },
        {
          value : 2,
          text : '卷烟厂',
        },
        {
          value : 3,
          text : '烟草公司',
        },
      ],
      //收款方
      ownerSelectData:[
        {
          value : 1,
          text : '烟草公司',
        },
        {
          value : 2,
          text : '福州朝阳贸易有限公司',
        },
        {
          value : 3,
          text : '福州烟草加工厂',
        },
      ],
      //承办人
      wokerSelectData:[
        {
          value : 1,
          text : '王立',
        },
        {
          value : 2,
          text : '严西',
        },
      ],
    }
  },
  methods:{
    handleCancel() {
      this.$emit('handleCancel',false)
    },
    handleReset() {
      this.form1.resetFields();//重置基本信息
      this.$refs.detailInfoForm.getValues((err, values) => {//重置详细信息
        let  rowId=Array.from(values,x=>x.id)
        this.$refs.detailInfoForm.removeRows(rowId)
      })
    },
    handleOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {//先验证基本信息
          this.basicInfoForm = values;
          this.basicInfoForm.purchaseDate = moment(this.basicInfoForm.purchaseDate).format('YYYY-MM-SS')
          this.basicInfoForm.checkoutDate = moment(this.basicInfoForm.checkoutDate).format('YYYY-MM-SS')
          console.log('基本信息：', this.basicInfoForm)

          this.$refs.detailInfoForm.getValues((err, values) => {//再验证详细信息
            if(!err && values.length) {
              this.detailsInfoForm = values
              console.log('详细信息：', this.detailsInfoForm)
              this.$emit('handleCancel',false);//关闭窗口
              this.handleReset()//重置表单
            }
          })

        }
      })
    },
    onValueChange() {},
    onInEntryAdded() {},
  },
}
</script>

<style lang="less" scoped>
.ant-row.ant-form-item {
  margin-bottom: 12px;
}
</style>