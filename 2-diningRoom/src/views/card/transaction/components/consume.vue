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
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '一号食堂',
          time: '2021-08-25 18:01:02',
          money: '13.50元',
          endMoney: '200.50元',
          remark: '梦飞手抓饼',
          content: ''
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          place: '二号食堂',
          time: '2021-08-24 12:01:02',
          money: '15.50元',
          endMoney: '10.50元',
          remark: '江南第一鸡'
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
        },
        {
          title: '消费商户',
          dataIndex: 'remark',
          align: 'center'
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
