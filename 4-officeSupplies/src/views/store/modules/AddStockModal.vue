<template>
  <a-modal
    :title="title"
    :width="950"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
    wrapClassName="ant-modal-cust-warp"
    style="top: 5%; height: 95%; overflow-y: hidden"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item v-if="!disableSubmit" label="申请部门" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select
            v-decorator.trim="['applyDepertment', { initialValue: '1' }, validatorRules.applyDepertment]"
            placeholder="请选择申请部门"
            :getPopupContainer="(target) => target.parentNode"
          >
            <a-select-option value="1">卷烟销售管理处</a-select-option>
            <a-select-option value="2">物流管理处</a-select-option>
            <a-select-option value="3">烟叶管理处</a-select-option>
            <a-select-option value="4">人事处</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item v-if="!disableSubmit" label="申请人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select
            v-decorator.trim="['applyName', { initialValue: '1' }, validatorRules.applyName]"
            placeholder="请选择申请人"
            :getPopupContainer="(target) => target.parentNode"
            @change="handleChange"
          >
            <a-select-option value="1">张丰</a-select-option>
            <a-select-option value="2">王立成</a-select-option>
            <a-select-option value="3">陈晓</a-select-option>
            <a-select-option value="4">林研希</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>

      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="入库明细">
          <j-editable-table
            ref="detailInfoForm"
            :columns="columns"
            :dataSource="dataSource"
            :maxHeight="300"
            :rowNumber="true"
            :rowSelection="true"
            :actionButton="true"
            @valueChange='valueChangeEditable'
          >
            <template v-slot:materialName="props">
              <a-select
                :defaultValue="props"
                placeholder="请选择办公用品名称"
                :disabled="disableSubmit"
                style="width: 100%"
                @change="onChangeSelect($event, props)"
              >
                <a-select-option :value="1">马克笔</a-select-option>
                <a-select-option :value="2">打印机</a-select-option>
                <a-select-option :value="3">A4纸</a-select-option>
              </a-select>
            </template>
          </j-editable-table>
        </a-tab-pane>
      </a-tabs>
    </a-spin>

    <template slot="footer">
      <a-button type="primary" v-show="!disableSubmit" @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'
import { addRole, editRole, duplicateCheck } from '@/api/api'
import JDate from '@/components/jeecg/JDate'
import OfficeCategory from '@/components/table/officeCategory'
import JEditableTable from '@/components/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'

export default {
  name: 'ReceiveModal',
  components: {
    JDate,
    OfficeCategory,
    JEditableTable,
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataSource: [
        {
          key: 1,
          materialName: '马克笔',
          materialBrand:'得力',
          materialModel:'MK001',
          materialUnits: '盒',
          materialPrice: '20',
          materialNum: 3,
          materialTotalValue:'60'
        },
        {
          key: 2,
          materialName: 'A4纸',
          materialBrand:'晨光',
          materialModel:'SES256',
          materialUnits: '箱',
          materialPrice: '128',
          materialNum: 2,
          materialTotalValue:'256'
        }
      ],
      columns: [
        {
          title: '办公用品名称',
          key: 'materialName',
          defaultValue: '马克笔',
          type: FormTypes.slot,
          slotName: 'materialName',
        },
        {
          title: '品牌',
          defaultValue: '得力',
          key: 'materialBrand',
          allowInput:true,
          type: FormTypes.select,
          options: [
            { title: '得力', value: '1' },
            { title: '晨光', value: '2' },
            { title: '惠普', value: '3' },
          ],
        },
        {
          title: '型号',
          key: 'materialModel',
          allowInput:true,
          type: FormTypes.select,
          defaultValue: '1',
          options: [
            { title: 'MK001', value: '1' },
            { title: 'SES256', value: '2' },
            { title: 'ESE541', value: '3' },
          ],
        },
        {
          title: '单价(元)',
          key: 'materialPrice',
          type: FormTypes.input,
          defaultValue: '20',
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '计量单位',
          key: 'materialUnits',
          // type: FormTypes.slot,
          slotName: 'materialUnits',
          allowInput:true,
          type: FormTypes.select,
          defaultValue: '1',
          options: [
            { title: '盒', value: '1' },
            { title: '台', value: '2' },
            { title: '箱', value: '3' },
          ],
        },
        {
          title: '申请数量',
          key: 'materialNum',
          type: FormTypes.inputNumber,
          defaultValue: 1,
          statistics: 'true',
        },
        {
          title: '合计(元)',
          key: 'materialTotalValue',
          type: FormTypes.inputNumber,
          defaultValue: 20,
          placeholder: '',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          statistics: "true",
        },
      ],
      dataSource1: [
        {
          key: 1,
          materialName: '马克笔11',
          materialUnits: '盒',
          materialNum: 3,
          materialBrand:'得力',
          materialPrice: 20,
          materialTotalValue:60
        },
      ],
      columns1: [
        {
          title: '办公用品名称',
          key: 'materialName',
          // type: FormTypes.input,
          slotName: 'materialName',
        },
        {
          title: '品牌',
          key: 'materialBrand',
          placeholder: '请输入${title}'
        },
        {
          title: '单价(元)',
          key: 'materialPrice',
          defaultValue: '20',
          placeholder: '请输入${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
        },
        {
          title: '计量单位',
          key: 'materialUnits',
          // type: FormTypes.slot,
          // slotName: 'materialUnits',
          // type: FormTypes.input,
          // defaultValue: '1',
          // options: [
          //   { title: '盒', value: '1' },
          //   { title: '台', value: '2' },
          //   { title: '箱', value: '3' },
          // ],
        },
        {
          title: '申请数量',
          key: 'materialNum',
          type: FormTypes.inputNumber,
          disabled: true,
          // defaultValue: 1,
          statistics: 'true',
        },
        {
          title: '合计(元)',
          key: 'materialTotalValue',
          type: FormTypes.inputNumber,
          disabled: true,
          placeholder: '',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          statistics: "true",
        },
      ],
      title: '新增入库',
      disableSubmit: false,
      roleDisabled: false,
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
      validatorRules: {
        applyDepertment: {
          rules: [{ required: true, message: '请选择申请部门!' }],
        },
        applyName: {
          rules: [{ required: true, message: '请选择申请人!' }],
        }
      },
    }
  },
  created() {},
  methods: {
    add() {
      this.dataSource = []
      this.edit({})
    },
    edit(record) {
      this.form.resetFields()
      this.model = Object.assign({}, record)
      this.visible = true
      this.dataSource = Object.assign([], record.detail);
      this.dataSource1 = Object.assign([], record.detail);
      this.$nextTick(() => {
        this.form.setFieldsValue(
          pick(
            this.model,
            'id',
            'applyDepertment',
            'applyName',
            'status',
            'articleName',
            'applyNum',
            'applyText',
            'unit',
            'applyTime',
            'applyReason',
            'checkTime',
            'remark'
          )
        )
      })
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      const that = this
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true
          let formData = Object.assign(this.model, values)
          let obj
          console.log(formData)
          if (!this.model.id) {
            obj = addRole(formData)
          } else {
            obj = editRole(formData)
          }
          obj
            .then((res) => {
              if (res.success) {
                that.$message.success(res.message)
                that.$emit('ok')
              } else {
                that.$message.warning(res.message)
              }
            })
            .finally(() => {
              that.confirmLoading = false
              that.close()
            })
        }
      })
    },
    handleCancel() {
      this.close()
    },
    validateRoleCode(rule, value, callback) {
      if (/[\u4E00-\u9FA5]/g.test(value)) {
        callback('角色编码不可输入汉字!')
      } else {
        var params = {
          tableName: 'sys_role',
          fieldName: 'role_code',
          fieldVal: value,
          dataId: this.model.id,
        }
        duplicateCheck(params).then((res) => {
          if (res.success) {
            callback()
          } else {
            callback(res.message)
          }
        })
      }
    },
    handleChange(value) {
      console.log(value)
      this.dataSource = [];
      switch (parseInt(value)) {
        case 1:
          this.dataSource = [
            {
              key: 1,
              materialName: '马克笔',
              materialBrand:'得力',
              materialModel:'MK001',
              materialUnits: '盒',
              materialPrice: '20',
              materialNum: 3,
              materialTotalValue:'60'
            },
            {
              key: 2,
              materialName: 'A4纸',
              materialBrand:'晨光',
              materialModel:'SES256',
              materialUnits: '箱',
              materialPrice: '128',
              materialNum: 2,
              materialTotalValue:'256'
            }
          ]
          break
        case 2:
          this.dataSource = [
            {
              key: 1,
              materialName: '打印机',
              materialBrand:'惠普',
              materialModel:'HP8461',
              materialUnits: '台',
              materialPrice: '1600',
              materialNum: 1,
              materialTotalValue:'1600'
            },
          ]
          break
        case 3:
          this.dataSource = [
            {
              key: 1,
              materialName: '马克笔',
              materialBrand:'得力',
              materialModel:'MK001',
              materialUnits: '盒',
              materialPrice: '20',
              materialNum: 2,
              materialTotalValue:'40'
            },
          ]
          break
      }
      this.form.setFieldsValue(pick(this.model, 'price', 'unit'))
    },
    onChangeSelect(value, props) {
      let { rowId, target } = props
      switch (value) {
        case 1:
          target.setValues([
            {
              rowKey: rowId,
              values: {
                materialUnits: '盒',
                materialPrice:20,
                materialNum: 1,
                materialBrand:'得力',
                materialTotalValue:20
              },
            },
          ])
          break
        case 2:
          target.setValues([
            {
              rowKey: rowId,
              values: {
                materialUnits: '台',
                materialPrice:1600,
                materialNum: 1,
                materialBrand:'惠普',
                materialTotalValue:1600
              },
            },
          ])
          break
        case 3:
          target.setValues([
            {
              rowKey: rowId,
              values: {
                materialUnits: '箱',
                materialPrice:128,
                materialNum: 1,
                materialBrand:'晨光',
                materialTotalValue:128
              },
            },
          ])
          break
      }
      props.target.recalcAllStatisticsColumns()
    },
    valueChangeEditable(value) {
      // console.log(value.row)
      value.target.setValues([
        {
          rowKey: value.row.id,
          values: {
            'materialTotalValue': parseFloat(value.row.materialPrice)* parseFloat(value.row.materialNum)
          }
        }
      ])
      value.target.recalcAllStatisticsColumns()
    },
  },
}
</script>

<style scoped>
.inputWitdh {
  width: 100%;
}
</style>