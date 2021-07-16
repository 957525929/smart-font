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
              placeholder='请选择'
              style='width: 100%'
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

<!--    <a-cascader :options="options1" placeholder="Please select" @change="onChange1" />-->

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
      options1: [
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
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],

      options: [
        {
          value: '蔬菜类',
          label: '蔬菜类',
          children: [
            {
              value: '根茎类',//大小均匀，根茎完整，无畸形，无折断，无腐烂，干净清洁，无药物残留。
              label: '根茎类',
              children: [
                {
                  value: '萝卜',
                  label: '萝卜',
                },
                {
                  value: '胡萝卜',
                  label: '胡萝卜',
                },
                {
                  value: '水萝卜',
                  label: '水萝卜',
                },
                {
                  value: '大葱',
                  label: '大葱',
                },
                {
                  value: '圆葱',
                  label: '圆葱',
                },
                {
                  value: '莴苣',
                  label: '莴苣',
                },
                {
                  value: '大蒜',
                  label: '大蒜',
                },
                {
                  value: '大姜',
                  label: '大姜',
                },
                {
                  value: '莲藕',
                  label: '莲藕',
                },
                {
                  value: '山药',
                  label: '山药',
                },
                {
                  value: '芋头',
                  label: '芋头',
                },
                {
                  value: '土豆',
                  label: '土豆',
                },
                {
                  value: '地瓜',
                  label: '地瓜',
                },
              ],
            },
            {
              value: '花叶类',//鲜嫩，无黄叶，无烂叶，叶茎完整，花球坚实，无折断，干净清洁，无药物残留。
              label: '花叶类',
              children: [
                {
                  value: '白菜',
                  label: '白菜',
                },
                {
                  value: '大头菜',
                  label: '大头菜',
                },
                {
                  value: '菠菜',
                  label: '菠菜',
                },
                {
                  value: '油菜',
                  label: '油菜',
                },
                {
                  value: '苔菜',
                  label: '苔菜',
                },
                {
                  value: '芹菜',
                  label: '芹菜',
                },
                {
                  value: '香菜',
                  label: '香菜',
                },
                {
                  value: '韭菜',
                  label: '韭菜',
                },
                {
                  value: '蒜苗',
                  label: '蒜苗',
                },
                {
                  value: '菜花',
                  label: '菜花',
                },
                {
                  value: '西兰花',
                  label: '西兰花',
                },
              ],
            },
            {
              value: '果菜类',//菜品新鲜、果肉坚实、无折断、无腐烂、无异味、干净清洁，无药物残留。
              label: '果菜类',
              children: [
                {
                  value: '茄子',
                  label: '茄子',
                },
                {
                  value: '菜椒',
                  label: '菜椒',
                },
                {
                  value: '辣椒',
                  label: '辣椒',
                },
                {
                  value: '西红柿',
                  label: '西红柿',
                },
                {
                  value: '黄瓜',
                  label: '黄瓜',
                },
                {
                  value: '茭瓜',
                  label: '茭瓜',
                },
                {
                  value: '南瓜',
                  label: '南瓜',
                },
                {
                  value: '冬瓜',
                  label: '冬瓜',
                },
                {
                  value: '丝瓜',
                  label: '丝瓜',
                },
                {
                  value: '扁豆',
                  label: '扁豆',
                },
                {
                  value: '豆角',
                  label: '豆角',
                },
                {
                  value: '毛豆',
                  label: '毛豆',
                },
                {
                  value: '豌豆',
                  label: '豌豆',
                },
              ],
            },
            {
              value: '食用菌类',//色泽、气味正常、无发霉、朵片完整，无药物残留。
              label: '食用菌类',
              children: [
                {
                  value: '蘑菇',
                  label: '蘑菇',
                },
                {
                  value: '香菇',
                  label: '香菇',
                },
                {
                  value: '杏鲍菇',
                  label: '杏鲍菇',
                },
                {
                  value: '金针菇',
                  label: '金针菇',
                },
                {
                  value: '黑木耳',
                  label: '黑木耳',
                },
                {
                  value: '银耳',
                  label: '银耳',
                },
              ],
            },
          ],
        },
        {
          value: '肉食类',
          label: '肉食类',
          children: [
            {
              value: '猪肉类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
              label: '猪肉类',
              children: [
                {
                  value: '前肘肉',
                  label: '前肘肉',
                },
                {
                  value: '后肘肉',
                  label: '后肘肉',
                },
                {
                  value: '五花肉',
                  label: '五花肉',
                },
                {
                  value: '肉馅',
                  label: '肉馅',
                },
                {
                  value: '猪头',
                  label: '猪头',
                },
                {
                  value: '猪蹄',
                  label: '猪蹄',
                },
                {
                  value: '猪口条',
                  label: '猪口条',
                },
                {
                  value: '猪耳朵',
                  label: '猪耳朵',
                },
                {
                  value: '猪排骨',
                  label: '猪排骨',
                },
                {
                  value: '猪大骨',
                  label: '猪大骨',
                },
              ],
            },
            {
              value: '鸡产品类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
              label: '鸡产品类',
              children: [
                {
                  value: '鸡胸肉',
                  label: '鸡胸肉',
                },
                {
                  value: '鸡腿',
                  label: '鸡腿',
                },
                {
                  value: '翅肩肉',
                  label: '翅肩肉',
                },
                {
                  value: '鸡背',
                  label: '鸡背',
                },
                {
                  value: '鸡叉',
                  label: '鸡叉',
                },
                {
                  value: '翅根',
                  label: '翅根',
                },
                {
                  value: '鸡脖',
                  label: '鸡脖',
                },
                {
                  value: '鸡肝',
                  label: '鸡肝',
                },
                {
                  value: '鸡胗',
                  label: '鸡胗',
                },
                {
                  value: '鸡爪',
                  label: '鸡爪',
                },
                {
                  value: '白条',
                  label: '白条',
                },
                {
                  value: '鸡',
                  label: '鸡',
                },
              ],
            },
            {
              value: '丸滑类',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
              label: '丸滑类',
              children: [
                {
                  value: '鸡脯丸',
                  label: '鸡脯丸',
                },
                {
                  value: '鸡柳',
                  label: '鸡柳',
                },
                {
                  value: '牛肉丸',
                  label: '牛肉丸',
                },
                {
                  value: '四喜丸',
                  label: '四喜丸',
                },
                {
                  value: '千页豆腐',
                  label: '千页豆腐',
                },
              ],
            },
          ],
        },
        {
          value: '粮油类',
          label: '粮油类',
          children: [
            {
              value: '原粮',//未加工
              label: '原粮',
              children: [
                {
                  value: '稻谷',
                  label: '稻谷',
                },
                {
                  value: '小麦',
                  label: '小麦',
                },
                {
                  value: '玉米',
                  label: '玉米',
                },
                {
                  value: '高粱',
                  label: '高粱',
                },
                {
                  value: '谷子',
                  label: '谷子',
                },
                {
                  value: '大麦',
                  label: '大麦',
                },
                {
                  value: '荞麦',
                  label: '荞麦',
                },
                {
                  value: '大豆',
                  label: '大豆',
                },
                {
                  value: '小豆',
                  label: '小豆',
                },
                {
                  value: '绿豆',
                  label: '绿豆',
                },
                {
                  value: '蚕豆',
                  label: '蚕豆',
                },
                {
                  value: '芸豆',
                  label: '芸豆',
                },
                {
                  value: '甘薯',
                  label: '甘薯',
                },
              ],
            },
            {
              value: '成品粮',//经加工
              label: '成品粮',
              children: [
                {
                  value: '大米',
                  label: '大米',
                },
                {
                  value: '小米',
                  label: '小米',
                },
                {
                  value: '小麦粉',
                  label: '小麦粉',
                },
                {
                  value: '油菜籽',
                  label: '油菜籽',
                },
                {
                  value: '白芝麻',
                  label: '白芝麻',
                },
                {
                  value: '黑芝麻',
                  label: '黑芝麻',
                },
                {
                  value: '棉籽',
                  label: '棉籽',
                },
                {
                  value: '葵花籽',
                  label: '葵花籽',
                },
                {
                  value: '香瓜籽',
                  label: '香瓜籽',
                },
                {
                  value: '油茶籽',
                  label: '油茶籽',
                },
                {
                  value: '棕榈籽',
                  label: '棕榈籽',
                },
              ],
            },
            {
              value: '油脂',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
              label: '油脂',
              children: [
                {
                  value: '花生油',
                  label: '花生油',
                },
                {
                  value: '菜油',
                  label: '菜油',
                },
                {
                  value: '香油',
                  label: '香油',
                },
                {
                  value: '葵花籽油',
                  label: '葵花籽油',
                },
                {
                  value: '蓖麻籽油',
                  label: '蓖麻籽油',
                },
                {
                  value: '大豆油',
                  label: '大豆油',
                },
                {
                  value: '色拉油',
                  label: '色拉油',
                },
                {
                  value: '调味油',
                  label: '调味油',
                },
                {
                  value: '调和油',
                  label: '调和油',
                },
              ],
            },
            {
              value: '粮油制品',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
              label: '粮油制品',
              children: [
                {
                  value: '生切面',
                  label: '生切面',
                },
                {
                  value: '挂面',
                  label: '挂面',
                },
                {
                  value: '龙须面',
                  label: '龙须面',
                },
                {
                  value: '米粉',
                  label: '米粉',
                },
                {
                  value: '豆腐',
                  label: '豆腐',
                },
                {
                  value: '豆奶',
                  label: '豆奶',
                },
                {
                  value: '包子',
                  label: '包子',
                },
                {
                  value: '面包',
                  label: '面包',
                },
                {
                  value: '烧饼',
                  label: '烧饼',
                },
                {
                  value: '汤圆',
                  label: '汤圆',
                },
                {
                  value: '面筋',
                  label: '面筋',
                },
                {
                  value: '花生酱',
                  label: '花生酱',
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
          // placeholder: '请选择${title}',
          validateRules: [
            // { required: true, message: '${title}不能为空' },
          ],
          slotName: 'materialName',
          width:'25%',
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
    onChange1(value,arr) {
      console.log(value,arr);
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