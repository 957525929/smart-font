<template>
  <a-card :bordered="false" class="card-area">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <!-- 搜索区域 -->
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="部门">
              <a-select v-model="queryParam.department" placeholder="请选择部门">
                <a-select-option value="">不限</a-select-option>
                <a-select-option value="1">卷烟销售管理处</a-select-option>
                <a-select-option value="2">物流管理处</a-select-option>
                <a-select-option value="3">烟叶管理处</a-select-option>
                <a-select-option value="4">人事处</a-select-option>
              </a-select>
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

  export default {
    name: "StocK",
    mixins:[JeecgListMixin],
    components: {
      JDate
    },
    data () {
      return {
        description: '部门领用统计页面',
        // 查询条件
        queryParam: {},
        dataSource: [
          {
            id:1,
            department:'卷烟销售管理处',
            limitPrice:'2000',
            receiveNum: '8',
            receivePrice: '1348'
          },
          {
            id:2,
            department:'物流管理处',
            limitPrice:'1500',
            receiveNum: '10',
            receivePrice: '2120'
          },
          {
            id:3,
            department:'人事处',
            limitPrice:'1000',
            receiveNum: '5',
            receivePrice: '630'
          },
          {
            id:4,
            department:'烟叶管理处',
            limitPrice:'1500',
            receiveNum: '12',
            receivePrice: '780'
          }
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
            title: '部门',
            align:"center",
            dataIndex: 'department'
          },
          {
            title: '领用次数',
            dataIndex: 'receiveNum',
            align:"center"
          },
          {
            title: '领用价值(元)',
            dataIndex: 'receivePrice',
            align:"center"
          },
         {
           title: '月限额（元）',
             align:"center",
           dataIndex: 'limitPrice'
         },
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