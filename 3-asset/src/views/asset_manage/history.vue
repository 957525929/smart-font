<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form1">
        <a-row :gutter="24">
          <a-col :xl="5" :lg="5" :md="6" :sm="24">
            <a-form-item label="资产所有方">
              <a-select
                allowClear
                placeholder="请选择资产所有方"
              >
                <a-select-option v-for="d in manuSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="5" :lg="5" :md="6" :sm="24">
            <a-form-item label="资产使用方">
              <a-select
                allowClear
                placeholder="请选择资产使用方"
              >
                <a-select-option v-for="d in userSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="8" :lg="9" :md="10" :sm="24">
            <a-form-item label="时间范围">
              <j-date placeholder="请选择开始" class="query-group-cust" ></j-date>
              <span class="query-group-split-cust"></span>
              <j-date placeholder="请选择结束" class="query-group-cust"></j-date>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" icon="search" @click="queryOK">查询</a-button>
              <a-button icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <!--      <a-button type="link"  @click="myHandleAdd"  icon="plus">新增</a-button>-->
      <a-button type="link" icon="download">导出</a-button>
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
        rowKey="id"
        :scroll="{x:2500}"
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"
      >
        <span slot="action" slot-scope="text, record">
          <!-- <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> -->
          <a-divider type="vertical" />
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

  </a-card>
</template>

<script>

import JDate from "../../components/jeecg/JDate";

export default {
  name: "asset-history",
  components: {
    JDate,
  },
  data () {
    return {
      form1:this.$form.createForm(this),
      description: '资产变化表',
      //资产所有方
      manuSelectData:[
        {
          value : 1,
          text : '烟草公司',
        },],
      //资产使用方
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
      dataSource: [
        {
          key:'1',
          assetNunmber: 'ZCAT2021070500',
          assetName: '9号办公楼',
          assetType:'房屋和建筑物',
          assetValue: '3000000.00',
          assetOwner: '烟草公司',
          assetUser: '方正有限公司',
          recordDate: '2019-01-01至2023-01-01',
          assetStates:'租出',
          remark : '无',
        },
        {
          key:'2',
          assetNunmber: 'ZCAT2021070500',
          assetName: '9号办公楼',
          assetType:'房屋和建筑物',
          assetValue: '3000000.00',
          assetOwner: '烟草公司',
          assetUser: '无',
          recordDate: '2015-01-01至2019-01-01',
          assetStates:'闲置',
          remark : '无',
        },
        {
          key:'3',
          assetNunmber: 'ZCAT2021070500',
          assetName: '9号办公楼',
          assetType:'房屋和建筑物',
          assetValue: '3000000.00',
          assetOwner: '烟草公司',
          assetUser: '烟草公司',
          recordDate: '2005-01-01至2015-01-01',
          assetStates:'使用中',
          remark : '无',
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
          title:'资产编号',
          fixed:'left',
          width:130,
          align:"center",
          dataIndex: 'assetNunmber',
        },
        {
          title:'资产名称',
          align:"center",
          dataIndex: 'assetName'
        },
        {
          title:'资产类型',
          align:"center",
          dataIndex: 'assetType'
        },
        {
          title:'资产价值',
          align:"center",
          dataIndex: 'assetValue'
        },
        {
          title:'资产所有方',
          align:"center",
          dataIndex: 'assetOwner'
        },
        {
          title:'资产使用方',
          align:"center",
          dataIndex: 'assetUser'
        },
        {
          title:'资产状态',
          align:"center",
          dataIndex: 'assetStates'
        },
        {
          title:'时段',
          align:"center",
          dataIndex: 'recordDate',
          // customRender:function (text) {
          //   return !text?"":(text.length>10?text.substr(0,10):text)
          // }
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
      if(this.toggleSearchStatus)
        this.toggleSearchStatus=false;
      else
        this.toggleSearchStatus=true;
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
    queryOK() {
      this.form1.validateField((err, values)=>{
        if(!err) {
          console.log('查询信息：', values)
        }
      })
    }

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
</style>
