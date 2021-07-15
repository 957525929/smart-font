<template>
  <a-card :bordered="false" class="card-area">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <!-- 搜索区域 -->
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="名称" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <a-input placeholder="请输入办公用品名称查询" v-model="queryParam.name"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="10" :sm="12">
            <a-form-item label="时间" :labelCol="{span: 5}" :wrapperCol="{span: 18, offset: 1}">
              <j-date v-model="queryParam.time_begin" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择开始时间" ></j-date>
              <span style="width: 10px;">~</span>
              <j-date v-model="queryParam.time_end" :showTime="true" date-format="YYYY-MM-DD" style="width:45%" placeholder="请选择结束时间"></j-date>
            </a-form-item>
          </a-col>

          <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
            <a-col :md="6" :sm="24">
              <a-button type="primary" @click="searchQuery">查询</a-button>
              <a-button style="margin:0 8px" @click="searchReset">重置</a-button>
              <a-button type="primary" icon="download" @click="handleExportXls('办公用品统计信息')">导出</a-button>
            </a-col>
          </span>
        </a-row>
      </a-form>
    </div>

    <div style="background: #ECECEC; padding: 30px">
      <a-row :gutter="16">
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="采购总次数"
              :value="total.purchaseNumTotal"
              :precision="0"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="采购总数量"
              :value="total.purchaseAmountTotal"
              :precision="0"
              class="demo-class"
              :value-style="{ color: '#1394C5' }"
            >
              <template #prefix>
                <a-icon type="shopping" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="入库总次数"
              :value="total.stockNumTotal"
              :precision="0"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="入库总数量"
              :value="total.stockAmountTotal"
              :precision="0"
              class="demo-class"
              :value-style="{ color: '#1394C5' }"
            >
              <template #prefix>
                <a-icon type="shopping" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="入库总价值(元)"
              :value="total.stockMoneyTotal"
              :precision="0"
              class="demo-class"
              :value-style="{ color: '#6495ED' }"
            >
              <template #prefix>
                <a-icon type="pay-circle" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="领用总次数"
              :value="total.receiveNumTotal"
              :precision="0"
              :value-style="{ color: '#3f8600' }"
              style="margin-right: 50px"
            >
              <template #prefix>
                <a-icon type="file-done" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="领用总数量"
              :value="total.receiveAmountTotal"
              :precision="0"
              class="demo-class"
              :value-style="{ color: '#1394C5' }"
            >
              <template #prefix>
                <a-icon type="shopping" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="3">
          <a-card>
            <a-statistic
              title="领用总价值(元)"
              :value="total.receiveMoneyTotal"
              :precision="0"
              class="demo-class"
              :value-style="{ color: '#6495ED' }"
            >
              <template #prefix>
                <a-icon type="pay-circle" />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
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
        :pagination="ipagination"
        :loading="loading"
        @change="handleTableChange">

      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>


<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import {formatDate} from "@/utils/util"

  export default {
    name: "StocK",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '办公用品统计页面',
        // 查询条件
        queryParam: {
          time_begin:formatDate(new Date().getTime()-30*24*3600*1000,"yyyy-MM-dd"),
          time_end:formatDate(new Date().getTime(),"yyyy-MM-dd")
        },
        total: {
          purchaseNumTotal: '4',
          purchaseAmountTotal:'55',
          stockNumTotal: '4',
          stockAmountTotal:'55',
          stockMoneyTotal:'17280',
          receiveNumTotal: '3',
          receiveAmountTotal:'4',
          receiveMoneyTotal:'1768',
        },
        dataSource: [
          {
            id:1,
            articleName: '马克笔',
            purchaseNum: '2',
            purchaseAmount: '40',
            stockNum: '2',
            stockAmount: '40',
            stockMoney: '800',
            receiveNum: '1',
            receiveAmount: '2',
            receiveMoney: '40',
            unit:'盒'

          },
          {
            id:2,
            articleName: '打印机',
            purchaseNum: '1',
            purchaseAmount: '5',
            stockNum: '1',
            stockAmount: '5',
            stockMoney: '8000',
            receiveNum: '1',
            receiveAmount: '1',
            receiveMoney: '1600',
            unit:'台'
          },
          {
            id:3,
            articleName: 'A4纸',
            purchaseNum: '1',
            purchaseAmount: '10',
            stockNum: '1',
            stockAmount: '10',
            stockMoney: '1280',
            receiveNum: '1',
            receiveAmount: '1',
            receiveMoney: '128',
            unit:'箱'
          },
        ],
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '办公用品名称',
            align:"center",
            dataIndex: 'articleName'
          },
          {
            title: '采购次数',
            align:"center",
            dataIndex: 'purchaseNum'
          },
          {
            title: '采购数量',
            align:"center",
            dataIndex: 'purchaseAmount'
          },
          {
            title: '入库次数',
            dataIndex: 'stockNum',
            align:"center"
          },
          {
            title: '入库数量',
            dataIndex: 'stockAmount',
            align:"center"
          },
          {
            title: '入库价值(元)',
            dataIndex: 'stockMoney',
            align:"center"
          },
          {
            title: '领用次数',
            dataIndex: 'receiveNum',
            align:"center"
          },
          {
            title: '领用数量',
            dataIndex: 'receiveAmount',
            align:"center"
          },
          {
            title: '领用价值(元)',
            dataIndex: 'receiveMoney',
            align:"center"
          },
          {
            title: '计量单位',
            dataIndex: 'unit',
            align:"center"
          }
        ],
        url123: {
          list: "/sys/role/list",
          delete: "/sys/role/delete",
          deleteBatch: "/sys/role/deleteBatch",
          exportXlsUrl: "/sys/role/exportXls",
          importExcelUrl: "sys/role/importExcel",
        },
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      }
    },
    methods: {
      handlePerssion: function(roleId){
       // alert(roleId);
        this.$refs.modalUserRole.show(roleId);
      },
      onChangeDate(date, dateString) {
        console.log(date, dateString);
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less'
</style>