<template>
  <div>
    <a-card>
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="5" :md="6" :sm="24">
              <a-form-item label="姓名">
                <a-input placeholder="请输入" v-decorator="['headline']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="5" :md="6" :sm="24">
              <a-form-item label="可订餐类型">
                <a-select mode="multiple" placeholder="请选择" v-decorator="['checkoutState']" allowClear>
                  <a-select-option value="1">个人预定</a-select-option>
                  <a-select-option value="2">会议预定</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-col :md="6" :sm="24">
                <a-button icon="search" @click="handleOk">查询</a-button>
                <a-button icon="reload" style="margin-left: 8px" @click="handleReset">重置</a-button>
              </a-col>
            </span>
          </a-row>
        </a-form>
      </div>
      <!-- 查询区域-END -->

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button type="link" icon="plus" @click="purInOnClick">新增</a-button>
        <a-modal v-model="addVisible" title="新增人员" @ok="handleAddOk">
          <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-form-item label="姓名">
              <a-input
                placeholder="请输入姓名"
                v-decorator="['name', { rules: [{ required: true, message: '请输入姓名' }] }]"
              />
            </a-form-item>
            <a-form-item label="部门">
              <a-select
                v-decorator="['dinner', { rules: [{ required: true, message: '请选择部门' }] }]"
                placeholder="请选择部门"
                @change="handleSelectChange"
              >
                <a-select-option value="1">
                  物流管理处
                </a-select-option>
                <a-select-option value="2">
                  烟叶管理处
                </a-select-option>
                <a-select-option value="3">
                  安全管理处
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="联系电话">
              <a-input
                placeholder="请输入电话号码"
                v-decorator="['tel', { rules: [{ required: true, message: '请输入电话号码' }] }]"
              />
            </a-form-item>
            <a-form-item label="可订餐类型">
              <a-select
                v-decorator="['type', { rules: [{ required: true, message: '请选择类型' }] }]"
                placeholder="请选择可订餐类型"
                @change="handleSelectChange"
                mode="multiple"
              >
                <a-select-option value="1">
                  个人预定
                </a-select-option>
                <a-select-option value="2">
                  会议预定
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
        </a-modal>

        <a-button type="link" icon="download" :disabled="!hasSelected">导出</a-button>
        <i class="anticon anticon-info-circle ant-alert-icon"> </i>已选择<a style="font-weight: 600">
          {{ selectedRowKeys.length }}
        </a>
        项
        <a style="margin-left: 12px" @click="onClearSelected" v-if="hasSelected">清空</a>
      </div>

      <!-- table区域-begin -->
      <div>
        <a-table
          ref="table"
          size="middle"
          bordered
          rowKey="id"
          :columns="columns"
          :dataSource="dataSource"
          :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
          :pagination="{
            total: this.dataSource.length,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
          }"
        >
          <span slot="type" slot-scope="type">
            <a-tag v-for="item in type" :key="item">{{ item }}</a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <a @click="purInEditOnClick(record)">编辑</a>
            <a-modal v-model="editVisible" title="编辑人员" @ok="handleEditOk">
              <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="姓名">
                  <a-input
                    placeholder="请输入姓名"
                    v-decorator="[
                      'name',
                      {
                        rules: [{ required: true, message: '请输入姓名' }],
                        initialValue: '邝火火'
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item label="部门">
                  <a-select
                    v-decorator="['dinner', { rules: [{ required: true, message: '请选择部门' }], initialValue: '1' }]"
                    placeholder="请选择部门"
                    @change="handleSelectChange"
                  >
                    <a-select-option value="1">
                      物流管理处
                    </a-select-option>
                    <a-select-option value="2">
                      烟叶管理处
                    </a-select-option>
                    <a-select-option value="3">
                      安全管理处
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="联系电话">
                  <a-input
                    placeholder="请输入电话号码"
                    v-decorator="[
                      'tel',
                      { rules: [{ required: true, message: '请输入电话号码' }], initialValue: '13564587858' }
                    ]"
                  />
                </a-form-item>
                <a-form-item label="可订餐类型">
                  <a-select
                    v-decorator="[
                      'type',
                      { rules: [{ required: true, message: '请选择类型' }], initialValue: ['1', '2'] }
                    ]"
                    placeholder="请选择可订餐类型"
                    @change="handleSelectChange"
                    mode="multiple"
                  >
                    <a-select-option value="1">
                      个人预定
                    </a-select-option>
                    <a-select-option value="2">
                      会议预定
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-form>
            </a-modal>

            <a>
              <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style="margin-left: 10%">
                删除
              </a-popconfirm>
            </a>
          </span>
        </a-table>
      </div>
    </a-card>
  </div>
</template>

<script>
import JDate from '../../../components/jeecg/JDate'

export default {
  components: {
    JDate
  },
  data() {
    return {
      basicInfo: {},
      form1: this.$form.createForm(this),
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          align: 'center',
          customRender: function(t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'name'
        },
        {
          title: '部门',
          align: 'center',
          dataIndex: 'dept'
        },
        {
          title: '电话',
          align: 'center',
          dataIndex: 'tel'
        },
        {
          title: '可订餐类型',
          align: 'center',
          dataIndex: 'type',
          scopedSlots: { customRender: 'type' }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      dataSource: [
        {
          id: '1',
          name: '邝火火',
          dept: '物流管理处',
          tel: '13564587858',
          type: ['个人预定', '会议预定']
        },
        {
          id: '2',
          name: '胜七',
          dept: '烟叶管理处',
          tel: '15860124578',
          type: ['会议预定']
        }
      ],
      selectedRowKeys: [],
      addVisible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      editRecord: '',
      editVisible: false
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
    },
    onClearSelected() {
      this.selectedRowKeys = []
    },
    handleReset() {
      this.form1.resetFields() //重置基本信息
    },
    handleOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },
    purInOnClick() {
      this.addVisible = true
    },
    handleAddOk(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.addVisible = false
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
    },
    deletConfirm(e) {
      this.$message.success('删除成功')
    },
    purInEditOnClick(record) {
      this.editVisible = true
      this.editRecord = record
      console.log(this.editRecord)
    },
    handleEditOk(e) {
      this.editVisible = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
