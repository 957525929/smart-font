<template>
  <j-modal
    :title="'采购入库 - 新增'"
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
            <a-col :span="5">
              <a-form-item label="采购单号">
                <a-input disabled  placeholder='系统自动生成' ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="标题">
                <a-input allowClear v-decorator="['headline', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="采购人">
                <a-input allowClear v-decorator="['purchasePeople', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="采购日期">
                <a-date-picker placeholder='' v-decorator="['purchaseDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="总金额">
                <a-input v-decorator="['totalMoney', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="5">
              <a-form-item label="采购总数">
                <a-input v-decorator="['purchaseNum', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="供应商">
                <a-input v-decorator="['provider', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="验收人">
                <a-input v-decorator="['checkoutPeople', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="验收日期">
                <a-date-picker placeholder='' v-decorator="['checkoutDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-tab-pane>
    </a-tabs>

    <!-- 子表单区域 -->
    <a-tabs default-active-key="1" >
      <a-tab-pane key="1" tab="采购明细">
        <j-editable-table
          ref="detailInfoForm"
          :columns="columns"
          :dataSource="dataSource"
          :maxHeight="300"
          :rowNumber="true"
          :rowSelection="true"
          :actionButton="true"
        >
        </j-editable-table>
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

import  JEditableTable from '@/components/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'
import { validateEntryNo } from '../../erp/utils/editableTableValidate'
import moment from 'moment'

export default {
  name: 'PurInModal',

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
      columns: [
        {
          title: '物料名称',
          key: 'materialName',
          type: FormTypes.input,
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '物料类别',
          key: 'materialCategory',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: '肉类', value: '肉类' },
            { title: '青菜类', value: '青菜类' },
          ]
        },
        {
          title: '单位',
          key: 'materialUnits',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: 'kg', value: 'kg' },
            { title: 'g', value: 'g' },
          ]
        },
        {
          title: '单价',
          key: 'materialPrice',
          type: FormTypes.inputNumber,
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '采购数量',
          key: 'materialNum',
          type: FormTypes.inputNumber,
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '总价',
          key: 'materialTotalValue',
          type: FormTypes.inputNumber,
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
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