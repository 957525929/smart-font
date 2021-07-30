<template>
  <div class="">
    <a-modal :visible="visible" title="养护计划" okText="提交" @cancel="handleCancel" @ok="handleCancel" :width="750"
      destroyOnClose>
      <a-form layout="vertical" :form="form">
        <a-card :bordered="false">
          <a-form-item label="时间范围" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-range-picker style="width: 100%" />
          </a-form-item>
          <a-form-item label="养护周期" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-select @change="onChange">
              <a-select-option :value="x.tableValue" v-for="x in Object.values(proPeriod)" :key="x.code">
                {{ x.tableValue }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item v-if="showDays" label="自定义天数" class="formItem" :labelCol="{ span: 6 }"
            :wrapperCol="{ span: 18 }">
            <a-input-number :min="1" :default-value="3" /><span style="marginLeft:10px">天</span>
          </a-form-item>
          <a-form-item label="养护范围" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-cascader :options="groupTree" change-on-select placeholder="" :displayRender="renderFormat"
              @change="onAreaChange">
            </a-cascader>
          </a-form-item>
          <a-form-item label="养护设备'" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-tree-select v-model="treeValue" style="width: 100%" :tree-data="devData" tree-checkable
              search-placeholder="" />
          </a-form-item>
          <a-form-item label="任务类型" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-select>
              <a-select-option :value="x.tableValue" v-for="x in Object.values(taskType)" :key="x.code">
                {{ x.tableValue }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="养护人" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <router-link :to="{name:'person-staff-list'}">
              <a-button type="primary" style="width:20%;float:right" icon="plus">新增</a-button>
            </router-link>
            <a-select style="width:80%;float:left" @change="onStaffChange">
              <a-select-option :value="x.devName" v-for="x in facData" :key="x.key">
                {{ x.devName }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-card>
      </a-form>
    </a-modal>
    <PageTemplate :columns="columns" :searchCon="searchCon" :formdata="data">
      <div style="display:flex;alignItems:center">
        <a-button type="primary" @click="showProForm" icon="plus">新增养护计划</a-button>
        <a-upload style="marginLeft: 10px">
          <a-button type="primary" icon="import">导入</a-button>
        </a-upload>
        <a-upload style="marginLeft: 10px">
          <a-button type="primary" icon="export">导出</a-button>
        </a-upload>
        <a-button type="primary" icon="download" style="marginLeft: 10px">导入模板下载</a-button>
      </div>
      <a-table :columns="columns" :data-source="data" :pagination="{
                    size: 'small',
                    pageSize: 10,
                    showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
                }">
        <span slot="action" slot-scope="text, record">
          <router-link :to="{ name: 'device-proDetail', params: { id: record.taskId } }">详情</router-link>
        </span>
      </a-table>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
//js
import { data } from './js/all.js'
import { columns } from './js/protect.js'
import { handleTableData } from '@/utils/util.js'
import { taskType, proPeriod, groupTree } from '@/utils/dataDictionary.js'
import { data as facData } from '@/views/person/staff/js/index.js'
import { data as devData } from '@/views/device/deviceList/js/index.js'
const MENU = Object.freeze({ taskType, proPeriod, groupTree, facData, devData })
const NEW_PROLIST = Object.freeze({ columns, data })

export default {
  name: 'proList',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.loadData()
  },
  props: {
    renderFormat: {
      type: Function,
      default: ({ labels, selectedOptions }) => labels.join(' · '),
    },
  },
  data() {
    return {
      ...MENU,
      visible: false,
      showDays: false,
      columns: NEW_PROLIST.columns.filter((item) => {
        return !item.hideInTable
      }),
      searchCon: {},
      data: NEW_PROLIST.data.filter((item) => item.taskStatus == 0),
      infoDetail: NEW_PROLIST.columns.filter((item) => {
        return !item.hideInDetail
      }),
      treeValue: '全部',
    }
  },
  mounted() {
    this.facData = []
    this.facData = facData.filter((item) => item.role === '养护')
    this.devData = devData.map((res) => {
      return {
        key: res.key,
        value: res.devName,
        label: res.devName,
      }
    })
    this.devData.push({ key: 'all', value: '全部', label: '全部' })
  },
  methods: {
    onAreaChange(value, selectedOptions) {
      let tempData = value.join('·')
      this.devData = []
      this.devData = devData
        .filter((item) => item.groupDetail == tempData)
        .map((res) => {
          return {
            key: res.key,
            value: res.devName,
            label: res.devName,
          }
        })
    },
    loadData() {
      // 请求数据
      this.data.map((item) => {
        let temp = handleTableData(this.columns, item)
        this.columns = temp[0]
        return temp[1]
      })
    },
    showProForm() {
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
    onChange(value) {
      if (value === '自定义') {
        this.showDays = true
      }
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>