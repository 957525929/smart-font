<template>
  <!-- 会议安排 -->
  <a-card :bordered="false">
    <div>
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content" slot="description" v-if="current == 0">
        <a-form-model
          ref="ruleFormHotel"
          :model="formHotel"
          :rules="rulesHotel"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formHotel.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formHotel.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>

          <a-form-model-item label="选择协议酒店" prop="hotel">
            <a-select v-model="formHotel.hotel" placeholder="请选择协议酒店">
              <a-select-option value="香格里拉酒店">香格里拉酒店</a-select-option>
              <a-select-option value="华宜时尚酒店">华宜时尚酒店</a-select-option>
              <a-select-option value="福州品悦酒店">福州品悦酒店</a-select-option>
              <a-select-option value="世纪金源酒店">世纪金源酒店</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitHotel">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormHotel">重置</a-button>
          </a-form-model-item>
        </a-form-model>
        <!--  -->
        <a-table
          :data-source="dataHotel"
          :scroll="{ y: 450 }"
          :pagination="false"
          rowKey="dateTime"
        >
          <a-table-column title="序号" data-index="index" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="协议酒店" data-index="hotel" align="center"></a-table-column>
          <a-table-column title="操作" data-index="action" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <div class="steps-content" slot="description" v-if="current == 1">
        <a-form-model
          ref="ruleFormEat"
          :model="formEat"
          :rules="rulesEat"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formEat.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formEat.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>
          <a-form-model-item label="餐别" prop="type">
            <a-select v-model="formEat.type" placeholder="选择餐别">
              <a-select-option value="早餐">早餐</a-select-option>
              <a-select-option value="午餐">午餐</a-select-option>
              <a-select-option value="晚餐">晚餐</a-select-option>
              <a-select-option value="三餐">三餐</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="就餐地点" prop="way">
            <a-select v-model="formEat.way" placeholder="选择就餐方式">
              <!-- <a-select-option value="酒店">{{eatHotel}}</a-select-option> -->
              <a-select-option :value="eatHotel">{{eatHotel}}</a-select-option>
              <a-select-option value="食堂">食堂</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitEat">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormEat">重置</a-button>
          </a-form-model-item>
        </a-form-model>
        <!--  -->
        <a-table :data-source="dataEat" :pagination="false" rowKey="dateTime">
          <a-table-column title="序号" data-index="index" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="餐别" data-index="type" align="center"></a-table-column>
          <a-table-column title="就餐地点" data-index="way" align="center"></a-table-column>
          <a-table-column title="操作" data-index="action" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <div class="steps-content" slot="description" v-if="current == 2">
        <a-form-model
          ref="ruleFormRoom"
          :model="formRoom"
          :rules="rulesRoom"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" prop="dateStart">
            <a-date-picker
              v-model="formRoom.dateStart"
              placeholder="选择开始日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
            <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
            <a-date-picker
              v-model="formRoom.dateEnd"
              placeholder="选择结束日期"
              style="width: 45%;"
              :format="dateFormat"
            ></a-date-picker>
          </a-form-model-item>
          <a-form-model-item label="选择时段" prop="range">
            <a-select v-model="formRoom.range" placeholder="请选择时段">
              <a-select-option value="上午">上午</a-select-option>
              <a-select-option value="下午">下午</a-select-option>
              <a-select-option value="晚上">晚上</a-select-option>
              <a-select-option value="全天">全天</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="选择会议地点" prop="room">
            <a-cascader
              :options="optionsRoom"
              placeholder="请选择会议室"
              v-model="formRoom.room"
              @change="onChangeRoom"
              style="width: 460px"
            />
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitRoom">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormRoom">重置</a-button>
            <!-- <a-button :style="{background:'red',color:'white',marginLeft:' 100px'}" >通知</a-button> -->
          </a-form-model-item>
        </a-form-model>
        <!--  -->
        <a-table :data-source="dataRoom" :scroll="{ y: 450 }" :pagination="false" rowKey="dateTime">
          <a-table-column title="序号" data-index="index" align="center"></a-table-column>
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="时段" data-index="range" align="center"></a-table-column>
          <a-table-column title="会议地点" data-index="room" align="center"></a-table-column>
          <a-table-column title="操作" data-index="action" align="center">
            <template slot-scope="record">
              <a href="javascript:;" @click="Modify(record)" :style="{  color: 'blue' }">修改</a>
              <a-divider type="vertical" />
              <a-popconfirm title="确定删除吗?" @confirm="() => onDelete(record.id)">
                <a href="javascript:;" :style="{  color: 'red' }">删除</a>
              </a-popconfirm>
            </template>
          </a-table-column>
        </a-table>
      </div>
      <div class="steps-content" slot="description" v-if="current == 3">
        <a-form-model :label-col="labelCol" :wrapper-col=" { span: 4 }">
          <a-form-model-item label="会议开始前（天）">
            <a-input v-model="numDate"></a-input>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 3, offset: 4 }">
            <a-button type="primary" @click="onSubmitB">确定设置</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
      <!-- <div class="steps-content" slot="description">{{ steps[current].content }}</div> -->
      <div class="steps-action">
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
        <a-button v-if="current == steps.length - 1" type="primary" @click="complete">会议安排提交</a-button>
        <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">上一步</a-button>
      </div>
    </div>
    <!-- <a-modal
      :visible="visibleNotice"
      @ok="handleOkNotice"
      @cancel="handleCancelNotice"
      title="是否立刻预通知"
      ok-text="确定"
      cancel-text="取消"
      content="null"
    >
      <template>
        <a-button type="primary">是</a-button>
        <a-button>否</a-button>
      </template>
    </a-modal>-->
  </a-card>
</template>
<script>
import moment from 'moment'
let optionsRoom = [
  {
    value: '中国烟草总公司福建省公司机关',
    label: '中国烟草总公司福建省公司机关',
    children: [
      {
        value: 'A区域',
        label: 'A区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室203',
                label: '会议室203'
              },
              {
                value: '会议室204',
                label: '会议室204'
              }
            ]
          },
          {
            value: '2号楼',
            label: '2号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      },
      {
        value: 'B区域',
        label: 'B区域',
        children: [
          {
            value: '1号楼',
            label: '1号楼',
            children: [
              {
                value: '会议室204',
                label: '会议室204'
              },
              {
                value: '会议室205',
                label: '会议室205'
              }
            ]
          }
        ]
      }
    ]
  }
]
export default {
  data() {
    return {
      eatHotel: '',
      numDate: '1',
      current: 0,
      steps: [
        {
          title: '协议酒店'
          //content: "First-content"
        },
        {
          title: '就餐地点',
          content: 'Second-content'
        },
        {
          title: '会议地点',
          content: 'Last-content'
        },
        {
          title: '通知设置',
          content: 'Last-content'
        }
      ],
      dateFormat: 'YYYY-MM-DD',
      labelCol: { span: 2 },
      wrapperCol: { span: 7 },
      formHotel: {
        index: '',
        hotel: undefined,
        dateStart: undefined,
        dateEnd: undefined
      },
      dataHotel: [],
      rulesHotel: {
        hotel: [
          {
            required: true,
            message: '请选择协议酒店',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }]
      },
      formEat: {
        dateStart: undefined,
        dateEnd: undefined,
        type: '',
        way: ''
      },
      dataEat: [],
      rulesEat: {
        type: [
          {
            required: true,
            message: '请选择餐别',
            trigger: 'change'
          }
        ],
        way: [
          {
            required: true,
            message: '请选择就餐方式',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }]
      },
      formRoom: {
        room: undefined,
        dateStart: undefined,
        dateEnd: undefined,
        range: undefined
      },
      optionsRoom,
      dataRoom: [],
      rulesRoom: {
        room: [
          {
            required: true,
            message: '请选择会议地点',
            trigger: 'change'
          }
        ],
        dateStart: [{ required: true, message: '请选择日期', trigger: 'change' }],
        range: [{ required: true, message: '请选择日期', trigger: 'change' }]
      }
    }
  },
  created() {
    let dateStart = this.$route.query.record.dateStart
    console.log(dateStart)
    let dateEnd = this.$route.query.record.dateEnd
    this.formHotel.dateStart = this.moment(dateStart, 'YYYY-MM-DD')
    this.formHotel.dateEnd = this.moment(dateEnd, 'YYYY-MM-DD')
    this.formEat.dateStart = this.moment(dateStart, 'YYYY-MM-DD')
    this.formEat.dateEnd = this.moment(dateEnd, 'YYYY-MM-DD')
    this.formRoom.dateStart = this.moment(dateStart, 'YYYY-MM-DD')
    this.formRoom.dateEnd = this.moment(dateEnd, 'YYYY-MM-DD')
  },
  methods: {
    moment,
    next() {
      this.current++
    },
    prev() {
      this.current--
    },
    onChangeRoom(value) {
      console.log(value)
      this.formRoom.room = value[0] + value[1] + value[2] + value[3]
      console.log(room)
    },
    onSubmitHotel() {
      console.log(this.formHotel.dateStart)
      this.$refs.ruleFormHotel.validate(valid => {
        if (valid) {
          if (!this.formHotel.dateEnd) {
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formHotel.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formHotel.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            index: this.formHotel.index,
            dateTime: dateTime,
            hotel: this.formHotel.hotel
          }
          this.dataHotel.push(a)
          // alert("添加成功!");
          this.$message.success('添加成功!')
          this.eatHotel = this.formHotel.hotel
          this.formHotel.hotel = undefined
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormHotel() {
      this.$refs.ruleFormHotel.resetFields()
      this.formHotel.dateEnd = undefined
    },
    onSubmitEat() {
      this.$refs.ruleFormEat.validate(valid => {
        if (valid) {
          if (!this.formEat.dateEnd) {
            // alert("请输入结束日期");
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formEat.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formEat.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            dateTime: dateTime,
            type: this.formEat.type,
            way: this.formEat.way
          }
          this.dataEat.push(a)
          this.$message.success('添加成功!')
          this.formEat.type = undefined
          this.formEat.way = undefined
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormEat() {
      this.$refs.ruleFormEat.resetFields()
      this.formEat.dateEnd = undefined
    },
    onSubmitRoom() {
      this.$refs.ruleFormRoom.validate(valid => {
        if (valid) {
          if (!this.formRoom.dateEnd) {
            this.$message.error('请输入结束日期')
          }
          let startDate = this.formRoom.dateStart.format('YYYY年MM月DD日')
          let endDate = this.formRoom.dateEnd.format('YYYY年MM月DD日')
          let dateTime = startDate + '~' + endDate
          console.log(dateTime)
          let a = {
            dateTime: dateTime,
            room: this.formRoom.room,
            range: this.formRoom.range
          }
          this.dataRoom.push(a)
          this.$message.success('添加成功!')
          this.formRoom.room = undefined
          this.formRoom.range = undefined
          this.formRoom.number = undefined
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetFormRoom() {
      this.$refs.ruleFormRoom.resetFields()
      this.formRoom.dateEnd = undefined
    },
    complete() {
      this.$message.success('提交成功!')
      this.visibleNotice = true
      this.$confirm({
        title: '是否立刻预通知',
        content: '',
        okText: '是',
        cancelText: '否'
      })
    },
    onSubmitB() {}
  }
}
</script>
<style scoped>
.steps-content {
  /* margin-top: 16px; */
  /* border: 1px dashed #e9e9e9; */
  border-radius: 6px;
  /* background-color: #fafafa; */
  min-height: 200px;
  text-align: center;
  padding-top: 20px;
}

#description {
  width: 800px;
}
.steps-action {
  margin-top: 24px;
}
#title1 {
  width: 1000px;
}
</style>
