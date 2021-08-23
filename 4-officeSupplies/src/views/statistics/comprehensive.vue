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
              <a-button type="primary" icon="download" @click=" ('办公用品统计信息')">导出</a-button>
            </a-col>
          </span>
        </a-row>
      </a-form>
    </div>
    <!-- table区域-begin -->
    <div>
      <a-table
        ref="table"
        :columns="columns"
        :data-source="data"
        bordered
        size="middle"
        :loading="loading"
        :scroll="{ x: 'calc(700px + 50%)'}"
        :customRow="customRow"
        :pagination="false"
      >
           <span slot="applyYearBasis" slot-scope="applyYearBasis">
            <a-tag
              :color="applyYearBasis.indexOf('+') == -1 ? 'volcano' : 'green'"
            >
              <a-icon :type="applyYearBasis.indexOf('+') == -1 ? 'arrow-down' : 'arrow-up'" />
              {{applyYearBasis}}
            </a-tag>
          </span>
          <span slot="applyChainBasis" slot-scope="applyChainBasis">
            <a-tag
              :color="applyChainBasis.indexOf('+') == -1 ? 'volcano' : 'green'"
            >
              <a-icon :type="applyChainBasis.indexOf('+') == -1 ? 'arrow-down' : 'arrow-up'" />
              {{applyChainBasis}}
            </a-tag>
          </span>
          <span slot="receiveYearBasis" slot-scope="receiveYearBasis">
              <a-tag
                :color="receiveYearBasis.indexOf('+') == -1 ? 'volcano' : 'green'"
              >
                <a-icon :type="receiveYearBasis.indexOf('+') == -1 ? 'arrow-down' : 'arrow-up'" />
                {{receiveYearBasis}}
              </a-tag>
            </span>
          <span slot="receiveChainBasis" slot-scope="receiveChainBasis">
              <a-tag
                :color="receiveChainBasis.indexOf('+') == -1 ? 'volcano' : 'green'"
              >
                <a-icon :type="receiveChainBasis.indexOf('+') == -1 ? 'arrow-down' : 'arrow-up'" />
                {{receiveChainBasis}}
              </a-tag>
            </span>
      </a-table>
    </div>
    <!-- table区域-end -->
  </a-card>
</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JDate from '@/components/jeecg/JDate'
import { formatDate } from '@/utils/util'

export default {
  name: "Comprehensive",
  mixins:[JeecgListMixin],
  components: {
    JDate
  },
  data () {
    return {
      description: '综合报表页面',
      queryParam: {
        roleName:'',
        time_begin:formatDate(new Date().getTime()-30*24*3600*1000,"yyyy-MM-dd"),
        time_end:formatDate(new Date().getTime(),"yyyy-MM-dd")
      },
      data:[
        {
          key: 1,
          name: '卷烟销售管理处',
          applyNumber: '2',
          applyAmount: '5',
          applyPrice: 2035,
          applyYearBasis:'+5.8%',
          applyChainBasis:'+10.2%',
          receiveNumber: '2',
          receiveAmount: '5',
          receivePrice: '1982',
          receiveYearBasis:'+6.8%',
          receiveChainBasis:'+9.3%'
        },
        {
          key: 2,
          name: '物流管理处',
          applyNumber: '3',
          applyAmount: '6',
          applyPrice: 1530,
          applyYearBasis:'+7.3%',
          applyChainBasis:'-11.9%',
          receiveNumber: '2',
          receiveAmount: '6',
          receivePrice: '1530',
          receiveYearBasis:'+9.8%',
          receiveChainBasis:'-9.3%'
        },
        {
          key: 3,
          name: '烟叶管理处',
          applyNumber: '4',
          applyAmount: '4',
          applyPrice: 1450,
          applyYearBasis:'-9.2%',
          applyChainBasis:'-8.7%',
          receiveNumber: '3',
          receiveAmount: '4',
          receivePrice: '1650',
          receiveYearBasis:'-8.8%',
          receiveChainBasis:'-8.2%'
        },
        {
          key: 4,
          name: '人事处',
          applyNumber: '3',
          applyAmount: '5',
          applyPrice: 570,
          applyYearBasis:'+15.8%',
          applyChainBasis:'-6.6%',
          receiveNumber: '3',
          receiveAmount: '5',
          receivePrice: '570',
          receiveYearBasis:'+14.8%',
          receiveChainBasis:'-7.2%'
        },
        {
          key: 5,
          name: '汇总',
          applyNumber: '12',
          applyAmount: '20',
          applyPrice: 5585,
          applyYearBasis:'+15.8%',
          applyChainBasis:'-14.3%',
          receiveNumber: '10',
          receiveAmount: '20',
          receivePrice: '5732',
          receiveYearBasis:'+20.1%',
          receiveChainBasis:'-15.2%'
        }
      ],
      columns:[
        {
          title: '部门名称',
          align:'center',
          dataIndex: 'name',
          key: 'name',
          width: 130,
        },
        {
          title: '采购申请统计',
          children: [
            {
              title: '申请次数',
              dataIndex: 'applyNumber',
              key: 'applyNumber',
              align:'center',
              width: 100
            },
            {
              title: '申请数量',
              dataIndex: 'applyAmount',
              key: 'applyAmount',
              align:'center',
              width: 100
            },
            {
              title: '申请价值(元)',
              dataIndex: 'applyPrice',
              key: 'applyPrice',
              align:'center',
              width: 100
            },
          ],
        },
        {
          title: '对比',
          children: [
            {
              title: '同比',
              dataIndex: 'applyYearBasis',
              key: 'applyYearBasis',
              scopedSlots: { customRender: 'applyYearBasis' },
              align:'center',
              width: 100
            },
            {
              title: '环比',
              dataIndex: 'applyChainBasis',
              key: 'applyChainBasis',
              scopedSlots: { customRender: 'applyChainBasis' },
              align:'center',
              width: 100
            }
          ],
        },
        {
          title: '物品领用统计',
          children: [
            {
              title: '领用次数',
              dataIndex: 'receiveNumber',
              key: 'receiveNumber',
              align:'center',
              width: 100
            },
            {
              title: '领用数量',
              dataIndex: 'receiveAmount',
              key: 'receiveAmount',
              align:'center',
              width: 100
            },
            {
              title: '领用价值(元)',
              dataIndex: 'receivePrice',
              key: 'receivePrice',
              align:'center',
              width: 100
            },
          ],
        },
        {
          title: '对比',
          children: [
            {
              title: '同比',
              dataIndex: 'receiveYearBasis',
              key: 'receiveYearBasis',
              scopedSlots: { customRender: 'receiveYearBasis' },
              align:'center',
              width: 100
            },
            {
              title: '环比',
              dataIndex: 'receiveChainBasis',
              key: 'receiveChainBasis',
              scopedSlots: { customRender: 'receiveChainBasis' },
              align:'center',
              width: 100
            }
          ],
        },
      ],
      curData:{},
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
    },
    customRow(record, index) {
      if(record.name == '汇总') {
        return {
          // 这个style就是我自定义的属性，也就是官方文档中的props
          style: {
            // 字体颜色
            color: 'red',
            'font-weight': 'bolder',
            'background-color':  '#F0FFF0',
          }
        }
      }
    },
  }
}
</script>
@import '~@assets/less/common.less'
<style scoped>
.inputWitdh {
  width: 100%;
}

</style>