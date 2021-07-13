<template>
  <j-modal
    :title="'租赁合同 - 新增'"
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
              <a-form-item label="合同编号">
                <a-input disabled  placeholder='系统自动生成' ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="出租方">
                <a-input allowClear v-decorator="['assetOwner', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="承租方">
                <a-input allowClear v-decorator="['assetUser', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="9">
              <a-form-item label="合同有效期">
                <a-date-picker placeholder='' v-decorator="['recordDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>~<a-date-picker placeholder='' v-decorator="['endDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="5">
              <a-form-item label="付款周期">
                <a-input v-decorator="['payCycle', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="租金">
                <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="承办人">
                <a-input v-decorator="['worker', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="承办人手机号码">
                <a-input v-decorator="['workerPhone', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="10">
              <a-form-item label="备注">
                <a-input v-decorator="['remark', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
        </a-form>
      </a-tab-pane>
    </a-tabs>

    <!-- 子表单区域 -->
    <a-tabs default-active-key="1" >
      <a-tab-pane key="1" tab="租赁资产">
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

import  JEditableTable from '@comp/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'
import moment from 'moment'
export default {
    name: 'EnrollLent',

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
          title: '资产名称',
          key: 'assetName',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: '9号办公楼', value: '9号办公楼' },
            { title: '烟草烘干机', value: '烟草烘干机' },
            { title: '联想M710S', value: '联想M710S' },
            { title: '丰田汽车', value: '丰田汽车' },
          ]
        },
        {
          title: '资产编号',
          key: 'assetNunmber',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: 'ZCAT2021070500', value: 'ZCAT2021070500' },
            { title: 'ZCAT2021070501', value: 'ZCAT2021070501' },
            { title: 'ZCAT2021070502', value: 'ZCAT2021070502' },
            { title: 'ZCAT2021070503', value: 'ZCAT2021070503' },
          ]
        },

        {
          title: '资产类别',
          key: 'assetType',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: '房屋和建筑物', value: '房屋和建筑物' },
            { title: '一般办公设备', value: '一般办公设备' },
            { title: '专用设备', value: '专用设备' },
            { title: '运输设备', value: '运输设备' },
            { title: '其他资产', value: '其他资产' },
          ]
        },
        {
          title: '资产价值',
          key: 'assetValue',
          type: FormTypes.inputNumber,
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '资产所有方',
          key: 'assetOwner',
          type: FormTypes.select,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          options: [
            { title: '烟草公司', value: '烟草公司' },
          ]
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