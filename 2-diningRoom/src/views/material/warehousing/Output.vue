<template>
  <div>
    <a-card>
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="8" :lg="8" :md="9" :sm="24">
              <a-form-item label="申请日期">
                <j-date v-decorator="['applyStartDate', { initialValue: this.applyStartDate }]" style="width: 45%" />
                <span class="query-group-split-cust"></span>
                <j-date v-decorator="['applyEndDate', { initialValue: this.applyEndDate }]" style="width: 45%" />
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="5" :md="6" :sm="24">
              <a-form-item label="申请名称">
                <a-input placeholder="请输入" v-decorator="['headline']"></a-input>
              </a-form-item>
            </a-col>
            <!-- <template v-if="toggleSearchStatus">
              <a-col :xl="6" :lg="8" :md="9" :sm="24">
                <a-form-item label="审核状态">
                  <a-select placeholder="请选择" v-decorator="['checkoutState']" allowClear>
                    <a-select-option value="待审核">待审核</a-select-option>
                    <a-select-option value="已通过">已通过</a-select-option>
                    <a-select-option value="未通过">未通过</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template> -->
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-col :md="6" :sm="24">
                <a-button icon="search" @click="handleOk">查询</a-button>
                <a-button icon="reload" style="margin-left: 8px" @click="handleReset">重置</a-button>
                <!-- <a @click="handleToggleSearch" style="margin-left: 8px">
                  {{ toggleSearchStatus ? '收起' : '展开' }}
                  <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
                </a> -->
              </a-col>
            </span>
          </a-row>
        </a-form>
      </div>
      <!-- 查询区域-END -->

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button type="link" icon="plus" @click="purInOnClick">新增</a-button>
        <a-button type="link" icon="download" :disabled="!hasSelected">导出</a-button>
        <i class="anticon anticon-info-circle ant-alert-icon"> </i>已选择<a style="font-weight: 600">
          {{ selectedRowKeys.length }}
        </a>
        项
        <a style="margin-left: 12px" @click="onClearSelected" v-if="hasSelected">清空</a>
      </div>

      <!-- table区域-begin -->
      <div>
        <a-table
          ref="table"
          size="middle"
          bordered
          rowKey="id"
          :columns="columns"
          :dataSource="dataSource"
          :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
          :pagination="{
            total: this.dataSource.length,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`,
          }"
        >
          <span slot="action" slot-scope="text, record">
            <a>查看详情</a>
            <a-divider type="vertical" />
            <a-dropdown>
              <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
              <a-menu slot="overlay">
                <a-menu-item key="1" @click="purInEditOnClick(record)">编辑</a-menu-item>
                <a-menu-item key="2">
                  <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style="margin-left: 10%">
                    删除
                  </a-popconfirm>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </a-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import { formatDate } from '../../../utils/util'
import moment from 'moment'
import JDate from '../../../components/jeecg/JDate'

export default {
  components: {
    JDate,
  },
  data() {
    return {
      applyStartDate: moment().subtract(1, 'weeks').format('YYYY-MM-DD'),
      applyEndDate: moment().format('YYYY-MM-DD'),
      basicInfo: {},
      form1: this.$form.createForm(this),
      // toggleSearchStatus: false,
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          },
        },
        {
          title: '申请人',
          align: 'center',
          dataIndex: 'applicant',
        },
        {
          title: '申请名称',
          align: 'center',
          dataIndex: 'goodsName',
        },
        // {
        //   title: '申请数量(kg)',
        //   align: 'center',
        //   dataIndex: 'weight',
        // },
        {
          title: '申请时间',
          align: 'center',
          dataIndex: 'applyTime',
        },
        {
          title: '备注',
          align: 'center',
          dataIndex: 'note',
        },
        // {
        //   title: '审核人',
        //   align: 'center',
        //   dataIndex: 'checkoutPeople',
        // },
        // {
        //   title: '审核日期',
        //   align: 'center',
        //   dataIndex: 'checkoutDate',
        // },
        // {
        //   title: '审核状态',
        //   align: 'center',
        //   dataIndex: 'checkState',
        //   customRender: function (text) {
        //     return text == 0 ? (
        //       <a-badge color="blue" text="待审核" />
        //     ) : text == 1 ? (
        //       <a-badge color="green" text="已通过" />
        //     ) : (
        //       <a-badge color="red" text="未通过" />
        //     )
        //   },
        // },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataSource: [
        {
          id: '1',
          applicant: '王五',
          goodsName: '8月18日食材申请清单',
          // weight: '2',
          applyTime: formatDate(new Date().getTime(), 'yyyy-MM-d 08:15:22'),
          // checkoutPeople: '-',
          // checkoutDate: '-',
          // checkState: 0,
          note: '第二食堂',
        },
        {
          id: '2',
          applicant: '赵六',
          goodsName: '8月17日食材申请清单',
          // weight: '3',
          applyTime: formatDate(new Date().getTime() - 1 * 24 * 3600 * 1000, 'yyyy-MM-d  hh:mm:ss'),
          // checkoutPeople: '张三',
          // checkoutDate: formatDate(new Date().getTime() - 1 * 24 * 3600 * 1000, 'yyyy-MM-d'),
          // checkState: -1,
          note: '早餐食材',
        },
        {
          id: '3',
          applicant: '钱七',
          goodsName: '8月17日水果申请清单',
          // weight: '2',
          applyTime: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-d  06:30:42'),
          // checkoutPeople: '李四',
          // checkoutDate: formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyy-MM-d'),
          // checkState: 1,
          note: '',
        },
      ],
      selectedRowKeys: [],
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
  },
  methods: {
    // handleToggleSearch() {
    //   if (this.toggleSearchStatus) this.toggleSearchStatus = false
    //   else this.toggleSearchStatus = true
    // },
    purInOnClick() {},
    purInEditOnClick() {},
    deletConfirm(e) {
      this.$message.success('删除成功')
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
    },
    onClearSelected() {
      this.selectedRowKeys = []
    },
    handleReset() {
      this.form1.resetFields() //重置基本信息
    },
    handleOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>