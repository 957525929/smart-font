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
        <a-form :form="form">
          <a-row :gutter="16">
            <a-col :span="5">
              <a-form-item label="采购单号">
                <a-input disabled allowClear placeholder='系统自动生成'></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="标题">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="采购人">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="采购日期">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="总金额">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="采购总数">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="供应商">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="验收人">
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="5">
              <a-form-item label="验收日期">
                <a-input></a-input>
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
          :ref="refKeys[0]"
          :loading="stkIoBillEntryTable.loading"
          :columns="stkIoBillEntryTable.columns"
          :dataSource="stkIoBillEntryTable.dataSource"
          :maxHeight="300"
          :rowNumber="false"
          :rowSelection="true"
          :actionButton="true"
          @valueChange="onValueChange"
          @added="onInEntryAdded"
        >
        </j-editable-table>
      </a-tab-pane>
    </a-tabs>

    <!-- 底部按钮 -->
    <template slot="footer">
      <a-button key="cancel" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" @click='handleOk'>提交</a-button>
    </template>

  </j-modal>
</template>

<script>

import  JEditableTable from '@/components/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'
import { validateEntryNo } from '../../erp/utils/editableTableValidate'

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
      form: {},
      refKeys: [],
      stkIoBillEntryTable: {
        loading: false,
        dataSource: [],
        columns: [
          {
            title: '分录号',
            key: 'entryNo',
            type: FormTypes.inputNumber,
            width:"60px",
            validateRules: [
              { required: true, message: '${title}不能为空' },
              { pattern: /^[1-9]\d*$/, message: '请输入零以上的正整数' },
              { handler: validateEntryNo}],
          },
          { //sourceType、sourceEntryId、sourceEntryNo应一起考虑
            title: '源单分录号',
            key: 'sourceEntryNo',
            type: FormTypes.input,
            width:"180px",
            defaultValue: '',
          },
          {
            title: '物料',
            key: 'materialId',
            type: FormTypes.sel_search,
            dictCode:"bas_material,name,id",
            width:"200px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
            options:[],
          },
          {
            title: '计量单位',
            key: 'unitId',
            type: FormTypes.select,
            dictCode:"bas_measure_unit,name,id",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
            options:[],
          },
          {
            title: '入库数量',
            key: 'qty',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '入库成本',
            key: 'cost',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '成本含税',
            key: 'isInclTax',
            type: FormTypes.select,
            dictCode:"yn",
            width:"80px",
            placeholder: '请输入${title}',
            defaultValue: '',
            options:[],
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '仓库',
            key: 'warehouseId',
            type: FormTypes.select,
            dictCode:"bas_warehouse,name,id",
            width:"150px",
            placeholder: '请输入${title}',
            defaultValue: '',
            options:[],
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '批次号',
            key: 'batchNo',
            type: FormTypes.input,
            width:"200px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '结算数量',
            key: 'settleQty',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '含税单价',
            key: 'settlePrice',
            type: FormTypes.inputNumber,
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '税率%',
            key: 'taxRate',
            type: FormTypes.inputNumber,
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '税额',
            key: 'tax',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '折让金额',
            key: 'discountAmt',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '0',
          },
          {
            title: '折让税额',
            key: 'discountTax',
            type: FormTypes.inputNumber,
            width:"100px",
            placeholder: '请输入${title}',
            defaultValue: '0',
          },
          {
            title: '结算金额',
            key: 'settleAmt',
            type: FormTypes.inputNumber,
            statistics: "true",
            width:"120px",
            placeholder: '请输入${title}',
            defaultValue: '',
            validateRules: [{ required: true, message: '${title}不能为空' }],
          },
          {
            title: '已开票数量',
            key: 'invoicedQty',
            type: FormTypes.input,
            statistics: "true",
            width:"120px",
            defaultValue: '',
            disabled:true,
          },
          {
            title: '已开票金额',
            key: 'invoicedAmt',
            type: FormTypes.input,
            statistics: "true",
            width:"120px",
            defaultValue: '',
            disabled:true,
          },
          {
            title: '备注',
            key: 'remark',
            type: FormTypes.input,
            width:"200px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '备注2',
            key: 'remark2',
            type: FormTypes.input,
            width:"200px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '备注3',
            key: 'remark3',
            type: FormTypes.input,
            width:"200px",
            placeholder: '请输入${title}',
            defaultValue: '',
          },
          {
            title: '',
            key: 'flag',
            type: FormTypes.input,
            width:"1px",
            placeholder: '',
            defaultValue: '',
          },
        ],
      },
    }
  },
  methods:{
    handleCancel() {
      this.$emit('handleCancel',false)
    },
    handleOk() {
      this.$emit('handleCancel',false)
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