<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" >
        <a-row :gutter="24">
          <a-col :xl="6" :lg="8" :md="9" :sm="24">
            <a-form-item label="采购单号">
              <a-input placeholder="请输入" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="5" :lg="5" :md="6" :sm="24">
            <a-form-item label="供应商">
              <a-select
                allowClear
                placeholder="请选择"
              >
                <a-select-option v-for="d in manuSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="4" :lg="5" :md="6" :sm="24">
            <a-form-item label="采购人">
              <a-select
                allowClear
                placeholder="请选择"
              >
                <a-select-option v-for="d in purchasePeopleSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="4" :lg="5" :md="6" :sm="24">
            <a-form-item label="验收人">
              <a-select
                allowClear
                placeholder="请选择"
              >
                <a-select-option v-for="d in checkoutPeopleSelectData" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="采购日期">
                <a-range-picker @change="purchaseDateOnChange" />
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="采购日期">
                <a-range-picker @change="purchaseDateOnChange" />
              </a-form-item>
            </a-col>
            <a-col :xl="5" :lg="8" :md="9" :sm="24">
              <a-form-item label="标题">
                <a-input placeholder="请输入" ></a-input>
              </a-form-item>
            </a-col>
          </template>

          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button type="primary" icon="search">查询</a-button>
              <a-button icon="reload" style="margin-left: 8px">重置</a-button>
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
<!--          <a>查看详情</a>-->
          <router-link :to="{name:'materialManagement-warehousing-warehousingDetails', params:record }">查看详情</router-link>
<!--          <router-link :to="{path:'/material/warehousing/warehousingDetails', query:record }">查看详情</router-link>-->
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" >编辑</a-menu-item>
              <a-menu-item key="2" >
                <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)">删除</a-popconfirm>
              </a-menu-item>

            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </div>

    <PurInModal :modalVisible='modalVisible' @handleCancel='handleCancel'></PurInModal>


  </a-card>
</template>

<script>

import PurInModal from './PurInModal'

export default {
  name: "Index",
  components: {
    PurInModal,
  },
  data () {
    return {
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
          checkoutPeople: '李四',
          checkoutDate: '2020-04-04',
          provider : '程埔头市场',
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
          title:'标题',
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
          title:'验收人',
          align:"center",
          dataIndex: 'checkoutPeople'
        },
        {
          title:'验收日期',
          align:"center",
          dataIndex: 'checkoutDate'
        },
        {
          title:'供应商',
          align:"center",
          dataIndex: 'provider'
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
    purInOnClick() {
      this.modalVisible = true;
    },
    handleCancel() {
      this.modalVisible = false;
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
