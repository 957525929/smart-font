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
        <span slot="action" slot-scope="text, record">
          <a @click="editLimitPrice(record)">编辑</a>
             <a-divider type="vertical" />
          <a @click="handleRecordDetail(record)">记录</a>
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->
    <a-modal v-model="visible" :title="curData.department" @ok="handleOk">
      <a-form-item
        :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"
        label="月限额(元)">
        <a-input-number v-model="curData.limitPrice" class="inputWitdh"  placeholder="请输入部门月限额" :min="0" :max="10000000" :decimalSeparator="0"/>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"
        label="调整理由">
        <a-textarea
          placeholder="请输入部门限额调整理由"
          :auto-size="{ minRows: 3, maxRows: 6 }"
        />
      </a-form-item>
    </a-modal>

    <a-modal v-model="recordVisible" :title="curData.title" :footer="null">
      <record-modal></record-modal>
    </a-modal>
  </a-card>
</template>


<script>
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import RecordModal from './modules/RecordModal'

  export default {
    name: "StocK",
    mixins:[JeecgListMixin],
    components: {
      JDate,
      RecordModal
    },
    data () {
      return {
        description: '部门领用统计页面',
        recordVisible: false,
        visible:false,
        // 查询条件
        queryParam: {},
        curData:{},
        dataSource: [
          {
            id:1,
            department:'卷烟销售管理处',
            limitPrice:'2000',
            remainPrice: '652'
          },
          {
            id:2,
            department:'物流管理处',
            limitPrice:'1500',
            remainPrice: '0'
          },
          {
            id:3,
            department:'人事处',
            limitPrice:'1000',
            remainPrice: '470'
          },
          {
            id:4,
            department:'烟叶管理处',
            limitPrice:'1500',
            remainPrice: '720'
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
           title: '月限额（元）',
             align:"center",
           dataIndex: 'limitPrice'
         },
          {
            title: '当月剩余额度（元）',
            align:"center",
            dataIndex: 'remainPrice'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
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
      onChangeDate(date, dateString) {
        console.log(date, dateString);
      },
      editLimitPrice(record) {
        this.curData = record;
        this.visible = true;
      },
      handleRecordDetail(record) {
        this.curData = record;
        this.curData.title = this.curData.department + '限额调整记录' ;
        this.recordVisible = true;
      },
      handleOk() {
        this.$message.success('修改成功！');
        this.visible = false;
      }
    }
  }
</script>
@import '~@assets/less/common.less'
<style scoped>
.inputWitdh {
  width: 100%
}

</style>