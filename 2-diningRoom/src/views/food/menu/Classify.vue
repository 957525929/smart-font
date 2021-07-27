<template>
  <div>
    <a-card :bordered="false">
      <!-- 查询区域 -->
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form1">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="8" :md="9" :sm="24">
              <a-form-item label="菜品分类">
                <a-input placeholder="请输入" v-decorator="['purchaseOrderNumber']"></a-input>
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
      style="top:5%;height: 60%;overflow-y: hidden">

      <a-spin :spinning="confirmLoading">
        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">
          <a-form-model-item label="菜品分类" required prop="type">
            <a-input v-model="model.type" placeholder="请输入菜品分类名称"/>
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

export default {
  name: "Classify",
  components: {},
  data () {
    return {
      todayTime:moment(new Date().toLocaleDateString(), 'YYYY-MM-DD'),
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id:'1',
          type: '川菜',
          ps: '它以麻辣、鱼香、家常、怪味、酸辣、椒麻、醋椒为主要特点',
        },
        {
          id:'2',
          type: '粤菜',
          ps: '它以选料广泛，讲究鲜、嫩、爽、滑、浓为主要特点。它主要由广东菜、潮州菜和东江菜组成',
        },
        {
          id:'3',
          type: '鲁菜',
          ps: '选料精细、刀法细腻，注重实惠，花色多样，善用葱姜',
        },
        {
          id:'4',
          type: '苏菜',
          ps: '由淮阳菜、苏州菜、南京菜等组成。制作精细，因材施艺、四季有别，浓而不腻，味感清鲜，讲究造型',
        },
        {
          id:'5',
          type: '浙菜',
          ps: '由杭州、宁波、绍兴三种地方风味发展而成。讲究刀工、制作精细、变化较多、富有乡土气息',
        },
        {
          id:'6',
          type: '闽菜',
          ps: '以福州和厦门菜为主要代表，制作细巧、色调美观、调味清鲜',
        },
        {
          id:'7',
          type: '湘菜',
          ps: '以熏、蒸、干炒为主，口味重于酸、辣， 辣味菜和烟熏腊肉是湘菜的独特风味',
        },
        {
          id:'8',
          type: '客家菜',
          ps: '用料以肉类为主，水产品较少；突出主料，原汁原味，讲求酥软香浓；注重火功，以炖、烤、煲、酿见长，尤以砂锅菜闻名；造型古朴，乡土风貌明显',
        },
        {
          id:'9',
          type: '徽菜',
          ps: '它以烹制山珍野味著称，擅长烧、炖、蒸，而少爆炒。其烹饪芡大、油重、色浓、朴素实惠',
        },
      ],
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key:'rowIndex',
          align:"center",
          width:'10%',
          customRender:function (t,r,index) {
            return parseInt(index)+1;
          }
        },
        {
          title:'菜品分类',
          align:"center",
          dataIndex: 'type',
          width:'20%',
        },
        {
          title:'备注',
          align:"center",
          dataIndex: 'ps',
          width:'60%',
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action'},
          width:'10%',
        }
      ],
      toggleSearchStatus: false,
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
        type: [
          { required: true, message: '请输入菜品分类名称!'},
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
    handleToggleSearch() {
      if(this.toggleSearchStatus) this.toggleSearchStatus=false;
      else this.toggleSearchStatus=true;
    },
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
