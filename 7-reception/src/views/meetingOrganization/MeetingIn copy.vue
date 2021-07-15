<template>
  <!-- 会议总览 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="名称或编号：">
              <a-input placeholder="请输入名称或编号" v-model="queryParam.IDName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="10" :lg="9" :md="10" :sm="24">
            <a-form-item label="时间范围：">
              <a-icon type="calendar" :style="{fontSize:'20px',marginRight:'5px'}" />
              <span>从&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择开始"
                :format="dateFormat"
                v-model="queryParam.dateOne"
              >
                <a-icon slot="suffixIcon" type="none" />
              </a-date-picker>
              <span>&nbsp;到&nbsp;</span>
              <a-date-picker
                @change="onChange"
                placeholder="请选择结束"
                :format="dateFormat"
                v-model="queryParam.dateTwo"
              >
                <a-icon slot="suffixIcon" type="none" />
              </a-date-picker>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-button
              :style="{ background: '#49a9ee', color: 'white'}"
              icon="search"
              @click="searchQuery"
            >查询</a-button>
            <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <div>
      <a-table :data-source="data" :scroll="{ y: 450 }" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="会议预算" data-index="budget" align="center"></a-table-column>
        <a-table-column title="负责人姓名" data-index="dutyName" align="center"></a-table-column>
        <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column>
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="会议安排成员" data-index="members" align="center"></a-table-column>
        <a-table-column title="会议签到成员" data-index="membersIn" align="center"></a-table-column>
        <!-- <a-table-column title="会议状态" data-index="state" align="center"></a-table-column> -->
        <a-table-column title="会议状态" data-index="state" align="center">
          <template slot-scope="state">
            <div v-if="state == '待审核'">
              <span :style="{ color: 'red' }">待审核</span>
            </div>
            <div v-else-if="state == '进行中'">
              <span :style="{ color: 'green' }">进行中</span>
            </div>
            <div v-else-if="state == '待安排'">
              <span :style="{ color: 'orange' }">待安排</span>
            </div>
            <div v-else-if="state == '已完成'">
              <span :style="{ color: 'green' }">已完成</span>
            </div>
            <div v-else-if="state == '未通过'">
              <span :style="{ color: 'blue' }">未通过</span>
            </div>
          </template>
        </a-table-column>
        <a-table-column title="文档信息" data-index="detail" align="center">
          <template slot-scope="detail">
            <div v-if="detail == '1'">
              <a-button :style="{ background: '#49a9ee', color: 'white' }" @click="infor()">查看详情</a-button>
              <!-- <router-link :to="{ path: '/meetingOrganization/MeetingSettlementIn'}" replace>
                <a-button :style="{ background: '#49a9ee', color: 'white' }">查看详情</a-button>
              </router-link>-->
            </div>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
    <a-modal
      title="会议详情"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      ok-text="确认"
      cancel-text="取消"
      width="1000px"
    >
      <h3>酒店安排</h3>
      <a-table :data-source="dataHotel" :pagination="false" rowKey="dateTime">
        <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="入住酒店" data-index="hotel" align="center"></a-table-column>
      </a-table>
      <h3>就餐安排</h3>
      <a-table :data-source="dataEat" :pagination="false" rowKey="dateTime">
        <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="就餐类型" data-index="type" align="center"></a-table-column>
        <a-table-column title="就餐方式" data-index="way" align="center"></a-table-column>
      </a-table>
      <h3>会议室安排</h3>
      <a-table :data-source="dataRoom" :pagination="false" rowKey="dateTime">
        <a-table-column title="时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议室" data-index="room" align="center"></a-table-column>
        <a-table-column title="会议用途" data-index="use" align="center"></a-table-column>
       
      </a-table>
    </a-modal>
  </a-card>
</template>

<script>
const data = [
  {
    id: "A1201",
    name: "XX项目周例会0605",
    budget: "1000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "",
    state: "待安排",
    detail: "0"
  },
  {
    id: "A1202",
    name: "XX项目周例会0605",
    budget: "1000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "",
    state: "待审核",
    detail: "0"
  },
  {
    id: "A1203",
    name: "XX项目周例会0605",
    budget: "2000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月07日共2天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "陈宏涛；李小玲；林诺汐；陈熙雨",
    state: "已完成",
    detail: "1"
  },
  {
    id: "A1204",
    name: "XX项目周例会0605",
    budget: "2000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "陈宏涛；李小玲；林诺汐；陈熙雨",
    state: "进行中",
    detail: "1"
  },
  {
    id: "A1205",
    name: "XX项目周例会0605",
    budget: "2000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "",
    state: "未通过",
    detail: "0"
  },
  {
    id: "A1206",
    name: "XX项目周例会0605",
    budget: "3000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "陈宏涛；李小玲；林诺汐；陈熙雨",
    state: "进行中",
    detail: "1"
  },
  {
    id: "A1207",
    name: "XX项目周例会0605",
    budget: "2000",
    dutyName: "陈宏涛",
    dutyTel: "152690314587",
    dateTime: "2021年06月05日~2021年06月08日共3天",
    address: "省公司",
    members: "陈宏涛；李小玲；林诺汐；陈熙雨",
    membersIn: "陈宏涛；李小玲；林诺汐；陈熙雨",
    state: "已完成",
    detail: "1"
  }
];
const dataHotel = [
  {
    dateTime: "2021年06月05日~2021年06月06日",
    hotel: "香格里拉酒店"
  },
  {
    dateTime: "2021年06月06日~2021年06月07日",
    hotel: "好利来酒店"
  }
];
const dataEat = [
  {
    dateTime: "2021年06月05日~2021年06月06日",
    type: "早餐",
    way: "酒店"
  },
  {
    dateTime: "2021年06月06日~2021年06月07日",
    type: "午餐",
    way: "食堂"
  }
];
const dataRoom = [
  {
    dateTime: "2021年06月05日~2021年06月06日",
    room: "会议室203",
    use: "工程项目会议",
    number: "3"
  }
];
export default {
  data() {
    return {
      data,
      visible: false,
      dataHotel,
      dataEat,
      dataRoom,
      queryParam: {
        IDName: "",
        dateOne: undefined,
        dateTwo: undefined
      },
      dateFormat: "YYYY年MM月DD日"
    };
  },
  methods: {
    onChange() {},
    searchQuery() {
      let IDName = this.queryParam.IDName;
      let newListData = [];
      let date1 = this.queryParam.dateOne;
      let date2 = this.queryParam.dateTwo;
      if (IDName && date1 && date2) {
        let dateSearch =
          date1.format("YYYY年MM月DD日") + "~" + date2.format("YYYY年MM月DD日");
        this.data.filter(item => {
          if (
            (item.id.includes(IDName) || item.name.includes(IDName)) &&
            item.dateTime.includes(dateSearch)
          ) {
            newListData.push(item);
          }
        });
        this.data = newListData;
      } else {
        if (IDName) {
          this.data.filter(item => {
            if (item.id.includes(IDName) || item.name.includes(IDName)) {
              newListData.push(item);
            }
          });
          this.data = newListData;
        }
        if (date1 && date2) {
          let dateSearch =
            date1.format("YYYY年MM月DD日") +
            "~" +
            date2.format("YYYY年MM月DD日");
          //console.log(dateSearch);
          this.data.filter(item => {
            if (item.dateTime.includes(dateSearch)) {
              console.log(111);
              newListData.push(item);
            }
          });
          this.data = newListData;
        }
      }
    },
    searchReset() {
      this.data = data;
      this.queryParam.IDName = "";
      this.queryParam.dateOne = undefined;
      this.queryParam.dateTwo = undefined;
    },
    handleOk() {
      this.visible = false;
    },
    handleCancel() {
      console.log("Clicked cancel button");
      this.visible = false;
    },
    infor() {
      this.visible = true;
    }
  }
};
</script>
