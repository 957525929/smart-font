<template>
  <div>
<!-- 收租列表 -->
  <a-tabs default-active-key="1">
    <a-tab-pane key="1" tab="收租列表">
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
             <a-col :xl="5" :lg="5" :md="6" :sm="24">
                <a-form-item label="承租方">
                  <a-select
                    allowClear
                    placeholder="请选择承租方"
                  >
                    <a-select-option v-for="d in manuSelectData" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
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
              <a-col :xl="8" :lg="9" :md="10" :sm="24">
                <a-form-item label="收租日期">
                  <j-date placeholder="请选择收租日期" class="query-group-cust"  v-model="paytime"></j-date>
                </a-form-item>
              </a-col>
    <!--          <a-col :xl="5" :lg="5" :md="6" :sm="24">-->
    <!--            <a-form-item label="资产使用人">-->
    <!--              <a-select-->
    <!--                allowClear-->
    <!--                placeholder="请选择资产使用人"-->
    <!--              >-->
    <!--                <a-select-option v-for="d in userSelectData" :key="d.value">-->
    <!--                  {{ d.text }}-->
    <!--                </a-select-option>-->
    <!--              </a-select>-->
    <!--            </a-form-item>-->
    <!--          </a-col>-->
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
          <a-button type="link"  @click="myHandleAdd"  icon="plus">新增</a-button>
          <a-button type="link" icon="download">导出</a-button>
          <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
            <a-button type="link" icon="import">导入</a-button>
          </a-upload> -->

          <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
          <a style="margin-left: 12px" @click="onClearSelected">清空</a>

        </div>

        <!-- 统计数值区域 -->
        <div class="table-statistic " style="background: #ECECEC; padding: 15px">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="收租总次数"
                  :value="21"
                  suffix="次"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                >
                  <template #prefix>
                    <a-icon type="fund" />
                    <!--                <a-icon type="arrow-up" />-->
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="收租收入总金额"
                  :value="24"
                  :precision="2"
                  suffix="万"
                  class="demo-class"
                  :value-style="{ color: '#cf1322' }"
                >
                  <template #prefix>
                    <a-icon type="dollar" />
                    <!--                <a-icon type="arrow-down" />-->
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
          </a-row>
        </div>

        <br/>
        <!-- table区域-begin -->
        <div>
          <a-table
            ref="table"
            size="middle"
            bordered
            rowKey="key"
            :scroll="{x:2500}"
            :columns="columns"
            :dataSource="dataSource"
            :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
            >
            <span slot="rentRemind">
               <a class="ant-dropdown-link" @click="textMessage()"  >发送提示短信</a>
            </span>
            <span slot="action" slot-scope="text, record">
              <a-dropdown>
                <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
                <a-menu slot="overlay">
                  <a-menu-item key="1" >编辑</a-menu-item>
                  <a-menu-item key="2" >
                    <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </span>

          </a-table>
        </div>
        <!-- 添加收租记录 -->
        <Register  :modalVisible="visible" @handleCancel='handleCancel'></Register>
      </a-card>
    </a-tab-pane>
<!-- 缴租列表 -->
    <a-tab-pane key="2" tab="缴租列表" force-render>
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
              <a-col :xl="5" :lg="5" :md="6" :sm="24">
                <a-form-item label="出租方">
                  <a-select
                    allowClear
                    placeholder="请选择出租方"
                  >
                    <a-select-option v-for="d in ownerSelectData" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
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
              <a-col :xl="8" :lg="9" :md="10" :sm="24">
                <a-form-item label="缴租日期">
                  <j-date placeholder="请选择缴租日期" class="query-group-cust"  v-model="paytime"></j-date>
                </a-form-item>
              </a-col>
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
          <a-button type="link"  @click="myHandleAdd"  icon="plus">新增</a-button>
          <a-button type="link" icon="download">导出</a-button>
          <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
            <a-button type="link" icon="import">导入</a-button>
          </a-upload> -->

          <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
          <a style="margin-left: 12px" @click="onClearSelected">清空</a>

        </div>

        <!-- 统计数值区域 -->
        <div class="table-statistic " style="background: #ECECEC; padding: 15px">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="缴租总次数"
                  :value="11"
                  suffix="次"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                >
                  <template #prefix>
                    <a-icon type="fund" />
                    <!--                <a-icon type="arrow-up" />-->
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="缴租支出租总金额"
                  :value="12"
                  :precision="2"
                  suffix="万"
                  class="demo-class"
                  :value-style="{ color: '#cf1322' }"
                >
                  <template #prefix>
                    <a-icon type="dollar" />
                    <!--                <a-icon type="arrow-down" />-->
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
          </a-row>
        </div>

        <br/>
        <!-- table区域-begin -->
        <div>
          <a-table
            ref="table"
            size="middle"
            bordered
            rowKey="key"
            :scroll="{x:2500}"
            :columns="columns"
            :dataSource="dataSourcepay"
            :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
          >
            <span slot="rentRemind">
               <a class="ant-dropdown-link" @click="textMessage()"  >发送提示短信</a>
            </span>
            <span slot="action" slot-scope="text, record">
              <a-dropdown>
                <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
                <a-menu slot="overlay">
                  <a-menu-item key="1" >编辑</a-menu-item>
                  <a-menu-item key="2" >
                    <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </span>

          </a-table>
        </div>
        <!-- 添加收租记录 -->
        <Register  :modalVisible="visible" @handleCancel='handleCancel'></Register>
      </a-card>
    </a-tab-pane>
  </a-tabs>
  </div>
</template>

<script>

import JDate from "@comp/jeecg/JDate";
import Register from "@views/rent/rentManage/Register";
export default {
  name: "collect",
  components: {
    JDate,
    Register
  },
  mounted(){
      console.log("1",this.dataSource)
    },
  data () {
      return {
        description: '收租列表',
        //承租方
        manuSelectData:[
        {
          value : 1,
          text : '方正有限公司',
        },
          {
            value : 2,
            text : '卷烟厂',
          },
          {
            value : 3,
            text : '烟草公司',
          },
      ],
        //承办人
        workerSelectData:[
          {
            value : 1,
            text : '王立',
          },
          {
            value : 2,
            text : '严西',
          },
        ],
        //出租方
        ownerSelectData:[
          {
            value : 1,
            text : '烟草公司',
          },
          {
            value : 2,
            text : '福州朝阳贸易有限公司',
          },
          {
            value : 3,
            text : '福州烟草加工厂',
          },
        ],
        paytime:'',
        dataSource: [
          {
            key:'1',
            contractNunmber: 'ZC0001',
            assetUser: '方正有限公司',
            assetOwner: '烟草公司',
            payDate: '2020-07-05',
            lentValue: '100000.00',
            worker:'王立',
            voucher:'纸质发票',
            remark : '暂无',
          },
          {
            key:'2',
            contractNunmber: 'ZC0002',
            assetUser: '卷烟厂',
            assetOwner: '烟草公司',
            payDate: '2020-08-05',
            lentValue: '10000.00',
            worker:'王立',
            voucher:'网络转账记录',
            remark : '暂无',
          },
          {
            key:'3',
            contractNunmber: 'ZC0003',
            assetOwner: '烟草公司',
            assetUser: '卷烟厂',
            payDate: '2020-07-13',
            lentValue: '30000.00',
            worker:'王立',
            voucher:'网络转账记录',
            remark : '暂无',
          }
          ],
        dataSourcepay: [
          {
            key:'1',
            contractNunmber: 'CC0001',
            assetOwner: '福州朝阳贸易有限公司',
            assetUser: '烟草公司',
            payDate: '2020-07-05',
            lentValue: '100000.00',
            worker:'王立',
            voucher:'纸质发票',
            remark : '暂无',
          },
          {
            key:'2',
            contractNunmber: 'CC0002',
            assetOwner: '福州烟草加工厂',
            assetUser: '烟草公司',
            payDate: '2020-08-05',
            lentValue: '10000.00',
            worker:'王立',
            voucher:'网络转账记录',
            remark : '暂无',
          },
        ],
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            fixed: 'left',
            width:40,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title:'合同编号',
            align:"center",
            fixed: 'left',
            width:130,
            dataIndex: 'contractNunmber',
          },
          {
            title:'出租方',
            align:"center",
            dataIndex: 'assetOwner'
          },
          {
            title:'承租方',
            align:"center",
            dataIndex: 'assetUser'
          },
          {
            title:'收缴租金日期',
            align:"center",
            dataIndex: 'payDate'
          },
          {
            title:'租金',
            align:"center",
            dataIndex: 'lentValue'
          },
          {
            title:'承办人',
            align:"center",
            dataIndex: 'worker'
          },
          {
            title:'收租凭证',
            align:"center",
            dataIndex: 'voucher'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
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
        visible: false,
        modalVisible:false,
        confirmLoading: false,
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
        console.log(e);
        this.$message.success('删除成功');
      },
      purchaseDateOnChange(date, dateString) {
        console.log(date, dateString);
      },
      //新增模块
      myHandleAdd() {
        this.visible = true;
      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        const newdata=this.form;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
        // this.dataSource=[...dataSource,form];
        // console.log("dataSource",this.dataSource)
        const { dataSource } = this;
        this.dataSource = [...dataSource, newdata];
        this.form={};
        console.log("dataSource",this.dataSource)
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },

      //收租提示
      textMessage(){
        let secondsToGo = 5;
        const modal = this.$success({
          title: '收租短信提醒已发送',
          // content: `收租短信提醒已发送`,
        });

        setTimeout(() => {
          clearInterval(interval);
          modal.destroy();
        }, secondsToGo * 1000);
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
