<template>
  <div>
    <a-card>
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="卡号">
                <a-input placeholder="请输入" v-decorator="['sampleNumber']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="部门">
                <a-select allowClear v-decorator="['department']" placeholder="请选择">
                  <a-select-option value="物流管理处">物流管理处</a-select-option>
                  <a-select-option value="烟叶管理处">烟叶管理处</a-select-option>
                  <a-select-option value="审计处">审计处</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="姓名">
                <a-input placeholder="请输入" v-decorator="['name']"></a-input>
              </a-form-item>
            </a-col>
            <template v-if="toggleSearchStatus">
              <a-col :xl="6" :lg="8" :md="9" :sm="24">
                <a-form-item label="联系方式">
                  <a-input placeholder="请输入" v-decorator="['number']" />
                </a-form-item>
              </a-col>
              <a-col :xl="6" :lg="8" :md="9" :sm="24">
                <a-form-item label="退款进度">
                  <a-select allowClear v-decorator="['status']" placeholder="请选择">
                    <a-select-option value="处理中">处理中</a-select-option>
                    <a-select-option value="退款成功">退款成功</a-select-option>
                    <a-select-option value="退款失败">退款失败</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="退款时间">
                  <a-date-picker placeholder="请输入" style="width: 47%;" v-decorator="['startTime']" />
                  <span class="query-group-split-cust"></span>
                  <a-date-picker placeholder="请输入" style="width: 47%;" v-decorator="['endTime']" />
                </a-form-item>
              </a-col>

              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="退款金额">
                  <a-input placeholder="请输入" style="width: 47%;" v-decorator="['startMon']" />
                  <span class="query-group-split-cust"></span>
                  <a-input placeholder="请输入" style="width: 47%;" v-decorator="['endMon']" />
                </a-form-item>
              </a-col>
            </template>

            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-col :md="6" :sm="24">
                <a-button icon="search" @click="handleQueryOk">查询</a-button>
                <a-button icon="reload" style="margin-left: 8px" @click="handleReset">重置</a-button>
                <a @click="handleToggleSearch" style="margin-left: 8px">
                  {{ toggleSearchStatus ? '收起' : '展开' }}
                  <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
                </a>
              </a-col>
            </span>
          </a-row>
        </a-form>
      </div>
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{
          total: this.dataSource.length,
          showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
        }"
      >
        <span slot="status" slot-scope="status">
          <a-tag :color="status == '退款成功' ? 'green' : status == '退款失败' ? 'red' : 'geekblue'">
            {{ status }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <router-link :to="{ name: 'material-warehousing-warehousingDetails', params: record }">查看记录</router-link>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down"/></a>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="purInEditOnClick(record)">编辑</a-menu-item>
              <a-menu-item key="2">
                <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style="margin-left: 10%;"
                  >删除</a-popconfirm
                >
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { formatDate } from '../../../../utils/util'
export default {
  name: 'consume',
  data() {
    return {
      toggleSearchStatus: true,
      dataSource: [
        {
          id: '1',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '15:22:32',
          money: '1000.50元',
          method: '银行卡转账',
          endMoney: '0元',
          remark: '离职',
          status: '退款成功',
          content: '',
          department: '烟叶管理处',
          name: '李翠花',
          phone: '16250740952',
          place: '财务处'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 6 * 24 * 3600 * 1000, 'yyyyMMd'),
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '15:22:32',
          money: '100.50元',
          method: '现金支付',
          endMoney: '0元',
          remark: '离职',
          status: '处理中',
          content: '',
          department: '烟草管理处',
          name: '张桂华',
          phone: '18520014758',
          place: '财务处'
        },
        {
          id: '3',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 7 * 24 * 3600 * 1000, 'yyyyMMd'),
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '15:22:32',
          money: '500.50元',
          method: '银行卡转账',
          endMoney: '0元',
          remark: '离职',
          status: '退款失败',
          content: '未提供有效证明',
          department: '审计处',
          name: '李二娃',
          phone: '15207745369',
          place: '财务处'
        }
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '卡号',
          align: 'center',
          dataIndex: 'cardNumber'
        },
        {
          title: '部门',
          align: 'center',
          dataIndex: 'department'
        },
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'name'
        },
        {
          title: '联系方式',
          align: 'center',
          dataIndex: 'phone'
        },
        {
          title: '退款地点',
          align: 'center',
          dataIndex: 'place'
        },
        {
          title: '退款时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '退款金额',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '退款方式',
          align: 'center',
          dataIndex: 'method'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'endMoney'
        },
        {
          title: '退款理由',
          dataIndex: 'remark',
          align: 'center'
        },
        {
          title: '退款进度',
          align: 'center',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '备注',
          dataIndex: 'content',
          align: 'center'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleToggleSearch() {
      if (this.toggleSearchStatus) this.toggleSearchStatus = false
      else this.toggleSearchStatus = true
    }
  }
}
</script>

<style></style>
