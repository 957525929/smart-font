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
                <a-form-item label="状态">
                  <a-select allowClear v-decorator="['status']" placeholder="请选择">
                    <a-select-option value="正常">正常</a-select-option>
                    <a-select-option value="注销">注销</a-select-option>
                    <a-select-option value="挂失">挂失</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :xl="8" :lg="8" :md="9" :sm="24">
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

              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="充值金额">
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
                <a-button style="margin-left: 8px" icon="download">导出</a-button>
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
          <a-tag
            :color="
              status == '支付成功' ? 'green' : status == '未支付' ? 'cyan' : status == '支付失败' ? 'red' : 'geekblue'
            "
          >
            {{ status }}
          </a-tag>

          <a-tooltip v-if="status == '支付中'" title="更新支付状态">
            <a-icon type="reload" @click="update" />
          </a-tooltip>
        </span>
        <span slot="action" slot-scope="text, record">
          <!-- <a v-if="record.id == '1'" @click="update(record)">查询</a> -->
          <div v-if="record.id == '3'">余额不足</div>
        </span>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { formatDate } from '../../../../utils/util'
import moment from 'moment'
export default {
  name: 'consume',

  data() {
    return {
      moment,
      current_start_date: formatDate(new Date().getTime() - 30 * 24 * 3600 * 1000, 'yyyy-MM-dd'),
      current_stop_date: formatDate(new Date().getTime(), 'yyyy-MM-dd'),
      toggleSearchStatus: true,
      seen: false,
      dataSource: [
        {
          id: '1',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMdd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '18:01:02',
          money: '200.00',
          endMoney: '213.50',
          remark: '支付宝支付',
          status: '支付中',
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMdd'),
          place: '财务处',
          time: formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '14:01:02',
          money: '500.00',
          endMoney: '1000.50',
          remark: '公司统一餐补',
          status: '未支付',
          department: '烟叶管理处',
          name: '李翠花',
          phone: '16250740952'
        },
        {
          id: '3',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMdd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '10:01:02',
          money: '50.00',
          endMoney: '10.50',
          remark: '微信支付',
          status: '支付失败',
          department: '审计处',
          name: '王二蛋',
          phone: '15910740100'
        },
        {
          id: '4',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 5 * 24 * 3600 * 1000, 'yyyyMMdd'),
          place: '食堂app',
          time: formatDate(new Date().getTime() - 5 * 24 * 3600 * 1000, 'yyyy-MM-dd') + ' ' + '13:01:02',
          money: '100.00',
          endMoney: '105.50',
          remark: '支付宝支付',
          status: '支付成功',
          department: '审计处',
          name: '许七安',
          phone: '15910750111'
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
          title: '充值金额(元)',
          align: 'center',
          dataIndex: 'money'
        },
        {
          title: '余额(元)',
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
    update() {
      console.log(this.dataSource)
      this.dataSource.map(item => {
        if (!item.status.indexOf('支付中')) {
          item.status = '支付成功'
        }
      })
    },
    handleToggleSearch() {
      if (this.toggleSearchStatus) this.toggleSearchStatus = false
      else this.toggleSearchStatus = true
    }
  }
}
</script>

<style></style>
