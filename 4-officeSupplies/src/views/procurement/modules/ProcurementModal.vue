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
      <a-descriptions  v-if="disableSubmit" title="" bordered>
        <a-descriptions-item label="申请部门">
          {{model.applyDepertment}}
        </a-descriptions-item>
        <a-descriptions-item label="申请人">
          {{model.applyName}}
        </a-descriptions-item>
        <a-descriptions-item label="状态">
          {{model.status  == '1' ? "待审核" : "通过"}}
        </a-descriptions-item>
        <a-descriptions-item label="申请名称">
          {{model.articleName}}
        </a-descriptions-item>
        <a-descriptions-item label="申请时间">
          {{model.applyTime}}
        </a-descriptions-item>
        <a-descriptions-item label="申请理由">
          {{model.applyReason}}
        </a-descriptions-item>
        <a-descriptions-item  v-if="!!model.id && model.checkTime != '' && disableSubmit" label="审核时间">
          {{model.checkTime}}
        </a-descriptions-item>
        <a-descriptions-item label="备注">
          {{model.remark}}
        </a-descriptions-item>
      </a-descriptions>
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
            :disabled="disableSubmit"
          >
            <a-select-option value="1">张丰</a-select-option>
            <a-select-option value="2">王立成</a-select-option>
            <a-select-option value="3">陈晓</a-select-option>
            <a-select-option value="4">林研希</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="状态" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="!!model.id && !disableSubmit">
          <a-select
            v-decorator.trim="['status', { initialValue: '1' }, validatorRules.status]"
            placeholder="请选择审批状态"
            :getPopupContainer="(target) => target.parentNode"
            :disabled="disableSubmit"
          >
            <a-select-option :value="1">待审批</a-select-option>
            <a-select-option :value="2">通过</a-select-option>
            <a-select-option :value="3">未通过</a-select-option>
          </a-select>
        </a-form-item>

        <!-- <a-form-item label="办公用品名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <office-category v-if="!disableSubmit"></office-category>
          <a-select
            v-decorator.trim="['articleName', { initialValue: '1' }, validatorRules.articleName]"
            placeholder="请选择办公用品名称"
            :getPopupContainer="(target) => target.parentNode"
            :disabled="disableSubmit"
            @change="handleChange"
          >
            <a-select-option :value="1">马克笔</a-select-option>
            <a-select-option :value="3">A4纸</a-select-option>
            <a-select-option :value="2">打印机</a-select-option>
          </a-select>
        </a-form-item> -->
        <a-form-item v-if="!disableSubmit" :labelCol="labelCol" :wrapperCol="wrapperCol" label="申请名称">
          <a-input
            class="inputWitdh"
            placeholder="请输入申请名称"
            v-decorator.trim="['articleName', { initialValue: '办公用品' }, validatorRules.articleName]"
          />
        </a-form-item>

        <!-- <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="申请数量">
          <a-input-number
            class="inputWitdh"
            placeholder="请输入申请数量"
            v-decorator.trim="['applyNum', { initialValue: 1 }, validatorRules.applyNum]"
            :min="1"
            :max="10000000"
            :disabled="disableSubmit"
          />
        </a-form-item> -->

        <!-- <a-form-item label="计量单位" :labelCol="labelCol" :wrapperCol="wrapperCol" v-if="!!model.id">
          <a-select
            v-decorator.trim="['unit', validatorRules.unit]"
            placeholder="请选择计量单位"
            :getPopupContainer="(target) => target.parentNode"
            :disabled="true"
          >
            <a-select-option :value="1">个</a-select-option>
            <a-select-option :value="2">盒</a-select-option>
            <a-select-option :value="3">箱</a-select-option>
            <a-select-option :value="4">台</a-select-option>
            <a-select-option :value="5">张</a-select-option>
            <a-select-option :value="6">把</a-select-option>
          </a-select>
        </a-form-item> -->

        <a-form-item v-if="!!model.id && !disableSubmit" :labelCol="labelCol" :wrapperCol="wrapperCol" label="申请时间">
          <j-date
            class="inputWitdh"
            v-decorator.trim="['applyTime', validatorRules.applyTime]"
            :showTime="true"
            date-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择申请时间"
          ></j-date>
        </a-form-item>

        <a-form-item v-if="!disableSubmit" label="申请理由" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea
            v-decorator.trim="['applyReason', { initialValue: '办公需要' }, validatorRules.applyReason]"
            placeholder="请输入申请理由"
            auto-size
          />
        </a-form-item>

        <a-form-item
          v-if="!!model.id && model.checkTime != '' && !disableSubmit"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="审核时间"
        >

          <j-date
            class="inputWitdh"
            v-decorator.trim="['checkTime', validatorRules.checkTime]"
            :showTime="true"
            date-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择审核时间"
          ></j-date>
        </a-form-item>

        <a-form-item
          label="备注"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          v-if="!!model.id && model.remark != '' && !disableSubmit"
        >
          <a-textarea v-decorator.trim="['remark', validatorRules.remark]" placeholder="" auto-size />
        </a-form-item>

      </a-form>

      <a-tabs default-active-key="1" v-if="!disableSubmit">
        <a-tab-pane key="1" tab="申请明细">
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
                :defaultValue="1"
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

      <a-tabs default-active-key="1" v-if="disableSubmit">
        <a-tab-pane key="1" tab="申请明细" >
          <j-editable-table
            ref="detailInfoForm1"
            :columns="columns1"
            :dataSource="dataSource1"
            :maxHeight="300"
            :rowNumber="true"
          >
            <!-- <template v-slot:materialName="props">
              <a-select
                :defaultValue="1"
                placeholder="请选择办公用品名称"
                style="width: 100%"
                @change="onChangeSelect($event, props)"
              >
                <a-select-option :value="1">马克笔</a-select-option>
                <a-select-option :value="2">打印机</a-select-option>
                <a-select-option :value="3">A4纸</a-select-option>
              </a-select>
            </template> -->
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
  data() {
    return {
      // dataSource1: [
      //   {
      //     key: 1,
      //     materialName: '马克笔',
      //     materialUnits: '盒',
      //     materialNum: '5',
      //   },
      //   {
      //     key: 2,
      //     materialName: 'A4纸',
      //     materialUnits: '箱',
      //     materialNum: '2',
      //   },
      //   {
      //     key: 3,
      //     materialName: '打印机',
      //     materialUnits: '台',
      //     materialNum: '1',
      //   },
      // ],
      dataSource: [
        {
          key: 1,
          materialName: '2',
          materialBrand:'得力',
          materialUnits: '盒',
          materialPrice: '20',
          materialNum: 3,
          materialTotalValue:'60'
        },
      ],
      columns: [
        {
          title: '办公用品名称',
          key: 'materialName',
          type: FormTypes.slot,
          slotName: 'materialName',
        },
        {
          title: '品牌',
          defaultValue: '得力',
          key: 'materialBrand',
          type: FormTypes.select,
          allowInput:true,
          options: [
            { title: '得力', value: '1' },
            { title: '晨光', value: '2' },
            { title: '惠普', value: '3' },
          ],
        },
        {
          title: '型号',
          defaultValue: 'liit',
          key: 'materialModel',
          type: FormTypes.select,
          allowInput:true,
          options: [
            { title: 'liit', value: '1' },
            { title: 'tk-001', value: '2' },
            { title: 'APMV0901', value: '3' },
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
          type: FormTypes.select,
          allowInput:true,
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
          title: '型号',
          key: 'materialModel',
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
      // columns1: [
      //   {
      //     title: '办公用品名称',
      //     key: 'materialName',
      //     width: '25%',
      //   },
      //   {
      //     title: '计量单位',
      //     key: 'materialUnits',
      //   },
      //   {
      //     title: '申请数量',
      //     key: 'materialNum',
      //     type: FormTypes.inputNumber,
      //     statistics: 'true',
      //   },
      // ],
      title: '操作',
      visible: false,
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
        },
        status: {
          rules: [{ required: true, message: '请选择审批状态!' }],
        },
        articleName: {
          rules: [{ required: true, message: '请选择办公用品名称!' }],
        },
        applyNum: {
          rules: [{ required: true, message: '请输入申请数量!' }],
        },
        unit: {
          rules: [{ required: true, message: '请选择计量单位!' }],
        },
        applyTime: {
          rules: [{ required: true, message: '请选择申请时间!' }],
        },
        applyReason: {
          rules: [{ required: true, message: '请输入申请理由!' }],
        },
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
      switch (value) {
        case 1:
          this.model.unit = '盒'
          this.model.materialNum = 5
          break
        case 2:
          this.model.unit = '台'
          this.model.price = '1600'
          break
        case 3:
          this.model.unit = '箱'
          this.model.price = '128'
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
                materialBrand:'得力',
                materialModel:'APMV0901',
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
                materialBrand:'惠普',
                materialModel:'HP01231',
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
                materialBrand:'晨光',
                materialModel:'WSFA0901',
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