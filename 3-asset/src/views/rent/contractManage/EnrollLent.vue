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
            <a-col :span="7">
              <a-form-item label="合同编号">
                <a-input v-decorator="['contractNunmber', { rules: [{ required: true}],initialValue:this.curdata.contractNunmber }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="承租方" v-if="this.curdata.assetUser !=null">
                <a-select
                  allowClear
                  placeholder="请选择承租方"
                  v-decorator="['assetOwner', { rules: [{ required: true}],initialValue:this.curdata.assetUser }]"
                  @change="handleChangeOwner"
                >
                  <a-select-option v-for="d in userSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="出租方"  v-if="this.curdata.assetOwner !=null">
                <a-select
                  allowClear
                  placeholder="请选择出租方"
                  v-decorator="['assetOwner', { rules: [{ required: true}],initialValue:this.curdata.assetOwner }]"
                  @change="handleChangeOwner"
                >
                  <a-select-option v-for="d in userSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="资产类别">
                <a-select
                  allowClear
                  placeholder="请选择资产类型"
                  v-decorator="['assetType', { rules: [{ required: true}] ,initialValue:this.assettype }]"
                  @change="handleChangeType"
                >
                  <a-select-option v-for="d in typeSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="7">
              <a-form-item label="合同名称">
                <a-input v-decorator="['contractName', { rules: [{ required: true, message: '请输入!' }],initialValue:this.curdata.contractName }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="15">
              <a-form-item label="合同有效期">
                <j-date  v-decorator="['startDate',{ rules: [{ required: true, message: '请选择!' }],initialValue:this.startDate, }]" style='width: 45%;'/>
                <span class="query-group-split-cust"></span>
                <j-date  v-decorator="['endDate',{ rules: [{ required: true, message: '请选择!' }],initialValue:this.endDate, }]" style='width: 45%;' />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="7">
              <a-form-item label="租金（元）">
                <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }],initialValue:this.curdata.lentValue}]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="承办人">
                <a-select
                  allowClear
                  placeholder="请选择承办人"
                  v-decorator="['worker', { rules: [{ required: true}] ,initialValue:this.curdata.worker}]"
                >
                  <a-select-option v-for="d in workerSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="付款周期">
                <a-select
                  allowClear
                  default-value="年"
                  v-decorator="['paycycle', { rules: [{ required: true}] ,initialValue:this.curdata.payCycle}]"
                >
                  <a-select-option v-for="d in cycleSelectData" :key="d.value" >
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="7">
              <a-form-item label="收租提醒方式">
                <a-select
                  allowClear
                  placeholder="请选择提醒方式"
                  v-decorator="['noticeWay', { rules: [{ required: true}] ,initialValue:this.curdata.noticeWay}]"
                >
                  <a-select-option v-for="d in noticeSelectData" :key="d.value" >
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="提前通知时间（天）">
                <a-input allowClear v-decorator="['noticeday', { rules: [{ required: false}],initialValue:this.curdata.noticeDay }]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="7">
              <a-form-item label="电子合同上传">
                <a-upload
                  list-type="picture"
                  action="//jsonplaceholder.typicode.com/posts/"
                  :preview-file="previewFile"
                >
                  <a-button> <a-icon type="upload" /> Upload </a-button>
                </a-upload>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row :gutter="16">
            <a-col :span="16">
              <a-form-item label="备注">
                <a-input v-decorator="['remark', { rules: [{ required: false, message: '请输入!' }],initialValue:this.curdata.remark  }]"></a-input>
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
import JDate from "@comp/jeecg/JDate";
import moment from 'moment'
export default {
    name: 'EnrollLent',

  components: {
    JEditableTable,
    JDate,
  },
  mounted() {
      console.log("curdata",this.curdata)
  },
  props: {
    modalVisible: Boolean,
    curdata:Object,
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      assettype:"房屋与建筑物",
      startDate:moment().format('YYYY-MM-DD'),
      endDate:moment().subtract(-1, 'years').format('YYYY-MM-DD'),
      curdata1:{},
      //承办人
      workerSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '王一',
        },
        {
          value : 3,
          text : '李四',
        },
        {
          value : 4,
          text : '赵正',
        },
      ],
      //承租方
      userSelectData:[
        {
          value : 1,
          text : '方正有限公司',
        },
        {
          value : 2,
          text : '卷烟厂',
        },
      ],
      //承租对应出租方
      assetOwnerList:[
        {
          value : 1,
          text : '福州朝阳贸易有限公司',
        },
        {
          value : 2,
          text : '福州烟草加工厂',
        },
        {
          value : 3,
          text : '福州卷烟厂',
        },
      ],
      //资产类型
      typeSelectData:[
        {
          value : 1,
          text : '房屋和建筑物',
        },
        {
          value : 2,
          text : '一般办公设备',
        },
        {
          value : 3,
          text : '专用设备',
        },
        {
          value : 4,
          text : '运输设备',
        },
        {
          value : 5,
          text : '其它资产',
        }
      ],
      //付款周期类型
      cycleSelectData:[
        {
          value : 1,
          text : '月',
        },
        {
          value : 2,
          text : '季',
        },
        {
          value : 3,
          text : '年',
        },
      ],
      //通知方式
      noticeSelectData:[
        {
          value : 1,
          text : '短信通知',
        },
        {
          value : 2,
          text : '平台通知',
        },
      ],
      basicInfoForm:{},
      detailsInfoForm:{},
      dataSource: [],
      headers: {
        authorization: 'authorization-text',
      },
      //出租承租方
      a:'',
      a1:'',
      //资产类型
      b:'',
      b1:'',
      //合同名称
      c:'',
      d:'',
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

    handleOkpay() {
      this.form2.validateFields((err, values) => {
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
    //图片上传
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
    previewFilepay(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    onValueChange() {},
    onInEntryAdded() {},
    //更改承租方
    handleChangeOwner(value) {
      console.log(value);
      this.a=this.userSelectData[value-1].text;
      console.log(this.a);
      this.c='出租'+this.b+'给'+this.a+'的合同';
      console.log(this.c);
    },
    //更改资产类型
    handleChangeType(value) {
      console.log(value)
      this.b=this.typeSelectData[value-1].text;
      console.log(this.b);
      this.c='出租'+this.b+'给'+this.a+'的合同';
      console.log(this.c);
    },
    //更改承租方
    handleChangeOwnerpay(value) {
      console.log(value);
      this.a=this.userSelectData[value-1].text;
      this.a1=this.assetOwnerList[value-1].text;
      console.log(this.a);
      this.d='承租'+this.a1+'的'+this.b1+'的合同';
      console.log(this.c);
    },
    //更改资产类型
    handleChangeTypepay(value) {
      console.log(value)
      this.b1=this.typeSelectData[value-1].text;
      console.log(this.b);
      this.d='承租'+this.a1+'的'+this.b1+'的合同';
      console.log(this.c);
    },

  },
}
</script>

<style lang="less" scoped>
.ant-row.ant-form-item {
  margin-bottom: 12px;
}
</style>