<template>
  <!-- 酒店信息管理 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>酒店名称：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入酒店名称" v-model="queryParam.name"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>协议编号：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入协议编号" v-model="queryParam.id"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>位置：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入位置" v-model="queryParam.address" style="width: 300px"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <a-button
            :style="{ background: '#49a9ee', color: 'white'}"
            icon="search"
            @click="searchQuery"
          >查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <a-button
            @click="addHotel()"
            icon="plus"
            :style="{ color: 'white', background:'orange'}"
          >新增酒店</a-button>&nbsp;&nbsp;
          <a-button>
            <a-icon type="download" />导出
          </a-button>
        </a-col>
      </a-row>
    </div>
    <!-- 搜索操作区域-END -->

    <!-- table区域-begin -->
    <div id="dataHotelTable">
      <a-table :data-source="dataHotel" :pagination="false" rowKey="id" :columns="columns">
        <!-- <a-table-column title="协议酒店名称" data-index="hotel" align="left" fixed="left"></a-table-column>
        <a-table-column title="协议编号" data-index="id" align="center"></a-table-column>
        <a-table-column title="星级" data-index="level" align="center"></a-table-column>
        <a-table-column title="联系人" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="联系电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="位置" data-index="address" align="center"></a-table-column>
        <a-table-column title="操作" align="center" fixed="right">
          <template slot-scope="record">
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
              <a href="javascript:;" :style="{  color: 'red' }">删除</a>
            </a-popconfirm>
          </template>
        </a-table-column>-->
         <!-- <a slot="price" slot-scope="text,record" @click="typePrice(record)">{{ text }}</a> -->
        <span slot="operation" slot-scope="record">
          <!-- <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a> -->
          <a @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
            <!-- <a href="javascript:;" :style="{  color: 'red' }">删除</a> -->
            <a :style="{  color: 'red' }">删除</a>
          </a-popconfirm>
        </span>
        <!-- <a-table
          slot="expandedRowRender"
          slot-scope="record"
          :columns="innerColumns"
          :data-source="record.innerData"
          :pagination="false"
          size="small"
          :style="{width: '700px'}"
        ></a-table> -->
      </a-table>
      <br />
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
<!-- 协议酒店价格详情 -->
<!-- <a-modal v-model="visiblePrice" :title="titleHotel" footer>
    <a-table :data-source="dataPrice" :pagination="false" rowKey="name">
        <a-table-column title="房型" data-index="roomType" align="center"></a-table-column>
        <a-table-column title="价格（元）" data-index="price" align="center"></a-table-column>
      </a-table>
</a-modal> -->
    <!-- 新增 -->
    <a-Modal v-model="visibleAdd" title="新增酒店" footer>
      <a-form-model
        ref="ruleForm"
        :model="formAdd"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="hotel" label="协议酒店名称" prop="hotel">
          <a-input v-model="formAdd.hotel" placeholder="请输入协议酒店名称"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="id" label="协议编号" prop="id">
          <a-input v-model="formAdd.id" placeholder="请输入协议编号"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="level" label="星级" prop="level">
          <a-select v-model="formAdd.level" @change="handleChange">
            <a-select-option value="一">一</a-select-option>
            <a-select-option value="二">二</a-select-option>
            <a-select-option value="三">三</a-select-option>
            <a-select-option value="四">四</a-select-option>
            <a-select-option value="五">五</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="联系人" prop="dutyName">
          <a-input v-model="formAdd.dutyName" placeholder="请输入联系人"></a-input>
        </a-form-model-item>
        <a-form-model-item label="联系电话" prop="dutyTel">
          <a-input v-model="formAdd.dutyTel" placeholder="请输入联系电话"></a-input>
        </a-form-model-item>
        <a-form-model-item label="位置" prop="address">
          <a-input v-model="formAdd.address" placeholder="请输入位置"></a-input>
        </a-form-model-item>
          <a-form-model-item label="价格范围（元）">
          <a-input v-model="formAdd.priceMin" placeholder="请输入价格最小值" :style="{width:'165px'}"></a-input>
          <span>&nbsp;~&nbsp;</span>
          <a-input v-model="formAdd.priceMax" placeholder="请输入价格最大值" :style="{width:'165px'}"></a-input>
        </a-form-model-item>
        <a-form-model-item label="备注信息">
          <a-input v-model="formAdd.remark" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitAdd()">创建</a-button>
          <a-button style="margin-left: 10px;" @click="resetFormAdd()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
    <!--修改信息 -->
    <a-Modal v-model="visibleModify" title="修改协议酒店信息" footer>
      <a-form-model
        :label-col="labelCol"
        :model="formModify"
        :wrapper-col="wrapperCol"
        :rules="rules"
      >
        <a-form-model-item label="协议酒店名称" prop="hotel">
          <a-input v-model="formModify.hotel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="协议编号" prop="id">
          <a-input v-model="formModify.id" disabled></a-input>
        </a-form-model-item>
        <a-form-model-item label="星级">
          <a-select v-model="formModify.level" @change="handleChange">
            <a-select-option value="一">一</a-select-option>
            <a-select-option value="二">二</a-select-option>
            <a-select-option value="三">三</a-select-option>
            <a-select-option value="四">四</a-select-option>
            <a-select-option value="五">五</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="联系人" prop="dutyName">
          <a-input v-model="formModify.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="联系电话" prop="dutyTel">
          <a-input v-model="formModify.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="位置" prop="address">
          <a-input v-model="formModify.address"></a-input>
        </a-form-model-item>
        <a-form-model-item label="价格范围（元）">
          <a-input v-model="formModify.priceMin" placeholder="请输入价格最小值" :style="{width:'165px'}"></a-input>
          <span>&nbsp;~&nbsp;</span>
          <a-input v-model="formModify.priceMax" placeholder="请输入价格最大值" :style="{width:'165px'}"></a-input>
        </a-form-model-item>
        <!-- <a-form-model-item label="备注信息">
          <a-input v-model="formModify.remark" type="textarea" />
        </a-form-model-item>-->
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitModify()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModify()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
  </a-card>
</template>

<script>
const dataHotel = [
  {
    index:1,
    id: 'N1201',
    dutyName: '李霞',
    dutyTel: '13759655332',
    hotel: '福州富力威斯汀酒店',
    level: '五',
    address: '福州江滨中大道366号',
    price:'135~215',
    remark: '折扣力度3折',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 135
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 185
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 160
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 215
      }
    ]
  },
  {
    index:2,
    id: 'N1202',
    dutyName: '尤晓梅',
    dutyTel: '13053955537',
    hotel: '福州品悦酒店',
    address: '福州东浦路59号',
    level: '四',
    remark: '折扣力度4折',
     price:'120~190',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 120
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 165
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 140
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 190
      }
    ]
  },
  {
    index:3,
    id: 'N1203',
    dutyName: '黄丽娟',
    dutyTel: '13659655381',
    hotel: '福州世纪金源酒店',
    address: '福州温泉公园路59号',
    price:'120~180',
    level: '四',
    remark: '折扣力度3折',
    innerData: [
      {
        key: 21,
        roomType: '普通单人间',
        price: 120
      },
      {
        key: 21,
        roomType: '普通双人间',
        price: 150
      },
      {
        key: 22,
        roomType: '豪华单人间',
        price: 140
      },

      {
        key: 22,
        roomType: '豪华双人间',
        price: 180
      }
    ]
  }
]
const columns = [
    {
     title: '序号',
    dataIndex: 'index',
    align: 'center',
  },
  {
     title: '协议酒店名称',
    dataIndex: 'hotel',
    align: 'left',
  },
  {
    title: '协议编号',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '星级',
    dataIndex: 'level',
    align: 'center'
  },
  {
    title: '联系人',
    dataIndex: 'dutyName',
    align: 'center'
  },
  {
    title: '联系电话',
    dataIndex: 'dutyTel',
    align: 'center'
  },
  {
    title: '位置',
    dataIndex: 'address',
    align: 'center'
  },
    {
    title: '价格范围（元）',
    dataIndex: 'price',
    align: 'center',
   scopedSlots: { customRender: 'price' },
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'operation' }
  }
]
const innerColumns = [
  {
    title: '房型',
    dataIndex: 'roomType',
    key: 'roomType',
    align: 'center',
    width: '100px'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  }
]
export default {
  data() {
    return {
      dataHotel,
      columns,
      innerColumns,
      visiblePrice:false,
      titleHotel:"",
      dataPrice:[],
      queryParam: {
        name: '',
        id: '',
        address: ''
      },
      visibleAdd: false,
      visibleModify: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
        id: '',
        hotel: '',
        level: '三',
        dutyName: '',
        dutyTel: '',
        address: '',
        remark: '',
        priceMin:"",
        priceMax:""
      },
      formModify: {
        hotel: '',
        level: '',
        dutyName: '',
        dutyTel: '',
        address: '',
        remark: '',
                priceMin:"",
        priceMax:""
      },
      rules: {
        level: [
          {
            required: true,
            message: '请选择星级',
            trigger: 'blur'
          }
        ],
        hotel: [
          {
            required: true,
            message: '请输入协议酒店名称',
            trigger: 'blur'
          }
        ],
        id: [
          {
            required: true,
            message: '请输入协议编号',
            trigger: 'blur'
          }
        ],
        dutyName: [
          {
            required: true,
            message: '请输入联系人',
            trigger: 'blur'
          }
        ],
        dutyTel: [
          {
            required: true,
            message: '请输入联系电话',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入地点',
            trigger: 'blur'
          }
        ],
         priceMin: [
          {
            required: true,
            message: '请输入价格范围',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    searchQuery() {
      // let idKey = this.queryParam.idKey
      // let newListData = []
      // if (IDName) {
      //   this.dataHotel.filter(item => {
      //     if (item.id.includes(idKey) || item.address.includes(idKey)) {
      //       newListData.push(item)
      //     }
      //   })
      //   this.dataHotel = newListData
      // }
    },
    searchReset() {
      this.dataHotel = dataHotel
      this.queryParam.IDName = ''
    },
    typePrice(record){
     this.visiblePrice=true
     this.titleHotel=record.hotel
     this.dataPrice=record.innerData
    },
    addHotel() {
      this.visibleAdd = true
    },
    onSubmitAdd() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // let length = this.dataHotel.length;
          // this.dataHotel[length] = this.formAdd;
          this.dataHotel.push(this.formAdd)
          this.$message.success('添加成功!')
          this.formAdd = {}
          this.visibleAdd = false
          // this.$confirm({
          //   title: "您是否确定新建此会议安排？",
          //   content: <div style="color:red;"></div>,
          //   onOk() {
          //     //console.log(length);
          //   },
          //   onCancel() {
          //     console.log("Cancel");
          //   },
          //   class: "test"
          // });
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormAdd() {
      this.$refs.ruleForm.resetFields()
    },
    onDelete(id) {
      const dataHotel = [...this.dataHotel]
      this.dataHotel = dataHotel.filter(item => item.id !== id)
    },
    Download() {
      console.log('下载')
    },
    Modify(record) {
      this.visibleModify = true
      console.log(record)
      this.formModify.id = record.id
      this.formModify.hotel = record.hotel
      this.formModify.level = record.level
      this.formModify.dutyName = record.dutyName
      this.formModify.dutyTel = record.dutyTel
      this.formModify.address = record.address
      let price=record.price.split('~')
      this.formModify.priceMin = price[0]
      this.formModify.priceMax = price[1]
      // this.formModify.remark = record.remarks
    },
    onSubmitModify() {
      this.visibleModify = false
      // this.dataHotel.dutyName = this.formModify.dutyName;
      // this.dataHotel.dutyTel = this.formModify.dutyTel;
      // this.dataHotel.address = this.formModify.address;
      // this.dataHotel.remark = this.formModify.remark;
      this.$message.success('修改成功')
    },
    CancelModify() {
      this.visibleModify = false
    },
    handleChange() {}
  }
}
</script>
<style >
#dataHotelTable {
  margin-top: 20px;
}
</style>
