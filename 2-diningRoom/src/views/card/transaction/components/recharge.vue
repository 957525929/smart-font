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
          <a-tag
            :color="
              status == '支付成功' ? 'green' : status == '未支付' ? 'cyan' : status == '支付失败' ? 'red' : 'geekblue'
            "
          >
            {{ status }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a v-if="record.id == '1'" @click="update(record)">查询</a>
          <div v-if="record.id == '3'">余额不足</div>
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
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '18:01:02',
          money: '200.00元',
          endMoney: '213.50元',
          remark: '支付宝支付',
          status: '支付中'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '财务处',
          time: formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '14:01:02',
          money: '500.00元',
          endMoney: '1000.50元',
          remark: '公司统一餐补',
          status: '未支付'
        },
        {
          id: '3',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '10:01:02',
          money: '50.00元',
          endMoney: '10.50元',
          remark: '微信支付',
          status: '支付失败'
        },
        {
          id: '4',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 5 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 5 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '13:01:02',
          money: '100.00元',
          endMoney: '105.50元',
          remark: '支付宝支付',
          status: '支付成功'
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
          title: '充值地点',
          align: 'center',
          dataIndex: 'place'
        },
        {
          title: '充值时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '充值金额',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'endMoney'
        },
        {
          title: '支付状态',
          align: 'center',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '支付方式',
          dataIndex: 'remark',
          align: 'center'
        },
        {
          title: '备注',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  computed: {},
  methods: {
    update(record) {
      console.log(record)
      record.status = '支付成功'
    }
  }
}
</script>

<style></style>
