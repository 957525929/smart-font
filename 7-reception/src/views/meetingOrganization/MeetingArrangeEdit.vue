<template>
  <div>
    <h2>会议安排</h2>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="协议酒店">
        <a-form-model
          ref="ruleFormHotel"
          :model="formHotel"
          :rules="rulesHotel"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" required prop="date1">
            <a-date-picker v-model="formHotel.date1" placeholder="选择开始日期" style="width: 45%;"></a-date-picker>
            <span>&nbsp;&nbsp;到&nbsp;&nbsp;</span>
            <a-date-picker v-model="formHotel.date2" placeholder="选择结束日期" style="width: 45%;"></a-date-picker>
          </a-form-model-item>

          <a-form-model-item label="选择协议酒店" prop="hotel">
            <a-select v-model="formHotel.hotel" placeholder="选择协议酒店">
              <a-select-option value="香格里拉酒店">香格里拉酒店</a-select-option>
              <a-select-option value="好利来酒店">好利来酒店</a-select-option>
              <a-select-option value="康特大酒店">康特大酒店</a-select-option>
              <a-select-option value="世纪金源酒店">世纪金源酒店</a-select-option>
              <a-select-option value="富士酒店">富士酒店</a-select-option>
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
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="选择的协议酒店" data-index="hotel" align="center"></a-table-column>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="就餐" force-render>
        <a-form-model
          ref="ruleFormEat"
          :model="formEat"
          :rules="rulesEat"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="日期" required prop="date1">
            <a-date-picker v-model="formEat.date1" placeholder="选择开始日期" style="width: 45%;"></a-date-picker>
            <span>&nbsp;&nbsp;到&nbsp;&nbsp;</span>
            <a-date-picker v-model="formEat.date2" placeholder="选择结束日期" style="width: 45%;"></a-date-picker>
          </a-form-model-item>
          <a-form-model-item label="餐别" prop="type">
            <a-select v-model="formEat.type" placeholder="选择就餐类型">
              <a-select-option value="早餐">早餐</a-select-option>
              <a-select-option value="午餐">午餐</a-select-option>
              <a-select-option value="晚餐">晚餐</a-select-option>
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
        <a-table :data-source="dataEat" :scroll="{ y: 450 }" :pagination="false" rowKey="dateTime">
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="餐别" data-index="type" align="center"></a-table-column>
          <a-table-column title="就餐方式" data-index="way" align="center"></a-table-column>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="3" tab="预约会议室">
        <a-form-model
          ref="ruleFormRoom"
          :model="formRoom"
          :rules="rulesRoom"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item label="请选择日期" required prop="date1">
            <a-date-picker v-model="formRoom.date1" placeholder="选择开始日期" style="width: 45%;"></a-date-picker>
            <span>&nbsp;&nbsp;到&nbsp;&nbsp;</span>
            <a-date-picker v-model="formRoom.date2" placeholder="选择结束日期" style="width: 45%;"></a-date-picker>
          </a-form-model-item>

          <a-form-model-item label="选择预约会议室" prop="room">
            <a-select v-model="formRoom.room" placeholder="选择预约会议室">
              <a-select-option value="会议室203">会议室203</a-select-option>
              <a-select-option value="会议室204">会议室204</a-select-option>
              <a-select-option value="会议室205">会议室205</a-select-option>
              <a-select-option value="会议室206">会议室206</a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmitRoom">创建</a-button>
            <a-button style="margin-left: 10px;" @click="resetFormRoom">重置</a-button>
            <!-- <a-button :style="{background:'red',color:'white',marginLeft:' 100px'}" >通知</a-button> -->
          </a-form-model-item>
          <a-form-model-item>
            <router-link
              :to="{ path: '/meetingOrganization/Notice', query: { record } }"
              slot-scope="text, record"
              replace
            >
              <a-button :style="{background:'red',color:'white',marginLeft:' 50px'}">通知设置</a-button>
            </router-link>
          </a-form-model-item>
        </a-form-model>
        <!--  -->
        <a-table :data-source="dataRoom" :scroll="{ y: 450 }" :pagination="false" rowKey="dateTime">
          <a-table-column title="日期" data-index="dateTime" align="center"></a-table-column>
          <a-table-column title="预约的会议室" data-index="room" align="center"></a-table-column>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      labelCol: { span: 4 },
      wrapperCol: { span: 7 },
      eatHotel: "",
      formHotel: {
        hotel: undefined,
        date1: undefined,
        date2: undefined
      },
      dataHotel: [],
      rulesHotel: {
        hotel: [
          {
            required: true,
            message: "请选择协议酒店",
            trigger: "change"
          }
        ],
        date1: [{ required: true, message: "请选择日期", trigger: "change" }]
      },
      formEat: {
        date1: undefined,
        date2: undefined,
        type: "",
        way: ""
      },
      dataEat: [],
      rulesEat: {
        type: [
          {
            required: true,
            message: "请选择餐别",
            trigger: "change"
          }
        ],
        way: [
          {
            required: true,
            message: "请选择就餐方式",
            trigger: "change"
          }
        ],
        date1: [{ required: true, message: "请选择日期", trigger: "change" }]
      },
      formRoom: {
        room: undefined,
        date1: undefined,
        date2: undefined,
        use: undefined
      },
      dataRoom: [],
      rulesRoom: {
        room: [
          {
            required: true,
            message: "请选择预约的会议室",
            trigger: "change"
          }
        ],
        date1: [{ required: true, message: "请选择日期", trigger: "change" }]
      }
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onChange() {
      console.log();
    },
    onSubmitHotel() {
      this.$refs.ruleFormHotel.validate(valid => {
        if (valid) {
          if (!this.formHotel.date2) {
            this.$message.error("请输入结束日期");
          }
          let startDate = this.formHotel.date1.format("YYYY年MM月DD日");
          let endDate = this.formHotel.date2.format("YYYY年MM月DD日");
          let dateTime = startDate + "~" + endDate;
          console.log(dateTime);
          let a = {
            dateTime: dateTime,
            hotel: this.formHotel.hotel
          };
          this.dataHotel.push(a);
          // alert("添加成功!");
          this.$message.success("添加成功!");
          this.eatHotel = this.formHotel.hotel;
          this.formHotel.date1 = undefined;
          this.formHotel.date2 = undefined;
          this.formHotel.hotel = undefined;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormHotel() {
      this.$refs.ruleFormHotel.resetFields();
      this.formHotel.date2 = undefined;
    },
    onSubmitEat() {
      this.$refs.ruleFormEat.validate(valid => {
        if (valid) {
          if (!this.formEat.date2) {
            // alert("请输入结束日期");
            this.$message.error("请输入结束日期");
          }
          let startDate = this.formEat.date1.format("YYYY年MM月DD日");
          let endDate = this.formEat.date2.format("YYYY年MM月DD日");
          let dateTime = startDate + "~" + endDate;
          console.log(dateTime);
          let a = {
            dateTime: dateTime,
            type: this.formEat.type,
            way: this.formEat.way
          };
          this.dataEat.push(a);
          this.$message.success("添加成功!");
          this.formEat.date1 = undefined;
          this.formEat.date2 = undefined;
          this.formEat.type = undefined;
          this.formEat.way = undefined;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormEat() {
      this.$refs.ruleFormEat.resetFields();
      this.formEat.date2 = undefined;
    },
    onSubmitRoom() {
      this.$refs.ruleFormRoom.validate(valid => {
        if (valid) {
          if (!this.formRoom.date2) {
            this.$message.error("请输入结束日期");
          }
          let startDate = this.formRoom.date1.format("YYYY年MM月DD日");
          let endDate = this.formRoom.date2.format("YYYY年MM月DD日");
          let dateTime = startDate + "~" + endDate;
          console.log(dateTime);
          let a = {
            dateTime: dateTime,
            room: this.formRoom.room
          };
          this.dataRoom.push(a);
          this.$message.success("添加成功!");
          this.formRoom.date1 = undefined;
          this.formRoom.date2 = undefined;
          this.formRoom.room = undefined;

          this.formRoom.number = undefined;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetFormRoom() {
      this.$refs.ruleFormRoom.resetFields();
      this.formRoom.date2 = undefined;
    }
  }
};
</script>
