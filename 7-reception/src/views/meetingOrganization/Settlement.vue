<template>
  <!-- 会议总览 -->
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-row type="flex" align="middle">
        <!-- <a-col>
          <span>会议状态：</span>
        </a-col>
        <a-col>
          <a-select :style="{width:'200px'}" @change="handleChange" placeholder="请选择会议状态">
            <a-select-option value="已完成">已完成</a-select-option>
            <a-select-option value="待安排">待开始</a-select-option>
            <a-select-option value="进行中">进行中</a-select-option>
            <a-select-option value="待安排">待安排</a-select-option>
            <a-select-option value="待审核">待审核</a-select-option>
            <a-select-option value="未通过">未通过</a-select-option>
            <a-select-option value="全部">全部</a-select-option>
          </a-select>
        </a-col>
        <a-col :span="1"></a-col> -->
        <!-- <a-col>会议时间：</a-col>
        <a-col>
          <a-date-picker @change="onChange" placeholder="请选择开始" :format="dateFormat" v-model="queryParam.dateStart"
            :style="{width:'200px'}"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker @change="onChange" placeholder="请选择结束" :format="dateFormat" v-model="queryParam.dateEnd"
            :style="{width:'200px'}"></a-date-picker>
        </a-col>
        <a-col :span="1"></a-col> -->
        <a-col>
          <span>会议名称：</span>
        </a-col>
        <a-col>
          <a-input placeholder="请输入会议名称" :style="{width:'200px'}" v-model="queryParam.name"></a-input>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>会议时间：</a-col>
        <a-col>
          <a-date-picker @change="onChange" placeholder="请选择开始" :format="dateFormat" v-model="queryParam.dateStart"
            :style="{width:'200px'}"></a-date-picker>
          <span>&nbsp;~&nbsp;</span>
          <a-date-picker @change="onChange" placeholder="请选择结束" :format="dateFormat" v-model="queryParam.dateEnd"
            :style="{width:'200px'}"></a-date-picker>
        </a-col>
        <a-col :span="1"></a-col>
        <a-col>
          <a-button :style="{ background: '#49a9ee', color: 'white'}" icon="search" @click="searchQuery">查询</a-button>
          <a-button @click="searchReset()" icon="reload" style="margin-left: 8px">重置</a-button>
      
        </a-col>

      </a-row>
      <br />
    </div>
    <!-- 查询区域-END -->
    <!-- table区域-begin -->
    <div id="dataMeeting">
      <a-table :data-source="data" :pagination="false" rowKey="id">
        <a-table-column title="会议编号" data-index="id" align="left" width="150px" fixed="left"></a-table-column>
        <a-table-column title="会议主题" data-index="theme" align="center"></a-table-column>
        <a-table-column title="会议名称" data-index="name" align="center"></a-table-column>
        <a-table-column title="负责人姓名" data-index="dutyName" align="center"></a-table-column>
        <!-- <a-table-column title="负责人电话" data-index="dutyTel" align="center"></a-table-column> -->
        <a-table-column title="会议时间" data-index="dateTime" align="center"></a-table-column>
        <a-table-column title="会议地点" data-index="address" align="center"></a-table-column>
        <a-table-column title="参会人数（人）" data-index="number" align="center"></a-table-column>
        <!-- <a-table-column title="会议状态" data-index="state" align="center"></a-table-column> -->
        <a-table-column title="会议状态" data-index="state" align="center">
        </a-table-column>
        <a-table-column title="操作" data-index="detail" align="center">
          <!-- <router-link :to="{ path: '/meetingOrganization/MeetingDetails', query: { record }}" slot-scope="text, record"
            replace>
            详情
          </router-link> -->
          <template slot-scope="detail,record">
            <a href="javascript:;" v-if="record.state=='已完成'||record.state=='进行中'" @click="settlement(record)"
              :style="{  color: '#49a9ee' }">会后结算</a>
          </template>
        </a-table-column>
      </a-table>
      <br />
      <a-pagination size="small" :total="50" show-size-changer show-quick-jumper align="center" />
    </div>
    <PurInModal v-if='modalVisible' :modalVisible='modalVisible' @handleCancel='modalVisible=false'
      :basicInfo='basicInfo'>
    </PurInModal>
  </a-card>
</template>

<script>
  import moment from 'moment'
  import PurInModal from './PurInModal'
  const data = [{
      id: 'A1203',
      budget: '5000',
      name: '物流管理会议',
      theme: '物流管理',
      dateTime: '2021年07月20日~2021年07月27日',
      address: '总公司机关',
      members: '陈宏涛；李小玲；林诺汐；陈熙雨',
      number: '4',
      dutyName: '林诺汐',
      dutyTel: '152690314587',
      state: '进行中',
      detail: '1'
    },
    {
      id: 'A1205',
      budget: '2000',
      name: '零售项目开展会议',
      theme: '项目会议',
      dateTime: '2021年07月18日~2021年07月20日',
      address: '总公司机关',
      members: '陈宏涛；李小玲；林诺汐；陈熙雨',
      number: '4',
      dutyName: '李小玲',
      dutyTel: '152690314587',
      state: '已完成',
      detail: '1'
    },
  ]
  const dataHotel = [{
      dateTime: '2021年06月05日~2021年06月06日',
      hotel: '香格里拉酒店'
    },
    {
      dateTime: '2021年06月06日~2021年06月07日',
      hotel: '好利来酒店'
    }
  ]
  const dataEat = [{
      dateTime: '2021年06月05日~2021年06月05日',
      type: '早餐',
      way: '香格里拉酒店'
    },
    {
      dateTime: '2021年06月05日~2021年06月05日',
      type: '午餐',
      way: '食堂'
    },
    {
      dateTime: '2021年06月05日~2021年06月05日',
      type: '晚餐',
      way: '食堂'
    },
    {
      dateTime: '2021年06月05日~2021年06月06日',
      type: '早餐',
      way: '香格里拉酒店'
    },
    {
      dateTime: '2021年06月05日~2021年06月06日',
      type: '午餐',
      way: '食堂'
    },
    {
      dateTime: '2021年06月05日~2021年06月06日',
      type: '晚餐',
      way: '食堂'
    }
  ]
  const dataRoom = [{
    dateTime: '2021年06月05日~2021年06月06日',
    room: '中国烟草总公司福建省公司机关.A区域.1号楼.会议室203'
  }]
  export default {
    components: {
      PurInModal,
    },
    data() {
      return {
        data,
        dataHotel,
        dataEat,
        dataRoom,
        queryParam: {
          id: undefined,
          name: undefined,
          dateStart: undefined,
          dateEnd: undefined,
          state: undefined
        },
        dateFormat: 'YYYY年MM月DD日',
        modalVisible: false,
        basicInfo: {},
        meeting: {
          id: undefined,
          theme: undefined,
          name: undefined,
          dutyName: undefined,
          dutyTel: undefined,
          dateStart: undefined,
          dateEnd: undefined,
          address: undefined,
          state: undefined
        },
      }
    },
    created() {
      let start = moment(new Date())
        .subtract(15, 'days')
        .format('YYYY-MM-DD')
      this.queryParam.dateStart = this.moment(start, 'YYYY-MM-DD')
      let end = moment(new Date())
        .subtract(-15, 'days')
        .format('YYYY-MM-DD')
      this.queryParam.dateEnd = this.moment(end, 'YYYY-MM-DD')
    },
    methods: {
      moment,
      onChange() {},
      handleChange() {},
      searchQuery() {
        // let IDName = this.queryParam.IDName;
        // let newListData = [];
        // let date1 = this.queryParam.dateStart;
        // let date2 = this.queryParam.dateEnd;
        // if (IDName && date1 && date2) {
        //   let dateSearch =
        //     date1.format("YYYY年MM月DD日") + "~" + date2.format("YYYY年MM月DD日");
        //   this.data.filter(item => {
        //     if (
        //       (item.id.includes(IDName) || item.name.includes(IDName)) &&
        //       item.dateTime.includes(dateSearch)
        //     ) {
        //       newListData.push(item);
        //     }
        //   });
        //   this.data = newListData;
        // } else {
        //   if (IDName) {
        //     this.data.filter(item => {
        //       if (item.id.includes(IDName) || item.name.includes(IDName)) {
        //         newListData.push(item);
        //       }
        //     });
        //     this.data = newListData;
        //   }
        //   if (date1 && date2) {
        //     let dateSearch =
        //       date1.format("YYYY年MM月DD日") +
        //       "~" +
        //       date2.format("YYYY年MM月DD日");
        //     //console.log(dateSearch);
        //     this.data.filter(item => {
        //       if (item.dateTime.includes(dateSearch)) {
        //         console.log(111);
        //         newListData.push(item);
        //       }
        //     });
        //     this.data = newListData;
        //   }
        // }
      },
      searchReset() {
        this.data = data
        this.queryParam.IDName = ''
        this.queryParam.dateStart = undefined
        this.queryParam.dateEnd = undefined
      },
      getCurrentData() {
        return new Date().toLocaleDateString()
      },
      settlement(record) {
        this.modalVisible = true
        this.basicInfo = record
      }
    }
  }
</script>
<style scoped>
  #dataMeeting {
    margin-top: 20px;
  }
</style>