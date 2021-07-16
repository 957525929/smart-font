<template>
  <div>
    <!-- 租金收缴配置 -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="消息通知默认配置设置">
        <a-card :bordered="false">
          <!-- 主表单区域 -->
          <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="收租通知默认配置">
              <a-form :form="form1">
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="通知方式">
                      <a-select
                        allowClear
                        placeholder="请选择通知方式"
                        v-decorator="['noticeway', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in waySelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="提前通知天数">
                      <a-input v-decorator="['noticeday', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
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
            <a-tab-pane key="2" tab="缴租通知默认配置">
              <a-form :form="form2">
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="通知方式">
                      <a-select
                        allowClear
                        placeholder="请选择通知方式"
                        v-decorator="['noticeway', { rules: [{ required: true}] }]"
                      >
                        <a-select-option v-for="d in waySelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row :gutter="16">
                  <a-col :span="7">
                    <a-form-item label="提前通知天数">
                      <a-input v-decorator="['noticeday', { rules: [{ required: true, message: '请输入!' }] }]"></a-input>
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

import moment from 'moment'
export default {
  name: "CreateRegister",
  components: {
  },

  props: {
    modalVisible: Boolean,
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      //通知方式
      waySelectData:[
        {
          value : 1,
          text : '短信通知',
        },
        {
          value : 2,
          text : '平台通知',
        },
      ],


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