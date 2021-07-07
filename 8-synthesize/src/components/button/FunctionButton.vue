<template>
  <div class="table-operator">
    <a-row type="flex" justify="end">
      <a-col>
        <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
        <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
        <a-button type="dashed" icon="download" @click="handleExportXls(`${currentTaskName}`)">导出</a-button>
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon type="delete" />删除
            </a-menu-item>
            <a-menu-item key="2">
              <a-upload name="file" :multiple="true" :headers="headers">
                <a-icon type="plus" /> 上传
              </a-upload>
            </a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px"> 批量操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </a-col>
    </a-row>
    <!-- 表单区域 -->
    <TaskListModal ref="modalForm" @ok="modalFormOk"></TaskListModal>
  </div>

</template>

<script>
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";
import TaskListModal from '@/views/planManage/modules/TaskListModal';

export default {
  name: "TaskList",
  mixins: [JeecgListMixin],
  components: {
    JEllipsis,
    TaskListModal
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    selectedRowKeys: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      url: {
        list: "/sys/quartzJob/list",
        delete: "/sys/quartzJob/delete",
        deleteBatch: "/sys/quartzJob/deleteBatch",
        pause: "/sys/quartzJob/pause",
        resume: "/sys/quartzJob/resume",
        exportXlsUrl: "sys/quartzJob/exportXls",
        importExcelUrl: "sys/quartzJob/importExcel",
      },
    }
  }
}
</script>

<style>
</style>