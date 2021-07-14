<template>
  <div>
    <PageTemplate :columns="columns">
      <div class="table-operator">
        <a-row type="flex" justify="end">
          <a-col>
            <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
            <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
            <a-button type="dashed" icon="download" @click="handleExportXls(`${currentTaskName}`)">导出</a-button>
            <a-dropdown v-if="selectedRowKeys.length > 0">
              <a-menu slot="overlay">
                <a-menu-item key="1"> <a-icon type="delete" />删除 </a-menu-item>
                <a-menu-item key="2">
                  <a-upload name="file" :multiple="true" :headers="headers"> <a-icon type="plus" /> 上传 </a-upload>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                批量操作
                <a-icon type="down" />
              </a-button>
            </a-dropdown>
          </a-col>
        </a-row>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="data"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <a slot="taskNameList" slot-scope="text" @click="showDetails(text), handleExportXls3(`${currentItem}`)">{{
          text
        }}</a>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link"
              >更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-upload name="file"> 上传 </a-upload>
              </a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => deleteIndex(index)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

        <!-- 状态渲染模板 -->
        <template slot="customRenderStatus" slot-scope="status, record">
          <a-tag v-if="status === '0'" color="orange">未开始</a-tag>
          <a-tag v-if="status === '1'" color="green">进行中</a-tag>
          <a-tag v-if="status === '2'" color="cyan">已完成</a-tag>
          <a-tag v-if="status === '3'" color="red" @click="showModal">
            <!-- <a-popconfirm title="是否确认延长时间?" ok-text="确定" cancel-text="取消" @confirm="confirm(record)" @cancel="cancel">
              未完成
            </a-popconfirm> -->
            未完成
            <a-modal v-model="status_visible" width="350px" title="延长时间" @ok="confirm(record)">
              <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="时间">
                <a-date-picker placeholder="请选择延长时间" />
              </a-form-item>
            </a-modal>
          </a-tag>
          <a-tag v-if="status === '4'" color="pink">延期中</a-tag>
        </template>
      </a-table>
    </PageTemplate>
    <!-- 表单区域 -->
    <TaskListModal ref="modalForm" @ok="modalFormOk"></TaskListModal>
  </div>
</template>

<script>
//vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TaskListModal from './modules/TaskListModal'
// js
import { columns, data } from './modules/js/TaskData01.js'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from '@/components/jeecg/JEllipsis'
const NEW_DEVLIST = Object.freeze({ columns, data })
export default {
  name: 'TaksList01',
  mixins: [JeecgListMixin],
  components: {
    PageTemplate,
    JEllipsis,
    TaskListModal,
  },
  data() {
    const rowSelection = {
      onSelect: (record, selected, selectedRows) => {
        this.currentTaskName = record.taskName
        console.log(this.currentTaskName)
      },
    }
    return {
      rowSelection,
      data: NEW_DEVLIST.data,
      columns: NEW_DEVLIST.columns,
      status_visible: false,
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
    }
  },
  methods: {
    showDetails(item) {
      this.currentItem = item
      console.log(this.currentItem)
    },
    showModal() {
      this.status_visible = true
    },
    deleteIndex(index) {
      this.currentIndex = index
      this.data.splice(this.currentIndex, 1)
    },
    confirm(record) {
      record.status = '4'
      this.$message.success('延期成功')
      this.status_visible = false
    },
    cancel(e) {},
  },
}
</script>

<style>
</style>