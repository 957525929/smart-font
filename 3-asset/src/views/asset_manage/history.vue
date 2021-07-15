<template>
  <a-card :bordered="false">
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="9号办公楼"
        @back="() => $router.push('/asset_manage/asset')"
      >
        <div class="content">
          <div class="main">
            <a-descriptions size="small" :column="2">
              <a-descriptions-item label="资产编号">
                ZCAT2021070500
              </a-descriptions-item>
              <a-descriptions-item label="资产类型">
                房屋和建筑物
              </a-descriptions-item>
              <a-descriptions-item label="资产价值">
                3000000.00
              </a-descriptions-item>
              <a-descriptions-item label="资产所有方">
                烟草公司
              </a-descriptions-item>
              <a-descriptions-item label="备注">
                无
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </div>
      </a-page-header>
    </div>
    <br/>
    <!-- 时间树 -->
    <div>
        <a-statistic
          title=""
          value="资产历史流转记录"
          :style="{
          marginRight: '32px',
          }"
        />
        <br/>
        <a-timeline
          :style="{
          height: '500px',
          width:'500px',
          margin:'0 0 0 40px',
          fontsize:'30px',
          }"
        >
          <a-timeline-item  color="red">
            2019-01-01至2023-01-01
            <br/>
            <br/>
            方正有限公司  使用中
          </a-timeline-item>
          <br/>
          <a-timeline-item  color="green">
            2015-01-01至2019-01-01
            <br/>
            <br/>
            闲置
          </a-timeline-item>
          <br/>
          <a-timeline-item  color="red">
            2010-01-01至2015-01-01
            <br/>
            <br/>
            烟草公司   使用中
          </a-timeline-item>
          <br/>
          <a-timeline-item  color="green">
            2005-01-01至2010-01-01
            <br/>
            <br/>
            闲置 </a-timeline-item>
        </a-timeline>
      </div>
    <br/>
    <!-- table区域-begin -->
<!--    <div>-->
<!--      <a-table-->
<!--        ref="table"-->
<!--        size="middle"-->
<!--        bordered-->
<!--        rowKey="id"-->
<!--        :scroll="{x:2500}"-->
<!--        :columns="columns"-->
<!--        :dataSource="dataSource"-->
<!--        :rowSelection="{selectedRowKeys: selectedRowKeys, columnWidth: 40, onChange: onSelectChange}"-->
<!--      >-->
<!--        <span slot="action" slot-scope="text, record">-->
<!--          &lt;!&ndash; <router-link :to="{path:'/material/warehousing/warehousingDetails', params:{data:record} }">查看详情</router-link> &ndash;&gt;-->
<!--          <a-divider type="vertical" />-->
<!--          <a-dropdown>-->
<!--            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>-->
<!--            <a-menu slot="overlay">-->
<!--              <a-menu-item key="1" >编辑</a-menu-item>-->
<!--              <a-menu-item key="2" >-->
<!--                <a-popconfirm title="确定删除吗?" @confirm="() => deletConfirm(record)">删除</a-popconfirm>-->
<!--              </a-menu-item>-->
<!--            </a-menu>-->
<!--          </a-dropdown>-->
<!--        </span>-->
<!--      </a-table>-->
<!--    </div>-->

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
          assetStates:'使用中',
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
tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

}
</style>
