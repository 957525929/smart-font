<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="卡号">
                <a-input placeholder="请输入" v-decorator="['sampleNumber']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="部门">
                <a-input placeholder="请输入" v-decorator="['name']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="姓名">
                <a-input placeholder="请输入" v-decorator="['name']"></a-input>
              </a-form-item>
            </a-col>
            <template v-if="toggleSearchStatus">
              <a-col :xl="6" :lg="8" :md="9" :sm="24">
                <a-form-item label="联系方式">
                  <a-input placeholder="请输入" v-decorator="['number']" />
                </a-form-item>
              </a-col>
              <a-col :xl="8" :lg="8" :md="9" :sm="24">
                <a-form-item label="余额">
                  <a-input placeholder="请输入" style="width: 47%;" />
                  <span class="query-group-split-cust"></span>
                  <a-input placeholder="请输入" style="width: 47%;" />
                </a-form-item>
              </a-col>
            </template>

            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-col :md="6" :sm="24">
                <a-button icon="search" @click="handleQueryOk">查询</a-button>
                <a-button icon="reload" style="margin-left: 8px" @click="handleReset">重置</a-button>
                <a @click="handleToggleSearch" style="margin-left: 8px">
                  {{ toggleSearchStatus ? '收起' : '展开' }}
                  <a-icon :type="toggleSearchStatus ? 'up' : 'down'" />
                </a>
              </a-col>
            </span>
          </a-row>
        </a-form>
      </div>

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button type="link" icon="plus" @click="add">新增</a-button>
        <a-button type="link" icon="download">导出</a-button>
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
          :pagination="{
            total: this.dataSource.length,
            showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`
          }"
        >
          <span slot="status" slot-scope="status">
            <a-tag :color="status == '正常' ? 'green' : status == '挂失' ? 'red' : 'geekblue'">
              {{ status }}
            </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <router-link :to="{ name: 'material-warehousing-warehousingDetails', params: record }"
              >查看记录</router-link
            >
            <a-divider type="vertical" />
            <a-dropdown>
              <a class="ant-dropdown-link">更多 <a-icon type="down"/></a>
              <a-menu slot="overlay">
                <a-menu-item key="1" @click="purInEditOnClick(record)">编辑</a-menu-item>
                <a-menu-item key="2">
                  <a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style="margin-left: 10%;"
                    >删除</a-popconfirm
                  >
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </a-table>
      </div>
    </a-card>

    <a-modal
      :title="title"
      :width="800"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 85%;overflow-y: hidden"
    >
      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form" v-bind="layout" :model="model" :rules="validatorRules">
          <a-form-model-item label="菜品名称" required prop="name">
            <a-select allowClear v-model="model.name" placeholder="请选择菜品名称">
              <a-select-option value="小鸡炖蘑菇">小鸡炖蘑菇</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="餐别" required prop="type">
            <a-select allowClear v-model="model.type" placeholder="请选择餐别">
              <a-select-option value="早餐">早餐</a-select-option>
              <a-select-option value="午餐">午餐</a-select-option>
              <a-select-option value="晚餐">晚餐</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="批次" required prop="number">
            <a-input-number v-model="model.number" placeholder="请输入批次" style="width: 30%" />
          </a-form-model-item>
          <a-form-model-item label="留样时间" required prop="time">
            <a-date-picker v-model="model.time" show-time placeholder="请选择留样时间" />
          </a-form-model-item>
          <a-form-model-item label="留样人员" required prop="people">
            <a-select allowClear v-model="model.people" placeholder="请选择留样人员">
              <a-select-option value="张三">张三</a-select-option>
              <a-select-option value="李四">李四</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="留样量(g)" required prop="size">
            <a-input v-model="model.size" placeholder="请输入留样量" />
          </a-form-model-item>
          <a-form-model-item label="备注" prop="ps">
            <a-textarea rows="5" v-model="model.ps" placeholder="请输入备注" />
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>
</template>

<script>
import JDate from '../../../components/jeecg/JDate'
import moment from 'moment'
import { formatDate } from '../../../utils/util'
export default {
  name: 'Index',
  components: {
    JDate
  },
  data() {
    return {
      form1: this.$form.createForm(this),
      startDate: moment()
        .subtract(1, 'weeks')
        .format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      description: '采购入库',
      dataSource: [
        {
          id: '1',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '200.50元',
          status: '正常',
          totalMoney: '100',
          operation: '需留样48小时'
        },
        {
          id: '2',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '1000.50元',
          status: '注销',
          totalMoney: '100',
          operation: '需留样48小时'
        },
        {
          id: '3',
          cardNumber: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '10.50元',
          status: '挂失',
          totalMoney: '100',
          operation: '需留样48小时'
        }
      ],
      // 表头
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
          title: '卡号',
          align: 'center',
          dataIndex: 'cardNumber'
        },
        {
          title: '部门',
          align: 'center',
          dataIndex: 'department'
        },
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'name'
        },
        {
          title: '联系方式',
          align: 'center',
          dataIndex: 'phone'
        },
        {
          title: '余额',
          align: 'center',
          dataIndex: 'balance'
        },
        {
          title: '状态',
          align: 'center',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      toggleSearchStatus: true,
      selectedRowKeys: [],

      title: '操作',
      visible: false,
      model: {
        time: moment()
      },
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 }
      },
      confirmLoading: false,
      validatorRules: {
        name: [{ required: true, message: '请输入菜品名称!' }],
        type: [{ required: true, message: '请选择餐别!' }],
        number: [{ required: true, message: '请输入批次!' }],
        time: [{ required: true, message: '请选择留样时间!' }],
        people: [{ required: true, message: '请选择留样人员!' }],
        size: [{ required: true, message: '请输入留样量!' }],
        ps: [{ min: 0, max: 126, message: '长度不超过 126 个字符', trigger: 'blur' }]
      }
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    handleToggleSearch() {
      if (this.toggleSearchStatus) this.toggleSearchStatus = false
      else this.toggleSearchStatus = true
    },
    deletConfirm(e) {
      console.log(e)
      this.$message.success('删除成功')
    },
    handleReset() {
      this.form1.resetFields() //重置基本信息
    },
    handleQueryOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },

    add() {
      this.model = {
        number: 1,
        time: moment()
      }
      this.visible = true
    },
    close() {
      this.$emit('close')
      this.visible = false
    },
    handleOk() {
      const that = this
      // 触发表单验证
      this.$refs.form.validate(valid => {
        if (valid) {
          that.confirmLoading = true
          let obj
          if (!this.model.id) {
            // obj=addRole(this.model);
          } else {
            // obj=editRole(this.model);
          }
          // obj.then((res)=>{
          //   if(res.success){
          //     that.$message.success(res.message);
          //     that.$emit('ok');
          //   }else{
          //     that.$message.warning(res.message);
          //   }
          // }).finally(() => {
          //   that.confirmLoading = false;
          //   that.close();
          // })
          that.confirmLoading = false
          that.close()
        } else {
          return false
        }
      })
    },
    handleCancel() {
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@assets/less/common.less';

.table-page-search-wrapper {
  margin-bottom: 8px;
}

.table-page-search-wrapper .ant-form-item,
.table-page-search-wrapper .table-page-search-submitButtons {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
