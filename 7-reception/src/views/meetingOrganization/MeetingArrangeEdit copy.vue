<template>
  <!-- 会议安排2 -->
  <a-card :bordered="false">
    <div>
      <router-link :to="{ path: '/meetingOrganization/MeetingArrange'}" replace>
        <a-button :style="{ background: '#49a9ee', color: 'white' }" icon="rollback">返回上一级</a-button>
      </router-link>
      <a-button
        :style="{ background: 'orange', color: 'white' }"
        icon="plus"
        @click="arrangeAdd()"
      >新增安排</a-button>
    </div>

    <!-- table1区域-begin -->
    <div>
      <a-table :data-source="dataSelet" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="会议成员" data-index="members" align="center"></a-table-column>
        <a-table-column title="备注" data-index="remark" align="center"></a-table-column>
      </a-table>
    </div>
    <!-- table2区域-begin -->
    <div>
      <a-table :columns="columnsR" :data-source="projectData" :pagination="false" rowKey="id">
        <template slot="action" slot-scope="text,record">
          <a-button :style="{ background: 'orange', color: 'white' }">
            <a @click="Modify(record)" href="javascript:;">修改信息</a>
          </a-button>
          <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
            <a-button :style="{ background: 'red', color: 'white' }">删除</a-button>
          </a-popconfirm>
        </template>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
    <!--修改信息 -->
    <a-Modal
      :visible="visiblekModify"
      @ok="handleOkModify"
      @cancel="handleCancelModify"
      ok-text="确认"
      cancel-text="取消"
      width="1000px"
    >
      <a-table
        :data-source="dataEdit"
        :style="{padding:'20px'}"
        rowKey="id"
        :pagination="false"
        :columns="columnsEdit"
      >
        <template slot="name" slot-scope="text, record">
          <editable-cell :text="text" @change="onCellChange(record.id, 'name', $event)" />
        </template>
        <template slot="dateTime" slot-scope="text, record">
          <editable-cellTime :text="text" @change="onCellChange(record.id, 'dateTime', $event)" />
        </template>
        <template slot="address" slot-scope="text, record">
          <editable-cell :text="text" @change="onCellChange(record.id, 'address', $event)" />
        </template>
        <template slot="members" slot-scope="text, record">
          <editable-cell :text="text" @change="onCellChange(record.id, 'members', $event)" />
        </template>
      </a-table>
      <template>
        <a-carousel arrows>
          <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
            <a-icon type="caret-left" />
          </div>
          <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
            <a-icon type="caret-right" />
          </div>
          <div>
            <img
              src="./会议室.png"
              alt
              style="border: 15px solid #f5f8fe;display:inline"
              class="select1"
            />
            <p>
              二层306会议室
              <span style="color:red">（5~6人）</span>
            </p>
            <img src="./0.png" alt style="width:180px;display:inline" />
          </div>
          <div>
            <img src="./会议室.png" alt style="border: 15px solid #f5f8fe;display:inline" />
            <p>
              二层305会议室
              <span style="color:red">（5~6人）</span>
            </p>
            <img src="./1.png" alt style="width:180px;display:inline" />
          </div>
          <div>
            <img src="./会议室.png" alt style="border: 15px solid #f5f8fe;display:inline" />
            <p>
              二层304会议室
              <span style="color:red">（1~4人）</span>
            </p>
            <img src="./2.png" alt style="width:180px;display:inline" />
          </div>
          <div>
            <img src="./会议室.png" alt style="border: 15px solid #f5f8fe;display:inline" />
            <p>
              二层303会议室
              <span style="color:red">（3~5人）</span>
            </p>
            <img src="./3.png" alt style="width:180px;display:inline" />
          </div>
        </a-carousel>
      </template>
    </a-Modal>
    <!-- 新增 -->
    <a-Modal v-model="visibleAdd" title="新增会议安排" footer>
      <a-form-model
        ref="ruleForm"
        :model="formAdd"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="id" label="项目编号" prop="id" placeholder="请输入项目编号">
          <a-input v-model="formAdd.id" @blur="() => {$refs.id.onFieldBlur()}"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="name" label="项目名称" prop="name" placeholder="请输入会议名称">
          <a-input v-model="formAdd.name"></a-input>
        </a-form-model-item>
        <a-form-model-item label="时间" prop="dateTime">
          <a-range-picker
            @change="onChange"
            v-model="formAdd.dateTime"
            format="YYYY年MM月DD日"
            style="width: 100%;"
          />
        </a-form-model-item>
        <a-form-model-item label="地点" prop="address" placeholder="请输入会议地点">
          <a-input v-model="formAdd.address"></a-input>
        </a-form-model-item>
        <a-form-model-item label="安排成员" prop="members" placeholder="请输入会议成员">
          <a-input v-model="formAdd.members"></a-input>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 7 }">
          <a-button type="primary" @click="onSubmitAdd()">创建</a-button>
          <a-button style="margin-left: 10px;" @click="resetFormAdd()">重置</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-Modal>
  </a-card>
</template>

<script>
const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String
  },
  data() {
    return {
      value: this.text,
      editable: false
    }
  },
  methods: {
    handleChange(e) {
      const value = e.target.value
      this.value = value
    },
    check() {
      this.editable = false
      this.$emit('change', this.value)
    },
    edit() {
      this.editable = true
    }
  }
}
const EditableCellTime = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper"> 
        <a-range-picker @change="handleChange"  format="YYYY年MM月DD日" />
        <a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String
  },
  data() {
    return {
      value: this.text,
      editable: false
    }
  },
  methods: {
    handleChange(e) {
      let startDate = e[0].format('YYYY年MM月DD日')
      let endDate = e[1].format('YYYY年MM月DD日')
      const value = startDate + '~' + endDate
      this.value = value
    },
    check() {
      this.editable = false
      this.$emit('change', this.value)
    },
    edit() {
      this.editable = true
    }
  }
}
const columnsR = [
  {
    title: '项目编号',
    width: 150,
    align: 'left',
    dataIndex: 'id'
  },
  {
    title: '项目名称',
    align: 'center',
    dataIndex: 'name'
  },
  {
    title: '时间',
    align: 'center',
    dataIndex: 'dateTime'
  },
  {
    title: '地点',
    align: 'center',
    dataIndex: 'address'
  },
  {
    title: '安排成员',
    align: 'center',
    dataIndex: 'members'
  },
  {
    title: '状态与操作',
    align: 'center',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
const columnsEdit = [
  {
    title: '项目编号',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    align: 'center',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '时间',
    dataIndex: 'dateTime',
    align: 'center',
    scopedSlots: { customRender: 'dateTime' }
  },
  {
    title: '地点',
    dataIndex: 'address',
    align: 'center',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: '安排成员',
    dataIndex: 'members',
    align: 'center',
    scopedSlots: { customRender: 'members' }
  }
]
// const dataSelet = [
//   {
//     id: 'A1201',
//     name: 'XX项目周例会0605',
//     dateTime: '2021年6月5日~2021年6月8日共3天',
//     address: '省公司',
//     members: '陈宏涛；李小玲；林诺汐；陈熙雨',
//     remark: '第一期项目周例会'
//   }
// ]
const projectData = [
  {
    id: 'A120101',
    name: '午餐',
    dateTime: '2021年6月5日',
    address: '香格里拉酒店',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨'
  },
  {
    id: 'A120102',
    name: '晚餐',
    dateTime: '2021年6月5日',
    address: '香格里拉酒店',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨'
  },
  {
    id: 'A120103',
    name: '午餐',
    dateTime: '2021年6月5日',
    address: '香格里拉酒店',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨'
  },
  {
    id: 'A120104',
    name: 'XX会议XX分会',
    dateTime: '2021年6月5日',
    address: '省公司',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨'
  },
  {
    id: 'A120105',
    name: '住宿',
    dateTime: '2021年6月5日~2021年6月8日',
    address: '香格里拉酒店',
    members: '陈宏涛；李小玲；林诺汐；陈熙雨'
  }
]

export default {
  components: {
    EditableCell,
    EditableCellTime
  },
  data() {
    return {
      columnsR,
      columnsEdit,
      dataSelet: [
        {
          id: '',
          name: '',
          dateTime: '',
          address: '',
          members: '',
          remark: ''
        }
      ],
      projectData,
      visiblekModify: false,
      visibleAdd: false,
      dataEdit: [],
      labelCol: { span: 5 },
      wrapperCol: { span: 18 },
      other: '',
      formAdd: {
        id: '',
        name: '',
        address: '',
        members: '',
        dateTime: undefined
      },
      rules: {
        id: [
          {
            required: true,
            message: '请输入项目编号',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入会议名称',
            trigger: 'blur'
          }
        ],
        dateTime: [
          {
            required: true,
            message: '请选择会议时间段',
            trigger: 'blur'
          }
        ],

        address: [
          {
            required: true,
            message: '请输入会议地址',
            trigger: 'blur'
          }
        ],
        members: [
          {
            required: true,
            message: '请输入会议成员',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
    // console.log(this.$route.query.record)
    this.dataSelet[0].id = this.$route.query.record.id
    this.dataSelet[0].name = this.$route.query.record.name
    this.dataSelet[0].dateTime = this.$route.query.record.dateTime
    this.dataSelet[0].address = this.$route.query.record.address
    this.dataSelet[0].members = this.$route.query.record.members
    this.dataSelet[0].remark = this.$route.query.record.remark
  },
  methods: {
    Modify(record) {
      console.log('修改信息')
      this.visiblekModify = true
      this.dataEdit = [record]
      console.log(record)
    },
    handleOkModify() {
      this.visiblekModify = false
    },
    handleCancelModify() {
      this.visiblekModify = false
    },
    onDelete(id) {
      const projectData = [...this.projectData]
      this.projectData = projectData.filter(item => item.id !== id)
    },
    arrangeAdd() {
      //console.log(1);
      this.visibleAdd = true
    },
    onChange() {},
    onSubmitAdd() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // let length = this.projectData.length;
          let startDate = this.formAdd.dateTime[0].format('YYYY年MM月DD日')
          let endDate = this.formAdd.dateTime[1].format('YYYY年MM月DD日')
          this.formAdd.dateTime = startDate + '~' + endDate
          this.projectData.push(this.formAdd)
          alert('创建成功!')
          this.formAdd = {}
          this.visibleAdd = false
          // console.log(this.projectData);
        } else {
          // console.log("error submit!!");
          return false
        }
      })
    },
    resetFormAdd() {
      this.formAdd.dateTime = undefined
      this.$refs.ruleForm.resetFields()
    },
    onCellChange(id, dataIndex, value) {
      const dataEdit = [...this.dataEdit]
      const target = dataEdit.find(item => item.id === id)
      if (target) {
        target[dataIndex] = value
        this.dataEdit = dataEdit
      }
    }
  }
}
</script>
<style scoped>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
/* For demo */
.ant-carousel {
  width: 100%;
  margin: 0 auto;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 320px;
  background: #fff;
  /* background: #fafafa; */
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 40px;
  height: 40px;
  font-size: 40px;
  /* color: #f1f3f4; */
  color: #c0c0c0;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  /* color: #49a9ee; */
  color: #c0c0c0;
}
</style>
