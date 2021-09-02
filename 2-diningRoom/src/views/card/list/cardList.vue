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
                <a-select allowClear v-decorator="['department']" placeholder="请选择">
                  <a-select-option value="物流管理处">物流管理处</a-select-option>
                  <a-select-option value="烟叶管理处">烟叶管理处</a-select-option>
                  <a-select-option value="审计处">审计处</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="姓名">
                <a-input placeholder="请输入" v-decorator="['name']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="状态">
                <a-select allowClear v-decorator="['status']" placeholder="请选择">
                  <a-select-option value="正常">正常</a-select-option>
                  <a-select-option value="注销">注销</a-select-option>
                  <a-select-option value="挂失">挂失</a-select-option>
                </a-select>
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
                  <a-input placeholder="请输入" style="width: 47%;" v-decorator="['startMon']" />
                  <span class="query-group-split-cust"></span>
                  <a-input placeholder="请输入" style="width: 47%;" v-decorator="['endMon']" />
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
        <a-button type="link" icon="plus" @click="add('add')">新增</a-button>
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
              <!-- <div v-if="status == '挂失'" @click="status == '补卡'">{{status}}</div> -->
            </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <router-link :to="{ name: 'card-list-detail', params: record }">查看记录</router-link>
            <a-divider type="vertical" v-if="!(record.id == '2')" />
            <a v-if="!(record.id == '2')" @click="replaceCard(record, 'delete')">注销</a>
            <a-divider type="vertical" v-if="!(record.id == '2')" />
            <a v-if="record.id === '3'" @click="replaceCard(record, 'makeup')">补卡</a>
            <a v-if="record.id === '1'" @click="replaceCard(record)">挂失</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确认删除吗?" ok-text="确认" cancel-text="取消" @confirm="confirm" @cancel="cancel">
              <a>删除</a>
            </a-popconfirm>

            <!-- <a-dropdown>
              <a class="ant-dropdown-link">更多 <a-icon type="down" /> 注销</a>
              <a-menu slot="overlay">
                <a-menu-item key="1" v-if="!(record.id == '2')" @click="add(record)">编辑</a-menu-item>
                <a-menu-item key="2" v-if="!(record.id == '2')" @click="replaceCard(record, 'delete')">
                  注销
                </a-menu-item>
                <a-menu-item key="3" v-if="record.id === '3'" @click="replaceCard(record, 'makeup')">
                  补卡
                </a-menu-item>
                <a-menu-item key="4" v-if="record.id === '1'" @click="replaceCard(record)">
                  挂失
                </a-menu-item>
              </a-menu>
            </a-dropdown> -->
          </span>
        </a-table>
      </div>
    </a-card>

    <a-modal
      :title="this.modelType == 'add' ? '开卡' : '编辑'"
      :width="700"
      :visible="visible"
      :confirmLoading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      :okText="this.modelType == 'add' ? '增加' : '修改'"
      cancelText="关闭"
      wrapClassName="ant-modal-cust-warp"
      style="top:5%;height: 75%;overflow-y: hidden"
    >
      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form" v-bind="layout" :model="model">
          <a-form-model-item label="卡号" prop="card" v-if="this.modelType == 'add'">
            <a-input allowClear v-model="selectStatus.card" placeholder="请填写卡号" disable />
          </a-form-model-item>
          <a-form-model-item label="部门" prop="department">
            <a-select allowClear v-model="selectStatus.department" placeholder="请选择部门 ">
              <a-select-option value="物流管理处">物流管理处</a-select-option>
              <a-select-option value="烟叶管理处">烟叶管理处</a-select-option>
              <a-select-option value="审计处">审计处</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="姓名" prop="name">
            <a-select allowClear v-model="selectStatus.name" placeholder="请选择姓名" @change="handleChange">
              <a-select-option value="王富贵">王富贵</a-select-option>
              <a-select-option value="李翠花">李翠花</a-select-option>
              <a-select-option value="王二蛋">王二蛋</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="联系方式" prop="phone">
            <a-input v-model="selectStatus.phone" placeholder="请输入联系方式" />
          </a-form-model-item>
          <!-- <a-form-model-item v-if="this.modelType == 'add'" label="存入金额" prop="money">
            <a-input-number v-model="selectStatus.money" placeholder="存入金额" style="width:375px" />
          </a-form-model-item>
          <a-form-model-item v-if="this.modelType == 'add'" label="支付方式" prop="method">
            <a-select allowClear v-model="selectStatus.method" placeholder="请选择支付方式 ">
              <a-select-option value="现金支付">现金支付</a-select-option>
              <a-select-option value="支付宝">支付宝</a-select-option>
              <a-select-option value="微信">微信</a-select-option>
            </a-select>
          </a-form-model-item> -->
        </a-form-model>
      </a-spin>
    </a-modal>

    <a-modal
      :title="this.deleteIndex == 'delete' ? '注销' : this.deleteIndex == 'makeup' ? '补卡' : '挂失'"
      :visible="visible1"
      :confirm-loading="confirmLoading"
      @ok="handleOk1"
      @cancel="handleCancel"
      :width="600"
    >
      <a-form-model ref="form" v-bind="layout" :model="model">
        <a-form-model-item label="卡号" prop="card">
          <a-input allowClear v-model="search.card" placeholder="请填写卡号" />
        </a-form-model-item>
        <a-form-model-item label="注销原因" prop="deleteReason" v-show="this.deleteIndex == 'delete'">
          <a-select allowClear v-model="search.deleteReason" placeholder="请选择注销原因" @change="handlerChange">
            <a-select-option value="调岗">调岗</a-select-option>
            <a-select-option value="离职">离职</a-select-option>
            <a-select-option value="其他">其他</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="挂失原因" prop="loseReason" v-show="this.deleteIndex == 'record'">
          <a-select allowClear v-model="search.loseReason" placeholder="请选择挂失原因">
            <a-select-option value="丢失">丢失</a-select-option>
            <a-select-option value="其他">其他</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="补卡原因" prop="makeUpReason" v-show="this.deleteIndex == 'makeup'">
          <a-select allowClear v-model="search.makeUpReason" placeholder="请选择补卡原因">
            <a-select-option value="丢失">丢失</a-select-option>
            <a-select-option value="其他">其他</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="备注" prop="content" v-show="handlerKey == '1'">
          <a-textarea placeholder="请输入具体原因" :rows="5" />
        </a-form-model-item>
      </a-form-model>
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
      telephone: ['16250740952', '18350740255', '15910740100'],
      form1: this.$form.createForm(this),
      startDate: moment()
        .subtract(1, 'weeks')
        .format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      description: '采购入库',
      modelType: '',
      deleteIndex: '',
      makeupIndex: '',
      search: {
        department: '',
        makeUpReason: '',
        loseReason: '',
        deleteReason: ''
      },
      handlerKey: '',
      dataSource: [
        {
          id: '1',
          card: 'KHID' + formatDate(new Date().getTime() - 2 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟草管理处',
          name: '王富贵',
          phone: '18350740255',
          balance: '200.50',
          status: '正常',
          totalMoney: '100'
        },
        {
          id: '2',
          card: 'KHID' + formatDate(new Date().getTime() - 3 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '烟叶管理处',
          name: '李翠花',
          phone: '16250740952',
          balance: '1000.50',
          status: '注销',
          totalMoney: '100'
        },
        {
          id: '3',
          card: 'KHID' + formatDate(new Date().getTime() - 4 * 24 * 3600 * 1000, 'yyyyMMd'),
          department: '审计处',
          name: '王二蛋',
          phone: '15910740100',
          balance: '10.50',
          status: '挂失',
          totalMoney: '100'
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
          dataIndex: 'card'
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
          title: '余额(元)',
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

      title: '开卡',
      visible: false,
      visible1: false,
      model: {
        time: moment()
      },
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 }
      },
      confirmLoading: false
      // validatorRules: {
      //   card: [{ required: true, message: '请输入卡号!' }],
      //   department: [{ required: true, message: '请选择所属部门!' }],
      //   name: [{ required: true, message: '请输入注册人姓名!' }],
      //   phone: [{ required: true, message: '请输入注册人联系方式!' }],
      //   money: [{ required: true, message: '请存入一定金额用来激活餐卡!' }],
      //   method: [{ required: true, message: '请选择充值方式!' }]
      // }
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
    selectStatus() {
      return this.modelType == 'add' ? this.model : this.modelType
    }
  },
  methods: {
    confirm(e) {
      console.log(e)
      this.$message.success('删除成功')
    },
    cancel(e) {
      console.log(e)
    },
    handleToggleSearch() {
      if (this.toggleSearchStatus) this.toggleSearchStatus = false
      else this.toggleSearchStatus = true
    },
    deletConfirm(e) {
      console.log(e)
      e.status = '注销'
      this.$message.success('注销成功')
    },
    replaceCard(record, del) {
      this.visible1 = true
      this.search = record
      // e.status = '正常'
      this.deleteIndex = del == 'delete' ? 'delete' : del == 'makeup' ? 'makeup' : 'record'
      console.log(record, del)
      console.log(this.deleteIndex)
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

    add(type) {
      this.model = {
        number: 1,
        time: moment(),
        card: 'KHID' + formatDate(new Date().getTime() - 1 * 24 * 3600 * 1000, 'yyyyMMd')
      }
      this.visible = true
      // console.log(record)
      this.modelType = type
      console.log(type)
    },
    close() {
      this.$emit('close')
      this.visible = false
      this.visible1 = false
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
    handleChange(value) {
      console.log(value)

      this.model.phone = ''
      if (value == '李翠花') {
        this.model.phone = '16250740952'
      } else if (value == '王富贵') {
        this.model.phone = '18350740255'
        console.log('1111')
      } else if (value == '王二蛋') {
        this.model.phone = '15910740100'
        console.log('222')
      }
    },
    handleOk1() {
      const that = this
      this.search.status = this.deleteIndex == 'delete' ? '注销' : this.deleteIndex == 'makeup' ? '正常' : '挂失'
      that.close()
      this.search = {}
      this.handlerKey = ''
    },
    handleCancel() {
      this.close(), (this.handlerKey = '')
      this.search = {}
    },
    handlerChange(value) {
      console.log(value)
      if (value == '其他') {
        this.handlerKey = 1
      }
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
