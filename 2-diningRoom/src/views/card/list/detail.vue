<template>
  <a-card :bordered="false">
    <h1 style="font-weight:bold">基本信息：</h1>
    <a-divider />
    <a-row :gutter="16">
      <a-col :xl="5" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>卡号：</div>
          <div>{{ detailsData.card }}</div>
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
          <div>余额(元)：</div>
          <div>{{ detailsData.balance }}</div>
        </div>
      </a-col>
      <a-col :xl="12" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>状态：</div>
          <a-tag :color="status == '正常' ? 'green' : status == '挂失' ? 'red' : 'geekblue'">
            {{ detailsData.status }}
          </a-tag>
        </div>
      </a-col>
      <a-col :xl="12" :lg="8" :md="9" :sm="24">
        <div class="detail-top">
          <div>创建时间：</div>
          <div>{{ detailsData.createTime }}</div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <div class="detail-top" v-if="detailsData.checkState == -1">
        <div>未通过理由：</div>
        <div style="font-size: large;font-family: fangsong;font-weight: bold; color:red">{{ '鸡肉变质' }}</div>
      </div>
    </a-row>

    <a-tabs>
      <a-tab-pane key="1" tab="消费记录">
        <a-form layout="inline">
          <a-row>
            <a-col :span="17"> </a-col>
            <a-col :span="7" style="margin-bottom:10px">
              <a-form-item label="消费时间">
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="开始时间"
                  v-decorator="['startTime']"
                  :default-value="moment(current_start_date)"
                />
                <span class="query-group-split-cust"></span>
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="结束时间"
                  v-decorator="['completionTime']"
                  :default-value="moment(current_stop_date)"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
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
      </a-tab-pane>
      <a-tab-pane key="2" tab="充值记录" force-render>
        <a-form layout="inline">
          <a-row>
            <a-col :span="17"> </a-col>
            <a-col :span="7" style="margin-bottom:10px">
              <a-form-item label="充值时间">
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="开始时间"
                  v-decorator="['startTime']"
                  :default-value="moment(current_start_date)"
                />
                <span class="query-group-split-cust"></span>
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="结束时间"
                  v-decorator="['completionTime']"
                  :default-value="moment(current_stop_date)"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
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
      </a-tab-pane>
      <a-tab-pane key="3" tab="退款记录">
        <a-form layout="inline">
          <a-row>
            <a-col :span="17"> </a-col>
            <a-col :span="7" style="margin-bottom:10px">
              <a-form-item label="退款时间">
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="开始时间"
                  v-decorator="['startTime']"
                  :default-value="moment(current_start_date)"
                />
                <span class="query-group-split-cust"></span>
                <a-date-picker
                  format="YYYY-MM-DD"
                  placeholder="结束时间"
                  v-decorator="['completionTime']"
                  :default-value="moment(current_stop_date)"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-table
          size="middle"
          bordered
          rowKey="id"
          :columns="columns2"
          :pagination="{
            total: this.dataSource3.length,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
          }"
        >
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
import { formatDate } from '../../../utils/util'
import moment from 'moment'
export default {
  name: 'ouputDetails',

  mounted() {
    console.log(this.detailsData)
  },
  data() {
    return {
      moment,
      current_start_date: formatDate(new Date().getTime() - 30 * 24 * 3600 * 1000, 'yyyy-MM-dd'),
      current_stop_date: formatDate(new Date().getTime(), 'yyyy-MM-dd'),
      detailsData: this.$route.params,
      dataSource: [
        {
          id: '1',
          place: '一号食堂',
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '18:01:02',
          money: '13.50',
          enrdMoney: '200.50',
          remark: '梦飞手抓饼'
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
          title: '消费时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '消费金额(元)',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'enrdMoney'
        }
      ],
      dataSource1: [
        {
          id: '1',
          place: '食堂app',
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '18:01:02',
          money: '200.00',
          enrdMoney: '213.50',
          remark: '支付宝'
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
          title: '充值时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '充值金额(元)',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额(元)',
          align: 'center',
          dataIndex: 'enrdMoney'
        },
        {
          title: '支付方式',
          align: 'center',
          dataIndex: 'remark'
        }
      ],
      columns2: [
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
          title: '发起退款时间',
          align: 'center',
          dataIndex: 'time'
        },
        {
          title: '退款金额(元)',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '退款方式',
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
