<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="菜品名称">
                <a-input placeholder="请输入" v-decorator="['name']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="菜品分类">
                <a-select v-decorator="['category']" allowClear >
                  <a-select-option value="川菜">川菜</a-select-option>
                  <a-select-option value="粤菜">粤菜</a-select-option>
                  <a-select-option value="鲁菜">鲁菜</a-select-option>
                  <a-select-option value="苏菜">苏菜</a-select-option>
                  <a-select-option value="浙菜">浙菜</a-select-option>
                  <a-select-option value="闽菜">闽菜</a-select-option>
                  <a-select-option value="湘菜">湘菜</a-select-option>
                  <a-select-option value="客家菜">客家菜</a-select-option>
                  <a-select-option value="徽菜">徽菜</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="辣度">
                <a-select v-decorator="['degree']" allowClear >
                  <a-select-option value="不辣">不辣</a-select-option>
                  <a-select-option value="微辣">微辣</a-select-option>
                  <a-select-option value="中辣">中辣</a-select-option>
                  <a-select-option value="重辣">重辣</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-col :md="6" :sm="24">
                <a-button icon="search" @click='handleQueryOk'>查询</a-button>
                <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>
              </a-col>
            </span>

          </a-row>
        </a-form>
      </div>
      <!-- 查询区域-END -->

      <!-- 操作按钮区域 -->
      <div class="table-operator">
        <a-button type="link" icon="plus" @click='add'>新增</a-button>
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
          :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"
        >
          <span slot="action" slot-scope="text, record">
          <a @click='edit(record)'>编辑</a>
          <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>
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
      style="top:5%;height: 85%;overflow-y: hidden">

      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="菜品名称" required prop="purchaseOrderNumber">
            <a-input v-model="model.purchaseOrderNumber" placeholder="请输入菜品名称"/>
          </a-form-model-item>
          <a-form-model-item label="菜品分类" required prop="purchasePeople">
            <a-select allowClear v-model="model.purchasePeople" placeholder="请选择菜品分类">
              <a-select-option value="川菜">川菜</a-select-option>
              <a-select-option value="粤菜">粤菜</a-select-option>
              <a-select-option value="鲁菜">鲁菜</a-select-option>
              <a-select-option value="苏菜">苏菜</a-select-option>
              <a-select-option value="浙菜">浙菜</a-select-option>
              <a-select-option value="闽菜">闽菜</a-select-option>
              <a-select-option value="湘菜">湘菜</a-select-option>
              <a-select-option value="客家菜">客家菜</a-select-option>
              <a-select-option value="徽菜">徽菜</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="辣度" required prop="purchaseDate">
            <a-select allowClear v-model="model.purchaseDate" placeholder="请选择辣度">
              <a-select-option value="不辣">不辣</a-select-option>
              <a-select-option value="微辣">微辣</a-select-option>
              <a-select-option value="中辣">中辣</a-select-option>
              <a-select-option value="重辣">重辣</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="备注"  prop="ps">
            <a-textarea rows="5" v-model="model.ps" placeholder="请输入备注"/>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>

</template>

<script>

import moment from 'moment';
import JDate from '../../../components/jeecg/JDate'

export default {
  name: "Index",
  components: {
    JDate,
  },
  data () {
    return {
      todayTime:moment(new Date().toLocaleDateString(), 'YYYY-MM-DD'),
      startDate:moment().subtract(3, 'months').format('YYYY-MM-DD'),
      endDate:moment().format('YYYY-MM-DD'),
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id:'1',
          purchaseOrderNumber: '小鸡炖蘑菇',
          headline: '荤菜',
          purchasePeople: '客家菜',
          purchaseDate: '微辣',
          purchaseNum: '2021-07-01',
          totalMoney: '暂无',
          checkoutPeople: true,
        },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          align:"center",
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'菜品名称',
          align:"center",
          dataIndex: 'purchaseOrderNumber',
        },
        {
          title:'菜品分类',
          align:"center",
          dataIndex: 'purchasePeople'
        },
        {
          title:'辣度',
          align:"center",
          dataIndex: 'purchaseDate'
        },
        {
          title:'上传时间',
          align:"center",
          dataIndex: 'purchaseNum'
        },
        {
          title:'备注',
          align:"center",
          dataIndex: 'totalMoney'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action'},
        }
      ],
      selectedRowKeys: [],

      title:"操作",
      visible: false,
      model: {},
      layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 14 },
      },
      confirmLoading: false,
      validatorRules:{
        purchaseOrderNumber: [
          { required: true, message: '请输入菜品名称!'},
        ],
        purchasePeople: [
          { required: true, message: '请选择菜品分类!' },
        ],
        purchaseDate: [
          { required: true, message: '请选择辣度!' },
        ],
        ps: [
          { min: 0, max: 126, message: '长度不超过 126 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    deletConfirm(e) {
      console.log(e);
      this.$message.success('删除成功');
    },
    handleReset() {
      this.form1.resetFields();//重置基本信息
    },
    handleQueryOk() {
      this.form1.validateFields((err, values) => {
        if (!err) {
          console.log('基本信息：', values)
        }
      })
    },

    add () {
      this.edit({});
    },
    edit (record) {
      console.log(record)
      this.model = Object.assign({}, record);
      console.log(this.model)
      this.visible = true;
    },
    close () {
      this.$emit('close');
      this.visible = false;
    },
    handleOk () {
      const that = this;
      // 触发表单验证
      this.$refs.form.validate(valid => {
        if (valid) {
          that.confirmLoading = true;
          let obj;
          if(!this.model.id){
            // obj=addRole(this.model);
          }else{
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
          that.confirmLoading = false;
          that.close();
        }else{
          return false;
        }
      })
    },
    handleCancel () {
      this.close()
    },
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
