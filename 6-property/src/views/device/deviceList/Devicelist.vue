<template>
  <div>
    <a-modal :visible="visible" title="设备登记" okText="提交" @cancel="handleCancel" @ok="handleCancel" :width="750"
      destroyOnClose>
      <a-form layout="vertical" :form="form">
        <!-- <a-row :gutter="24" type="flex" justify="center" class="formWrapper"> -->
        <a-card :bordered="false">
          <a-form-item label="设备类型" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-cascader :options="DepartTree" change-on-select placeholder="" :displayRender="renderFormat">
            </a-cascader>
          </a-form-item>
          <a-form-item label="设备名称" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-input style="width: 100%" />
          </a-form-item>
          <a-form-item label="实际状态" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-select default-value="在用">
              <a-select-option :value="x.tableValue" v-for="x in Object.values(devStatus)" :key="x.code">
                {{ x.tableValue }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="区域组别'" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <a-cascader :options="groupTree" change-on-select placeholder="" :displayRender="renderFormat">
            </a-cascader>
          </a-form-item>
          <a-form-item label="设备厂商单位" class="formItem" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
            <router-link :to="{name:'person-devFactory-view'}">
              <a-button type="primary" style="width:20%;float:right" icon="plus">
                新增
              </a-button>
            </router-link>
            <a-select style="width:80%;float:left">
              <a-select-option :value="x.devName" v-for="x in manufacturer" :key="x.key">
                {{ x.devName }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-card>
        <!-- </a-row> -->
      </a-form>
    </a-modal>
    <PageTemplate :columns="columns" :searchCon="searchCon">
      <div style="display:flex;alignItems:center">
        <a-button type="primary" @click="showDevForm" icon="plus">设备登记</a-button>
        <a-upload style="marginLeft: 10px">
          <a-button type="primary" icon="import">导入</a-button>
        </a-upload>
        <a-upload style="marginLeft: 10px">
          <a-button type="primary" icon="export">导出</a-button>
        </a-upload>
        <a-button type="primary" icon="download" style="marginLeft: 10px">导入模板下载</a-button>
      </div>

      <TableModal ref="TableModal" title="编辑设备信息" :infoDetail="infoDetail"></TableModal>
      <a-table :columns="columns" :data-source="data" :pagination="{
                size: 'small',
                pageSize: 10,
                showTotal: (total, range) => `第${range[0]}-${range[1]}条/总共${total}条`,
            }">
        <span slot="action" slot-scope="text, record">
          <a href="#">
            <router-link :to="{ name: 'device-DevDetail', params: { id: record.devId } }">详情</router-link>
          </a>
          <a-divider type="vertical" />
          <a-popconfirm title="确认注销此设备?" ok-text="是" cancel-text="否" @confirm="confirm" @cancel="cancel">
            <a href="#" @click="showDelete">删除</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <a href="#" @click="handleOps( record.devId)">编辑</a>
        </span>
      </a-table>
    </PageTemplate>
  </div>

</template>

<script>
// vue
import PageTemplate from '@/components/page/PageTemplate.vue'
import TableDrawer from '@/components/tableOperation/drawer/TableDrawer.vue'
import TableModal from '@/components/tableOperation/modal/TableModal.vue'
// js
import { devColumns, data, infoDetail, loginInfo } from './js/index.js'
import { typeToComponent } from '@/utils/dataDictionary.js'
import { devType, devStatus, DepartTree, groupTree } from '@/utils/dataDictionary.js'
import { data as manufacturer } from '@/views/person/devFactory/js/index.js'

const NEW_DEVLIST = Object.freeze({ devColumns, data, infoDetail, typeToComponent, loginInfo })
const MENU = Object.freeze({ devType, devStatus, DepartTree, groupTree, manufacturer })
export default {
  name: 'deviceList',
  components: { PageTemplate, TableDrawer, TableModal },
  created() {
    this.getList()
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
      form: this.$form.createForm(this, { name: 'modal_list' }),
      searchCon: {},
      data: NEW_DEVLIST.data,
      columns: NEW_DEVLIST.devColumns.filter((item) => !item.hideInTable),
      infoDetail: NEW_DEVLIST.devColumns.filter((item) => !item.hideInDetail),
      loginInfo: NEW_DEVLIST.loginInfo.filter((item) => !item.hideInLogin),
      visible: false,
    }
  },
  methods: {
    getList() {
      this.columns.forEach((item) => {
        if (item.valueEnum) {
          this.data.map((res) => {
            res[item.dataIndex] = item.valueEnum[res[item.dataIndex]].tableValue
            return res
          })
        }
      })
    },
    showDevForm() {
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
    handleOps(id) {
      //   let tempValue = [...NEW_DEVLIST.typeToComponent].filter(([key, value]) => key === type)[0]
      //处理数据
      let tempData = this.data.filter((item) => item.devId === id)[0]
      this.infoDetail = NEW_DEVLIST.devColumns
        .filter((item) => !item.hideInEdit)
        .map((item) => {
          if (item.type === 'a-cascader') {
            item.value = tempData[item.key].split('-')
          } else {
            item.value = tempData[item.key]
          }
          return item
        })
      this.$refs.TableModal.showModal()
    },
    handleVisibleChange(visible) {
      if (!visible) {
        this.visible = false
        return
      }
    },
    showDelete() {
      this.visible = true
    },
    confirm() {
      this.visible = false
      this.$message.success('操作成功')
    },
    cancel() {
      this.visible = false
    },
  },
}
</script>
<style scoped>
@import '~@assets/less/common.less';
</style>