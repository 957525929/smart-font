<template>
  <div>
    <!-- 新建出租合同 -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="新建出租合同">
        <a-card :bordered="false">
            <!-- 主表单区域 -->
            <a-tabs default-active-key="1" >
              <a-tab-pane key="1" tab="基本信息">
                <a-form :form="form1">
                  <a-row :gutter="16">
                    <a-col :span="5">
                      <a-form-item label="合同编号">
                        <a-input v-decorator="['contractNunmber', { rules: [{ required: true}] }]"></a-input>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
                      <a-form-item label="承租方">
                        <a-select
                          allowClear
                          placeholder="请选择承租方"
                          v-decorator="['assetOwner', { rules: [{ required: true}] }]"
                          @change="handleChangeOwner"
                        >
                          <a-select-option v-for="d in userSelectData" :key="d.value">
                            {{ d.text }}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
                      <a-form-item label="资产类别">
                        <a-select
                          allowClear
                          placeholder="请选择资产类型"
                          v-decorator="['assetType', { rules: [{ required: true}] }]"
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
                    <a-col :span="5">
                      <a-form-item label="合同名称">
                        <a-input v-decorator="['contractName', { rules: [{ required: true, message: '请输入!' }],initialValue:this.c }]"></a-input>
                      </a-form-item>
                    </a-col>
                    <a-col :span="11">
                      <a-form-item label="合同有效期">
                        <a-date-picker placeholder='' v-decorator="['recordDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>~<a-date-picker placeholder='' v-decorator="['endDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <a-row :gutter="16">
                    <a-col :span="5">
                      <a-form-item label="租金（元）">
                        <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
                      <a-form-item label="承办人">
                        <a-select
                          allowClear
                          placeholder="请选择承办人"
                          v-decorator="['worker', { rules: [{ required: true}] }]"
                        >
                          <a-select-option v-for="d in workerSelectData" :key="d.value">
                            {{ d.text }}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
                      <a-form-item label="付款周期">
                        <a-select
                          allowClear
                          placeholder="请选择承办人"
                        >
                          <a-select-option v-for="d in cycleSelectData" :key="d.value" >
                            {{ d.text }}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <a-row :gutter="16">
                    <a-col :span="5">
                      <a-form-item label="收租提醒方式">
                        <a-select
                          allowClear
                          placeholder="请选择提醒方式"
                        >
                          <a-select-option v-for="d in noticeSelectData" :key="d.value" >
                            {{ d.text }}
                          </a-select-option>
                        </a-select>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
                      <a-form-item label="提前通知时间（天）">
                        <a-input allowClear v-decorator="['noticeday', { rules: [{ required: false}] }]"></a-input>
                      </a-form-item>
                    </a-col>
                    <a-col :span="5">
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
                    <a-col :span="15">
                      <a-form-item label="备注">
                        <a-input v-decorator="['remark', { rules: [{ required: false, message: '请输入!' }] }]"></a-input>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>

                <!-- 底部按钮 -->
                <template>
                  <a-button key="cancel" @click="handleCancel">取消</a-button>
                  <a-button key="reset" @click="handleReset">重置</a-button>
                  <a-button key="submit" type="primary" @click='handleOk' >提交</a-button>
                </template>
              </a-tab-pane>
            </a-tabs>

        </a-card>
      </a-tab-pane>
      <!-- 承租列表 -->
      <a-tab-pane key="2" tab="新建承租合同" force-render>
        <a-card :bordered="false">
          <!-- 主表单区域 -->
          <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="基本信息">
              <a-form :form="form2">
                <a-row :gutter="16">
                  <a-col :span="5">
                    <a-form-item label="合同编号">
                      <a-input v-decorator="['contractNunmber', { rules: [{ required: true}] }]"></a-input>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="出租方">
                      <a-select
                        allowClear
                        placeholder="请选择出租方"
                        v-decorator="['assetOwner', { rules: [{ required: true}] }]"
                        @change="handleChangeOwnerpay"
                      >
                        <a-select-option v-for="d in assetOwnerList" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="资产类别">
                      <a-select
                        allowClear
                        placeholder="请选择资产类型"
                        v-decorator="['assetType', { rules: [{ required: true}] }]"
                        @change="handleChangeTypepay"
                      >
                        <a-select-option v-for="d in typeSelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="5">
                    <a-form-item label="合同名称">
                      <a-input allowClear v-decorator="['contractName', { rules: [{ required: true, message: '请输入!' }],initialValue:this.d}]"></a-input>
                    </a-form-item>
                  </a-col>
                  <a-col :span="11">
                    <a-form-item label="合同有效期">
                      <a-date-picker placeholder='' v-decorator="['recordDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>~<a-date-picker placeholder='' v-decorator="['endDate', { rules: [{ required: true, message: '请选择!' }] }]" style="width: 45%"></a-date-picker>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="5">
                    <a-form-item label="租金（元）">
                      <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="承办人">
                      <a-select
                        allowClear
                        placeholder="请选择承办人"
                        v-decorator="['worker', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in workerSelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="付款周期">
                      <a-select
                        allowClear
                        placeholder="请选择付款周期"
                      >
                        <a-select-option v-for="d in cycleSelectData" :key="d.value" >
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="5">
                    <a-form-item label="缴租提醒方式">
                      <a-select
                        allowClear
                        placeholder="请选择提醒方式"
                      >
                        <a-select-option v-for="d in noticeSelectData" :key="d.value" >
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="提前通知时间（天）">
                      <a-input allowClear v-decorator="['noticeday', { rules: [{ required: false}] }]"></a-input>
                    </a-form-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-item label="电子合同上传">
                      <a-upload
                        list-type="picture"
                        action="//jsonplaceholder.typicode.com/posts/"
                        :preview-file="previewFilepay"
                      >
                        <a-button> <a-icon type="upload" /> Upload </a-button>
                      </a-upload>
                    </a-form-item>
                  </a-col>

                </a-row>
                <a-row :gutter="16">
                  <a-col :span="15">
                    <a-form-item label="备注">
                      <a-input v-decorator="['remark', { rules: [{ required: false, message: '请输入!' }] }]"></a-input>
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-form>

              <!-- 底部按钮 -->
              <template>
                <a-button key="cancel" @click="handleCancel">取消</a-button>
                <a-button key="reset" @click="handleReset">重置</a-button>
                <a-button key="submit" type="primary" @click='handleOkpay' >提交</a-button>
              </template>
            </a-tab-pane>
          </a-tabs>

        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import  JEditableTable from '@comp/jeecg/JEditableTable'
import { FormTypes } from '@/utils/JEditableTableUtil'
import moment from 'moment'
export default {
  name: "CreateContract",
  components: {
    JEditableTable,
  },

  props: {
    modalVisible: Boolean,
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
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
          text : '烟草公司',
        },
        {
          value : 2,
          text : '方正有限公司',
        },
        {
          value : 3,
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
      this.c=this.a+this.b+'合同';
      console.log(this.c);
    },
    //更改资产类型
    handleChangeType(value) {
      console.log(value)
      this.b=this.typeSelectData[value-1].text;
      console.log(this.b);
      this.c=this.a+this.b+'合同';
      console.log(this.c);
    },
    //更改承租方
    handleChangeOwnerpay(value) {
      console.log(value);
      this.a=this.userSelectData[value-1].text;
      this.a1=this.assetOwnerList[value-1].text;
      console.log(this.a);
      this.d=this.a1+this.b+'合同';
      console.log(this.c);
    },
    //更改资产类型
    handleChangeTypepay(value) {
      console.log(value)
      this.b1=this.typeSelectData[value-1].text;
      console.log(this.b);
      this.d=this.a1+this.b1+'合同';
      console.log(this.c);
    },
  },

}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.table-page-search-wrapper {
  margin-bottom: 8px;
}

.table-page-search-wrapper .ant-form-item,
.table-page-search-wrapper .table-page-search-submitButtons {
  margin-top: 12px;
  margin-bottom: 12px;
}
.ant-row.ant-form-item {
  margin-bottom: 12px;
}
</style>