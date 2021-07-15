<!--<template>-->
<!--  <j-modal-->
<!--    :title="'采购入库 - 新增'"-->
<!--    :width="'1200px'"-->
<!--    :visible="modalVisible"-->
<!--    :maskClosable="false"-->
<!--    @cancel="handleCancel"-->
<!--  >-->

<!--    &lt;!&ndash; 主表单区域 &ndash;&gt;-->
<!--    <a-tabs default-active-key="1" >-->
<!--      <a-tab-pane key="1" tab="基本信息">-->
<!--        <a-form :form="form1">-->
<!--          <a-row :gutter="16">-->
<!--&lt;!&ndash;            <a-col :span="5">&ndash;&gt;-->
<!--&lt;!&ndash;              <a-form-item label="采购单号">&ndash;&gt;-->
<!--&lt;!&ndash;                <a-input disabled  placeholder='系统自动生成' ></a-input>&ndash;&gt;-->
<!--&lt;!&ndash;              </a-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </a-col>&ndash;&gt;-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="采购名称">-->
<!--                <a-input allowClear v-decorator="['headline', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="采购人">-->
<!--                <a-select allowClear v-decorator="['purchasePeople', { rules: [{ required: true, message: '请选择!' }] }]">-->
<!--                  <a-select-option value="张三">张三</a-select-option>-->
<!--                  <a-select-option value="李四">李四</a-select-option>-->
<!--                </a-select>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="采购日期">-->
<!--                <a-date-picker placeholder='' v-decorator="['purchaseDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--          </a-row>-->
<!--          <a-row :gutter="16">-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="采购总数">-->
<!--                <a-input v-decorator="['purchaseNum', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="总金额">-->
<!--                <a-input v-decorator="['totalMoney', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <a-col :span="6">-->
<!--              <a-form-item label="供应商">-->
<!--                <a-select allowClear v-decorator="['provider', { rules: [{ required: true, message: '请选择!' }] }]">-->
<!--                  <a-select-option value="程埔头菜市场">程埔头菜市场</a-select-option>-->
<!--                  <a-select-option value="闽侯县菜市场">闽侯县菜市场</a-select-option>-->
<!--                </a-select>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--&lt;!&ndash;            <a-col :span="5">&ndash;&gt;-->
<!--&lt;!&ndash;              <a-form-item label="审核人">&ndash;&gt;-->
<!--&lt;!&ndash;                <a-input v-decorator="['checkoutPeople', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>&ndash;&gt;-->
<!--&lt;!&ndash;              </a-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </a-col>&ndash;&gt;-->
<!--&lt;!&ndash;            <a-col :span="5">&ndash;&gt;-->
<!--&lt;!&ndash;              <a-form-item label="审核日期">&ndash;&gt;-->
<!--&lt;!&ndash;                <a-date-picker placeholder='' v-decorator="['checkoutDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>&ndash;&gt;-->
<!--&lt;!&ndash;              </a-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </a-col>&ndash;&gt;-->
<!--          </a-row>-->
<!--        </a-form>-->
<!--      </a-tab-pane>-->
<!--    </a-tabs>-->

<!--    &lt;!&ndash; 子表单区域 &ndash;&gt;-->
<!--    <a-tabs default-active-key="1" >-->
<!--      <a-tab-pane key="1" tab="采购明细">-->
<!--        <j-editable-table-->
<!--          ref="detailInfoForm"-->
<!--          :columns="columns"-->
<!--          :dataSource="dataSource"-->
<!--          :maxHeight="300"-->
<!--          :rowNumber="true"-->
<!--          :rowSelection="true"-->
<!--          :actionButton="true"-->
<!--        >-->
<!--          <template v-slot:materialCategory="props">-->
<!--            <a-select style="width: 120px">-->
<!--              <div slot="dropdownRender" slot-scope="menu">-->
<!--                <v-nodes :vnodes="menu" />-->
<!--                <a-divider style="margin: 4px 0;" />-->
<!--                <div style="padding: 4px 8px;" @mousedown="e => e.preventDefault()">-->
<!--                  <div v-if='!isAdd' @click="isAdd=true"><a-icon type="plus" /> 新增</div>-->
<!--                  <a-input v-else ><a-icon slot="suffix" type="check" @click="addItem"/></a-input>-->
<!--                </div>-->
<!--              </div>-->
<!--              <a-select-option v-for="item in items11" :key="item" :value="item">-->
<!--                {{ item }}-->
<!--              </a-select-option>-->
<!--            </a-select>-->
<!--          </template>-->
<!--        </j-editable-table>-->
<!--      </a-tab-pane>-->
<!--    </a-tabs>-->

<!--    &lt;!&ndash; 底部按钮 &ndash;&gt;-->
<!--    <template slot="footer">-->
<!--      <a-button key="cancel" @click="handleCancel">取消</a-button>-->
<!--      <a-button key="reset" @click="handleReset">重置</a-button>-->
<!--      <a-button key="submit" type="primary" @click='handleOk' >提交</a-button>-->
<!--    </template>-->

<!--  </j-modal>-->
<!--</template>-->

<!--<script>-->

<!--import  JEditableTable from '@/components/jeecg/JEditableTable'-->
<!--import { FormTypes } from '@/utils/JEditableTableUtil'-->
<!--import { validateEntryNo } from '../../erp/utils/editableTableValidate'-->
<!--import moment from 'moment'-->

<!--export default {-->
<!--  name: 'PurInModal',-->

<!--  components: {-->
<!--    JEditableTable,-->
<!--    VNodes: {-->
<!--      functional: true,-->
<!--      render: (h, ctx) => ctx.props.vnodes,-->
<!--    },-->
<!--  },-->

<!--  props: {-->
<!--    modalVisible: Boolean,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      isAdd: false,-->
<!--      items11: ['jack', 'lucy'],-->
<!--      form1: this.$form.createForm(this),-->
<!--      basicInfoForm:{},-->
<!--      detailsInfoForm:{},-->
<!--      dataSource: [],-->
<!--      columns: [-->
<!--        {-->
<!--          title: '食料名称',-->
<!--          key: 'materialName',-->
<!--          type: FormTypes.input,-->
<!--          placeholder: '请输入${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--        },-->
<!--        // {-->
<!--        //   title: '食料类别',-->
<!--        //   key: 'materialCategory',-->
<!--        //   type: FormTypes.select,-->
<!--        //   placeholder: '请选择${title}',-->
<!--        //   validateRules: [-->
<!--        //     { required: true, message: '${title}不能为空' },-->
<!--        //   ],-->
<!--        //   options: [-->
<!--        //     { title: '肉类', value: '肉类' },-->
<!--        //     { title: '青菜类', value: '青菜类' },-->
<!--        //   ]-->
<!--        // },-->
<!--        {-->
<!--          title: '食料类别',-->
<!--          key: 'materialCategory',-->
<!--          type: FormTypes.slot,-->
<!--          placeholder: '请选择${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--          slotName: 'materialCategory',-->
<!--        },-->
<!--        {-->
<!--          title: '单位',-->
<!--          key: 'materialUnits',-->
<!--          type: FormTypes.select,-->
<!--          placeholder: '请选择${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--          options: [-->
<!--            { title: 'kg', value: 'kg' },-->
<!--            { title: 'g', value: 'g' },-->
<!--          ]-->
<!--        },-->
<!--        {-->
<!--          title: '单价',-->
<!--          key: 'materialPrice',-->
<!--          type: FormTypes.inputNumber,-->
<!--          placeholder: '请输入${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--        },-->
<!--        {-->
<!--          title: '采购数量',-->
<!--          key: 'materialNum',-->
<!--          type: FormTypes.inputNumber,-->
<!--          placeholder: '请输入${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--        },-->
<!--        {-->
<!--          title: '总价',-->
<!--          key: 'materialTotalValue',-->
<!--          type: FormTypes.inputNumber,-->
<!--          placeholder: '请输入${title}',-->
<!--          validateRules: [-->
<!--            { required: true, message: '${title}不能为空' },-->
<!--          ],-->
<!--        },-->
<!--      ],-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    addItem() {-->
<!--      console.log('addItem');-->
<!--      this.items11.push(`New item ${this.items11.length}`);-->
<!--      this.isAdd=false-->
<!--    },-->
<!--    handleCancel() {-->
<!--      this.$emit('handleCancel',false)-->
<!--    },-->
<!--    handleReset() {-->
<!--      this.form1.resetFields();//重置基本信息-->
<!--      this.$refs.detailInfoForm.getValues((err, values) => {//重置详细信息-->
<!--        let  rowId=Array.from(values,x=>x.id)-->
<!--        this.$refs.detailInfoForm.removeRows(rowId)-->
<!--      })-->
<!--    },-->
<!--    handleOk() {-->
<!--      this.form1.validateFields((err, values) => {-->
<!--        if (!err) {//先验证基本信息-->
<!--          this.basicInfoForm = values;-->
<!--          this.basicInfoForm.purchaseDate = moment(this.basicInfoForm.purchaseDate).format('YYYY-MM-SS')-->
<!--          this.basicInfoForm.checkoutDate = moment(this.basicInfoForm.checkoutDate).format('YYYY-MM-SS')-->
<!--          console.log('基本信息：', this.basicInfoForm)-->

<!--          this.$refs.detailInfoForm.getValues((err, values) => {//再验证详细信息-->
<!--            if(!err && values.length) {-->
<!--              this.detailsInfoForm = values-->
<!--              console.log('详细信息：', this.detailsInfoForm)-->
<!--              this.$emit('handleCancel',false);//关闭窗口-->
<!--              this.handleReset()//重置表单-->
<!--            }-->
<!--          })-->

<!--        }-->
<!--      })-->
<!--    },-->
<!--    onValueChange() {},-->
<!--    onInEntryAdded() {},-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.ant-row.ant-form-item {-->
<!--  margin-bottom: 12px;-->
<!--}-->
<!--</style>-->

<template>
  <j-modal
    :title="'采购入库'"
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
            <!--            <a-col :span="5">-->
            <!--              <a-form-item label="采购单号">-->
            <!--                <a-input disabled  placeholder='系统自动生成' ></a-input>-->
            <!--              </a-form-item>-->
            <!--            </a-col>-->
            <a-col :span="6">
              <a-form-item label="采购名称">
                <a-input allowClear v-decorator="['headline', { rules: [{ required: true, message: '请输入!' }], initialValue:this.basicInfo1.headline }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="采购人">
                <a-select allowClear v-decorator="['purchasePeople', { rules: [{ required: true, message: '请选择!' }], initialValue:this.basicInfo1.purchasePeople }]">
                  <a-select-option value="张三">张三</a-select-option>
                  <a-select-option value="李四">李四</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="采购日期">
                <a-date-picker placeholder='' v-decorator="['purchaseDate', { rules: [{ required: true, message: '请选择!' }], initialValue:this.basicInfo1.purchaseDate }]" style="width: 100%"></a-date-picker>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="6">
              <a-form-item label="采购总数">
                <a-input v-decorator="['purchaseNum', { rules: [{ required: true, message: '请输入!' }], initialValue:this.basicInfo1.purchaseNum }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="总金额">
                <a-input v-decorator="['totalMoney', { rules: [{ required: true, message: '请输入!' }], initialValue:this.basicInfo1.totalMoney }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="供应商">
                <a-select allowClear v-decorator="['provider', { rules: [{ required: true, message: '请选择!' }], initialValue:this.basicInfo1.provider }]">
                  <a-select-option value="程埔头菜市场">程埔头菜市场</a-select-option>
                  <a-select-option value="闽侯县菜市场">闽侯县菜市场</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <!--            <a-col :span="5">-->
            <!--              <a-form-item label="审核人">-->
            <!--                <a-input v-decorator="['checkoutPeople', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>-->
            <!--              </a-form-item>-->
            <!--            </a-col>-->
            <!--            <a-col :span="5">-->
            <!--              <a-form-item label="审核日期">-->
            <!--                <a-date-picker placeholder='' v-decorator="['checkoutDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 100%"></a-date-picker>-->
            <!--              </a-form-item>-->
            <!--            </a-col>-->
          </a-row>
        </a-form>
      </a-tab-pane>
    </a-tabs>

    <!-- 子表单区域 -->
    <a-tabs default-active-key="1" v-if='!basicInfo1.id'>
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
          <template v-slot:materialName="props">
            <a-cascader
              :options="options"
              :show-search='true'
            />
          </template>
        </j-editable-table>
      </a-tab-pane>
    </a-tabs>

    <a-tabs default-active-key="1" v-else>
      <a-tab-pane key="1" tab="采购明细">
        <j-editable-table
          ref="detailInfoForm"
          :columns="columns"
          :dataSource="dataSource1"
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
    basicInfo: Object,
  },
  mounted() {
    this.basicInfo1=Object.assign({}, this.basicInfo);
    if(this.basicInfo1.purchaseDate) this.basicInfo1.purchaseDate=moment(this.basicInfo1.purchaseDate, 'YYYY-MM-DD')
    // console.log(this.$props.basicInfo)
    // console.log(this.basicInfo)
    console.log(this.basicInfo1)
  },

  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
                {
                  value: 'xiasha',
                  label: 'Xia Sha',
                  disabled: true,
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua men',
                },
              ],
            },
          ],
        },
      ],
      basicInfo1: {  },
      isAdd: false,
      items11: ['jack', 'lucy'],
      form1: this.$form.createForm(this),
      basicInfoForm:{},
      detailsInfoForm:{},
      dataSource: [],
      dataSource1: [
        {
          key:1,
          materialName:'鸡肉',
          materialCategory:'肉类',
          materialUnits:'kg',
          materialPrice:'10.00',
          materialNum:'10',
          materialTotalValue:'100.00',
        },
        {
          id:'2',
          materialName: '鸡肉',
          materialCategory: '肉类',
          materialUnits: 'kg',
          materialPrice: '10.00',
          materialNum: '10',
          materialTotalValue: '100.00',
        },
      ],
      columns: [
        // {
        //   title: '食料类别',
        //   key: 'materialCategory',
        //   type: FormTypes.select,
        //   placeholder: '请选择${title}',
        //   validateRules: [
        //     { required: true, message: '${title}不能为空' },
        //   ],
        //   options: [
        //     { title: '肉类', value: '肉类' },
        //     { title: '青菜类', value: '青菜类' },
        //   ]
        // },
        // {
        //   title: '食料名称',
        //   key: 'materialName',
        //   type: FormTypes.input,
        //   placeholder: '请输入${title}',
        //   validateRules: [
        //     { required: true, message: '${title}不能为空' },
        //   ],
        // },
        {
          title: '食料名称',
          key: 'materialName',
          type: FormTypes.slot,
          placeholder: '请选择${title}',
          validateRules: [
            { required: true, message: '${title}不能为空' },
          ],
          slotName: 'materialName',
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
    addItem() {
      console.log('addItem');
      this.items11.push(`New item ${this.items11.length}`);
      this.isAdd=false
    },
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