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
              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="消费时间">
                  <a-date-picker placeholder="请输入" style="width: 47%;" v-decorator="['startTime']" />
                  <span class="query-group-split-cust"></span>
                  <a-date-picker placeholder="请输入" style="width: 47%;" v-decorator="['endTime']" />
                </a-form-item>
              </a-col>

              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="消费金额">
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
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '一号食堂',
          time: '2021-08-25 18:01:02',
          money: '13.50元',
          endMoney: '200.50元',
          remark: '梦飞手抓饼',
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '二号食堂',
          time: '2021-08-24 12:01:02',
          money: '15.50元',
          endMoney: '10.50元',
          department: '审计处',
          name: '王二蛋',
          phone: '15910740100'
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
          title: '地点',
          align: 'center',
          dataIndex: 'place'
        },
        {
          title: '消费时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '消费金额',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'endMoney'
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
