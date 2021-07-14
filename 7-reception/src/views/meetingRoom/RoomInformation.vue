<template>
  <!-- 会议室信息管理 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="5" :lg="7" :md="8" :sm="24">
            <a-form-item label="地点或编号：">
              <a-input placeholder="请输入地点或会议室编号" v-model="queryParam.IDName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="4" :lg="1" :md="1" :sm="24">
            <a-button
              :style="{ background: '#49a9ee', color: 'white'}"
              icon="search"
              @click="searchQuery"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
            <!-- <a-form-item>
              <a-icon
                type="search"
                @click="searchQuery"
                :style="{fontSize:'25px',color:'#49a9ee'}"
              />            
            </a-form-item>-->
          </a-col>
          <a-col :xl="2" :lg="3" :md="4" :sm="24">
            <a-button
              @click="addRoom()"
              icon="plus"
              :style="{ color: 'white', background:'orange'}"
            >新增会议室</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 搜索操作区域-END -->
    <!-- table区域-begin -->
    <div>
      <a-table :data-source="dataRoom" :scroll="{ y: 450 }" :pagination="false" rowKey="id">
        <a-table-column title="会议室编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="负责人" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="基本条件" data-index="condition" align="center">
          <template slot-scope="condition">
            <div v-if="condition=='0'">
              <img src="./0.png" alt width="180px" />
            </div>
            <div v-else-if="condition=='1'">
              <img src="./1.png" alt width="180px" />
            </div>
            <div v-else-if="condition=='2'">
              <img src="./2.png" alt width="180px" />
            </div>
            <div v-else-if="condition=='3'">
              <img src="./3.png" alt width="180px" />
            </div>
            <div v-else>
              <span>无</span>
            </div>
          </template>
        </a-table-column>
        <a-table-column title="操作" align="center">
          <template slot-scope="record">
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'orange' }">修改</a>
            <a-divider type="vertical" />
            <a href="javascript:;" @click="Download(record)">下载</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
              <a href="javascript:;" :style="{  color: 'red' }">删除</a>
            </a-popconfirm>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>

    <!-- 新增 -->
    <a-Modal v-model="visibleAdd" title="新增会议室" footer>
      <a-form-model
        ref="ruleForm"
        :model="formAdd"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="dutyName" label="负责人" prop="dutyName" placeholder="请输入负责人">
          <a-input v-model="formAdd.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="负责人电话" prop="dutyTel" placeholder="请输入负责人电话">
          <a-input v-model="formAdd.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="地点" prop="address" placeholder="请输入地点">
          <a-input v-model="formAdd.address"></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件" prop="condition">
          <!-- <a-select v-model="formAdd.condition" placeholder="请选择条件">
            <a-select-option value="0">0：饮料、多媒体</a-select-option>
            <a-select-option value="1">1：饮料、风扇、多媒体</a-select-option>
            <a-select-option value="2">2：饮料、风扇、空调、多媒体</a-select-option>
            <a-select-option value="3">3：饮料、风扇、景观、多媒体</a-select-option>
          </a-select> -->
              <a-radio-group v-model="formAdd.condition" @change="onChange">
            <a-radio :style="radioStyle" :value="0">
              <img src="./0.png" alt width="180px" />
            </a-radio>
            <a-radio :style="radioStyle" :value="1">
              <img src="./1.png" alt width="180px" />
            </a-radio>
            <a-radio :style="radioStyle" :value="2">
              <img src="./2.png" alt width="180px" />
            </a-radio>
            <a-radio :style="radioStyle" :value="3">
              <img src="./3.png" alt width="180px" />
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitAdd()">创建</a-button>
          <a-button style="margin-left: 10px;" @click="resetFormAdd()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
    <!-- 修改 -->
    <a-Modal v-model="visibleModify" title="新增会议室" footer>
      <a-form-model
        ref="ruleForm"
        :model="formModify"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="会议室编号">
          <a-input v-model="formModify.id" disabled></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="负责人" prop="dutyName">
          <a-input v-model="formModify.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="负责人电话" prop="dutyTel">
          <a-input v-model="formModify.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="地点" prop="address">
          <a-input v-model="formModify.address"></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件" prop="condition">
          <a-select v-model="formModify.condition" placeholder="请选择条件">
            <a-select-option value="0">0：饮料、多媒体</a-select-option>
            <a-select-option value="1">1：饮料、风扇、多媒体</a-select-option>
            <a-select-option value="2">2：饮料、风扇、空调、多媒体</a-select-option>
            <a-select-option value="3">3：饮料、风扇、景观、多媒体</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitModify()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModify()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
  </a-card>
</template>

<script>
const dataRoom = [
  {
    id: "F1201",
    dutyName: "小李",
    dutyTel: "13759655332",
    address: "会议室203",
    condition: "0"
  },
  {
    id: "F1202",
    dutyName: "小王",
    dutyTel: "13759655348",
    address: "会议室204",
    condition: "1"
  },
  {
    id: "F1203",
    dutyName: "小林",
    dutyTel: "13053955537",
    address: "会议室205",
    condition: "2"
  },
  {
    id: "F1204",
    dutyName: "小黄",
    dutyTel: "13659655381",
    address: "会议室206",
    condition: "2"
  }
];

export default {
  data() {
    return {
      dataRoom,
      queryParam: {
        IDName: ""
      },
      visibleAdd: false,
      visibleModify: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
        id: "",
        dutyName: "",
        dutyTel: "",
        address: "",
        condition: ""
      },
      formModify: {},
            radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      rules: {
        dutyName: [
          {
            required: true,
            message: "请输入负责人",
            trigger: "blur"
          }
        ],
        dutyTel: [
          {
            required: true,
            message: "请输入负责人电话",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "请输入地点",
            trigger: "blur"
          }
        ],
        condition: [
          {
            required: true,
            message: "请选择基本条件",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    searchQuery() {
      let IDName = this.queryParam.IDName;
      let newListData = [];
      if (IDName) {
        this.dataRoom.filter(item => {
          if (item.id.includes(IDName) || item.address.includes(IDName)) {
            newListData.push(item);
          }
        });
        this.dataRoom = newListData;
      }
    },
    searchReset() {
      this.dataRoom = dataRoom;
      this.queryParam.IDName = "";
    },
    addRoom() {
      this.visibleAdd = true;
    },
    onSubmitAdd() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // let length = this.dataRoom.length
          // this.dataRoom[length] = this.formAdd
          this.dataRoom.push(this.formAdd);
          this.$message.success("添加成功!");
          this.formAdd = {};
          this.visibleAdd = false;
        } else {
          // console.log('error submit!!')
          return false;
        }
      });
    },
    resetFormAdd() {
      this.$refs.ruleForm.resetFields();
    },
    onDelete(id) {
      const dataHotel = [...this.dataHotel];
      this.dataHotel = dataHotel.filter(item => item.id !== id);
    },
    Modify(record) {
      this.visibleModify = true;
      console.log(record);
      this.formModify.id = record.id;
      this.formModify.dutyName = record.dutyName;
      this.formModify.dutyTel = record.dutyTel;
      this.formModify.address = record.address;
      this.formModify.condition = record.condition;
    },
    Download() {
      console.log("下载");
    },
    CancelModify() {
      this.visibleModify = false;
    },
    onSubmitModify() {
      this.visibleModify = false;
      this.$message.success("修改成功");
    }
  }
};
</script>
