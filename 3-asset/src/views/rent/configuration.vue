<template>
  <div>
<!-- 收租配置 -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="收租配置">
        <a-card :bordered="false">
          <!-- 查询区域 -->
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="24">
                <a-col :xl="5" :lg="7" :md="8" :sm="24">
                  <a-form-item label="合同编号">
                   <a-select allowClear placeholder="请选择合同编号">
                     <a-select-option v-for="d in conSelectData" :key="d.value">
                       {{ d.text }}
                     </a-select-option>
                   </a-select>
                  </a-form-item>
                </a-col>
                <!--                <a-col :xl="5" :lg="5" :md="6" :sm="24">-->
<!--                  <a-form-item label="出租方">-->
<!--                    <a-select-->
<!--                      allowClear-->
<!--                      placeholder="请选择出租方"-->
<!--                    >-->
<!--                      <a-select-option v-for="d in manuSelectData" :key="d.value">-->
<!--                        {{ d.text }}-->
<!--                      </a-select-option>-->
<!--                    </a-select>-->
<!--                  </a-form-item>-->
<!--                </a-col>-->
<!--                <a-col :xl="5" :lg="5" :md="6" :sm="24">-->
<!--                  <a-form-item label="承租方">-->
<!--                    <a-select-->
<!--                      allowClear-->
<!--                      placeholder="请选择承租方"-->
<!--                    >-->
<!--                      <a-select-option v-for="d in userSelectData" :key="d.value">-->
<!--                        {{ d.text }}-->
<!--                      </a-select-option>-->
<!--                    </a-select>-->
<!--                  </a-form-item>-->
<!--                </a-col>-->
                <a-col :xl="5" :lg="5" :md="6" :sm="24">
                  <a-form-item label="承办人">
                    <a-select
                      allowClear
                      placeholder="请选择承办人"
                    >
                      <a-select-option v-for="d in workerSelectData" :key="d.value">
                        {{ d.text }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
<!--                <a-col :xl="8" :lg="9" :md="10" :sm="24">-->
<!--                  <a-form-item label="合同有效期">-->
<!--                    <j-date placeholder="请选择开始" class="query-group-cust"  v-model="time.Date_begin"></j-date>-->
<!--                    <span class="query-group-split-cust"></span>-->
<!--                    <j-date placeholder="请选择结束" class="query-group-cust"  v-model="time.Date_end"></j-date>-->
<!--                  </a-form-item>-->
<!--                </a-col>-->
                <a-col :xl="6" :lg="7" :md="8" :sm="24">
                  <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
                    <a-button type="primary" icon="search">查询</a-button>
                    <a-button icon="reload" style="margin-left: 8px">重置</a-button>
                  </span>
                </a-col>

              </a-row>
            </a-form>
          </div>
          <!-- 查询区域-END -->
          <!-- 操作按钮区域 -->
          <div class="table-operator">
            <a-button type="link" icon="download">导出</a-button>
            <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
            <a style="margin-left: 12px" @click="onClearSelected">清空</a>
          </div>
          <!-- table区域-begin -->
          <div>
            <a-table
              ref="table"
              size="middle"
              bordered
              rowKey="id"
              :scroll="{x:300}"
              :columns="columns"
              :dataSource="dataSource"
              :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
            >
              <span slot="notenow">
                  <a class="ant-dropdown-link" @click="textMessage()"  >一键通知</a>
              </span>
              <span slot="action" slot-scope="text,record">
                <!-- <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> -->
                <a class="ant-dropdown-link" @click="() => edit(record.key)">编辑 </a>
                  <a-divider type="vertical" />
                <a-popconfirm  class="ant-dropdown-link" title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
              </span>

            </a-table>
          </div>
          <!-- 修改收租配置 -->
          <a-modal
            title="修改收租配置"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
            width="700px"
          >
            <a-form-model :layout="form.layout" :model="form" >
              <a-form-model-item label="合同编号" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                <a-select
                  allowClear
                  placeholder="请选择合同编号"
                >
                  <a-select-option v-for="d in conSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item label="承办人" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                <a-input v-model="form.worker" />
              </a-form-model-item>
              <a-form-model-item label="预计收租日期" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                <a-input v-model="form.predictDate" />
              </a-form-model-item>
              <a-form-model-item label="短信提前通知天数" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                <a-input v-model="form.noteahead" />
              </a-form-model-item>
            </a-form-model>
          </a-modal>

        </a-card>
      </a-tab-pane>
<!-- 缴租配置-->
      <a-tab-pane key="2" tab="缴租配置" force-render>
          <a-card :bordered="false">
            <!-- 查询区域 -->
            <div class="table-page-search-wrapper">
              <a-form layout="inline">
                <a-row :gutter="24">
                  <a-col :xl="5" :lg="7" :md="8" :sm="24">
                    <a-form-item label="合同编号">
                      <a-input placeholder="请输入合同编号"></a-input>
                    </a-form-item>
                  </a-col>
<!--                  <a-col :xl="5" :lg="5" :md="6" :sm="24">-->
<!--                    <a-form-item label="出租方">-->
<!--                      <a-select-->
<!--                        allowClear-->
<!--                        placeholder="请选择出租方"-->
<!--                      >-->
<!--                        <a-select-option v-for="d in manuSelectData" :key="d.value">-->
<!--                          {{ d.text }}-->
<!--                        </a-select-option>-->
<!--                      </a-select>-->
<!--                    </a-form-item>-->
<!--                  </a-col>-->
<!--                  <a-col :xl="5" :lg="5" :md="6" :sm="24">-->
<!--                    <a-form-item label="承租方">-->
<!--                      <a-select-->
<!--                        allowClear-->
<!--                        placeholder="请选择承租方"-->
<!--                      >-->
<!--                        <a-select-option v-for="d in userSelectData" :key="d.value">-->
<!--                          {{ d.text }}-->
<!--                        </a-select-option>-->
<!--                      </a-select>-->
<!--                    </a-form-item>-->
<!--                  </a-col>-->
                  <a-col :xl="5" :lg="5" :md="6" :sm="24">
                    <a-form-item label="承办人">
                      <a-select
                        allowClear
                        placeholder="请选择承办人"
                      >
                        <a-select-option v-for="d in workerSelectData" :key="d.value">
                          {{ d.text }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
<!--                  <a-col :xl="8" :lg="9" :md="10" :sm="24">-->
<!--                    <a-form-item label="合同有效期">-->
<!--                      <j-date placeholder="请选择开始" class="query-group-cust"  v-model="time.Date_begin"></j-date>-->
<!--                      <span class="query-group-split-cust"></span>-->
<!--                      <j-date placeholder="请选择结束" class="query-group-cust"  v-model="time.Date_end"></j-date>-->
<!--                    </a-form-item>-->
<!--                  </a-col>-->
                  <a-col :xl="6" :lg="7" :md="8" :sm="24">
                      <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
                        <a-button type="primary" icon="search">查询</a-button>
                        <a-button icon="reload" style="margin-left: 8px">重置</a-button>
                      </span>
                  </a-col>
                </a-row>
              </a-form>
            </div>
            <!-- 查询区域-END -->
            <!-- 操作按钮区域 -->
            <div class="table-operator">
              <a-button type="link" icon="download">导出</a-button>
              <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
              <a style="margin-left: 12px" @click="onClearSelected">清空</a>
            </div>
            <!-- table区域-begin -->
            <div>
              <a-table
                ref="table"
                size="middle"
                bordered
                rowKey="id"
                :scroll="{x:300}"
                :columns="columns"
                :dataSource="dataSourcepay"
                :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
              >
<!--                //短信通知插槽-->
                <span slot="notenow">
                    <a class="ant-dropdown-link" @click="textMessagepay()"  >一键通知</a>
                </span>
<!--                //操作插槽-->
                <span slot="action" slot-scope="text,record">
                  <a class="ant-dropdown-link"  @click="() => editpay(record.key)">编辑 </a>
                  <a-divider type="vertical"/>
                  <a-popconfirm  class="ant-dropdown-link" title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
                </span>
              </a-table>
            </div>
            <!-- 修改缴租配置 -->
            <a-modal
              title="修改缴租配置"
              :visible="visiblepay"
              :confirm-loading="confirmLoading"
              @ok="handleOkpay"
              @cancel="handleCancelpay"
              width="700px"
            >
              <a-form-model :layout="form.layout" :model="form" >
                <a-form-model-item label="合同编号" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                  <a-select
                    allowClear
                    placeholder="请选择合同编号"
                  >
                    <a-select-option v-for="d in conSelectData" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item label="承办人" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                  <a-input v-model="form.worker" />
                </a-form-model-item>
                <a-form-model-item label="预计收租日期" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                  <a-input v-model="form.predictDate" />
                </a-form-model-item>
                <a-form-model-item label="短信提前通知天数" :labelCol='{span:5}' :wrapperCol='{span: 14}'>
                  <a-input v-model="form.noteahead" />
                </a-form-model-item>
              </a-form-model>
            </a-modal>
          </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import JDate from "@comp/jeecg/JDate";

export default {
  name: "rent",
  components: {
    JDate,
  },
  data () {
    return {
      description: '资产变化表',
      //合同列表
      conSelectData:[
        {
          value : 1,
          text : 'ZC0001',
        },
        {
          value : 2,
          text : 'ZC0001',
        },
        {
          value : 3,
          text : 'CC0001',
        },
        {
          value : 4,
          text : 'CC0002',
        },
      ],
      //出租方
      manuSelectData:[
        {
          value : 1,
          text : '烟草公司',
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
      dataSource: [
        {
          key:'1',
          contractNunmber: 'ZC0001',
          assetOwner: '烟草公司',
          assetUser: '方正有限公司',
          recordDate: '2010-07-05至2025-07-05',
          payCycle:'1年1付',
          lentValue: '100000.00',
          worker:'王一',
          workerPhone:'15877875112',
          predictDate:'2021-07-05',
          noteahead:'3天',
        },
        {
          key:'2',
          contractNunmber: 'ZC0002',
          assetOwner: '烟草公司',
          assetUser: '卷烟厂',
          recordDate: '2020-07-05至2025-07-05',
          payCycle:'2季1付',
          lentValue: '10000.00',
          worker:'王一',
          workerPhone:'15877875112',
          predictDate:'2021-07-05',
          noteahead:'5天',
        },
      ],
      //缴租配置
      dataSourcepay: [
        {
          key:'1',
          contractNunmber: 'CC0001',
          assetOwner: '福州朝阳贸易有限公司',
          assetUser: '烟草公司',
          recordDate: '2010-07-05至2025-07-05',
          payCycle:'1年1付',
          lentValue: '100000.00',
          worker:'王一',
          workerPhone:'15877875112',
          predictDate:'2021-07-05',
          noteahead:'3天',
        },
        {
          key:'2',
          contractNunmber: 'CC0001',
          assetOwner: '福州烟草加工厂',
          assetUser: '烟草公司',
          recordDate: '2020-07-05至2025-07-05',
          payCycle:'2季1付',
          lentValue: '10000.00',
          worker:'王一',
          workerPhone:'15877875112',
          predictDate:'2021-07-05',
          noteahead:'5天',
        },
      ],
      time:{
        Date_begin:'',
        Date_end:'',
      },
      visible:false,
      visiblepay:false,
      // 表头
      columns: [
        {
          title:'合同编号',
          align:"center",
          dataIndex: 'contractNunmber',
        },
        // {
        //   title:'出租方',
        //   align:"center",
        //   dataIndex: 'assetOwner'
        // },
        // {
        //   title:'承租方',
        //   align:"center",
        //   dataIndex: 'assetUser'
        // },
        // {
        //   title:'付款周期',
        //   align:"center",
        //   dataIndex: 'payCycle'
        // },
        // {
        //   title:'租金',
        //   align:"center",
        //   dataIndex: 'lentValue'
        // },
        {
          title:'承办人',
          align:"center",
          dataIndex: 'worker',
        },
        // {
        //   title:'承办人手机号码',
        //   align:"center",
        //   dataIndex: 'workerPhone'
        // },
        {
          title:'预计收缴日期',
          align:"center",
          dataIndex: 'predictDate',
          customRender:function (text) {
            return !text?"":(text.length>10?text.substr(0,10):text)
          }
        },
        {
          title:'短信提前通知天数',
          align:"center",
          dataIndex: 'noteahead',
        },
        {
          title:'实时短信通知',
          align:"center",
          dataIndex: 'notenow',
          scopedSlots: { customRender: 'notenow' },
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action' },
        }
      ],
      dictOptions:{},
      toggleSearchStatus: false,
      selectedRowKeys: [],
      confirmLoading: false,
      //编辑表单
      //新增表单
      form: {
        contractNunmber: '',
        worker: '',
        predictDate: '',
        noteahead: '',
      },

    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    handleToggleSearch() {
      if(this.toggleSearchStatus) this.toggleSearchStatus=false;
      else this.toggleSearchStatus=true;
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    onClearSelected() {
      this.selectedRowKeys = [];
    },
    deletConfirm(e) {
      console.log("e",e);
      // const dataSource = [...this.dataSource];
      // this.dataSource = dataSource.filter(item => item.key !== key);
      this.$message.success('删除成功');
      console.log("ddddataSource",this.dataSource)
    },
    purchaseDateOnChange(date, dateString) {
      console.log(date, dateString);
    },
    //收租提示
    textMessage(){
      let secondsToGo = 5;
      const modal = this.$success({
        title: '收租提醒短信已发送',
        // content: `收租短信提醒已发送`,
      });
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    },
    //缴租提示
    textMessagepay(){
      let secondsToGo = 5;
      const modal = this.$success({
        title: '缴租提醒短信已发送',
        // content: `收租短信提醒已发送`,
      });
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    },
    //收租编辑
    edit(key) {
      this.visible=true
      console.log("edit",key)
    },
    handleOk(e) {
      this.confirmLoading = true;
     // const newdata=this.form;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);

      // const { dataSource } = this;
      // this.dataSource = [...dataSource, newdata];
      // this.form={};
      console.log("dataSource",this.dataSource)
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    //缴租编辑
    editpay(key) {
      this.visiblepay=true
      console.log("editpay",key)
    },
    handleOkpay(e) {
      this.confirmLoading = true;
     // const newdata=this.form;
      setTimeout(() => {
        this.visiblepay = false;
        this.confirmLoading = false;
      }, 2000);

      // const { dataSource } = this;
      // this.dataSource = [...dataSource, newdata];
      // this.form={};
      console.log("dataSource",this.dataSource)
    },
    handleCancelpay(e) {
      console.log('Clicked cancel button');
      this.visiblepay = false;
    },

  }
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
</style>
