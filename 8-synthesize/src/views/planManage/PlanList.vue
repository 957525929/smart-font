<template>
  <div>
    <PageTemplate :columns="data.columns">
      <div class="table-operator">
        <a-row type="flex" justify="end">
          <a-col>
            <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
            <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
            <!-- <a-button type="dashed" icon="download" @click="handleExportXls(`${text}`)">导出</a-button> -->
            <a-button type="dashed" icon="download" @click="handleExportXls(`${currentPlanName}`)">导出</a-button>
            <a-button v-if="selectedRowKeys.length > 0" style="margin-left: 8px"> 批量删除 </a-button>
          </a-col>
        </a-row>
      </div>

      <!-- table区域-begin -->
      <div>
        <a-table ref="table" size="middle" :model="data" bordered :columns="data.columns" :dataSource="data.dataSource" :loading="loading" :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
          <a slot="planNameList" slot-scope="text" @click="showDetails(text), handleExportXls3(`${currentItem}`)">{{
          text
        }}</a>

          <!-- <span slot="action" slot-scope="text, record, index">
            <a @click="showDetails(record), gotoMenu(key)">详情</a> -->
          <!-- <a @click="showDetails(record)">详情</a> -->

          <!-- <a-divider type="vertical" />
            <a-dropdown> -->
          <!-- <a class="ant-dropdown-link">更多
                <a-icon type="down" />
              </a> -->
          <!-- <a-menu slot="overlay">
                <a-menu-item><a @click="handleEdit(record)">编辑</a></a-menu-item>
                <a-menu-item> -->
          <!-- <a-popconfirm title="确定删除吗?" @confirm="() => deleteIndex(index)">
                    <a>删除</a>
                  </a-popconfirm> -->
          <!-- </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span> -->
          <span slot="action" slot-scope="text, record">
            <template v-for="(i, index) in record.action">

              <template v-if="i.com === 'router-link'">
                <router-link :key="i.tagName" :to="{ name: i.url }">{{ i.tagName }}</router-link>
              </template>
              <template v-else>
                <a-dropdown :key="i.tagName">
                  <a class="ant-dropdown-link">{{ i.tagName }}
                    <a-icon type="down" />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item><a @click="handleEdit(record)">编辑</a></a-menu-item>
                    <a-menu-item>
                      <a-popconfirm title="确定删除吗?" @confirm="() => deleteIndex(index)">
                        <a>删除</a>
                      </a-popconfirm>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </template>

              <a-divider :key="i.tagName" type="vertical" v-if="index !== record.action.length - 1" />
            </template>
          </span>
          <!-- 状态渲染模板 -->
          <template slot="customRenderStatus" slot-scope="status">
            <a-tag v-if="status === '0'" color="orange">未开始</a-tag>
            <a-tag v-if="status === '1'" color="green">进行中</a-tag>
            <a-tag v-if="status === '2'" color="cyan">已完成</a-tag>
            <a-tag v-if="status === '3'" color="red"> 已超时 </a-tag>
            <!-- <a-modal v-model="visible" title="是否确认延长时间" @ok="confirm(record)" @cancel="cancel">
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="任务名称" hasFeedback>
              <a-date-picker @change="getDateTime" v-model="timeOut" style="width: 200px" />
            </a-form-item>
          </a-modal> -->
          </template>
        </a-table>
      </div>
    </PageTemplate>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <PlanListModal ref="modalForm" @ok="modalFormOk"> </PlanListModal>
  </div>
</template>

<script>
import PlanListModal from './modules/PlanListModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from '@/components/jeecg/JEllipsis'
import { status, importment } from "@/utils/dataDictionary.js";
import PageTemplate from '@/components/page/PageTemplate.vue';

export default {
  name: 'PlanList',
  mixins: [JeecgListMixin],
  components: {
    PlanListModal,
    JEllipsis,
    PageTemplate
  },
  data() {
    const rowSelection = {
      onSelect: (record, selected, selectedRows) => {
        this.currentPlanName = record.planName
        console.log(this.currentPlanName)
      },
    }
    // const gotoMenu = (key) => {
    //   if (key == 4) {
    //     this.$router.replace({ path: '/planManage/tasklist' })
    //   }
    //   if (key == 3) {
    //     this.$router.replace({ path: '/planManage/tasklist01' })
    //   }
    //   if (key == 2) {
    //     this.$router.replace({ path: '/planManage/tasklist02' })
    //   }
    //   if (key == 1) {
    //     this.$router.replace({ path: '/planManage/tasklist03' })
    //   }
    // }
    const data = {
      // 表头
      columns: [
        {
          title: '计划编号',
          dataIndex: '',
          key: 'rowIndex',
          width: 90,
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          },
        },
        {
          title: '计划名称',
          align: 'center',
          dataIndex: 'planName',
          width: 200,
          unhidden: true,
          scopedSlots: { customRender: 'planNameList' },
        },
        {
          title: '计划状态',
          align: 'center',
          width: 100,
          dataIndex: 'status',
          unhidden: true,
          type: 'a-select',
          valueEnum: status,
          scopedSlots: { customRender: 'customRenderStatus' },
        },
        {
          title: '创建时间',
          align: 'center',
          width: 100,
          dataIndex: 'createTime',
        },
        {
          title: '截止时间',
          align: 'center',
          width: 100,
          dataIndex: 'deadline',
        },
        {
          title: '开始时间',
          align: 'center',
          width: 100,
          dataIndex: 'startTime',
        },
        {
          title: '实际完成时间',
          align: 'center',
          width: 100,
          dataIndex: 'completionTime',
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          width: 180,
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataSource: [
        {
          key: '1',
          planName: '2021年团建策略',
          createTime: '2021-02-05',
          status: '0',
          deadline: '2021-11-20',
          completionTime: '',
          content: '',
          action: [{
            tagName: "详情",
            url: "planManage-TaskList03",
            com: "router-link"
          }, {
            tagName: "更多",
          }]
        },
        {
          key: '2',
          planName: '2021年季度总结',
          createTime: '2021-01-01',
          status: '1',
          deadline: '2021-12-31',
          startTime: '2021-03-04 12:40:55',
          completionTime: '',
          content: '',
          action: [{
            tagName: "详情",
            url: "planManage-TaskList02",
            com: "router-link"
          }, {
            tagName: "更多",
          }]
        },
        {
          key: '3',
          planName: '2020年团建策略',
          createTime: '2020-02-07',
          status: '3',
          deadline: '2020-11-08',
          startTime: '2020-02-08 10:40:52',
          completionTime: '',
          content: '',
          action: [{
            tagName: "详情",
            url: "planManage-TaskList01",
            com: "router-link"
          }, {
            tagName: "更多",
          }]
        },
        {
          key: '4',
          planName: '2020年团建总结',
          createTime: '2020-01-06',
          status: '2',
          deadline: '2020-12-20',
          startTime: '2020-01-08 11:20:50',
          completionTime: '2020-12-19 16:10:20',
          content:
            '当工作到了一定的阶段，总结便是必不可少的。让我们从中发现优点，摒弃缺点，积累经验，推动未来工作的进展！',
          action: [{
            tagName: "详情",
            url: "planManage-TaskList",
            com: "router-link"
          }, {
            tagName: "更多",
            // com: "TableModal
          }]
        },
      ],
    }

    return {
      timeOut: '',
      // gotoMenu,
      rowSelection,
      // description: '计划列表',
      // // 查询条件
      // queryParam: {},
      //数据
      data,
      url: {
        list: '/sys/quartzJob/list',
        delete: '/sys/quartzJob/delete',
        deleteBatch: '/sys/quartzJob/deleteBatch',
        pause: '/sys/quartzJob/pause',
        resume: '/sys/quartzJob/resume',
        exportXlsUrl: 'sys/quartzJob/exportXls',
        importExcelUrl: 'sys/quartzJob/importExcel',
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      visible: false,
    }
  },
  methods: {
    showDetails(item) {
      this.currentItem = item
      // console.log(this.currentItem);
      this.key = item.key
      // console.log(this.key);
    },
    deleteIndex(index) {
      this.currentIndex = index
      this.data.dataSource.splice(this.currentIndex, 1)
    },
    showModal() {
      this.status_visible = true
    },
    change(index) {
      this.visible = true
      this.rowIndex = index
    },
    confirm() {
      // record.status = "1";
      console.log(this.rowIndex)
      this.rowIndex.status = '4'
      this.$message.success('延期成功')
      console.log(this.rowIndex.deadline)
      this.rowIndex.deadline = this.timeOut
      this.visible = false
    },
    getDateTime(value, dateString) {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
      this.timeOut = dateString
      console.log('----------------------')
      console.log(this.timeOut)
    },
    cancel(e) {
      // console.log(e);
      // this.$message.error('Click on No');
      this.visible = false
    },
    showDelete() {
      this.visible = true
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>
