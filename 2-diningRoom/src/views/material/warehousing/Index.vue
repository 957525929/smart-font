<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form1">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="8" :md="9" :sm="24">
            <a-form-item label="采购单号">
              <a-input placeholder="请输入" v-decorator="['purchaseOrderNumber']"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="5" :md="6" :sm="24">
            <a-form-item label="供应商">
              <a-select
                allowClear
                placeholder="请选择"
                v-decorator="['provider']"
              >
                <a-select-option v-for="d in manuSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="5" :md="6" :sm="24">
            <a-form-item label="采购人">
              <a-select
                allowClear
                placeholder="请选择"
                v-decorator="['purchasePeople']"
              >
                <a-select-option v-for="d in purchasePeopleSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="采购名称">
                <a-input placeholder="请输入" v-decorator="['headline']"></a-input>
              </a-form-item>
            </a-col>
<!--            <a-col :xl="6" :lg="8" :md="9" :sm="24">-->
<!--              <a-form-item label="采购日期">-->
<!--                <a-range-picker @change="purchaseDateOnChange" v-decorator="['purchaseDate']"/>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
            <a-col :xl="6" :lg="8" :md="9" :sm="24" >
              <a-form-item label="采购开始日期">
                <j-date  v-decorator="['purchaseStartDate']" style='width: 100%'/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="采购结束日期">
                <j-date  v-decorator="['purchaseEndDate']" style='width: 100%'/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="5" :md="6" :sm="24">
              <a-form-item label="审核人">
                <a-select
                  allowClear
                  placeholder="请选择"
                  v-decorator="['checkoutPeople']"
                >
                  <a-select-option v-for="d in checkoutPeopleSelectData" :key="d.value">
                    {{ d.text }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
<!--            <a-col :xl="6" :lg="8" :md="9" :sm="24">-->
<!--              <a-form-item label="审核日期">-->
<!--                <a-range-picker @change="purchaseDateOnChange" v-decorator="['checkoutDate']"/>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
            <a-col :xl="6" :lg="8" :md="9" :sm="24" >
              <a-form-item label="审核开始日期">
                <j-date  v-decorator="['checkoutStartDate']" style='width: 100%'/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="审核结束日期">
                <j-date  v-decorator="['checkoutEndDate']" style='width: 100%'/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="审核状态">
                <a-select v-decorator="['checkoutState']" allowClear >
                  <a-select-option value="审核中">审核中</a-select-option>
                  <a-select-option value="已通过">已通过</a-select-option>
                  <a-select-option value="未通过">未通过</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>

          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button icon="search" @click='handleOk'>查询</a-button>
              <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </a-col>
          </span>

        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button type="link" icon="plus" @click='purInOnClick'>新增</a-button>
      <a-button type="link" icon="download" :disabled="!hasSelected">导出</a-button>
      <i class="anticon anticon-info-circle ant-alert-icon"></i>已选择<a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
      <a style="margin-left: 12px" @click="onClearSelected" v-if='hasSelected'>清空</a>

    </div>

    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"
        >
        <span slot="action" slot-scope="text, record">
          <router-link :to="{name:'material-warehousing-warehousingDetails', params:record }">查看详情</router-link>
<!--          <router-link :to="{path:'/material/warehousing/warehousingDetails', query:record }">查看详情</router-link>-->
<!--          <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>-->
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click='purInEditOnClick(record)'>编辑</a-menu-item>
              <a-menu-item key="2" >
                <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>

    <PurInModal v-if='modalVisible' :modalVisible='modalVisible' @handleCancel='handleCancel' :basicInfo='basicInfo'></PurInModal>


  </a-card>
</template>

<script>

import PurInModal from './PurInModal'
import moment from 'moment'
import JDate from '../../../components/jeecg/JDate'

export default {
  name: "Index",
  components: {
    PurInModal,
    JDate,
  },
  data () {
    return {
      basicInfo:{},
      form1: this.$form.createForm(this),
      manuSelectData:[
        {
          value : 1,
          text : '程埔头市场',
        },
        {
          value : 2,
          text : '闽侯菜市场',
        },
      ],
      purchasePeopleSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '李四',
        },
      ],
      checkoutPeopleSelectData:[
        {
          value : 1,
          text : '张三',
        },
        {
          value : 2,
          text : '李四',
        },
      ],
      description: '采购入库',
      dataSource: [
        {
          id:'1',
          purchaseOrderNumber: 'GZZT20210404001',
          headline: '4月4号采购单1',
          purchasePeople: '张三',
          purchaseDate: '2020-04-04',
          purchaseNum: '100',
          totalMoney: '1000.00',
          checkoutPeople: '-',
          checkoutDate: '-',
          provider : '程埔头市场',
          checkState: 0,
        },
        {
          id:'2',
          purchaseOrderNumber: 'GZZT20210404002',
          headline: '4月4号采购单2',
          purchasePeople: '李四',
          purchaseDate: '2020-04-04',
          purchaseNum: '200',
          totalMoney: '2000.00',
          checkoutPeople: '张三',
          checkoutDate: '2020-04-04',
          provider : '闽侯菜市场',
          checkState: 1,
        },
        {
          id:'3',
          purchaseOrderNumber: 'GZZT20210404003',
          headline: '4月4号采购单3',
          purchasePeople: '李五',
          purchaseDate: '2020-04-04',
          purchaseNum: '200',
          totalMoney: '2000.00',
          checkoutPeople: '张三',
          checkoutDate: '2020-04-04',
          provider : '闽侯菜市场',
          checkState: -1,
        },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          align:"center",
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'采购单号',
          align:"center",
          dataIndex: 'purchaseOrderNumber',
        },
        {
          title:'采购名称',
          align:"center",
          dataIndex: 'headline',
          // customRender:function (text) {
          //   return !text?"":(text.length>10?text.substr(0,10):text)
          // }
        },
        {
          title:'采购人',
          align:"center",
          dataIndex: 'purchasePeople'
        },
        {
          title:'采购日期',
          align:"center",
          dataIndex: 'purchaseDate'
        },
        {
          title:'采购总数',
          align:"center",
          dataIndex: 'purchaseNum'
        },
        {
          title:'总金额',
          align:"center",
          dataIndex: 'totalMoney'
        },
        {
          title:'审核人',
          align:"center",
          dataIndex: 'checkoutPeople'
        },
        {
          title:'审核日期',
          align:"center",
          dataIndex: 'checkoutDate'
        },
        {
          title:'供应商',
          align:"center",
          dataIndex: 'provider'
        },
        {
          title:'审核状态',
          align:"center",
          dataIndex: 'checkState',
          customRender:function (text) {
            return text==0?<a-badge color="blue" text="审核中" /> : text==1?<a-badge color="green" text="已通过" /> : <a-badge color="red" text="未通过" />
          }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action'},
        }
      ],
      toggleSearchStatus: false,
      selectedRowKeys: [],
      modalVisible:false,
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
    onSelectChange(selectedRowKeys, selectedRows) {
      console.log('selectedRowKeys: ', selectedRowKeys);
      console.log('selectedRows: ', selectedRows);
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
    purInOnClick() {
      this.basicInfo={};
      this.modalVisible = true;
    },
    purInEditOnClick(record) {
      this.basicInfo = record;
      this.modalVisible = true;
    },
    handleCancel() {
      this.modalVisible = false;
    },
    handleReset() {
      this.form1.resetFields();//重置基本信息
    },
    handleOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
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
