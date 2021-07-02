
<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">

          <a-col :md="6" :sm="10">
            <a-form-item label="任务名称">
              <a-input placeholder="请输入任务名称" v-model="queryParam.jobClassName"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="重要任务">
              <a-select style="width: 220px" v-model="queryParam.status" placeholder="请选择重要任务">
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="9">
            <a-form-item label="任务状态">
              <a-select style="width: 220px" v-model="queryParam.status" placeholder="请选择状态">
                <a-select-option value="1">未开始</a-select-option>
                <a-select-option value="0">进行中</a-select-option>
                <a-select-option value="2">已完成</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="时间">
              <a-date-picker />
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
          <a-button type="dashed" icon="download" @click="handleExportXls('定时任务信息')">导出</a-button>
          <a-dropdown v-if="selectedRowKeys.length > 0">
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <a-icon type="delete" />删除
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="plus" />上传
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

        <!-- 字符串超长截取省略号显示-->
        <span slot="description" slot-scope="text">
          <j-ellipsis :value="text" :length="20" />
        </span>
        <span slot="parameterRender" slot-scope="text">
          <j-ellipsis :value="text" :length="20" />
        </span>

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
    return {
      //数据
      data: [
        {
          key: '1',
          taskName: '2021年第一季度总结',
          priority: '是',
          status: '2',
          createTime: '2021-01-01',
          deadline: '2021-03-31',
          startTime: '2021-03-10',
          completionTime: '2021-03-30'
        },
        {
          key: '2',
          taskName: '2021年第二季度总结',
          priority: '否',
          status: '1',
          createTime: '2021-04-01',
          deadline: '2021-06-30',
          startTime: '2021-06-04',
          completionTime: ''
        },
        {
          key: '3',
          taskName: '2021年第三季度总结',
          priority: '否',
          status: '0',
          createTime: '2021-07-01',
          deadline: '2021-09-30'
        },
        {
          key: '4',
          taskName: '2021年第四季度总结',
          priority: '否',
          status: '0',
          createTime: '2021-04-01',
          deadline: '2021-06-30',
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
          /*            customRender:function (text) {
                        return "*"+text.substring(9,text.length);
                      }*/
        },
        {
          title: '重要任务',
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



}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>