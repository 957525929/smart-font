<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">

          <a-col :md="5" :sm="10">
            <a-form-item label="计划名称">
              <a-input style="width:140px" placeholder="请输入计划名称"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="5" :sm="9">
            <a-form-item label="计划状态">
              <a-select style="width:145px" v-model="queryParam.status" placeholder="请选择计划状态">
                <a-select-option value="0">未开始</a-select-option>
                <a-select-option value="1">进行中</a-select-option>
                <a-select-option value="2">已完成</a-select-option>
                <a-select-option value="3">未完成</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="10">
            <a-form-item label="时间">
              <a-date-picker style="width:140px" placeholder="开始时间" />
              ~
              <a-date-picker style="width:140px" placeholder="结束时间" />
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
          <!-- <a-button type="dashed" icon="download" @click="handleExportXls(`${text}`)">导出</a-button> -->
          <a-button type="dashed" icon="download" @click="handleExportXls(`${currentPlanName}`)">导出</a-button>
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
      <a-table ref="table" size="middle" bordered :columns="data.columns" :dataSource="data.dataSource" :loading="loading" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">

        <a slot="planNameList" slot-scope="text" @click="showDetails(text),handleExportXls3(`${currentItem}`)">{{ text }}</a>

        <span slot="action" slot-scope="text, record,index">
          <a @click="showDetails(record),gotoMenu(key)">详情</a>
          <!-- <a @click="showDetails(record)">详情</a> -->

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item><a @click="handleEdit(record)">编辑</a></a-menu-item>
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
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <PlanListModal ref="modalForm" @ok="modalFormOk" :id="currentItem"> </PlanListModal>
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
    const rowSelection = {
      onSelect: (record, selected, selectedRows) => {
        this.currentPlanName = record.planName;
        console.log(this.currentPlanName);
      },
    };
    const gotoMenu = (key) => {
      if (key == 1) {
        this.$router.replace({ path: '/planManage/tasklist' });
      }
      if (key == 2) {
        this.$router.replace({ path: '/planManage/tasklist01' });
      }
      if (key == 3) {
        this.$router.replace({ path: '/planManage/tasklist02' });
      }
      if (key == 4) {
        this.$router.replace({ path: '/planManage/tasklist03' })
      }

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
          scopedSlots: { customRender: 'planNameList' },
        },
        {
          title: '状态',
          align: "center",
          width: 100,
          dataIndex: 'status',
          scopedSlots: { customRender: 'customRenderStatus' },
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
          planName: '2020年团建总结',
          createTime: '2020-01-06',
          status: '2',
          deadline: '2020-12-20',
          startTime: '2020-01-08 11:20:50',
          completionTime: '2020-12-19 16:10:20'
        },
        {
          key: '2',
          planName: '2020年团建策略',
          createTime: '2020-02-07',
          status: '3',
          deadline: '2020-11-08',
          startTime: '2020-02-08 10:40:52',
          completionTime: ''
        },
        {
          key: '3',
          planName: '2021年季度总结',
          createTime: '2021-01-01',
          status: '1',
          deadline: '2021-12-31',
          startTime: '2021-03-04 12:40:55',
          completionTime: ''
        },
        {
          key: '4',
          planName: '2021年团建策略',
          createTime: '2021-02-05',
          status: '0',
          deadline: '2021-11-20',
          completionTime: ''
        },
      ],

    })

    return {
      gotoMenu,
      rowSelection,
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
  methods: {
    showDetails(item) {
      this.currentItem = item;
      // console.log(this.currentItem);
      this.key = item.key;
      // console.log(this.key);
    },
    deleteIndex(index) {
      this.currentIndex = index;
      this.data.dataSource.splice(this.currentIndex, 1)
    },
  },


}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>
