<template>
  <a-card :bordered="false">
    <h1 style="font-weight:bold">基本信息：</h1>
    <a-divider />
    <a-row :gutter="16">
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>卡号：</div>
          <div>{{ detailsData.cardNumber }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>部门：</div>
          <div>{{ detailsData.department }}</div>
        </div>
      </a-col>
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>姓名：</div>
          <div>{{ detailsData.name }}</div>
        </div>
      </a-col>
      <a-col :xl="4" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>联系方式：</div>
          <div>{{ detailsData.phone }}</div>
        </div>
      </a-col>
      <a-col :xl="4" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>余额：</div>
          <div>{{ detailsData.balance }}</div>
        </div>
      </a-col>
      <a-col :xl="4" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>状态：</div>
          <a-tag :color="status == '正常' ? 'green' : status == '挂失' ? 'red' : 'geekblue'">
            {{ detailsData.status }}
          </a-tag>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <div class="detail-top" v-if="detailsData.checkState == -1">
        <div>未通过理由：</div>
        <div style="font-size: large;font-family: fangsong;font-weight: bold; color:red">{{ '鸡肉变质' }}</div>
      </div>
    </a-row>

    <h1 style="font-weight:bold">消费记录：</h1>
    <a-divider />
    <a-table
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
    </a-table>

    <h1 style="font-weight:bold">充值记录：</h1>
    <a-divider />
    <a-table
      size="middle"
      bordered
      rowKey="id"
      :columns="columns1"
      :dataSource="dataSource1"
      :pagination="{
        total: this.dataSource.length,
        showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
      }"
    >
    </a-table>

    <h1 style="font-weight:bold">退款记录：</h1>
    <a-divider />
    <a-table
      size="middle"
      bordered
      rowKey="id"
      :columns="columns1"
      :pagination="{
        total: this.dataSource3.length,
        showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
      }"
    >
    </a-table>
  </a-card>
</template>

<script>
export default {
  name: 'ouputDetails',

  mounted() {
    console.log(this.detailsData)
  },
  data() {
    return {
      detailsData: this.$route.params,
      dataSource: [
        {
          id: '1',
          place: '一号食堂',
          time: '2021-08-25 18:01:02',
          money: '13.50元',
          enrdMoney: '200.50元',
          remark: '梦飞麻辣烫'
        }
      ],
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
          title: '地点',
          align: 'center',
          dataIndex: 'place'
        },
        {
          title: '时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '金额',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'enrdMoney'
        },
        {
          title: '备注',
          align: 'center',
          dataIndex: 'remark'
        }
      ],
      dataSource1: [
        {
          id: '1',
          place: '食堂app',
          time: '2021-08-24 18:01:02',
          money: '200.00元',
          enrdMoney: '213.50元',
          remark: '支付宝快捷支付'
        }
      ],
      columns1: [
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
          title: '地点',
          align: 'center',
          dataIndex: 'place'
        },
        {
          title: '时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '金额',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'enrdMoney'
        },
        {
          title: '备注',
          align: 'center',
          dataIndex: 'remark'
        }
      ],
      dataSource3: []
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.detail-top {
  vertical-align: middle;
  margin-bottom: 20px;
}
</style>
