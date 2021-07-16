<template>
  <!-- 酒店信息管理 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <a-col>
          <span>区域：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入区域" v-model="queryParam.area" width="100px"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>房间号：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入房间号" v-model="queryParam.id"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>管理员：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入管理员" v-model="queryParam.dutyName"></a-input>
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
        <a-col :span="3"></a-col>
        <a-col>
          <a-button
            @click="addRoom()"
            icon="plus"
            :style="{ color: 'white', background:'orange'}"
          >新增会议室</a-button>
          <a-button>
            <a-icon type="download" />导出
          </a-button>
        </a-col>
      </a-row>
      <!-- <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="5" :lg="1" :md="1" :sm="24">
            <a-form-item label="酒店名称或位置：">
              <a-input placeholder="请输入酒店名称或位置" v-model="queryParam.IDName"></a-input>
            </a-form-item>
            <a-col >
              <a-form-item label="协议编号：">
                <a-input placeholder="请输入协议编号" v-model="queryParam.IDName"></a-input>
              </a-form-item>
            </a-col>
          </a-col>
          <a-col :xl="10" :lg="1" :md="12" :sm="24">
            <a-button
              :style="{ background: '#49a9ee', color: 'white'}"
              icon="search"
              @click="searchQuery"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          </a-col>
          <a-col>
            <a-button
              @click="addHotel()"
              icon="plus"
              :style="{ color: 'white', background:'orange'}"
            >新增酒店</a-button>
            <a-button>
              <a-icon type="download" />导出
            </a-button>
          </a-col>
        </a-row>
      </a-form>-->
    </div>
    <!-- 搜索操作区域-END -->

    <!-- table区域-begin -->
    <!-- <div id="dataRoomTable">
      <a-table :data-source="dataRoom" :columns="columns" :pagination="false" rowKey="id">
        <template slot-scope="condition" slot="condition">
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
          <template slot-scope="record" slot="action">
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'orange' }">修改</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(rec-ord.id)">
              <a href="javascript:;" :style="{  color: 'red' }">删除</a>
            </a-popconfirm>
          </template>
         
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div> -->


    <div id="dataRoomTable">
      <a-table :data-source="dataRoom"   :pagination="false" rowKey="index">
          <a-table-column title="序号" data-index="index" align="left" fixed="left" width="150px" scopedSlots:{ customRender: function(t, r, index) {
      return parseInt(index) + 1}}></a-table-column>
        <a-table-column title="区域" data-index="area" align="center" ></a-table-column>         
        <a-table-column title="房间号" data-index="room" align="center" ></a-table-column>
        <a-table-column title="容纳人数（个）" data-index="number" align="center" ></a-table-column>
        <a-table-column title="管理员" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="管理员电话" data-index="dutyTel" align="center"></a-table-column>
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
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.index)">
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
      <a-form-model-item ref="area" label="区域" prop="area" placeholder="请输入区域">
           <a-select v-model="formModify.area"  showSearch>
            <a-select-option value="福建烟草公司机关A区域1号楼">福建烟草公司机关A区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关A区域2号楼">福建烟草公司机关A区域2号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域1号楼">福建烟草公司机关B区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域2号楼">福建烟草公司机关B区域2号楼</a-select-option>
            </a-select>
        </a-form-model-item>
         <a-form-model-item ref="room" label="房间号" prop="room" placeholder="请输入房间号">
          <a-input v-model="formAdd.room"></a-input>
        </a-form-model-item>
         <a-form-model-item ref="number" label="容纳人数（个）" prop="number" placeholder="请输入房间容纳人数（个）">
          <a-input v-model="formAdd.number"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="管理员" prop="dutyName" placeholder="请输入负责人">
          <a-input v-model="formAdd.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="管理员电话" prop="dutyTel" placeholder="请输入负责人电话">
          <a-input v-model="formAdd.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件" prop="condition">
          <!-- <a-select v-model="formAdd.condition" placeholder="请选择条件">
            <a-select-option value="0">0：饮料、多媒体</a-select-option>
            <a-select-option value="1">1：饮料、风扇、多媒体</a-select-option>
            <a-select-option value="2">2：饮料、风扇、空调、多媒体</a-select-option>
            <a-select-option value="3">3：饮料、风扇、景观、多媒体</a-select-option>
          </a-select> -->
       <a-checkbox-group @change="onChange">
    <a-row>
      <a-col :span="8">
        <a-checkbox value="A">
          茶饮
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="B">
          风扇
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="C">
          空调
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="D">
          盆栽
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="E">
          多媒体
        </a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitAdd()">创建</a-button>
          <a-button style="margin-left: 10px;" @click="resetFormAdd()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
    <!--修改信息 -->
       <a-Modal v-model="visibleModify" title="修改会议室信息" footer>
      <a-form-model
        ref="ruleForm"
        :model="formModify"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="区域" prop="area">
            <a-select v-model="formModify.area" placeholder="请选择条件" showSearch>
            <a-select-option value="福建烟草公司机关A区域1号楼">福建烟草公司机关A区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关A区域2号楼">福建烟草公司机关A区域2号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域1号楼">福建烟草公司机关B区域1号楼</a-select-option>
            <a-select-option value="福建烟草公司机关B区域2号楼">福建烟草公司机关B区域2号楼</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="房间号" prop="room">
          <a-input v-model="formModify.room" ></a-input>
        </a-form-model-item>
         <a-form-model-item label="容纳人数（个）" prop="number">
          <a-input v-model="formModify.number" ></a-input>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="管理员" prop="dutyName">
          <a-input v-model="formModify.dutyName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="管理员电话" prop="dutyTel">
          <a-input v-model="formModify.dutyTel"></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件" prop="condition">
          <!-- <a-select v-model="formModify.condition" placeholder="请选择条件">
            <a-select-option value="0">0：饮料、多媒体</a-select-option>
            <a-select-option value="1">1：饮料、风扇、多媒体</a-select-option>
            <a-select-option value="2">2：饮料、风扇、空调、多媒体</a-select-option>
            <a-select-option value="3">3：饮料、风扇、景观、多媒体</a-select-option>
          </a-select> -->
  <a-checkbox-group @change="onChange">
    <a-row>
      <a-col :span="8">
        <a-checkbox value="A">
          茶饮
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="B">
          风扇
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="C">
          空调
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="D">
          盆栽
        </a-checkbox>
      </a-col>
      <a-col :span="8">
        <a-checkbox value="E">
          多媒体
        </a-checkbox>
      </a-col>
    </a-row>
  </a-checkbox-group>
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
    index: 1,
    area:"福建烟草公司机关A区域1号楼",
    number:"5-6",
    dutyName: "李霞",
    dutyTel: "13759655332",
    room: "会议室203",
    condition: "0"
  },
  {
    index: 2,
    area:"福建烟草公司机关A区域2号楼",
    number:"6-8",
    dutyName: "王莉莉",
    dutyTel: "13759655348",
    room: "会议室204",
    condition: "1"
  },
  {
  index: 3,
    area:"福建烟草公司机关B区域1号楼",
    number:"3-4",
    dutyName: "尤晓梅",
    dutyTel: "13053955537",
    room: "会议室205",
    condition: "2"
  },
  {
   index: 4,
    area:"福建烟草公司机关B区域2号楼",
    number:"4-6",
    dutyName: "黄丽娟",
    dutyTel: "13659655381",
    room: "会议室206",
    condition: "2"
  }
];
const columns = [
  {
    title: '序号',
    dataIndex: '',
    key: 'rowIndex',
    fixed: 'left',
    width: 100,
    align: 'center',
    customRender: function(t, r, index) {
      return parseInt(index) + 1
    }
  },
  {
    title: '区域',
    align: 'center',
    dataIndex: 'area'
  },
  {
    title: '房间号',
    align: 'center',
    dataIndex: 'room'
  },
  {
    title: '容纳人数',
    align: 'center',
    dataIndex: 'number'
  },
  {
    title: '负责人',
    align: 'center',
    dataIndex: 'dutyName'
  },
  {
    title: '负责人电话',
    align: 'center',
    dataIndex: 'dutyTel'
  },
  {
    title: '基本条件',
    align: 'center',
    dataIndex: 'condition'
  },
  {
    title: '操作',
    align: 'center',
    dataIndex: 'action'
  }
]
export default {
  data() {
    return {
      dataRoom,
      columns,
      queryParam: {
        dutyName: '',
        id: '',
        area:""
      },
      visibleAdd: false,
      visibleModify: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
      area: '',
      room: '',
      number: '',
        dutyName: '',
        dutyTel: '',
        condition: '',
        remark: ''
      },
        radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      formModify: {},

      rules: {
         area: [
          {
            required: true,
            message: '请输入区域',
            trigger: 'blur'
          }
        ],
         room: [
          {
            required: true,
            message: '请输入房间号',
            trigger: 'blur'
          }
        ],
        number: [
          {
            required: true,
            message: '请输入容纳人数（个）',
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
    onChange(){},
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
      this.dataRoom = dataRoom
      this.queryParam.IDName = ''
    },
    addRoom() {
      this.visibleAdd = true
    },
    onSubmitAdd() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // let length = this.dataHotel.length;
          // this.dataHotel[length] = this.formAdd;
          // this.dataRoom.push(this.formAdd)
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
    onDelete(index) {
      const dataRoom = [...this.dataRoom]
      this.dataRoom = dataRoom.filter(item => item.index !== index)
    },
    Download() {
      console.log('下载')
    },
    Modify(record) {
      this.visibleModify = true
      console.log(record)
      this.formModify.area = record.area
       this.formModify.room = record.room
        this.formModify.number = record.number
      this.formModify.dutyName = record.dutyName
      this.formModify.dutyTel = record.dutyTel
      this.formModify.condition = record.condition
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
    }
  }
}
</script>
<style >
#dataRoomTable {
  margin-top: 20px;
}
</style>
