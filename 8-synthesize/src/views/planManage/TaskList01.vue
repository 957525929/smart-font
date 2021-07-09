<template>
  <div>
    <PageTemplate :columns="columns" :selectedRowKeys="selectedRowKeys">
      <a-table ref="table" size="middle" bordered rowKey="id" :columns="columns" :dataSource="data" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">

        <a slot="taskNameList" slot-scope="text" @click="showDetails(text),handleExportXls3(`${currentItem}`)">{{ text }}</a>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-upload name="file">
                  上传
                </a-upload>
              </a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() =>  deleteIndex(index)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

        <!-- 状态渲染模板 -->
        <template slot="customRenderStatus" slot-scope="status">
          <a-tag v-if="status==='0'" color="orange">未开始</a-tag>
          <a-tag v-if="status==='1'" color="green">进行中</a-tag>
          <a-tag v-if="status==='2'" color="cyan">已完成</a-tag>
          <a-tag v-if="status==='3'" color="red">未完成</a-tag>
        </template>
      </a-table>
    </PageTemplate>
    <!-- 表单区域 -->
    <TaskListModal ref="modalForm" @ok="modalFormOk"></TaskListModal>
  </div>
</template>

<script>
//vue
import PageTemplate from '@/components/page/PageTemplate.vue';
import TaskListModal from './modules/TaskListModal';
// js
import { columns, data } from './modules/js/TaskData01.js';
import { JeecgListMixin } from '@/mixins/JeecgListMixin';
import JEllipsis from "@/components/jeecg/JEllipsis";
const NEW_DEVLIST = Object.freeze({ columns, data })
export default {
  name: 'TaksList01',
  mixins: [JeecgListMixin],
  components: {
    PageTemplate,
    JEllipsis,
    TaskListModal
  },
  data() {
    const rowSelection = {
      onSelect: (record, selected, selectedRows) => {
        this.currentTaskName = record.taskName;
        console.log(this.currentTaskName);

      },

    };
    return {
      rowSelection,
      data: NEW_DEVLIST.data,
      columns: NEW_DEVLIST.columns,
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
  },
  methods: {
    showDetails(item) {
      this.currentItem = item;
      console.log(this.currentItem);
    },
    deleteIndex(index) {
      this.currentIndex = index;
      this.data.splice(this.currentIndex, 1)
    },
  },
}

</script>

<style>
</style>