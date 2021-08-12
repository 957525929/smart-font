<template>
  <j-modal :title="'会后结算'" :width="'1200px'" :visible="modalVisible" :maskClosable="false" @cancel="handleCancel">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="会议基本信息">
        <a-descriptions :column="3">
          <a-descriptions-item label="会议编号">{{this.basicInfo.id}}</a-descriptions-item>
          <a-descriptions-item label="会议主题">{{this.basicInfo.theme}}</a-descriptions-item>
          <a-descriptions-item label="会议名称">{{this.basicInfo.name}}</a-descriptions-item>
          <a-descriptions-item label="负责人姓名">{{this.basicInfo.dutyName}}</a-descriptions-item>
          <a-descriptions-item label="负责人电话">{{this.basicInfo.dutyTel}}</a-descriptions-item>
          <a-descriptions-item label="会议地点">{{this.basicInfo.address}}</a-descriptions-item>
          <a-descriptions-item label="会议时间">{{this.basicInfo.dateTime}}</a-descriptions-item>
          <a-descriptions-item label="参会人数">{{this.basicInfo.number}}</a-descriptions-item>
          <a-descriptions-item label="会议状态">{{this.basicInfo.state}}</a-descriptions-item>
        </a-descriptions>
      </a-tab-pane>
    </a-tabs>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="会后结算">
        <j-editable-table ref="detailInfoForm" :columns="columns" :dataSource="dataSource" :maxHeight="300"
          :rowNumber="true" :rowSelection="true" :actionButton="true" @valueChange='valueChangeEditable'>
          <template v-slot:dateTime="props">
            <a-range-picker @change="onChangeTime($event, props)" :default-value="defaultDateTime" />
          </template>
        </j-editable-table>
      </a-tab-pane>
    </a-tabs>
    <template slot="footer">
      <a-button key="cancel" @click="handleCancel">取消</a-button>
      <a-button key="reset" @click="handleReset">重置</a-button>
      <a-button key="submit" type="primary" @click="handleOk">提交</a-button>
    </template>
  </j-modal>
</template>

<script>
  import JEditableTable from '@/components/jeecg/JEditableTable'

  import {
    FormTypes
  } from '@/utils/JEditableTableUtil'
  import moment from 'moment'

  export default {
    name: 'PurInModal',
    components: {
      JEditableTable
    },

    props: {
      modalVisible: Boolean,
      basicInfo: Object
    },
    created() {
      // console.log("basicInfo", this.basicInfo)
      let dateAr = this.basicInfo.dateTime.split('~')
      this.defaultDateTime[0] = this.moment(dateAr[0], 'YYYY-MM-DD')
      this.defaultDateTime[1] = this.moment(dateAr[1], 'YYYY-MM-DD')
    },
    computed: {},
    mounted() {
      // this.basicInfo1=Object.assign({}, this.basicInfo);
      //  console.log("this.basicInfo1",this.basicInfo1)
      // console.log("basicInfo",this.basicInfo)
    },
    data() {
      return {
        basicInfo1: {},
        isAdd: false,
        items11: ['jack', 'lucy'],
        form1: this.$form.createForm(this),
        basicInfoForm: {},
        detailsInfoForm: {},
        dataSource: [{
            type: '住宿',
            dateTime: '2021-07-18~2021-07-20',
            price: '400',
          },
          {
            type: '餐饮',
            dateTime: '2021-07-18~2021-07-20',
            price: '500'
          }
        ],
        columns: [{
            title: '费用类型',
            key: 'type',
            type: FormTypes.select,
            placeholder: '请选择${title}',
            validateRules: [{
              required: true,
              message: '${title}不能为空'
            }],
            // defaultValue: '住宿',
            options: [{
                title: '住宿',
                value: '住宿'
              },
              {
                title: '餐饮',
                value: '餐饮'
              },
              {
                title: '娱乐',
                value: '娱乐'
              },
              {
                title: '食品',
                value: '食品'
              },
              {
                title: '礼品烟',
                value: '礼品烟'
              },
              {
                title: '酒',
                value: '酒'
              },
              {
                title: '其他',
                value: '其他'
              },
            ]
          },
          {
            title: '时间',
            key: 'dateTime',
            type: FormTypes.slot,
            validateRules: [{
              required: true,
              message: '${title}不能为空'
            }, ],
            slotName: 'dateTime',
            width: '25%',
          },
          {
            title: '费用(元)',
            key: 'price',
            type: FormTypes.inputNumber,
            placeholder: '请输入${title}',
            validateRules: [{
              required: true,
              message: '${title}不能为空'
            }, ],
            statistics: "true",
          },
          {
            title: '备注',
            key: 'remark',
            type: FormTypes.input_pop,
            placeholder: '请输入${title}',
            validateRules: [{
              required: true,
              message: '${title}不能为空'
            }]
          },
        ],
        defaultDateTime: [],
      }
    },
    methods: {
      moment,
      handleCancel() {
        this.$emit('handleCancel', false)
      },
      handleReset() {
        this.form1.resetFields() //重置基本信息
        this.$refs.detailInfoForm.getValues((err, values) => {
          //重置详细信息
          let rowId = Array.from(values, x => x.id)
          this.$refs.detailInfoForm.removeRows(rowId)
        })
      },
      handleOk() {
        this.form1.validateFields((err, values) => {
          if (!err) {
            //先验证基本信息
            this.basicInfoForm = values
            console.log('基本信息：', this.basicInfoForm)
            this.$refs.detailInfoForm.getValues((err, values) => {
              //再验证详细信息
              if (!err && values.length) {
                this.detailsInfoForm = values
                console.log('详细信息：', this.detailsInfoForm)
                this.$emit('handleCancel', false) //关闭窗口
                this.handleReset() //重置表单
              }
            })
          }
        })

      },
      onChangeTime(val, props) {
        console.log(val, props)
        console.log(props.getValue())

      },
      valueChangeEditable(value) {
        // console.log(value.row)
        value.target.recalcAllStatisticsColumns()
      },
    }
  }
</script>

<style lang="less" scoped>
  .ant-row.ant-form-item {
    margin-bottom: 12px;
  }
</style>