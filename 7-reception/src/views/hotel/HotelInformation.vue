<template>
  <!-- 酒店信息管理 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="12" :sm="24">
            <a-form-item label="负责人或编号：">
              <a-input placeholder="请输入负责人或编号" v-model="queryParam.IDName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="4" :lg="1" :md="12" :sm="24">
            <!-- <a-form-item >
                 <a-icon
                type="search"
                @click="searchQuery"
                :style="{fontSize:'25px',color:'#49a9ee'}"
              />   
            </a-form-item>-->
            <a-button
              :style="{ background: '#49a9ee', color: 'white'}"
              icon="search"
              @click="searchQuery"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          </a-col>
          <a-col :xl="2" :lg="3" :md="12" :sm="24">
            <a-button
              @click="addHotel()"
              icon="plus"
              :style="{ color: 'white', background:'orange'}"
            >新增酒店</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 搜索操作区域-END -->

    <!-- table区域-begin -->
    <div>
      <a-table :data-source="dataHotel" :scroll="{ y: 450 }" :pagination="false" rowKey="id">
        <a-table-column title="协议酒店编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="负责人" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="备注信息" data-index="remark" align="center"></a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>

    <!-- 新增 -->
    <a-Modal v-model="visibleAdd" title="新增酒店" footer>
      <a-form-model
        ref="ruleForm"
        :model="formAdd"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="id" label="协议酒店编号" prop="id" placeholder="请输入协议酒店编号">
          <a-input v-model="formAdd.id" @blur="() => {$refs.id.onFieldBlur()}"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="负责人" prop="dutyName" placeholder="请输入负责人">
          <a-input v-model="formAdd.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="负责人电话" prop="dutyTel" placeholder="请输入负责人电话">
          <a-input v-model="formAdd.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="地点" prop="address" placeholder="请输入地点">
          <a-input v-model="formAdd.address"></a-input>
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
  </a-card>
</template>

<script>
const dataHotel = [
  {
    id: 'N1201',
    dutyName: '小李',
    dutyTel: '13759655332',
    address: '香格里拉酒店',
    remark: '折扣力度3折'
  },
  {
    id: 'N1202',
    dutyName: '小王',
    dutyTel: '13759655348',
    address: '好利来酒店',
    remark: '折扣力度2折'
  },
  {
    id: 'N1203',
    dutyName: '小林',
    dutyTel: '13053955537',
    address: '康特大酒店',
    remark: '折扣力度4折'
  },
  {
    id: 'N1204',
    dutyName: '小黄',
    dutyTel: '13659655381',
    address: '世纪金源酒店',
    remark: '折扣力度3折'
  },
  {
    id: 'N1205',
    dutyName: '小张',
    dutyTel: '13659055939',
    address: '阿弥陀佛酒店',
    remark: '折扣力度3折'
  },
  {
    id: 'N1206',
    dutyName: '郑文',
    dutyTel: '13556826132',
    address: '富士酒店',
    remark: '折扣力度3.5折'
  }
]

export default {
  data() {
    return {
      dataHotel,
      queryParam: {
        IDName: ''
      },
      visibleAdd: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
        id: '',
        dutyName: '',
        dutyTel: '',
        address: '',
        remark: ''
      },
      rules: {
        id: [
          {
            required: true,
            message: '请输入协议酒店编号',
            trigger: 'blur'
          }
        ],
        dutyName: [
          {
            required: true,
            message: '请输入负责人',
            trigger: 'blur'
          }
        ],
        dutyTel: [
          {
            required: true,
            message: '请输入负责人电话',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入地点',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    searchQuery() {
      let IDName = this.queryParam.IDName
      let newListData = []
      if (IDName) {
        this.dataHotel.filter(item => {
          if (item.id.includes(IDName) || item.dutyName.includes(IDName)) {
            newListData.push(item)
          }
        })
        this.dataHotel = newListData
      }
    },
    searchReset() {
      this.dataHotel = dataHotel
      this.queryParam.IDName = ''
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
          alert('创建成功!')
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
    }
  }
}
</script>
