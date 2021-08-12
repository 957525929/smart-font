<template>
  <!-- 会议室信息管理 -->
  <a-card :bordered="false">
    <!-- 搜索操作区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
               <a-col>
          <span>状态：</span>
        </a-col>
        <a-col>
         <a-select placeholder="请选择会议室状态"  style="width: 200px">
            <a-select-option value="空闲">空闲</a-select-option>
            <a-select-option value="已预约">已预约</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>位置：</span>
        </a-col>
        <a-col>
          <!-- <a-input placeholder="请输入区域" v-model="queryParam.area" width="100px"></a-input> -->
              <a-cascader
      style="width: 350px"
      :options="selectOptions"
      change-on-select
      @change="areaChange"
      placeholder="请选择位置"
     :display-render="displayRender"
    />

        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <span>房间号：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入房间号" v-model="queryParam.room"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <!-- <a-col>
          <span>管理员：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入管理员姓名" v-model="queryParam.dutyName"></a-input>
        </a-col>
        <a-col :span="1"></a-col> -->
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
            @click="addRoom()"
            icon="plus"
            :style="{ color: 'white', background:'orange'}"
          >新增会议室</a-button>&nbsp;&nbsp;
          <a-button   icon="download" @click="handleExportXls('会议室信息')">导出</a-button>
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
        <a-table-column title="位置" data-index="area" align="center" ></a-table-column>         
        <a-table-column title="房间号" data-index="room" align="center" ></a-table-column>
          <a-table-column title="状态" data-index="state" align="center" >
            <template slot-scope="state">              
              <span v-if="state=='空闲'">
                  <a-tag color="green">
                  空闲
              </a-tag>
              </span>
              <span v-else>
                 <a-tag color="red">
                  已预约
                </a-tag>
              </span>
            </template>
         </a-table-column>
        <a-table-column title="容纳人数" data-index="number" align="center" ></a-table-column>
        <a-table-column title="基本条件" data-index="condition" align="center">
          <!-- <template slot-scope="condition">
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
          </template> -->
        </a-table-column>
       <!-- <a-table-column title="管理员" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="管理员电话" data-index="dutyTel" align="center"></a-table-column> -->
        <a-table-column title="操作" align="center">
          <template slot-scope="record">
           <a href="javascript:;" @click="detail(record)" :style="{  color: 'orange' }">详情</a>
            <a-divider type="vertical" />
            <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.index)">
              <a href="javascript:;" :style="{  color: 'red' }">删除</a>
            </a-popconfirm>
         
          </template>
        </a-table-column>
      </a-table>
       <br />
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
      <a-form-model-item ref="area" label="位置" prop="area" placeholder="请选择位置">
      <a-cascader
      style="width: 350px"
      :options="selectOptions"
      v-model="formAdd.area"
      change-on-select
      @change="areaChange"
      placeholder="请选择位置"
       :display-render="displayRender"
    />
        </a-form-model-item>
         <a-form-model-item ref="room" label="房间号" prop="room" >
          <a-input v-model="formAdd.room" placeholder="请输入房间号"></a-input>
        </a-form-model-item>
         <a-form-model-item ref="number" label="容纳人数" prop="number" >
          <a-input v-model="formAdd.number" placeholder="请输入房间容纳人数"></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件">
       <!-- <a-checkbox-group @change="onChangeCon" v-model="formAdd.condition">
        <a-row>
          <a-col :span="8">
            <a-checkbox value="茶水">
              茶水
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="白板">
              白板
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="空调">
              空调
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="投影仪">
              投影仪
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="电脑">
              电脑
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="摄像机">
              摄像机
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group> -->
      <a-checkbox :indeterminate="formAdd.indeterminate" :checked="formAdd.checkAll" @change="onCheckAllChangeAdd">
        全部
      </a-checkbox>
        <br />
       <a-checkbox-group v-model="formAdd.condition" :options="plainOptions" @change="onChangeCond" />
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="管理员" prop="dutyName" >
           <a-select  showSearch  v-model="formAdd.dutyName" placeholder="请选择管理员" @change="addDutyName">
            <a-select-option value="李霞">李霞</a-select-option>
            <a-select-option value="尤晓梅">尤晓梅</a-select-option>
            <a-select-option value="黄丽娟">黄丽娟</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="管理员电话" prop="dutyTel" >
          <a-input v-model="formAdd.dutyTel" placeholder="请输入管理员电话" disabled></a-input>
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
         <a-form-model-item label="位置" prop="area">
          <a-input v-model="formModify.area"  disabled></a-input>
        </a-form-model-item>
        <a-form-model-item label="房间号" prop="room">
          <a-input v-model="formModify.room" disabled></a-input>
        </a-form-model-item>
           <a-form-model-item label="状态">
           <a-radio-group v-model="formModify.state" >
      <a-radio value="空闲">
        空闲
      </a-radio>
      <a-radio value="已预约">
        已预约
      </a-radio>
    </a-radio-group>
        </a-form-model-item>
         <a-form-model-item label="容纳人数" prop="number">
          <a-input v-model="formModify.number" ></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件">
        <a-checkbox :indeterminate="formModify.indeterminate" :checked="formModify.checkAll" @change="onCheckAllChangeModify">
        全部
      </a-checkbox>
        <br />
       <a-checkbox-group v-model="formModify.condition" :options="plainOptions" @change="onChangeCondM"/>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="管理员" prop="dutyName">
          <!-- <a-input v-model="formModify.dutyName"></a-input> -->
          <a-select   show-search v-model="formModify.dutyName" @change="ModifyDutyName">
            <a-select-option value="李霞">李霞</a-select-option>
            <a-select-option value="尤晓梅">尤晓梅</a-select-option>
            <a-select-option value="黄丽娟">黄丽娟</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="管理员电话" prop="dutyTel">
          <a-input v-model="formModify.dutyTel" disabled></a-input>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-button type="primary" @click="onSubmitModify()">修改</a-button>
          <a-button style="margin-left: 10px;" @click="CancelModify()">取消</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
    <!-- 会议室详情 -->
    <a-Modal v-model="visibleDetail" title="会议室详情" footer>
      <a-form-model
        :model="formDetail"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
         <a-form-model-item label="位置" >
          <a-input v-model="formDetail.area"  disabled></a-input>
        </a-form-model-item>
        <a-form-model-item label="房间号" >
          <a-input v-model="formDetail.room" disabled></a-input>
        </a-form-model-item>
         <a-form-model-item label="容纳人数">
          <a-input v-model="formDetail.number" disabled></a-input>
        </a-form-model-item>
        <a-form-model-item label="基本条件">
           <a-checkbox-group @change="onChangeCon" v-model="formDetail.condition" disabled>
            <a-row>
              <a-col :span="8">
            <a-checkbox value="茶水">
              茶水
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="白板">
              白板
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="空调">
              空调
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="投影仪">
              投影仪
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="电脑">
              电脑
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="摄像机">
              摄像机
            </a-checkbox>
          </a-col>
            </a-row>
        </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item ref="dutyName" label="管理员"  >
          <a-select   show-search v-model="formDetail.dutyName" disabled>
            <a-select-option value="李霞">李霞</a-select-option>
            <a-select-option value="尤晓梅">尤晓梅</a-select-option>
            <a-select-option value="黄丽娟">黄丽娟</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="管理员电话" >
          <a-input v-model="formDetail.dutyTel" disabled></a-input>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
  </a-card>
</template>

<script>
import { areaData } from './data/area.js'
import { dataRoom } from './data/dataRoom.js'
import { JeecgListMixin } from '@/mixins/JeecgListMixin'
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
    title: '位置',
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
const plainOptions = ['茶水', '白板', '空调', '投影仪', '电脑', '摄像机'];
export default {
   mixins:[JeecgListMixin],
  data() {
    return {
      plainOptions,
      // indeterminate: true,
      // checkAll: false,
      selectOptions: areaData,
      dataRoom:dataRoom,
      columns,
      queryParam: {
        dutyName: '',
        room: '',
        area:""
      },
      visibleAdd: false,
      visibleModify: false,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formAdd: {
      indeterminate: false,
      checkAll: false,
      area: [],
      room: undefined,
      number: undefined,
      dutyName: undefined,
      dutyTel: undefined,
      condition: [],
      remark: ''
      },
        radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      formModify: {
      indeterminate: true,
      checkAll: false,
      number: '',
      dutyName: '',
      dutyTel: '',
      condition: [],  
      state: '',
      },      
      rules: {
         area: [
          {
            required: true,
            message: '请选择位置',
            trigger: 'change'
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
            message: '请输入管理员',
            trigger: 'blur'
          }
        ],
        dutyTel: [
          {
            required: true,
            message: '请输入管理员电话',
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
      },
      visibleDetail:false,
      formDetail:{},
      url: {      
        list: "/sys/user/list",
        exportXlsUrl: "/sys/user/exportXls",      
       },
    }
  },
  methods: {
    displayRender({ labels }){
      return  labels.join('.')
    },
    areaChange(value){
      console.log(value)
    },
    onChangeCon(){},
    onChangeCond(checkedList){
      console.log("条件",checkedList)    
      this.formAdd.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.formAdd.checkAll = checkedList.length === plainOptions.length;    
    },

    onCheckAllChangeAdd(e) {
      //this.formAdd.condition=plainOptions
      Object.assign(this.formAdd, {      
        condition: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
      onChangeCondM(checkedList){
      console.log("条件",checkedList)    
      this.formModify.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.formModify.checkAll = checkedList.length === plainOptions.length;    
    },
    onCheckAllChangeModify(e){
      Object.assign(this.formModify, {      
        condition: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
     // debugger
      console.log(this.formModify)
    },
    searchQuery() {
    },
    searchReset() {
      this.dataRoom = dataRoom
      this.queryParam.IDName = ''
    },
    addRoom() {
      this.visibleAdd = true
    },
    addDutyName(value){
    if(value=='李霞'){
        this.formAdd.dutyTel='13759655332'
      }
       if(value=='尤晓梅'){
         this.formAdd.dutyTel='13053955537'
       }
        if(value=='黄丽娟'){
         this.formAdd.dutyTel='13659655381'
       } 
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
       this.formModify.condition=record.condition.split('，')
      this.formModify.dutyTel = record.dutyTel
        this.formModify.state=record.state
      //this.formModify.condition = record.condition
    },
        ModifyDutyName(value){
        if(value=='李霞'){
        this.formModify.dutyTel='13759655332'
      }
       if(value=='尤晓梅'){
         this.formModify.dutyTel='13053955537'
       }
        if(value=='黄丽娟'){
         this.formModify.dutyTel='13659655381'
       } 
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
   detail(record){
      this.visibleDetail = true
      console.log(record)
      this.formDetail.area = record.area
       this.formDetail.room = record.room
      this.formDetail.number = record.number
      this.formDetail.dutyName = record.dutyName
       this.formDetail.condition=record.condition.split('，')
      this.formDetail.dutyTel = record.dutyTel
  }
  }
}
</script>
<style >
#dataRoomTable {
  margin-top: 20px;
}
</style>
