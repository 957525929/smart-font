<template>
  <div>
 <!-- 出租列表 -->
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="出租列表">
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
                <a-col :xl="5" :lg="7" :md="8" :sm="24">
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
                      <a-select-option v-for="d in userSelectData" :key="d.value">
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
                  <a-form-item label="合同有效期">
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
            <a-button type="link"  @click="myHandleAdd"   icon="plus">新增</a-button>
            <a-button type="link" icon="download" @click="handleExportXls('合同信息')">导出</a-button>
            <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
              <a-button type="link" icon="import">导入</a-button>
            </a-upload> -->

            <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
            <a style="margin-left: 12px" @click="onClearSelected">清空</a>

          </div>

          <!-- table区域-begin -->
          <div>
            <a-table
              ref="table"
              size="middle"
              bordered
              key="key"
              rowKey="id"
              :scroll="{x:2500}"
              :columns="columns"
              :data-source="dataSource"
              :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
              >
              <span slot="electContract">
<!--                 <a class="ant-dropdown-link"   @click="uploadFile(text)">下载</a>-->
                 <a class="ant-dropdown-link"  >下载</a>
              </span>
              <span slot="action" slot-scope="text,record">
                <!-- <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> -->
                <a class="ant-dropdown-link"  @click="myHandleedit(record)" >编辑 </a>
                <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
              </span>

            </a-table>
          </div>

          <!-- 添加租赁合同记录 -->
            <EnrollLent  :modalVisible='visible' @handleCancel='handleCancel' :curdata="curdata"></EnrollLent>
          </a-card>
      </a-tab-pane>
 <!-- 承租列表 -->
      <a-tab-pane key="2" tab="承租列表" force-render>
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
                  <a-col :xl="5" :lg="7" :md="8" :sm="24">
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
                        <a-select-option v-for="d in manuSelectData1" :key="d.value">
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
                    <a-form-item label="合同有效期">
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
              <a-button type="link"  @click="myHandleAdd"   icon="plus">新增</a-button>
              <a-button type="link" icon="download"  @click="handleExportXls('合同信息')">导出</a-button>
              <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
              <a style="margin-left: 12px" @click="onClearSelected">清空</a>

            </div>
            <!-- table区域-begin -->
            <div>
              <a-table
                ref="table"
                size="middle"
                bordered
                key="key"
                rowKey="id"
                :scroll="{x:2500}"
                :columns="columnspay"
                :dataSource="dataSourcepay"
                :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
              >
              <span slot="electContract">
                 <a class="ant-dropdown-link" >下载</a>
              </span>
                <span slot="action" slot-scope="text,record">
                <!-- <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> -->
                <a class="ant-dropdown-link"  @click="myHandleedit(record)" >编辑 </a>
                <a-divider type="vertical" />
                <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>
              </span>

              </a-table>
            </div>
            <EnrollLent  :modalVisible='visible' @handleCancel='handleCancel' :curdata="curdata"></EnrollLent>
          </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import {setDataSource} from "@views/modules/online/cgform/util/TableUtils";
import JDate from "@comp/jeecg/JDate";
import EnrollLent from "./EnrollLent";
import { JeecgListMixin } from '../../../mixins/JeecgListMixin';
import moment from "moment";
export default {
  name: "rent",
  mixins:[JeecgListMixin],
  components: {
    JDate,
    EnrollLent,
  },
  data () {
      return {
        description: '资产变化表',
        curdata:{},
        startDate:moment().subtract(12, 'years').format('YYYY-MM-DD'),
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
        //承租列表出租方
        manuSelectData1:[
          {
            value : 1,
            text : '福州朝阳贸易有限公司',
          },
          {
            value : 2,
            text : '福州烟草加工厂',
          },
        ],
        //承租列表承租方
        userSelectData1:[
          {
            value : 1,
            text : '烟草公司',
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
        //出租列表数据源
        dataSource: [
        {
          key:'1',
          contractNunmber: 'ZC0001',
          contractName:'方正有限公司房屋和建筑物合同',
          assetUser: '方正有限公司',
          recordDate: '2010-07-05至2025-07-05',
          payCycle:'按年付',
          lentValue: '100000.00',
          worker:'王一',
          noticeWay:'短信通知',
          noticeDay:'3',
          electContract:'合同电子版',
          remark : '承租方负责维护',
        },
          {
            key:'2',
            contractNunmber: 'ZC0002',
            contractName:'卷烟厂房屋和建筑物合同',
            assetUser: '卷烟厂',
            recordDate: '2020-07-05至2025-07-05',
            payCycle:'按年付',
            lentValue: '10000.00',
            worker:'王一',
            noticeWay:'短信通知',
            noticeDay:'3',
            electContract:'合同电子版',
            remark : '承租方负责维护',
          },
      ],
        //承租列表数据源
        dataSourcepay: [
          {
            key:'1',
            contractNunmber: 'CC0001',
            assetOwner: '福州朝阳贸易有限公司',
            contractName:'福州朝阳贸易有限公司房屋和建筑物合同',
            recordDate: '2020-07-05至2025-07-05',
            payCycle:'按季付',
            lentValue: '10000.00',
            noticeWay:'短信通知',
            noticeDay:'3',
            worker:'王一',
            remark : '无',
          },
          {
            key:'2',
            contractNunmber: 'CC0002',
            assetOwner: '福州烟草加工厂',
            contractName:'福州烟草加工厂房屋和建筑物合同',
            recordDate: '2018-07-05至2025-07-05',
            payCycle:'按季付',
            lentValue: '50000.00',
            noticeWay:'短信通知',
            noticeDay:'3',
            worker:'王一',
            remark : '承租方负责维护',
          },
        ],
        time:{
          Date_begin:'',
          Date_end:'',
        },
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
            width:120,
            dataIndex: 'contractNunmber',
          },
          {
            title:'合同名称',
            align:"center",
            fixed: 'left',
            width:220,
            dataIndex: 'contractName',
          },
          // {
          //   title:'出租方',
          //   align:"center",
          //   dataIndex: 'assetOwner'
          // },
          {
            title:'承租方',
            align:"center",
            dataIndex: 'assetUser'
          },
          {
            title:'合同有效期',
            align:"center",
            dataIndex: 'recordDate',
            // customRender:function (text) {
            //   return !text?"":(text.length>10?text.substr(0,10):text)
            // }
          },
          {
            title:'付款周期',
            align:"center",
            dataIndex: 'payCycle'
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
            title:'收租提醒方式',
            align:"center",
            dataIndex: 'noticeWay'
          },
          {
            title:'提前通知天数',
            align:"center",
            dataIndex: 'noticeDay'
          },

          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
          },
          {
            title:'合同电子版',
            align:"center",
            dataIndex: 'electContract',
            scopedSlots: { customRender: 'electContract' },
            // scopedSlots: { customRender: 'contractAsset' },
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
        //承租列表
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
            width:120,
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
          // {
          //   title:'承租方',
          //   align:"center",
          //   dataIndex: 'assetUser'
          // },
          {
            title:'合同有效期',
            align:"center",
            dataIndex: 'recordDate',
            // customRender:function (text) {
            //   return !text?"":(text.length>10?text.substr(0,10):text)
            // }
          },
          {
            title:'付款周期',
            align:"center",
            dataIndex: 'payCycle'
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
            title:'缴租提醒方式',
            align:"center",
            dataIndex: 'noticeWay'
          },
          {
            title:'提前通知天数',
            align:"center",
            dataIndex: 'noticeDay'
          },

          {
            title:'备注',
            align:"center",
            dataIndex: 'remark'
          },
          {
            title:'合同电子版',
            align:"center",
            dataIndex: 'electContract',
            scopedSlots: { customRender: 'electContract' },
            // scopedSlots: { customRender: 'contractAsset' },
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
        visible: false,   //编辑面板
        confirmLoading: false,
        modalVisible:false,
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
      //清空
      onClearSelected() {
      this.selectedRowKeys = [];
    },
      purchaseDateOnChange(date, dateString) {
      console.log(date, dateString);
    },
      //新增合同
      myHandleAdd() {
        this.$router.push({ name: 'CreateContract', params: { }})
      },
      //编辑合同面板
      myHandleedit(record) {
        console.log("e",record)
        this.curdata=record;
        console.log("ecurdata",this.curdata)
        this.visible=true;
      },
      handleCancel(e) {
        console.log('Clicked cancel button');

        this.visible = false;
      },
      //删除合同
      deletConfirm(e) {
        console.log("e",e);
        // const dataSource = [...this.dataSource];
        // this.dataSource = dataSource.filter(item => item.key !== key);
        this.$message.success('删除成功');
        console.log("ddddataSource",this.dataSource)
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