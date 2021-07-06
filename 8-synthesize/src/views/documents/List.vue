<template>
  <a-card :bordered="false">

    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="10">
          <a-col :md="6" :sm="10">
            <a-form-item label="文档编号">
              <a-input placeholder="请输入文档编号"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="文档名称">
              <a-input placeholder="请输入文档名称"></a-input>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="9">
            <a-form-item label="文档类型">
              <a-select style="width: 220px" placeholder="请选择文档类型">
                <a-select-option value="0">doc</a-select-option>
                <a-select-option value="1">ppt</a-select-option>
                <a-select-option value="2">xlsx</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="上传时间">
              <a-date-picker />
            </a-form-item>
          </a-col>

          <a-col :md="6" :sm="10">
            <a-form-item label="概述">
              <a-input placeholder="请输入概述"></a-input>
            </a-form-item>
          </a-col>

        </a-row>
      </a-form>
    </div>

    <div class="table-operator">
      <a-row type="flex" justify="end">
        <a-col>
          <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
          <a-button @click="handleAdd" type="dashed" icon="plus">新增</a-button>
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
      <a-table ref="table" size="middle" bordered rowKey="id" :columns="columns" :dataSource="data" :loading="loading" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">

        <span slot="action">
          <a @click="handleExportXls('2020年总结报告')">下载</a>
        </span>

        <!-- 状态渲染模板 -->
        <template slot="customRenderStatus" slot-scope="status">
          <a-tag v-if="status==='1'" color="green">进行中</a-tag>
          <a-tag v-else color="orange">未开始</a-tag>
        </template>
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <ListModel ref="modalForm" @ok="modalFormOk"></ListModel>
  </a-card>
</template>

<script>
// import QuartzJobModal from './modules/QuartzJobModal'
import { getAction } from '@/api/manage'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from "@/components/jeecg/JEllipsis";
import ListModel from './modules/ListModel'

export default {
  name: "List",
  mixins: [JeecgListMixin],
  components: {
    ListModel,
    JEllipsis
  },
  data() {

    return {
      // description: '计划列表',
      // // 查询条件
      // queryParam: {},
      //数据
      data: [
        {
          key: '1',
          documentName: '2020年总结报告',
          documentType: 'doc',
          uploadTime: '2020-06-04',
          overview: '2020年工作报告总结'
        },
        {
          key: '2',
          documentName: '2021年季度巡查记录',
          documentType: "ppt",
          uploadTime: '2021-06-05',
          overview: '设备硬件巡查检查记录'
        },
      ],
      // 表头
      columns: [
        {
          title: '文档编号',
          dataIndex: '',
          key: 'rowIndex',
          width: 90,
          align: "center",
          customRender: function (t, r, index) {
            return parseInt(index) + 1;
          }
        },
        {
          title: '文档名称',
          align: "center",
          dataIndex: 'documentName',
          width: 200,
          sorter: true,
          /*            customRender:function (text) {
                        return "*"+text.substring(9,text.length);
                      }*/
        },
        {
          title: '文档类型',
          align: "center",
          width: 100,
          dataIndex: 'documentType'
        },
        {
          title: '上传时间',
          align: "center",
          width: 100,
          dataIndex: 'uploadTime',
        },
        {
          title: '概述',
          align: "center",
          width: 100,
          dataIndex: 'overview',
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