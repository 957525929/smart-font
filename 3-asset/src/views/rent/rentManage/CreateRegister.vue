<template>
  <div>
    <!-- 租金收缴登记 -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="收租登记">
        <a-card :bordered="false">
          <!-- 主表单区域 -->
          <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="基本信息">
              <a-form :form="form1">
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="承租方">
                      <a-select
                        allowClear
                        placeholder="请选择承租方"
                        v-decorator="['assetOwner', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in userSelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="合同名称">
                      <a-select
                        allowClear
                        placeholder="请选择合同名称"
                        v-decorator="['contractName', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in contractNameSelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="收租日期">
                      <j-date  v-decorator="['startDate',{ rules: [{ required: true, message: '请选择!' }],initialValue:this.startDate, }]" style='width: 100%;'/>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="收租金额">
                      <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
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
                    <a-form-item label="收租凭证">
                      <a-upload
                        list-type="picture"
                        action="//jsonplaceholder.typicode.com/posts/"
                      >
                        <a-button> <a-icon type="upload" /> 上传 </a-button>
                      </a-upload>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="备注">
                      <a-select
                        mode="tags"
                        allowClear
                        v-decorator="['beizhu', { rules: [{ required: false}] }]"
                      >
                        <a-select-option v-for="d in beizhuSelectData" :key="d.text">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
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
      <a-tab-pane key="2" tab="缴租登记" force-render>
        <a-card :bordered="false">
          <!-- 主表单区域 -->
          <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="基本信息">
              <a-form :form="form2">
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="收租方">
                      <a-select
                        allowClear
                        placeholder="请选择收租方"
                        v-decorator="['assetOwnerpay', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in assetOwnerList" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="合同名称">
                      <a-select
                        allowClear
                        placeholder="请选择合同名称"
                        v-decorator="['contractNamepay', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in contractNameSelectDatapay" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="缴租日期">
                      <j-date  v-decorator="['startDate',{ rules: [{ required: true, message: '请选择!' }],initialValue:this.startDate, }]" style='width: 100%;'/>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="缴租金额">
                      <a-input v-decorator="['lentValue', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
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
                    <a-form-item label="缴租凭证">
                      <a-upload
                        list-type="picture"
                        action="//jsonplaceholder.typicode.com/posts/"

                      >
                        <a-button> <a-icon type="upload" /> 上传 </a-button>
                      </a-upload>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="备注">
                      <a-select
                        allowClear
                        v-decorator="['beizhu', { rules: [{ required: false}] }]"
                        mode="tags"
                      >
                        <a-select-option v-for="d in beizhuSelectData" :key="d.text">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
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
import JDate from "@comp/jeecg/JDate";
export default {
  name: "CreateRegister",
  components: {
    JEditableTable,
    JDate,
  },
  props: {
    modalVisible: Boolean,
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      startDate:moment().format('YYYY-MM-DD'),
      //合同名称
      contractNameSelectData:[
        {
          value : 1,
          text : '烟草公司房屋和建筑物合同',
        },
        {
          value : 2,
          text : '方正有限公司房屋和建筑物合同',
        },
        {
          value : 3,
          text : '卷烟厂房屋和建筑物合同',
        },
      ],
      //承租合同
      contractNameSelectDatapay:[
        {
          value : 1,
          text : '福州朝阳贸易有限公司房屋和建筑物合同',
        },
        {
          value : 2,
          text : '福州烟草加工厂房屋和建筑物合同',
        },
        {
          value : 3,
          text : '福州卷烟厂房屋和建筑物合同',
        },
      ],
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
      //凭证类型
      beizhuSelectData:[
        {
          index : 1,
          text : '纸质发票',
        },
        {
          index : 2,
          text : '网络转账记录',
        },
      ],
      basicInfoForm:{},
      detailsInfoForm:{},
      dataSource: [],
      headers: {
        authorization: 'authorization-text',
      },
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