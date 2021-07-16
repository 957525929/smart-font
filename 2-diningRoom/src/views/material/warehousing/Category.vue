<template>

<!--  <div>-->
<!--    <a-card :bordered="false">-->
<!--      &lt;!&ndash; 查询区域 &ndash;&gt;-->
<!--      <div class="table-page-search-wrapper">-->
<!--        <a-form layout="inline" :form="form1">-->
<!--          <a-row :gutter="24">-->
<!--            <a-col :xl="6" :lg="8" :md="9" :sm="24">-->
<!--              <a-form-item label="食料类别">-->
<!--                <a-input placeholder="请输入" v-decorator="['purchaseOrderNumber']"></a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">-->
<!--              <a-col :md="6" :sm="24">-->
<!--                <a-button icon="search" @click='handleQueryOk'>查询</a-button>-->
<!--                <a-button icon="reload" style="margin-left: 8px" @click='handleReset'>重置</a-button>-->
<!--            </a-col>-->
<!--          </span>-->

<!--          </a-row>-->
<!--        </a-form>-->
<!--      </div>-->
<!--      &lt;!&ndash; 查询区域-END &ndash;&gt;-->
<!--      &lt;!&ndash; 操作按钮区域 &ndash;&gt;-->
<!--      <div class="table-operator">-->
<!--        <a-button type="link" icon="plus" @click='add'>新增</a-button>-->
<!--      </div>-->
<!--      &lt;!&ndash; table区域-begin &ndash;&gt;-->
<!--      <div>-->
<!--        <a-table-->
<!--          ref="table"-->
<!--          size="middle"-->
<!--          bordered-->
<!--          rowKey="id"-->
<!--          :columns="columns"-->
<!--          :dataSource="dataSource"-->
<!--          :pagination="{total:this.dataSource.length, showTotal:(total, range) => `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条`}"-->
<!--        >-->
<!--          <span slot="action" slot-scope="text, record">-->
<!--            <a @click='edit(record)'>编辑</a>-->
<!--            <a><a-popconfirm title="确定删除吗?" @confirm="deletConfirm(record)" style='margin-left: 10%;'>删除</a-popconfirm></a>-->
<!--          </span>-->
<!--        </a-table>-->
<!--      </div>-->
<!--    </a-card>-->
<!--    <a-modal-->
<!--      :title="title"-->
<!--      :width="800"-->
<!--      :visible="visible"-->
<!--      :confirmLoading="confirmLoading"-->
<!--      @ok="handleOk"-->
<!--      @cancel="handleCancel"-->
<!--      cancelText="关闭"-->
<!--      wrapClassName="ant-modal-cust-warp"-->
<!--      style="top:5%;height: 60%;overflow-y: hidden">-->

<!--      <a-spin :spinning="confirmLoading">-->
<!--        <a-form-model ref="form"  v-bind="layout"  :model="model" :rules="validatorRules">-->
<!--          <a-form-model-item label="食料类别" required prop="type">-->
<!--            <a-input v-model="model.type" placeholder="请输入食料类别名称"/>-->
<!--          </a-form-model-item>-->
<!--          <a-form-model-item label="备注"  prop="ps">-->
<!--            <a-textarea rows="5" v-model="model.ps" placeholder="请输入备注"/>-->
<!--          </a-form-model-item>-->
<!--        </a-form-model>-->
<!--      </a-spin>-->
<!--    </a-modal>-->
<!--  </div>-->

  <div>
    <a-card :bordered="false">
      <div>
        <a-row>
          <a-col :span='4'>
            <a-button >添加分类</a-button>
            <a-button style='margin-left: 10%'>删除分类</a-button>
            <a-input-search style="margin-bottom: 8px; margin-top: 8px; width: 100%" placeholder="Search" @change="onChange" />
            <a-tree

              :show-line="true"
              :expanded-keys="expandedKeys"
              :auto-expand-parent="autoExpandParent"
              :tree-data="gData"
              @expand="onExpand"
              @select="onSelect"
            >
              <template slot="title" slot-scope="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
                <span v-else>{{ title }}</span>
              </template>
            </a-tree>
          </a-col>
          <a-col :span='20'>

          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>

</template>

<script>

import moment from 'moment';

const options = [
    {
      value: '蔬菜类',
      label: '蔬菜类',
      children: [
        {
          value: '根茎类',//大小均匀，根茎完整，无畸形，无折断，无腐烂，干净清洁，无药物残留。
          label: '根茎类',
          children: [
            {
              value: '萝卜',
              label: '萝卜',
            },
            {
              value: '胡萝卜',
              label: '胡萝卜',
            },
            {
              value: '水萝卜',
              label: '水萝卜',
            },
            {
              value: '大葱',
              label: '大葱',
            },
            {
              value: '圆葱',
              label: '圆葱',
            },
            {
              value: '莴苣',
              label: '莴苣',
            },
            {
              value: '大蒜',
              label: '大蒜',
            },
            {
              value: '大姜',
              label: '大姜',
            },
            {
              value: '莲藕',
              label: '莲藕',
            },
            {
              value: '山药',
              label: '山药',
            },
            {
              value: '芋头',
              label: '芋头',
            },
            {
              value: '土豆',
              label: '土豆',
            },
            {
              value: '地瓜',
              label: '地瓜',
            },
          ],
        },
        {
          value: '花叶类',//鲜嫩，无黄叶，无烂叶，叶茎完整，花球坚实，无折断，干净清洁，无药物残留。
          label: '花叶类',
          children: [
            {
              value: '白菜',
              label: '白菜',
            },
            {
              value: '大头菜',
              label: '大头菜',
            },
            {
              value: '菠菜',
              label: '菠菜',
            },
            {
              value: '油菜',
              label: '油菜',
            },
            {
              value: '苔菜',
              label: '苔菜',
            },
            {
              value: '芹菜',
              label: '芹菜',
            },
            {
              value: '香菜',
              label: '香菜',
            },
            {
              value: '韭菜',
              label: '韭菜',
            },
            {
              value: '蒜苗',
              label: '蒜苗',
            },
            {
              value: '菜花',
              label: '菜花',
            },
            {
              value: '西兰花',
              label: '西兰花',
            },
          ],
        },
        {
          value: '果菜类',//菜品新鲜、果肉坚实、无折断、无腐烂、无异味、干净清洁，无药物残留。
          label: '果菜类',
          children: [
            {
              value: '茄子',
              label: '茄子',
            },
            {
              value: '菜椒',
              label: '菜椒',
            },
            {
              value: '辣椒',
              label: '辣椒',
            },
            {
              value: '西红柿',
              label: '西红柿',
            },
            {
              value: '黄瓜',
              label: '黄瓜',
            },
            {
              value: '茭瓜',
              label: '茭瓜',
            },
            {
              value: '南瓜',
              label: '南瓜',
            },
            {
              value: '冬瓜',
              label: '冬瓜',
            },
            {
              value: '丝瓜',
              label: '丝瓜',
            },
            {
              value: '扁豆',
              label: '扁豆',
            },
            {
              value: '豆角',
              label: '豆角',
            },
            {
              value: '毛豆',
              label: '毛豆',
            },
            {
              value: '豌豆',
              label: '豌豆',
            },
          ],
        },
        {
          value: '食用菌类',//色泽、气味正常、无发霉、朵片完整，无药物残留。
          label: '食用菌类',
          children: [
            {
              value: '蘑菇',
              label: '蘑菇',
            },
            {
              value: '香菇',
              label: '香菇',
            },
            {
              value: '杏鲍菇',
              label: '杏鲍菇',
            },
            {
              value: '金针菇',
              label: '金针菇',
            },
            {
              value: '黑木耳',
              label: '黑木耳',
            },
            {
              value: '银耳',
              label: '银耳',
            },
          ],
        },
      ],
    },
    {
      value: '肉食类',
      label: '肉食类',
      children: [
        {
          value: '猪肉类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
          label: '猪肉类',
          children: [
            {
              value: '前肘肉',
              label: '前肘肉',
            },
            {
              value: '后肘肉',
              label: '后肘肉',
            },
            {
              value: '五花肉',
              label: '五花肉',
            },
            {
              value: '肉馅',
              label: '肉馅',
            },
            {
              value: '猪头',
              label: '猪头',
            },
            {
              value: '猪蹄',
              label: '猪蹄',
            },
            {
              value: '猪口条',
              label: '猪口条',
            },
            {
              value: '猪耳朵',
              label: '猪耳朵',
            },
            {
              value: '猪排骨',
              label: '猪排骨',
            },
            {
              value: '猪大骨',
              label: '猪大骨',
            },
          ],
        },
        {
          value: '鸡产品类',//肉质有弹性、新鲜无异味、无淤血、无注水、无寄生虫，有《动物检疫合格证明》。
          label: '鸡产品类',
          children: [
            {
              value: '鸡胸肉',
              label: '鸡胸肉',
            },
            {
              value: '鸡腿',
              label: '鸡腿',
            },
            {
              value: '翅肩肉',
              label: '翅肩肉',
            },
            {
              value: '鸡背',
              label: '鸡背',
            },
            {
              value: '鸡叉',
              label: '鸡叉',
            },
            {
              value: '翅根',
              label: '翅根',
            },
            {
              value: '鸡脖',
              label: '鸡脖',
            },
            {
              value: '鸡肝',
              label: '鸡肝',
            },
            {
              value: '鸡胗',
              label: '鸡胗',
            },
            {
              value: '鸡爪',
              label: '鸡爪',
            },
            {
              value: '白条',
              label: '白条',
            },
            {
              value: '鸡',
              label: '鸡',
            },
          ],
        },
        {
          value: '丸滑类',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
          label: '丸滑类',
          children: [
            {
              value: '鸡脯丸',
              label: '鸡脯丸',
            },
            {
              value: '鸡柳',
              label: '鸡柳',
            },
            {
              value: '牛肉丸',
              label: '牛肉丸',
            },
            {
              value: '四喜丸',
              label: '四喜丸',
            },
            {
              value: '千页豆腐',
              label: '千页豆腐',
            },
          ],
        },
      ],
    },
    {
      value: '粮油类',
      label: '粮油类',
      children: [
        {
          value: '原粮',//未加工
          label: '原粮',
          children: [
            {
              value: '稻谷',
              label: '稻谷',
            },
            {
              value: '小麦',
              label: '小麦',
            },
            {
              value: '玉米',
              label: '玉米',
            },
            {
              value: '高粱',
              label: '高粱',
            },
            {
              value: '谷子',
              label: '谷子',
            },
            {
              value: '大麦',
              label: '大麦',
            },
            {
              value: '荞麦',
              label: '荞麦',
            },
            {
              value: '大豆',
              label: '大豆',
            },
            {
              value: '小豆',
              label: '小豆',
            },
            {
              value: '绿豆',
              label: '绿豆',
            },
            {
              value: '蚕豆',
              label: '蚕豆',
            },
            {
              value: '芸豆',
              label: '芸豆',
            },
            {
              value: '甘薯',
              label: '甘薯',
            },
          ],
        },
        {
          value: '成品粮',//经加工
          label: '成品粮',
          children: [
            {
              value: '大米',
              label: '大米',
            },
            {
              value: '小米',
              label: '小米',
            },
            {
              value: '小麦粉',
              label: '小麦粉',
            },
            {
              value: '油菜籽',
              label: '油菜籽',
            },
            {
              value: '白芝麻',
              label: '白芝麻',
            },
            {
              value: '黑芝麻',
              label: '黑芝麻',
            },
            {
              value: '棉籽',
              label: '棉籽',
            },
            {
              value: '葵花籽',
              label: '葵花籽',
            },
            {
              value: '香瓜籽',
              label: '香瓜籽',
            },
            {
              value: '油茶籽',
              label: '油茶籽',
            },
            {
              value: '棕榈籽',
              label: '棕榈籽',
            },
          ],
        },
        {
          value: '油脂',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
          label: '油脂',
          children: [
            {
              value: '花生油',
              label: '花生油',
            },
            {
              value: '菜油',
              label: '菜油',
            },
            {
              value: '香油',
              label: '香油',
            },
            {
              value: '葵花籽油',
              label: '葵花籽油',
            },
            {
              value: '蓖麻籽油',
              label: '蓖麻籽油',
            },
            {
              value: '大豆油',
              label: '大豆油',
            },
            {
              value: '色拉油',
              label: '色拉油',
            },
            {
              value: '调味油',
              label: '调味油',
            },
            {
              value: '调和油',
              label: '调和油',
            },
          ],
        },
        {
          value: '粮油制品',//形态完整、均匀，无破损，保质保量，添加剂符合国家标准。
          label: '粮油制品',
          children: [
            {
              value: '生切面',
              label: '生切面',
            },
            {
              value: '挂面',
              label: '挂面',
            },
            {
              value: '龙须面',
              label: '龙须面',
            },
            {
              value: '米粉',
              label: '米粉',
            },
            {
              value: '豆腐',
              label: '豆腐',
            },
            {
              value: '豆奶',
              label: '豆奶',
            },
            {
              value: '包子',
              label: '包子',
            },
            {
              value: '面包',
              label: '面包',
            },
            {
              value: '烧饼',
              label: '烧饼',
            },
            {
              value: '汤圆',
              label: '汤圆',
            },
            {
              value: '面筋',
              label: '面筋',
            },
            {
              value: '花生酱',
              label: '花生酱',
            },
          ],
        },
      ],
    },
];
// const gData = [
//   {
//     key:'1',
//     title:'蔬菜类',
//     scopedSlots: { title: 'title' },
//     children:[
//       {
//         key:'1-1',
//         title:'根茎类',
//         scopedSlots: { title: 'title' },
//         children:[
//           {
//             key:'1-1-1',
//             title:'萝卜',
//             scopedSlots: { title: 'title' },
//           },
//           {
//             key:'1-1-2',
//             title:'胡萝卜',
//             scopedSlots: { title: 'title' },
//           },
//         ]
//       },
//       {
//         key:'1-2',
//         title:'花叶类',
//         scopedSlots: { title: 'title' },
//       },
//       {
//         key:'1-3',
//         title:'果菜类',
//         scopedSlots: { title: 'title' },
//       },
//     ]
//   }
// ];
let gData = []

const generateData = (options) => {
  let arr1=[];
  for(let i=0; i<options.length; i++){
    let arr2=[];
    let temp1={};
    temp1.title=options[i].label
    temp1.key=options[i].label
    temp1.scopedSlots = { title: 'title' }
    for(let j=0; j<options[i].children.length; j++){
      let arr3=[];
      let temp2={};
      temp2.title=options[i].children[j].label
      temp2.key=options[i].children[j].label
      temp2.scopedSlots = { title: 'title' }
      for(let k=0; k<options[i].children[j].children.length; k++){
        let temp3={}
        temp3.title=options[i].children[j].children[k].label
        temp3.key=options[i].children[j].children[k].label
        temp3.scopedSlots = { title: 'title' }
        arr3.push(temp3)
      }
      temp2.children=arr3
      arr2.push(temp2)
    }
    temp1.children=arr2
    arr1.push(temp1)
  }
  gData=arr1
  console.log(gData)
};
generateData(options);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    const title = node.title;
    dataList.push({ key, title: title });
    if (node.children) {
      generateList(node.children);
    }
    console.log(dataList)
  }
};

generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

export default {
  name: "Category",
  components: {},
  data () {
    return {
      todayTime:moment(new Date().toLocaleDateString(), 'YYYY-MM-DD'),
      form1: this.$form.createForm(this),
      dataSource: [
        {
          id:'1',
          type: '肉类',
          ps: '暂无',
        },
        {
          id:'2',
          type: '青菜类',
          ps: '暂无',
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
          title:'食料类别',
          align:"center",
          dataIndex: 'type'
        },
        {
          title:'备注',
          align:"center",
          dataIndex: 'ps'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align:"center",
          scopedSlots: { customRender: 'action'},
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
          { required: true, message: '请输入食料类别名称!'},
        ],
        ps: [
          { min: 0, max: 126, message: '长度不超过 126 个字符', trigger: 'blur' },
        ],
      },

      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      gData
    }
  },
  computed: {},
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

    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onChange(e) {
      const value = e.target.value;
      console.log(value)
      const expandedKeys = dataList
        .map(item => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      console.log(expandedKeys)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      });
    },
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
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
