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
              <a-col :xl="5" :lg="5" :md="8" :sm="24">
                <a-form-item label="合同编号">
                  <a-input placeholder="请输入合同编号"></a-input>
                </a-form-item>
              </a-col>
              <a-col :xl="5" :lg="5" :md="8" :sm="24">
                <a-form-item label="合同名称">
                  <a-select
                    allowClear
                    placeholder="请选择合同名称"
                  >
                    <a-select-option v-for="d in ConNameSelectData" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
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
                <a-form-item label="收租日期范围">
                  <j-date class="query-group-cust"  v-model="startDate"/>
                  <span class="query-group-split-cust"></span>
                  <j-date class="query-group-cust"  v-model="endDate"/>
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
          <a-button type="link"  @click="myHandleAdd"  icon="plus">
            新增
          </a-button>
          <a-button type="link" icon="download"  @click="handleExportXls('收租信息')">导出</a-button>
          <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
            <a-button type="link" icon="import">导入</a-button>
          </a-upload> -->

          <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
          <a style="margin-left: 12px" @click="onClearSelected">清空</a>

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
            <span slot="voucher">
                 <a class="ant-dropdown-link"  >查看</a>
              </span>
<!--            <span slot="action" slot-scope="text, record">-->
<!--              <a-dropdown>-->
<!--                <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>-->
<!--                <a-menu slot="overlay">-->
<!--                  <a-menu-item key="1" >编辑</a-menu-item>-->
<!--                  <a-menu-item key="2" >-->
<!--                    <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>-->
<!--                  </a-menu-item>-->
<!--                </a-menu>-->
<!--              </a-dropdown>-->
<!--            </span>-->

          </a-table>
        </div>
        <!-- 添加收租记录 -->
<!--        <Register  :modalVisible="visible" @handleCancel='handleCancel'></Register>-->
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
              <a-col :xl="5" :lg="5" :md="8" :sm="24">
                <a-form-item label="合同名称">
                  <a-select
                    allowClear
                    placeholder="请选择合同名称"
                  >
                    <a-select-option v-for="d in ConNameSelectDatapay" :key="d.value">
                      {{ d.text }}
                    </a-select-option>
                  </a-select>
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
<!--                <a-form-item label="缴租日期">-->
<!--                  <j-date placeholder="请选择缴租日期" class="query-group-cust"  v-model="paytime"></j-date>-->
<!--                </a-form-item>-->
                <j-date class="query-group-cust"  v-model="startDate"></j-date>
                <span class="query-group-split-cust"></span>

                <j-date class="query-group-cust"  v-model="endDate"></j-date>
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
          <a-button type="link" icon="download"  @click="handleExportXls('缴租信息')">导出</a-button>
          <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
            <a-button type="link" icon="import">导入</a-button>
          </a-upload> -->

          <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
          <a style="margin-left: 12px" @click="onClearSelected">清空</a>

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
            :columns="columnspay"
            :dataSource="dataSourcepay"
            :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
          >
             <span slot="voucher">
                 <a class="ant-dropdown-link"  >查看</a>
              </span>
<!--            <span slot="action" slot-scope="text, record">-->
<!--              <a-dropdown>-->
<!--                <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>-->
<!--                <a-menu slot="overlay">-->
<!--                  <a-menu-item key="1" >编辑</a-menu-item>-->
<!--                  <a-menu-item key="2" >-->
<!--                    <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>-->
<!--                  </a-menu-item>-->
<!--                </a-menu>-->
<!--              </a-dropdown>-->
<!--            </span>-->

          </a-table>
        </div>
        <!-- 添加收租记录 -->
<!--        <Register  :modalVisible="visible" @handleCancel='handleCancel'></Register>-->
      </a-card>
    </a-tab-pane>
  </a-tabs>
  </div>
</template>

<script>

import JDate from "@comp/jeecg/JDate";
import Register from "@views/rent/rentManage/Register";
import moment from "moment";
import { JeecgListMixin } from '../../../mixins/JeecgListMixin';
export default {
  name: "collect",
  mixins:[JeecgListMixin],
  components: {
    JDate,
    Register,
  },
  mounted(){
      console.log("1",this.dataSource)
    },
  data () {
      return {
        description: '收租列表',
        startDate:moment().subtract(3, 'years').format('YYYY-MM-DD'),
        endDate:moment().format('YYYY-MM-DD'),
        //合同名称
        ConNameSelectData:[
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
        //承租合同名称选择
        ConNameSelectDatapay:[
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
        paytime:{
          Date_begin:'',
          Date_end:'',
        },
        dataSource: [
          {
            key:'1',
            contractNunmber: 'ZC0001',
            contractName:'方正有限公司房屋和建筑物合同',
            assetUser: '方正有限公司',
            payDate: '2020-07-05',
            lentValue: '100000.00',
            worker:'王立',
            remark:'纸质发票',
          },
          {
            key:'2',
            contractNunmber: 'ZC0002',
            contractName:'卷烟厂房屋和建筑物合同',
            assetUser: '卷烟厂',
            payDate: '2020-07-05',
            lentValue: '10000.00',
            worker:'王立',
            remark:'网络转账记录',
          },
          {
            key:'3',
            contractNunmber: 'ZC0002',
            contractName:'卷烟厂房屋和建筑物合同',
            assetUser: '卷烟厂',
            payDate: '2019-07-05',
            lentValue: '30000.00',
            worker:'王立',
            remark:'网络转账记录',
          }
          ],
        dataSourcepay: [
          {
            key:'1',
            contractNunmber: 'CC0001',
            contractName:'福州朝阳贸易有限公司房屋和建筑物合同',
            assetOwner: '福州朝阳贸易有限公司',
            payDate: '2020-07-05',
            lentValue: '300000.00',
            worker:'王立',
            remark:'纸质发票',

          },
          {
            key:'2',
            contractNunmber: 'CC0002',
            contractName:'福州烟草加工厂房屋和建筑物合同',
            assetOwner: '福州烟草加工厂',
            payDate: '2020-08-05',
            lentValue: '10000.00',
            worker:'王立',
            remark:'网络转账记录',
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
            title:'合同名称',
            align:"center",
            fixed: 'left',
            width:220,
            dataIndex: 'contractName',
          },
          {
            title:'承租方',
            align:"center",
            dataIndex: 'assetUser'
          },
          {
            title:'收租日期',
            align:"center",
            dataIndex: 'payDate'
          },
          {
            title:'收租金额',
            align:"center",
            dataIndex: 'lentValue'
          },
          {
            title:'承办人',
            align:"center",
            dataIndex: 'worker'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
          },
          {
            title:'收租凭证',
            align:"center",
            dataIndex: 'voucher',
            scopedSlots: { customRender: 'voucher' },
          },
          // {
          //   title: '操作',
          //   dataIndex: 'action',
          //   align:"center",
          //   scopedSlots: { customRender: 'action' },
          // }
        ],
        // 缴租表头
        columnspay: [
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
            title:'合同名称',
            align:"center",
            fixed: 'left',
            width:220,
            dataIndex: 'contractName',
          },
          {
            title:'出租方',
            align:"center",
            dataIndex: 'assetOwner'
          },
          {
            title:'收租日期',
            align:"center",
            dataIndex: 'payDate'
          },
          {
            title:'收租金额',
            align:"center",
            dataIndex: 'lentValue'
          },
          {
            title:'承办人',
            align:"center",
            dataIndex: 'worker'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
          },
          {
            title:'收租凭证',
            align:"center",
            dataIndex: 'voucher',
            scopedSlots: { customRender: 'voucher' },
          },
          // {
          //   title: '操作',
          //   dataIndex: 'action',
          //   align:"center",
          //   fixed: 'right',
          //   scopedSlots: { customRender: 'action' },
          // }
        ],
        dictOptions:{},
        toggleSearchStatus: false,
        selectedRowKeys: [],
       // visible: false,
        modalVisible:false,
        confirmLoading: false,
        url: {
          exportXlsUrl: "/sys/user/exportXls",
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
        console.log(e);
        this.$message.success('删除成功');
      },
      purchaseDateOnChange(date, dateString) {
        console.log(date, dateString);
      },
      //新增模块
      myHandleAdd() {
        this.$router.push({ name: 'CreateRegister', params: { }})
      },
      // myHandleAdd1() {
      //   this.$router.push({ name: 'CreateRegister', params: { }})
      // },
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
      // handleCancel(e) {
      //   console.log('Clicked cancel button');
      //   this.visible = false;
      // },

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
