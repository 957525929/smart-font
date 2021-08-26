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
          <a-tag :color="status == '正常' ? 'green' : status == '挂失' ? 'red' : 'geekblue'">
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
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '200.50元',
          status: '正常',
          totalMoney: '100',
          operation: '需留样48小时'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '1000.50元',
          status: '注销',
          totalMoney: '100',
          operation: '需留样48小时'
        },
        {
          id: '3',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '10.50元',
          status: '挂失',
          totalMoney: '100',
          operation: '需留样48小时'
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
          title: '余额',
          align: 'center',
          dataIndex: 'balance'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style></style>
