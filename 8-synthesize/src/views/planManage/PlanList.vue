<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">

          <a-col :md="6" :sm="10">
            <a-form-item label="计划名称">
              <a-input placeholder="请输入计划名称"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="9">
            <a-form-item label="计划状态">
              <a-select style="width: 220px" v-model="queryParam.status" placeholder="请选择计划状态">
                <a-select-option value="0">未开始</a-select-option>
                <a-select-option value="1">进行中</a-select-option>
                <a-select-option value="2">已完成</a-select-option>
                <a-select-option value="3">未完成</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="时间">
              <a-range-picker />
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
          <a-upload name="file" :showUploadList="false" :multiple="false">
            <a-button type="dashed" icon="import">模板下载</a-button>
          </a-upload>
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
      <a-table ref="table" size="middle" bordered :columns="data.columns" :dataSource="data.dataSource" :loading="loading" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">

        <span slot="action" slot-scope="text, record">
          <a @click="gotoMenu">详情</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item><a @click="handleEdit(record)">编辑</a></a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
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
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <PlanListModal ref="modalForm" @ok="modalFormOk"> </PlanListModal>
  </a-card>
</template>

<script>
import PlanListModal from './modules/PlanListModal'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";

export default {
  name: "PlanList",
  mixins: [JeecgListMixin],
  components: {
    PlanListModal,
    JEllipsis
  },
  data() {
    const gotoMenu = () => {
      this.$router.replace({ path: '/planManage/tasklist' })
    }
    const data = ({
      // 表头
      columns: [
        {
          title: '计划编号',
          dataIndex: '',
          key: 'rowIndex',
          width: 90,
          align: "center",
          customRender: function (t, r, index) {
            return parseInt(index) + 1;
          }
        },
        {
          title: '计划名称',
          align: "center",
          dataIndex: 'planName',
          width: 200,
          sorter: true,
          /*            customRender:function (text) {
                        return "*"+text.substring(9,text.length);
                      }*/
        },
        {
          title: '状态',
          align: "center",
          width: 100,
          dataIndex: 'status',
          scopedSlots: { customRender: 'customRenderStatus' },
          filterMultiple: false,
          filters: [
            { text: '进行中', value: '0' },
            { text: '未开始', value: '-1' },
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
      dataSource: [
        {
          key: '1',
          planName: '2021年季度总结',
          createTime: '2021-01-01',
          status: '1',
          deadline: '2021-12-31',
          startTime: '2021-03-04',
          completionTime: ''
        },
        {
          key: '2',
          planName: '2021年团建策略',
          createTime: '2021-05-05',
          status: '0',
          deadline: '2021-06-06',
          completionTime: ''
        },
        {
          key: '3',
          planName: '2020年团建总结',
          createTime: '2020-03-05',
          status: '2',
          deadline: '2020-05-08',
          completionTime: ''
        },
        {
          key: '4',
          planName: '2020年团建策略',
          createTime: '2020-05-07',
          status: '3',
          deadline: '2020-06-08',
          completionTime: ''
        },
      ],

    }
    )
    const test = (record) => {
      console.log(record.id);
    }

    return {
      gotoMenu,
      test,
      // description: '计划列表',
      // // 查询条件
      // queryParam: {},
      //数据
      data,

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