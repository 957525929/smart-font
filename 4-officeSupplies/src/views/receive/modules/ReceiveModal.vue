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
        <a-form-item v-if="!disableSubmit" label="领用部门" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select
            v-decorator.trim="['receiveDepertment', { initialValue: '1' }, validatorRules.receiveDepertment]"
            placeholder="请选择领用部门"
            :getPopupContainer="(target) => target.parentNode"
          >
            <a-select-option value="1">卷烟销售管理处</a-select-option>
            <a-select-option value="2">物流管理处</a-select-option>
            <a-select-option value="3">烟叶管理处</a-select-option>
            <a-select-option value="4">人事处</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item v-if="!disableSubmit" label="领用人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select
            v-decorator.trim="['receiveName', { initialValue: '1' }, validatorRules.receiveName]"
            placeholder="请选择领用人"
            :getPopupContainer="(target) => target.parentNode"
            :disabled="disableSubmit"
          >
            <a-select-option value="1">张丰</a-select-option>
            <a-select-option value="2">王立成</a-select-option>
            <a-select-option value="3">陈晓</a-select-option>
            <a-select-option value="4">林研希</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-if="!!model.id && !disableSubmit" :labelCol="labelCol" :wrapperCol="wrapperCol" label="领用时间">
          <j-date
            class="inputWitdh"
            v-decorator.trim="['receiveTime', validatorRules.receiveTime]"
            :showTime="true"
            date-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择领用时间"
          ></j-date>
        </a-form-item>
        </a-form-item>
      </a-form>

      <a-tabs default-active-key="1" v-if="!disableSubmit">
        <a-tab-pane key="1" tab="领用明细">
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
      dataSource: [
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
        receiveDepertment: {
          rules: [{ required: true, message: '请选择领用部门!' }],
        },
        receiveName: {
          rules: [{ required: true, message: '请选择领用人!' }],
        },
        receiveTime: {
          rules: [{ required: true, message: '请选择领用时间!' }],
        }
      },
    }
  },
  created() {

  },
  methods: {
    add() {
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
            'receiveDepertment',
            'receiveName',
            'receiveTime'
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