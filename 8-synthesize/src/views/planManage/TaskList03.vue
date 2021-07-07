
<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">

          <a-col :md="5" :sm="10">
            <a-form-item label="任务名称">
              <a-input class="w140" placeholder="请输入任务名称" v-model="queryParam.jobClassName"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="5" :sm="10">
            <a-form-item label="重要性">
              <a-select class="w140" v-model="queryParam.status" placeholder="请选择重要性">
                <a-select-option value="0">高</a-select-option>
                <a-select-option value="1">中</a-select-option>
                <a-select-option value="2">低</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="5" :sm="9">
            <a-form-item label="任务状态">
              <a-select class="w140" v-model="queryParam.status" placeholder="请选择状态">
                <a-select-option value="0">进行中</a-select-option>
                <a-select-option value="1">未开始</a-select-option>
                <a-select-option value="2">已完成</a-select-option>
                <a-select-option value="3">未完成</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="9">
            <a-form-item label="时间">
              <a-date-picker placeholder="开始时间" class="w140" />
              ~
              <a-date-picker placeholder="结束时间" class="w140" />
            </a-form-item>
          </a-col>

        </a-row>
      </a-form>
    </div>

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
    </div>

    <!-- table区域-begin -->
    <div>
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
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  删除
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
    </div>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <TaskListModal ref="modalForm" @ok="modalFormOk"></TaskListModal>
  </a-card>
</template>

<script>
import TaskListModal from './modules/TaskListModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";

export default {
  name: "TaskList",
  mixins: [JeecgListMixin],
  components: {
    TaskListModal,
    JEllipsis
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
      //数据
      data: [
        {
          key: '2',
          taskName: '2021年组织管控策略',
          priority: '低',
          status: '0',
          createTime: '2021-04-01',
          deadline: '2021-10-30',
          completionTime: ''
        },
        {
          key: '3',
          taskName: '2021年战略规划策略',
          priority: '中',
          status: '0',
          createTime: '2021-07-01',
          deadline: '2021-09-30'
        },
      ],
      // 表头 
      columns: [
        {
          title: '任务编号',
          dataIndex: '',
          key: 'rowIndex',
          width: 90,
          align: "center",
          customRender: function (t, r, index) {
            return parseInt(index) + 1;
          }
        },
        {
          title: '任务名称',
          align: "center",
          dataIndex: 'taskName',
          width: 200,
          sorter: true,
          scopedSlots: { customRender: 'taskNameList' },
          /*            customRender:function (text) {
                        return "*"+text.substring(9,text.length);
                      }*/
        },
        {
          title: '重要性',
          align: "center",
          width: 100,
          dataIndex: 'priority'
        },
        {
          title: '任务状态',
          align: "center",
          width: 100,
          dataIndex: 'status',
          scopedSlots: { customRender: 'customRenderStatus' },
          filterMultiple: false,
          filters: [
            { text: '进行中', value: '0' },
            { text: '未开始', value: '-1' },
            { text: '已完成', value: '1' },
            { text: '未完成', value: '2' },
          ]
        },
        {
          title: '创建时间',
          align: "center",
          width: 100,
          dataIndex: 'createTime',
        },
        {
          title: '截止时间',
          align: "center",
          width: 100,
          dataIndex: 'deadline',
        },
        {
          title: '开始时间',
          align: "center",
          width: 100,
          dataIndex: 'startTime',
        },
        {
          title: '实际完成时间',
          align: "center",
          width: 100,
          dataIndex: 'completionTime',
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: "center",
          width: 180,
          scopedSlots: { customRender: 'action' },
        }
      ],
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
  },

}
</script>
<style scoped>
@import '~@assets/less/common.less';
.w140 {
  width: 140px;
}
</style>