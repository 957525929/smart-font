<template>
  <a-card :bordered="false">
    <h2>文档类型管理</h2>
    <div>
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="10">
            <a-col :md="5" :sm="10">
              <a-form-item label="文档类型">
                <a-input class="w140" placeholder="请输入文档类型"></a-input>
              </a-form-item>
            </a-col>

            <a-col :sm="10">
              <a-form-item label="时间">
                <a-date-picker class="w140" format="YYYY-MM-DD" :default-value="moment(current_start_date)" />
                ~
                <a-date-picker class="w140" format="YYYY-MM-DD" :default-value="moment(current_stop_date)" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <!-- 按钮 -->
      <div class="table-operator">
        <a-row type="flex" justify="end">
          <a-col>
            <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
            <a-button @click="handleAdd" type="dashed" icon="plus">添加</a-button>
            <a-dropdown v-if="selectedRowKeys.length > 0">
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <a-icon type="delete" />删除
                </a-menu-item>
                <a-menu-item key="2">
                  <a-upload name="file" :multiple="true" :headers="headers">
                    <a-icon type="plus" /> 添加
                  </a-upload>
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
      <!-- 表格区域 -->
      <div :columns="columns" :selectedRowKeys="selectedRowKeys">
        <a-table ref="table" size="middle" bordered rowKey="id" :columns="columns" :dataSource="data" :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
          <!-- <a slot="docTypeList" slot-scope="text" @click="showDetails(text)">{{text}}</a> -->

          <span slot="action" slot-scope="text, record">
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />

            <a-popconfirm title="确定删除吗?" @confirm="() => deleteIndex(index)">
              <a>删除</a>
            </a-popconfirm>
          </span>
        </a-table>
      </div>
      <!-- 表单区域 -->
      <DocModal :visible="visible" :dataParent="data" :on-change-changeData="changeData" :modalForm="modalForm"></DocModal>
    </div>
  </a-card>
</template>


<script>
//vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import DocModal from './modules/DocModal.vue'
// js
import { columns, data } from './js/DocType'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
import JEllipsis from '@/components/jeecg/JEllipsis'
import moment from 'moment'
import { formatDate } from '@/utils/util'
const NEW_DEVLIST = Object.freeze({ columns, data })
export default {
  name: 'TaksList01',
  mixins: [JeecgListMixin],
  components: {
    PageTemplate,
    JEllipsis,
    DocModal,
  },
  data() {
    const rowSelection = {
      onSelect: (record) => {
        this.currentTaskName = record.taskName
        console.log(this.currentTaskName)
      },
    }
    return {
      modalForm: {},
      current_start_date: formatDate(new Date().getTime() - 30 * 24 * 3600 * 1000, 'yyyy-MM-dd'),
      current_stop_date: formatDate(new Date().getTime(), 'yyyy-MM-dd'),
      moment,
      rowSelection,
      data: NEW_DEVLIST.data,
      columns: NEW_DEVLIST.columns,
      deleteModalVisible: false,
      visible: false
      // url: {
      //   list: '/sys/quartzJob/list',
      //   delete: '/sys/quartzJob/delete',
      //   deleteBatch: '/sys/quartzJob/deleteBatch',
      //   pause: '/sys/quartzJob/pause',
      //   resume: '/sys/quartzJob/resume',
      //   exportXlsUrl: 'sys/quartzJob/exportXls',
      //   importExcelUrl: 'sys/quartzJob/importExcel',
      // },

    }
  },
  methods: {
    deleteIndex(index) {
      this.currentIndex = index
      this.data.splice(this.currentIndex, 1)
      // console.log(val)
    },
    changeData(val) {
      console.log(1111)
      this.data = val
    },
    handleAdd() {
      this.visible = true;
    }
  },
}
</script>

<style>
</style>