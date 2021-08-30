<template>
  <div>
    <a-card>
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
          <a-tag :color="status == '退款成功' ? 'green' : status == '挂失' ? 'red' : 'geekblue'">
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
      dataSource: [
        {
          id: '1',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '财务处',
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '15:22:32',
          money: '1000.50元',
          method: '银行卡转账',
          endMoney: '0元',
          remark: '离职',
          status: '退款成功',
          content: ''
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
  methods: {}
}
</script>

<style></style>
